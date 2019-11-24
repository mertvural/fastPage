/**
 * fastPage eklentisi v1
 * Copyright 2019 Mert Vural
 */

(function($) {
    "use strict";
    
    $.fn.fastPage = function(param) {
        var values = $.extend({
            effect: 'fade',
            loadingImg : "images/lazy.gif"
        }, param);

        var dataFast, i, len, fastPage = $(".fastPage"), win = $(window), ths = $(this);

        var loadImg = function() {

            var els = document.getElementsByClassName("fastPage");

            Array.prototype.forEach.call(els, function(el) {

                var topPosition = $(el).offset().top, scrollTp = win.scrollTop() + (win.height() / 1.2);
    
                if (topPosition < scrollTp) {

                    dataFast = $(el).attr("data-fastPage");
                    $(el).attr("src", dataFast).addClass("load");
                }
              
            });

        }

        loadImg();

        win.on("scroll",function() {
            loadImg();
        })

        this.initialize = function() {
            ths.addClass(values.effect);
            ths.attr("src",values.loadImg);
            len = this.length
            return this;
        };

        return this.initialize();
 
    }
})(jQuery);