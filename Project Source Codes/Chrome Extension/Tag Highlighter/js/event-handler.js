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
                           {file : "js/tabcolor.js"});
   //window.close();
}
 function clickcolorGreen() {
    chrome.tabs.executeScript(null,
                           {file : "js/tabcolorGreen.js"});
   //window.close();
}
 function clickcolorRed() {
    chrome.tabs.executeScript(null,
                           {file : "js/tabcolorRed.js"});
   //window.close();
}
 function clickcolorBlue() {
    chrome.tabs.executeScript(null,
                           {file : "js/tabcolorBlue.js"});
   //window.close();
}


 function annotator() {
	chrome.tabs.executeScript(null,
                           {file : "js/jquery.js"});
    chrome.tabs.executeScript(null,
                           {file : "js/annotator-full.min.js"});						   
    chrome.tabs.executeScript(null,
                           {file : "js/annotator.js"}); 
}

// use the annotation facility of the " http://a.nnotate.com "
function annotator2() {	 
	alert(url);// display the url of the tab
	window.open('http://a.nnotate.com/php/annotate.php?v=001&u='+url+'');
}

 

document.addEventListener("DOMContentLoaded", function () {
	 //alert(document.name);	
	document.getElementById('quickHighlight').addEventListener('click', function(){
		clickcolor();
	}); 
	document.getElementById('color_yellow').addEventListener('click', function(){
		clickcolor();
	}); 
	document.getElementById('color_green').addEventListener('click', function(){
		clickcolorGreen();
	}); 
	document.getElementById('color_blue').addEventListener('click', function(){
		clickcolorBlue();
	}); 
	document.getElementById('color_red').addEventListener('click', function(){
		clickcolorRed();
	}); 
	document.getElementById('color_white').addEventListener('click', function(){
		clickcolorWhite();
	}); 
	
	document.getElementById('temparyAnnotate').addEventListener('click', function(){
		annotator();
	});
	
	document.getElementById('advancedAnnotate').addEventListener('click', function () {
		annotator2();   		 
    }); 
});
