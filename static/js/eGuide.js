var eGuide = Class.create({
    initialize: function(args) {
        var eGuide = this;
        this.toc_object = false;
        this.section = args.section;
        this.firstrun = true;
        this.setupTOC();
        this.header = $$("body > header").shift();
        this.cover = $("cover");
        this.begin_buttons = $$(".open_chapter_list");
        this.content = $("content");
        this.article = this.content.select("article").shift();
        this.toc = $("toc");
        this.quicklinks = this.toc.select(".sections > ul > li.section > a, .sections > ul > li.preview > a");
        this.quicklists = this.toc.select(".list");
        this.quicklinks_sections = this.toc.select(" .list h3");
        this.quicklinks_sections_lists = this.toc.select(" .list ul");
        this.chapters = $("chapters");
        var fullpath = window.location.pathname;
        var relpath = '';
        var start_index = fullpath.lastIndexOf('html/');
        if (start_index != -1) {
          for(i = start_index; i < fullpath.length;i++){
            if(fullpath[i]=='/'){relpath += '../'}}
        }
        insert_chapters(this.chapters, relpath);
        this.chapters_close = this.chapters.select("a").shift();
        this.chapter_links = this.chapters.select("ul a");
        this.buttons = {};
        for (i = 0; i < this.quicklinks_sections.length; i++) {
            Event.observe(this.quicklinks_sections[i], "click", this.toggleAccordion.bind(this));
        }
        for (i = 0; i < this.quicklinks.length; i++) {
            Event.observe(this.quicklinks[i], "click", this.toggleQuickbar.bind(this));
        }
        for (i = 0; i < this.begin_buttons.length; i++) {
            Event.observe(this.begin_buttons[i], "click", this.toggleChapters.bind(this));
        }
        Event.observe(this.chapters_close, "click", this.toggleChapters.bind(this));
        Event.observe(window, "keyup", this.processKeystroke.bind(this));
        this.ready();
    },
    toggleAccordion: function(e) {
        if (e) e.preventDefault();
        var heading = e.findElement("h3");
        var list = heading.next();
        var section_headings = heading.up("section").select("h3");
        for (i = 0; i < section_headings.length; i++) {
            var item = section_headings[i];
            if (item.identify() != heading.identify()) {
                item.removeClassName("active");
            }
        }
        for (i = 0; i < this.quicklinks_sections_lists.length; i++) {
            var item = this.quicklinks_sections_lists[i];
            if (item.identify() != list.identify()) {
                item.removeClassName("active");
            }
        }
        list.toggleClassName("active");
        heading.toggleClassName("active");
        return false;
    },
    ready: function() {
        this.runOnce();
        if (this.section) {
            this.openArticle();
            this.setupParallax();
            this.processContent();
            this.contentReady();
        }
        return;
    },
    runOnce: function() {
        if (this.firstrun) {
            this.firstrun = false;
            this.cover.addClassName("ready");
            if (!this.section) {
                var self = this;
                setTimeout(function() {
                    if (self.toc_object != false) self.toc_object.showTOC();
                }, 1200);
            }
        }
        return;
    },
    processKeystroke: function(e) {
        var fancyBoxOpened = jQuery("div.fancybox-wrap").length > 0;
        if (fancyBoxOpened)
            var dontAllowKeyStrokes = true;
        if (!dontAllowKeyStrokes && !e.altKey) {
            switch (e.keyCode) {
                case 27:
                    if (this.content.hasClassName("open")) {
                        this.closeArticle();
                    } else if (this.chapters.hasClassName("active")) {
                        this.toggleChapters();
                    } else if (this.toc.hasClassName("open")) {
                        this.toc.removeClassName("open");
                    }
                    break;
                case 39:
                    if (this.content.hasClassName("open")) {
                        var link = this.content.select(".previous-and-next .next a").shift();
                        if (link) link.click();;
                    }
                    break;
                case 37:
                    if (this.content.hasClassName("open")) {
                        var link = this.content.select(".previous-and-next .previous a").shift();
                        if (link) link.click();;
                    }
                    break;
            }
        } else {
            if (fancyBoxOpened) {
                e.preventDefault();
            } else {
                e.stopPropagation();
            }
        }
        return;
    },
    onCloseClick: function(e) {
        if (e) e.preventDefault();
        this.closeArticle();
    },
    closeArticle: function(pushState) {
        var guideUrl = window.location.href;
        guideUrl = guideUrl.substring(0, guideUrl.lastIndexOf("/html/")) + "/the-witcher-3-wild-hunt-the-complete-edition-eguide.html";
        window.location.href = guideUrl;
        return false;
    },
    contentReady: function() {
        this.setupFancybox();
        if (!this.getSectionMetaField('disable-interactive-tables')) {
            initEguideTables();
            addHooksToEguideTables();
        }
        this.setHeaderTitle();
    },
    setHeaderTitle: function() {
        var header_title = this.header.select("div.title").shift();
        var content_title = this.article.select("div.title").shift();
        header_title.innerHTML = content_title.innerHTML;
    },
    getSectionMetaField: function(dataFieldName) {
        var meta_elem = jQuery("article > header > div.title");
        return meta_elem.data(dataFieldName);
    },
    setupTOC: function() {
        this.toc_object = toc;
    },
    setupFancybox: function() {
        var lightboxes = jQuery("figure:not(.grouped) > a:not(.annotation-count), aside.Tip a:has(img), aside.Note a:has(img), aside.Caution a:has(img)");
        lightboxes.addClass("fancybox");
        var grouped_figures = jQuery("figure.grouped");
        grouped_figures.each(function(index) {
            var lightboxes = jQuery(this).find("a:not(.annotation-count)");
            lightboxes.addClass("fancybox");
            lightboxes.attr("rel", "gallery-" + index);
        });
        jQuery(".fancybox").fancybox();
        jQuery(".iframe-pop-up").attr("data-fancybox-type", "iframe").fancybox();
    },
    processContent: function() {
        var tables = this.content.select("aside table");
        for (i = 0; i < tables.length; i++) {
            var table = tables[i];
            var aside = table.up("aside");
            new Insertion.After(aside, table);
            if (aside.innerHTML == "") {
                aside.remove();
            }
        }
        this.content.select("figure.grouped").each(function(o) {
            var images = o.select("img").length;
            o.addClassName("count" + images);
        });
        this.fixVideos();
        new Event.observe(window, "resize", this.fixVideos.bind(this));
        return;
    },
    fixVideos: function(e) {
        this.content.select("iframe").each(function(o) {
            var w = o.getWidth();
            var h = parseInt((w / 16) * 9);
            o.setStyle({
                height: h + "px"
            });
        });
        return false;
    },
    openArticle: function() {
        this.content.addClassName("open");
        this.header.removeClassName("cover");
        this.article = this.content.select(" > article").shift();
        this.article.setAttribute("tabindex", 0);
        this.article.focus();
        this.close = this.content.select(" > .close").shift();
        Event.observe(this.close, "click", this.onCloseClick.bind(this));
        this.chapters.removeClassName("active");
        if (this.toc_object != false) {
            this.toc_object.hideTOC();
            this.toc_object.displayTOC(true);
        }
        return;
    },
    setupParallax: function() {
        if (document.viewport.getDimensions().width > 1024) {
            this.article.stopObserving();
            this.laxers = this.article.select(".parallax");
            this.laxers.each(function(o) {
                o.addClassName("active");
            });
            Event.observe(this.article, "scroll", this.parallax.bind(this));
        }
        return;
    },
    parallax: function(e) {
        if (e) e.preventDefault();
        for (i = 0; i < this.laxers.length; i++) {
            var laxer = this.laxers[i];
            var image = laxer.select("div").shift();
            var offset = 0;
            if (this.withinViewport(laxer)) {
                var offset = this.article.scrollTop / 2;
            }
            image.setStyle({
                bottom: "-" + offset + "px"
            });
        }
        return;
    },
    withinViewport: function(el) {
        var elOffset = el.positionedOffset();
        var elDim = el.getDimensions();
        var vpDim = document.viewport.getDimensions();
        var vpOffset = new Array(this.article.scrollLeft, this.article.scrollTop);
        if (elOffset[1] + elDim.height < vpOffset[1] || elOffset[1] > vpOffset[1] + vpDim.height || elOffset[0] + elDim.width < vpOffset[0] || elOffset[0] > vpOffset[0] + vpDim.width) {
            return false;
        }
        return true;
    },
    toggleQuickbar: function(e) {
        if (e) e.preventDefault();
        for (i = 0; i < this.quicklinks.length; i++) {
            this.quicklinks[i].removeClassName("on");
        }
        var button = e.findElement("a");
        var target = button.getAttribute("data-target");
        button.addClassName("on");
        var lists = this.toc.select(".list");
        for (i = 0; i < lists.length; i++) {
            if (lists[i].getAttribute("data-id") != target) {
                lists[i].removeClassName("open");
            }
        }
        var list = this.toc.select("[data-id=" + target + "]").shift();
        if (list) {
            if (list.hasClassName("open")) {
                list.removeClassName("open");
            } else {
                list.addClassName("open");
            }
        }
        return false;
    },
    toggleChapters: function(e) {
        if (e) {
            e.preventDefault();
            Event.stop(e);
            var button = e.findElement("a");
        }
        if (this.chapters.hasClassName("active")) {
            if (button) button.removeClassName("on");
            this.chapters.removeClassName("active");
            this.chapters.removeClassName("top");
            if (this.article) this.article.removeClassName("disable-scroll");
            if (this.toc_object != false) {
                this.toc_object.hideTOC();
                this.toc_object.displayTOC(true);
            }
            this.cover.addClassName("ready");
        } else {
            if (button) button.addClassName("on");
            this.chapters.addClassName("active");
            this.chapters.addClassName("top");
            if (this.article) this.article.addClassName("disable-scroll");
            if (this.toc_object != false) {
                this.toc_object.hideTOC(0);
                this.toc_object.displayTOC(false);
            }
            this.cover.removeClassName("ready");
        }
        return true;
    }
});