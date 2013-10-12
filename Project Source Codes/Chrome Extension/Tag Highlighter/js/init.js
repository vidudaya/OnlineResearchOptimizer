/** Online Research Optimizer
* Version 1.0.0
* Author : Vidudaya Neranjan Bandara
*/

// set the initial css and JQuery styles
$(document).ready(function(){
	$('#topic').fadeIn(3000);
	$("#quickHighlightDiv,#AnnotatorDiv,#Annotator2Div").hide();
	 
	$('#quickHighlight').mouseenter(function(){
		$("#quickHighlightDiv,#AnnotatorDiv,#Annotator2Div").hide();
		$(this).addClass("buttonStyle2");
		$("#quickHighlightDiv").delay(1000).show(1000);
		$("#temparyAnnotate,#advancedAnnotate").removeClass("buttonStyle2");
	});
	$('#temparyAnnotate').mouseenter(function(){
		$("#quickHighlightDiv,#AnnotatorDiv,#Annotator2Div").hide();
		$(this).addClass("buttonStyle2");
		$("#AnnotatorDiv").delay(1000).show(1000);
		$("#quickHighlight,#advancedAnnotate").removeClass("buttonStyle2");
	});
	$('#advancedAnnotate').mouseenter(function(){
		$("#quickHighlightDiv,#AnnotatorDiv,#Annotator2Div").hide();
		$(this).addClass("buttonStyle2");
		$("#Annotator2Div").delay(1000).show(1000);
		$("#quickHighlight,#temparyAnnotate").removeClass("buttonStyle2");
	});
	$('#quickHighlight').mouseleave(function(){
		//$(this).removeClass("buttonStyle2");
		$("#AnnotatorDiv,#Annotator2Div").hide();
	});
	$('#temparyAnnotate').mouseleave(function(){
		//$(this).removeClass("buttonStyle2");
		$("#quickHighlightDiv,#Annotator2Div").hide(); 
	});
	$('#advancedAnnotate').mouseleave(function(){
		//$(this).removeClass("buttonStyle2");
		$("#quickHighlightDiv,#AnnotatorDiv").hide(); 
	});
});