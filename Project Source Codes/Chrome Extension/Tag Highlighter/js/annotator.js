/*
* Online Research Optimizer
* Version 1.0.0
* Author : Vidudaya Neranjan Bandara
*/
//alert("start annotating");

injectRelatedLinks();
removeListnersFromBodyElements();
runAnnotator();

//This will inject a HTML link element to the currently focused web page. This action will be used to 
// simplyfy the downloading facility.
function injectRelatedLinks(){
	var link = document.createElement("link");
	link.href = "http://assets.annotateit.org/annotator/v1.2.5/annotator.min.css";
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);
	
	var fileref=document.createElement('script');
	fileref.setAttribute("type","text/javascript");
	fileref.setAttribute("src", "http://assets.annotateit.org/annotator/v1.1.0/annotator-full.min.js");
	document.getElementsByTagName("head")[0].appendChild(fileref);
	
	var jqref=document.createElement('script');
	jqref.setAttribute("type","text/javascript");
	jqref.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js");
	document.getElementsByTagName("head")[0].appendChild(jqref);
	
	return true;// code executed successfully	
}

//This part will remove the event listners added by the simple highlighter
function removeListnersFromBodyElements(){
	var divs = document.getElementsByTagName('body');
		for(var d in divs) { 
				try{			 
					if (divs[d].removeEventListener) {
						
						 divs[d].removeEventListener('mouseup', callHighlight);
						// alert("listner removed......");
					} 
				}catch(err){
					alert(err.message);
				}
		}
	return true;// code executed successfully	
}
//activate and run the annotation facility. 	
function runAnnotator(){
	var $jq = jQuery.noConflict();// avoiding the javaScript and JQuery '$' mark conficts.
	$jq(document.body).annotator();
	return true;// code executed successfully	
}
//alert("done adding facility");