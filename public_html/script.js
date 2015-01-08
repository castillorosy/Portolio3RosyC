$("document").ready(function() {
    $(".test").css("background-color", "blue");
    $('p:first').css({"background-color": "red", "color": "white"});
    
    $('p:last').css({"background-color": "black", "color": "white"});

});

$("window").resize(resizedWindow);

function resizedWindow()
{
    $("#second").html("Window was resized W: " + $("window").width() + " H: + ");
$(("window").height());
}