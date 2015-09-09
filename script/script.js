// menu on scroll
$(document).scroll(function() {
    var links = $("#menu").find("ul li a");
    if ($(document).scrollTop() >= 400) {
        $("#menu-row").removeClass("large").addClass("small").fadeIn("slow");
        $("#menu-wrapper").removeClass("large").addClass("small").fadeIn("slow");
        $("#logo").removeClass("large").addClass("small").fadeIn("slow");
        $("#phone").removeClass("large").addClass("small").fadeIn("slow");
        $("#phone-icon").removeClass("large").addClass("small").fadeIn("slow");
        links.removeClass("large").addClass("small").fadeIn("slow");
    } else{
        $("#menu-row").removeClass("small").addClass("large").fadeIn("slow");
        $("#menu-wrapper").removeClass("small").addClass("large").fadeIn("slow");
        $("#logo").removeClass("small").addClass("large").fadeIn("slow");
        $("#phone").removeClass("small").addClass("large").fadeIn("slow");
        $("#phone-icon").removeClass("small").addClass("large").fadeIn("slow");
        links.removeClass("small").addClass("large").fadeIn("slow");
    }
});

// resize video header
$(window).resize(function() {
    resizeBackgroundVideo();
    paddingWrapper();
});

$(document).ready(function() {
    resizeBackgroundVideo();
    paddingWrapper();
});

function resizeBackgroundVideo() {
    var ratio = 16/9;
    var wvideo = $(window).width();
    var hvideocontainer = $('#header').height();
    var videoWrapper = $(".video-wrapper");

    if (wvideo/hvideocontainer >= ratio) {
        videoWrapper.height(wvideo / ratio);
        videoWrapper.width(wvideo);

    } else{
        videoWrapper.height(hvideocontainer);
        videoWrapper.width(hvideocontainer * ratio);
    }
    videoWrapper.css("margin-top", -(videoWrapper.height()/2 - hvideocontainer/2) );
    videoWrapper.css("margin-left", -(videoWrapper.width()/2 - wvideo/2) );
}

// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (event) {
    var that = $(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
}

var onMapClickHandler = function (event) {
    var that = $(this);

    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);

    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");

    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
}

// Enable map zooming with mouse scroll when the user clicks the map
$('.maps.embed-container').on('click', onMapClickHandler);


function paddingWrapper() {
    var wwrapper = $('.wrapper').width();
    var wrapper = $(".wrapper");

    wrapper.css("padding-left", -(wwrapper/2 );
}