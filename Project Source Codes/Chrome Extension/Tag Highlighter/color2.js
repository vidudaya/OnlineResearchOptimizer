 
//working - on click the body background color will change to 'yellow'
function clickss(e) {
   chrome.tabs.executeScript(null,
                           {code:"document.body.style.backgroundColor='yellow'"});
  window.close();
}

 

document.addEventListener('DOMContentLoaded', function () {      
	 clickss();	 
});
