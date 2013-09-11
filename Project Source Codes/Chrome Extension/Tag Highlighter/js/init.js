$(document).ready(function(){
	$('#topic').fadeIn(3000);
	$("#highlight,#Annotator,#Annotator2").hide();
	 
	$('#quickhighlight').mouseenter(function(){
		$("#highlight").show(1000);
	});
	$('#temparyAnnotate').mouseenter(function(){
		$("#Annotator").show(1000);
	});
	$('#advancedAnnotate').mouseenter(function(){
		$("#Annotator2").show(1000);
	});
	$('#quickhighlight').mouseleave(function(){
		$("#highlight").hide(1000);
	});
	$('#temparyAnnotate').mouseleave(function(){
		$("#Annotator").hide(1000);
	});
	$('#advancedAnnotate').mouseleave(function(){
		$("#Annotator2").hide(1000);
	});
	
	
});