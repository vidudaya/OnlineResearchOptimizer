$(document).ready(function(){
	$('#topic').fadeIn(3000);
	$("#highlight,#Annotator,#Annotator2").hide();
	 
	$('#quickhighlight').mouseenter(function(){
		$(this).addClass("buttonStyle2");
		$("#highlight").delay(1000).show(1000);
	});
	$('#temparyAnnotate').mouseenter(function(){
		$(this).addClass("buttonStyle2");
		$("#Annotator").delay(1000).show(1000);
	});
	$('#advancedAnnotate').mouseenter(function(){
		$(this).addClass("buttonStyle2");
		$("#Annotator2").delay(1000).show(1000);
	});
	$('#quickhighlight').mouseleave(function(){
		$(this).removeClass("buttonStyle2");
		$("#highlight").hide(1000);
	});
	$('#temparyAnnotate').mouseleave(function(){
		$(this).removeClass("buttonStyle2");
		$("#Annotator").hide(1000);
	});
	$('#advancedAnnotate').mouseleave(function(){
		$(this).removeClass("buttonStyle2");
		$("#Annotator2").hide(1000);
	});
	
	
});