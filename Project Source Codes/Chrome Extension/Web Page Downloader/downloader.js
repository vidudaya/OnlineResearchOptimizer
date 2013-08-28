document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("download").addEventListener("click", function () {
        chrome.downloads.download({			
          "url": "http://en.wikipedia.org/wiki/Apple_Inc.",
		 		
        }, function () {
            console.log("downloaded Complete");
        });
    });
	});
 