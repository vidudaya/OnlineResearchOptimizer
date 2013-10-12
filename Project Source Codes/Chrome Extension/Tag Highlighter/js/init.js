/** Online Research Optimizer
* Version 1.0.0
* Author : Vidudaya Neranjan Bandara
*/

// set the initial css and JQuery styles
$(document).ready(function(){
	$('#topic').fadeIn(3000);
	$("#highlight,#Annotator,#Annotator2").hide();
	 
	$('#quickHighlight').mouseenter(function(){
		$("#highlight,#Annotator,#Annotator2").delay(500).hide();
		$(this).addClass("buttonStyle2");
		$("#highlight").delay(1000).show(1000);
		
	});
	$('#temparyAnnotate').mouseenter(function(){
		$("#highlight,#Annotator,#Annotator2").delay(500).hide();
		$(this).addClass("buttonStyle2");
		$("#Annotator").delay(1000).show(1000);
		
	});
	$('#advancedAnnotate').mouseenter(function(){
		$("#highlight,#Annotator,#Annotator2").delay(500).hide();
		$(this).addClass("buttonStyle2");
		$("#Annotator2").delay(1000).show(1000);
		
	});
	$('#quickHighlight').mouseleave(function(){
		$(this).removeClass("buttonStyle2");
		$("#Annotator,#Annotator2").hide();
	});
	$('#temparyAnnotate').mouseleave(function(){
		$(this).removeClass("buttonStyle2");
		$("#highlight,#Annotator2").hide(); 
	});
	$('#advancedAnnotate').mouseleave(function(){
		$(this).removeClass("buttonStyle2");
		$("#highlight,#Annotator").hide(); 
	});
});