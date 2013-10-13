/** Online Research Optimizer
* Version 1.0.0
* Author : Vidudaya Neranjan Bandara
*/

// set the initial css and JQuery styles
$(document).ready(function(){
	$('#topic').fadeIn(3000);
	$("#quickHighlightDiv,#AnnotatorDiv,#Annotator2Div,#dictionary").hide();
	 
	$('#quickHighlight').mouseenter(function(){
		$("#quickHighlightDiv,#AnnotatorDiv,#Annotator2Div,#dictionaryDiv").hide();
		$(this).addClass("buttonStyle2");
		$("#quickHighlightDiv").delay(1000).show(1000);
		$("#temparyAnnotate,#advancedAnnotate,#dictionaryButton").removeClass("buttonStyle2");
	});
	$('#temparyAnnotate').mouseenter(function(){
		$("#quickHighlightDiv,#AnnotatorDiv,#Annotator2Div,#dictionaryDiv").hide();
		$(this).addClass("buttonStyle2");
		$("#AnnotatorDiv").delay(1000).show(1000);
		$("#quickHighlight,#advancedAnnotate,#dictionaryButton").removeClass("buttonStyle2");
	});
	$('#advancedAnnotate').mouseenter(function(){
		$("#quickHighlightDiv,#AnnotatorDiv,#Annotator2Div,#dictionaryDiv").hide();
		$(this).addClass("buttonStyle2");
		$("#Annotator2Div").delay(1000).show(1000);
		$("#quickHighlight,#temparyAnnotate,#dictionaryButton").removeClass("buttonStyle2");
	});
	$('#dictionaryButton').mouseenter(function(){
		$("#quickHighlightDiv,#AnnotatorDiv,#Annotator2Div,#dictionaryDiv").hide();
		$(this).addClass("buttonStyle2");
		$("#dictionaryDiv").delay(1000).show(1000);
		$("#quickHighlight,#temparyAnnotate,#advancedAnnotate").removeClass("buttonStyle2");
	});
	$('#quickHighlight').mouseleave(function(){
		//$(this).removeClass("buttonStyle2");
		$("#AnnotatorDiv,#Annotator2Div,#dictionaryDiv").hide();
	});
	$('#temparyAnnotate').mouseleave(function(){
		//$(this).removeClass("buttonStyle2");
		$("#quickHighlightDiv,#Annotator2Div,#dictionaryDiv").hide(); 
	});
	$('#advancedAnnotate').mouseleave(function(){
		//$(this).removeClass("buttonStyle2");
		$("#quickHighlightDiv,#AnnotatorDiv,#dictionaryDiv").hide(); 
	});
	$('#dictionaryButton').mouseleave(function(){
		//$(this).removeClass("buttonStyle2");
		$("#quickHighlightDiv,#AnnotatorDiv,#Annotator2Div").hide(); 
	});
});