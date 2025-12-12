var TOC = Class.create({
    initialize: function() {
        this.TOC_PEEK = 40;
        this.TOC_PEEK_HOVER = 6;
        
        var toc_to = $("toc");
        var fullpath = window.location.pathname;
        var relpath = '';
        var start_index = fullpath.lastIndexOf('html/');
        if (start_index != -1) {
          for(i = start_index; i < fullpath.length;i++){
            if(fullpath[i]=='/'){relpath += '../'}}
        }
        insert_toc(toc_to, relpath);

        this.toc = jQuery("#toc");
        var self = this;
        this.toc.css({
            left: '-' + (this.toc.width() * 2) + 'px'
        });
        this.toc.mouseover(function() {
            if (self.toc.hasClass("ready")) return;
            self.hideTOC(self.TOC_PEEK_HOVER);
        });
        this.toc.mouseout(function() {
            if (self.toc.hasClass("ready")) return;
            self.hideTOC();
        });
        this.toc.click(function(event) {
            if (self.toc.hasClass("ready")) return;
            self.showTOC();
        });
        this.toc.find('#menu-tab, #menu-close, #menu-open').click(function(event) {
            Event.stop(event);
            self.toggleTOC();
        });
        jQuery(window).resize(function() {
            self.repositionTOC();
        });
    },
    showTOC: function() {
        this.toc.addClass("ready").css({
            left: '0px'
        });
    },
    hideTOC: function(extend_peek) {
        extend_peek = extend_peek || 0;
        var open = this.toc.find(".list.open").first();
        if (open) open.removeClass("open");
        this.toc.find('a.on').removeClass("on");
        this.toc.removeClass("ready").css({
            left: '-' + (this.toc.innerWidth() - (this.TOC_PEEK + extend_peek)) + 'px'
        });
    },
    displayTOC: function(show) {
        if (show) this.toc.removeClass('toc-hidden');
        else this.toc.addClass('toc-hidden');
    },
    toggleTOC: function() {
        if (this.toc.hasClass("ready")) {
            this.hideTOC();
        } else this.showTOC();
    },
    repositionTOC: function() {
        if (this.toc.hasClass("ready")) this.showTOC();
        else this.hideTOC();
    },
});