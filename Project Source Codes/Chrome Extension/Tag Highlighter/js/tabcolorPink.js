/*
* Online Research Optimizer
* Version 1.0.0
* Author : Vidudaya Neranjan Bandara
*/

removeListnersFromBodyElements();
activateHighlighter();

// call the highlight method 
function callHighlight(){
 	highlight('#FF99FF');
}
function removeListnersFromBodyElements(){
	var divs = document.getElementsByTagName('body');
		for(var d in divs) { 
				try{
					var old_element = divs[d];
					var new_element = old_element.cloneNode(true);
					old_element.parentNode.replaceChild(new_element, old_element);
					/*if (divs[d].removeEventListener) {
						 divs[d].removeEventListener('mouseup', callHighlight);
					} */
				}catch(err){
					//alert(err.message);
				}
		}
	return true;// code executed successfully	
}

// this will add eventListners to HTML body elements
function activateHighlighter(){
	//var divs = document.getElementsByTagName('*');
	var divs = document.getElementsByTagName('body');// to enhance the preformance
	for(var d in divs) { 
			try{			 
				if (divs[d].addEventListener) {
					 divs[d].addEventListener('mouseup',callHighlight);
				} else {
					divs[d].attachEvent('mouseup', callHighlight);
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
	// design mode must be 'on' before doing midifications
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
