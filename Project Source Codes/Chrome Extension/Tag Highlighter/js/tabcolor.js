activateHighlighter();

function col(){
 	highlight('yellow');
}


function activateHighlighter(){
	//var divs = document.getElementsByTagName('*');
	var divs = document.getElementsByTagName('body');// to enhance the preformance
	for(var d in divs) { 
			try{			 
				if (divs[d].addEventListener) {
					 divs[d].addEventListener('mouseup',col);
				} else {
					divs[d].attachEvent('mouseup', col);
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
