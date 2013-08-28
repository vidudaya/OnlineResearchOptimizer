document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("download").addEventListener("click", function () {
        chrome.downloads.download({			
          "url": "http://en.wikipedia.org/wiki/Apple_Inc.",
		   saveAs: true
        }, function () {
            console.log("downloaded Complete");
        });
    });
});
 