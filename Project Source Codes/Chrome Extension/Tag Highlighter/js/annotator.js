
//alert("start annotating");

//This will inject a HTML link element to the currently focused web page. This action will be used to 
// simplyfy the downloading facility.
var link = document.createElement("link");
link.href = "http://assets.annotateit.org/annotator/v1.2.5/annotator.min.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);


//This part will remove the event listners added by the simple highlighter
var divs = document.getElementsByTagName('body');
	for(var d in divs) { 
			try{			 
				if (divs[d].removeEventListener) {
					 divs[d].removeEventListener('mouseup', callHighlight);
				} 
			}catch(err){
				alert(err.message);
			}
	}

//activate and run the annotation facility. 	
var $jq = jQuery.noConflict();// avoiding the javaScript and JQuery '$' mark conficts.
$jq(document.body).annotator();

//alert("done adding facility");