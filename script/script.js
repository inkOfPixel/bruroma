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
});

$(document).ready(function() {
    resizeBackgroundVideo();
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

