$(document).ready(function(){
$('.slide:first').css("display","block");
});

Cufon.replace('.banner h1', { fontFamily: 'RockWell'});;
Cufon.replace('.bigText', { fontFamily: 'RockWell'});;
Cufon.replace('.bot_min_nav h3 , .slideNav ul li a', { fontFamily: 'RockWell'});;

$(function() {
$(".mainMenu ul li a").hover(function(){$(this).css("margin-top","-5px");$(this).fadeIn(50);}).stop();
});

function show_content(divName){
$(".slide").css("display","none");
$("#"+divName).fadeIn('1500');
}