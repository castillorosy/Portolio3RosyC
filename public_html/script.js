$("document").ready(function() {
    $(".test").css("background-color", "blue");
    $('p:first').css({"background-color": "red", "color": "white"});
    
    $('p:last').css({"background-color": "black", "color": "white"});

});
$('document').ready(function(){
$("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);    
$('div').bind('mouse', mouseOverMe);
$('h1').bind('click', mouseClick);
});

function mouseOverMe() {
    $("p").html("blah");
}
function mouseOutMe () {
    $('h1').html("what's up?");
}

function mouseClick(){
    $('p').html('ugh');
}
$("window").resize(resizedWindow);

function resizedWindow()
{
    $("#second").html("Window was resized W: " + $("window").width() + " H: + ");
$(("window").height());
}
