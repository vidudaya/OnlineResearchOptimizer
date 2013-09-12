
alert("starteds");

var link = document.createElement("link");
link.href = "http://assets.annotateit.org/annotator/v1.2.5/annotator.min.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);


var divs = document.getElementsByTagName('body');
	for(var d in divs) { 
			try{			 
				if (divs[d].removeEventListener) {
					 divs[d].removeEventListener('mouseup', col);
				} 
			}catch(err){
				alert(err.message);
			}
	}


var $jq = jQuery.noConflict();
$jq(document.body).annotator();

alert("done");