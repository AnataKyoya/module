$(document).ready(function () {
    $(".buka-sb").click(function () {
        if ($(this).hasClass("open")) {
            $(this).addClass("close");
            $(this).removeClass("open");
        } else {
            $(this).addClass("open");
            $(this).removeClass("close");
        }
        $(".side-bar").toggleClass("hide")
    })

    var count = -1;
    setInterval(() => {
        count++
        $(".first").css("marginLeft", -count + "00%")

        if (count == ($(".container").children().length) - 1) {
            count = -1;
        }
    }, 4000)
});