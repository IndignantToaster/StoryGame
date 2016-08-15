$(document).ready(function() {
    $("#burg").click(ToggleSidebar);
});

function ToggleSidebar() {
    if ($("#sidebar-hidden").css("visibility") == "hidden") {
        $("#sidebar-hidden").css("visibility", "visible");
    }
    else {
        $("#sidebar-hidden").css("visibility", "hidden");
    }
}