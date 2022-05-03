$(document).ready(function() {
    $("#list").on("mouseover", "a:not('.letter')", function() {
        let link = $(this).attr('href');
        $("iframe").attr('src', link);
        $("iframe").show();
        $("div.evergreen:first-of-type").addClass("hide");
    }).on("mouseout", "a:not('letter')", function() {
        $("iframe").hide();
        $("div.evergreen:first-of-type").removeClass("hide");
    });
});