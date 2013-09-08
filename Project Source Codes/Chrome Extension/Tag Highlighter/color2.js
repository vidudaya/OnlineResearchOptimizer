var url;
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
     url = tabs[0].url;
});


//working - on click the body background color will change to 'yellow'
function clickss(e) {
   chrome.tabs.executeScript(null,
                           {code:"document.body.style.backgroundColor='yellow'"});
  window.close();
}

// highlighter
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

// use the annotation facility of the " http://a.nnotate.com "
function annotator2() {	 
	alert(url);// display the url of the tab
	window.open('http://a.nnotate.com/php/annotate.php?v=001&u='+url+'');
}

 

document.addEventListener("DOMContentLoaded", function () {
	//alert(document.name);	
	document.getElementById('quickhighlight').addEventListener('click', function(){
		clickcolor();
	}); 
	
	document.getElementById('temparyAnnotate').addEventListener('click', function(){
		annotator();
	});
	
	document.getElementById('advancedAnnotate').addEventListener('click', function () {
		annotator2();   		 
    }); 
});
