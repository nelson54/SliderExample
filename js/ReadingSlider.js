$(function(){

var ReadingSlider = function(){

    this.elementWidth = "23px";
    this.elementHeight = "10px";

    this.readingList = ['aa','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    this.buildLevels = function(el){
        var self = this;
        var $el = $(el),
            list, container, slider;

        list = $(ReadingSlider.templates.readingList);
        slider = $(ReadingSlider.templates.rangeSlider);
        container = $(ReadingSlider.templates.readingListContainer);

        $.each(this.readingList, function( i, val){
            var item = $(ReadingSlider.templates.readingListItem).text(val);

            list.append(item);
        })

        container.append(list).append(slider);

        $el.append(container);

        $("div#slider", $el).slider({
            range: true,
            min: 0,
            max:27,
            change: function( event, ui ) {
                var values = $(event.target).slider("values");
                self.setSelection(values)
            }
        })
    }

    this.setSelection = function(array){
        $(".reading-list-level")
            .toggleClass("selected", false)
            .slice(array[0], array[1])
            .addClass("selected");
    }
};

var templates = {
    readingListContainer: "<div class=\"reading-list-container\" ></div>",
    readingList: "<ul class=\"reading-list\"></ul>",
    readingListItem: "<li class=\"reading-list-level\"></li>",
    rangeSlider: "<div id=\"slider\"></div>"
}

ReadingSlider.templates = templates;

$.ReadingSlider = ReadingSlider;
})