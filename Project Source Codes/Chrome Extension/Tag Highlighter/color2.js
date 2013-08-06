 
//working - on click the body background color will change to 'yellow'
function clickss(e) {
   chrome.tabs.executeScript(null,
                           {code:"document.body.style.backgroundColor='yellow'"});
  window.close();
}

// highlight all the p tags on user click event
 function clickcolor(e) {
   chrome.tabs.executeScript(null,
                           {file : "tabcolor.js"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {      
	 //clickss();	 
	 clickcolor();
});
