jQuery(document).ready((function(i,e,r,c){"use strict";i.wc_category_slider_public={init:function(){i(".wc-category-slider").each((function(e,r){var c=i(r).data("slider-config");i.wc_category_slider_public.initSlider(c,r)}))},reInit:function(){i(".wc-category-slider").each((function(e,r){var c=i(r).data("slider-config");i.wc_category_slider_public.initSlider(c,r,!0),i(r).trigger("refresh.owl.carousel"),setTimeout((function(){i(r).trigger("refresh.owl.carousel")}),350)}))},initSlider:function(e,r,c){c=c||!1,(e=e||{}).navText=['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],e.onInitialized=function(e){var r=i(e.currentTarget);if(r.hasClass("single-slide"))return!1;var c=0;r.find(".owl-item.active").each((function(){r.imagesLoaded((function(){var i=parseInt(r.find("img").height(),10);(c=c>=i?c:i)<250&&(c=250),console.log(c),r.find(".wc-slide-image-wrapper").css("height",c)}))})),r.find(".wc-slide").css("border-width",0),r.find(".wc-slide").css("border-width","1px")},c?(i(r).owlCarousel("destroy"),i(r).owlCarousel(e)):i(r).owlCarousel(e)}},i.wc_category_slider_public.init()}));