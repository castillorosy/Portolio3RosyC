$("document").ready(function() {
    $(".test").css("background-color", "blue");
    $('p:first').css({"background-color": "red", "color": "white"});

    $('p:last').css({"background-color": "black", "color": "white"});
});

$('document').ready(function() {
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('div').bind('mouse', mouseOverMe);
    $('h1').bind('click', mouseClick);
});

$('#replaceWText').bind('click', replaceWText);

$('#randPara').bind('click', addAPara);

$('#removePara').bind('click',removeAPara);

function removeAPara() {
    $('#randPara p:list').remove();
}
function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}
function replaceWText() {
    $('#replaceWText').text('Replaced!');
}
function mouseOverMe() {
    $("p").html("blah");
}
function mouseOutMe() {
    $('h1').html("what's up?");
}

function mouseClick() {
    $('p').html('ugh');
}
$("window").resize(resizedWindow);

function resizedWindow()
{
    $("#second").html("Window was resized W: " + $("window").width() + " H: + ");
    $(("window").height());
}
//<script type="text/javascript">

//$("document").ready(function() {
//    $('#hideLogo').bind('click', hideTheImage);
//    $('#showLogo').bind('click', showTheImage);
//});
//
//function hideTheImage() {
//    $('#logo').hide('explode', {}, 2500);
//}
//
//function showTheImage() {
//    $('#logo').show('fold', {}, 2500);
//}