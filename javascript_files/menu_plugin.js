(function ($) {
    $.fn.highlightMenu = function (options) {
        var defaults = $.extend({
            'bgColor': '#32CD32', // default background color for the 'a' element
            'color': '#ff1122', // default text color for the 'a' element
            'hoverBgColor': '#cccccc', // background color for the 'a' element when it is being hovered
            'hoverColor': '#000000', // text color for the 'a' element when it is being hovered
            'linkWidth': '125px', // default width of the 'a' element
        }, options); // merges the provided options with the defaults
        return this.each(function () {
            var items = $("li a"); // selects all 'li a' elements
            var o = defaults;
            items.css('font-family', 'arial, helvetica, sans-serif') // sets the font family for the 'a' element
                .css('font-weight', 'bold') // sets the font weight for the 'a' element
                .css('text-decoration', 'none') // removes text decoration from the 'a' element
                .css('background-color', o.bgColor) // sets the default background color for the 'a' element
                .css('color', o.color) // sets the default text color for the 'a' element
                .css('width', o.linkWidth); // sets the default width of the 'a' element
            items.mouseover(function () { // adds a mouseover event to the 'a' element
                $(this).css('background-color', o.hoverBgColor) // sets the background color of the 'a' element when it is being hovered
                    .css('color', o.hoverColor); // sets the text color of the 'a' element when it is being hovered
            });
            items.mouseout(function () { // adds a mouseout event to the 'a' element
                $(this).css('background-color', o.bgColor) // sets the default background color of the 'a' element
                    .css('color', o.color); // sets the default text color of the 'a' element
            });
        });
    }
})(jQuery);