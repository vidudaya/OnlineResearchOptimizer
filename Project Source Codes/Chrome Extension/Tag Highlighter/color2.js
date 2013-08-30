 
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

function activateHighlighter(){
	var divs = document.getElementsByTagName('*');
	
	for(var d in divs) { 
			try{
			 
				if (divs[d].addEventListener) {
					 divs[d].addEventListener('mouseup',function(){
						highlight('yellow');
					});
				} else {
					divs[d].attachEvent('mouseup', function(){
						highlight('yellow');
					});
				} 
			}catch(err){
				//alert(err.message);
			}
	}		
}

function makeEditableAndHighlight(colour) {
    sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
    // Use HiliteColor since some browsers apply BackColor to the whole block
    if (!document.execCommand("HiliteColor", false, colour)) {
        document.execCommand("BackColor", false, colour);
    }
    document.designMode = "off";
}
function highlight(colour) {
     var range, sel;
    if (window.getSelection) {
        // IE9 and non-IE
        try {
            if (!document.execCommand("BackColor", false, colour)) {
                makeEditableAndHighlight(colour);
            }
        } catch (ex) {
            makeEditableAndHighlight(colour)
        }
    }  else if (document.selection && document.selection.createRange) {
        // IE <= 8 case
        range = document.selection.createRange();
        range.execCommand("BackColor", false, colour);
    } 
}


document.addEventListener('DOMContentLoaded', function () {      
	 //clickss();	 
	 //clickcolor();
	 activateHighlighter();
});
