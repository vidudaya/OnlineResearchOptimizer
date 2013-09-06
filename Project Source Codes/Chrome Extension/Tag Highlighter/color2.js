 
//working - on click the body background color will change to 'yellow'
function clickss(e) {
   chrome.tabs.executeScript(null,
                           {code:"document.body.style.backgroundColor='yellow'"});
  window.close();
}

// highlight all the p tags on user click event
 function clickcolor() {
   chrome.tabs.executeScript(null,
                           {file : "tabcolor.js"});
   //window.close();
}

 function annotator() {
	chrome.tabs.executeScript(null,
                           {file : "jquery-1.8.0.min.js"});
    chrome.tabs.executeScript(null,
                           {file : "annotator-full.min.js"});						   
    chrome.tabs.executeScript(null,
                           {file : "annotator.js"}); 
 

}


/*document.addEventListener('DOMContentLoaded', function () {      
	 //clickss();	 
	 clickcolor();
	 //activateHighlighter();
});*/

document.addEventListener("DOMContentLoaded", function () {
	//alert(document.name);	
	document.getElementById('b1').addEventListener('click', function(){
		//alert("vidda");
		clickcolor();
	});
	
	
	document.getElementById('b2').addEventListener('click', function(){
		//alert("vidda");		 
		annotator();
	});
	//alert("vidda2");
});
