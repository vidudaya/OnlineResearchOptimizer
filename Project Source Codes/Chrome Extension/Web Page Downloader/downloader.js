var url;
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
     url = tabs[0].url;
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("download").addEventListener("click", function () {
        chrome.downloads.download({			
          //"url": "http://en.wikipedia.org/wiki/Apple_Inc.",
		   "url": url,
		   saveAs: true
        }, function () {
            console.log("downloaded Complete");
        });
    });
});
 