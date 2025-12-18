var PrimaMapController = Class.create({
    initialize: function(args) {
        this.map = args.map;
        this.baseLayer = args.baseLayer;
        this.miniMapLayer = args.miniMapLayer;
        this.features = args.features;
        this.layers = [];
        this.panelLayerGroups = [];
        this.mapCenterLatLng = null;
        if (args.bookmark) {
            this.bookmarkedFeature = this._getBookmarkedFeature(args.bookmark);
        }
        this.selectedFeature = {};
        this._addBaseLayer();
        this._addFeatures();
        this.legend = {};
        this.addLegend();
        if (window.innerWidth >= 768) {
            this.addMiniMap();
        }
        this.setMapCenterAndZoom();
    },
    MapObjectFactory: function(layer, options) {
        function Feature(layer, options) {
            var feature = {};
            feature.layer = layer;
            feature.type = options.mapController.newFeatureType;
            feature.mapController = options.mapController;
            feature.displayAjaxError = function(response) {
                alert('Error: ' + response.status + ' ' + response.statusText);
            }
            return feature;
        }

        function Point(layer, options) {
            var point = new Feature(layer, options);
            point.createURL = options.mapController.options.apiURLs['point']
            point.typeName = "Point";
            return point;
        }

        function Path(layer, options) {
            var path = new Feature(layer, options);
            path.createURL = options.mapController.options.apiURLs['path']
            path.typeName = "Path";
            return path;
        }

        function Polygon(layer, options) {
            var polygon = new Feature(layer, options);
            polygon.createURL = options.mapController.options.apiURLs['polygon']
            polygon.typeName = "Polygon";
            return polygon;
        }
        if (layer instanceof L.Marker) {
            this.objectType = Point;
        } else if (layer instanceof L.Rectangle || layer instanceof L.Circle || layer instanceof L.Polygon) {
            this.objectType = Polygon;
        } else if (layer instanceof L.Polyline) {
            this.objectType = Path;
        }
        var options = {
            'defaultNewFeatureFeatureTypeApiURL': this.options.defaultNewFeatureFeatureTypeApiURL,
            'mapController': this,
        };
        return this.objectType(layer, options);
    },
    _getBookmarkedFeature: function(bookmark) {
        bookmark = bookmark.replace("#", "");
        if (bookmark.slice(-1) == "/") {
            bookmark = bookmark.slice(0, -1);
        }
        var bookmark_elements = bookmark.split("/")
        var feature = {};
        feature.type = bookmark_elements[0];
        feature.id = bookmark_elements[1];
        return feature;
    },
    logEventToConsole: function(e) {
        console.log(e.type);
    },
    printZoomLevel: function(e) {
        console.log('Zoom level: ' + this.map.getZoom());
    },
    addMiniMap: function() {
        this.miniMapControl = new L.Control.MiniMap(this.miniMapLayer, {
            toggleDisplay: true,
            position: 'bottomleft'
        });
        this.miniMapControl.addTo(this.map);
    },
    _featureIsBookmarkedFeature: function(feature) {
        if (this.bookmarkedFeature) {
            return feature.properties.object_type == this.bookmarkedFeature.type && feature.properties.id == this.bookmarkedFeature.id;
        } else {
            return false;
        }
    },
    _setAsMapCenterLatLngIfIsMapCenter: function(feature, layer) {
        if (this.bookmarkedFeature && this._featureIsBookmarkedFeature(feature)) {
            this.selectedFeature.feature = feature;
        }
        if (feature.properties.is_map_center) {
            this.mapCenterLatLng = layer._latlng;
        }
    },
    setMapCenterAndZoom: function() {
        var zoom = this.map.options.maxZoom - 2;
        if (this.selectedFeature.layer) {
            this.mapCenterLatLng = this.selectedFeature.layer._latlng;
            this.selectedFeature.layer.openPopup();
        }
        this.map.setView(this.mapCenterLatLng, zoom.ceil());
    },
    _addBaseLayer: function() {
        this.baseLayer.addTo(this.map);
    },
    _bindPopupToFeatureOnLayer: function(feature, layer) {
        var popupContent = feature.properties.popup_content;
        var popupArgs = {
            'keepInView': true
        };
        if (layer instanceof L.Marker) {
            offsetY = -layer.options.icon.options.iconSize[1] / 2;
        } else {
            offsetY = 0
        }
        var popupOffset = new L.Point(0, offsetY);
        popupArgs.offset = popupOffset;
        if (feature.properties && feature.properties.has_popup_content) {
            popupArgs.className = 'has-popup-content';
        }
        var popup = layer.bindPopup(popupContent, popupArgs);
        if (this._featureIsBookmarkedFeature(feature)) {
            this.selectedFeature.layer = layer;
        }
    },
    _addFeatures: function() {
        function onEachFeature(feature, layer) {
            this._bindPopupToFeatureOnLayer(feature, layer);
            this._setAsMapCenterLatLngIfIsMapCenter(feature, layer);
        }

        function iconByName(iconPath) {
            return '<i class="icon" style="background-image: url(\'' + iconPath + '\');">';
        }

        function featureToMarker(feature, latlng) {
            return L.marker(latlng, {
                icon: L.icon({
                    className: 'marker-' + feature.properties.type_name.toLowerCase(),
                    html: iconByName(feature.properties.icon_url),
                    iconUrl: feature.properties.icon_url,
                    iconSize: [feature.properties.icon_width, feature.properties.icon_height],
                    iconAnchor: [feature.properties.icon_width / 2, feature.properties.icon_height - 4],
                    popupAnchor: [1, -feature.properties.icon_height],
                    shadowSize: [41, 41]
                }),
                title: feature.properties.name
            });
        }
        L.geoJson(this.features, {
            onEachFeature: onEachFeature.bind(this),
            pointToLayer: featureToMarker
        }).addTo(this.map);
    },
    addLegend: function() {
        this.legend = new L.Control.PanelLayers(this._getLplBaseLayers(), this._getLplOverlayLayers(), {
            'collapsed': false
        });
        this.map.addControl(this.legend);
        this.legend._showAllLayers();
    },
    removeLegend: function() {
        this.map.removeControl(this.legend);
    },
    refreshLegend: function() {
        this.removeLegend();
        this.addLegend();
    },
    _getLplBaseLayers: function() {
        return {
            "Map": this.baseLayer
        };
    },
    _getLplOverlayLayers: function() {
        function groupLayer(layer) {
            function iconHTML(iconPath) {
                return '<i class="icon" style="background-image: url(\'' + iconPath + '\');">';
            }

            function featureTypeInLayerGroup(typeName, layerGroup) {
                for (i = 0; i < layerGroup.length; i++) {
                    if (layerGroup[i].name == typeName) {
                        return true;
                    }
                }
                return false;
            }
            if (layer.hasOwnProperty('feature')) {
                if (!(layer.feature.properties.group_name in this.panelLayerGroups)) {
                    this.panelLayerGroups[layer.feature.properties.group_name] = {
                        layers: [],
                        description: layer.feature.properties.group_description
                    };
                }
                var layerGroup;
                if (!(featureTypeInLayerGroup(layer.feature.properties.type_name, this.panelLayerGroups[layer.feature.properties.group_name].layers))) {
                    layerGroup = L.layerGroup();
                    layerGroup.addLayer(layer);
                    this.panelLayerGroups[layer.feature.properties.group_name].layers[this.panelLayerGroups[layer.feature.properties.group_name].layers.length] = {
                        'name': layer.feature.properties.type_name,
                        'description': layer.feature.properties.type_description,
                        'layer': layerGroup,
                        'icon': iconHTML(layer.feature.properties.icon_url)
                    };
                } else {
                    layerGroup = this.panelLayerGroups[layer.feature.properties.group_name].layers[this.panelLayerGroups[layer.feature.properties.group_name].layers.length - 1].layer;
                    layerGroup.addLayer(layer);
                }
            }
        }
        this.panelLayerGroups = [];
        this.map.eachLayer(groupLayer, this);
        var lplPanelGroups = [];
        for (var group in this.panelLayerGroups) {
            if (this.panelLayerGroups.hasOwnProperty(group)) {
                lplPanelGroups[lplPanelGroups.length] = {
                    'group': group,
                    'description': this.panelLayerGroups[group].description,
                    'layers': this.panelLayerGroups[group].layers
                };
            }
        }
        lplPanelGroups.sort(function(a, b) {
            return a.group > b.group;
        });
        return lplPanelGroups;
    }
});