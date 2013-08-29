function colorSelectedNodes(){
    var ds= document.getSelection();
    var elements = []
        // only start node if selection occured from start to end 
        // (from top left to right bottom)
    var anchorNode = ds.anchorNode.parentNode; 
    var elementSibling = anchorNode.nextElementSibling;
    var focusNode = ds.focusNode.parentNode; // endnode

	if(anchorNode!=focusNode){
		while(elementSibling != focusNode){
			console.log("elementSibling", elementSibling);
			elementSibling.style.backgroundColor = "#00FFFF";           
			elementSibling.style.fontWeight = "bold";
			elementSibling.style.color = "blue";
			elementSibling = elementSibling.nextElementSibling;
		}
	}else{		
		alert("oooooooooops!!");
		clickcolor();
	}
    // just to show focus and end node
    anchorNode.style.backgroundColor = "lightgreen"; 
    focusNode.style.backgroundColor = "yellow"; 
    console.log("anchorNode", anchorNode);
    console.log("focusNode", focusNode);
}
function clickcolor() {
    var divs = document.getElementsByTagName("p");
	var divs2 = document.getElementsByTagName("h");
	alert("wewewe");
	   for(var d in divs) { 
			 try{
			 //divs[d].addEventListener('mouseup',highlight('yellow'));	
			 divs[d].addEventListener('mouseup',function(){
				highlight('yellow');
			 });	
			 alert("bbb");
			 }catch(err){
				alert(err.message);
			 }
			 
	   }
	   for(var d in divs2) { 
			try{
			//divs2[d].addEventListener('mouseup',highlight('yellow'));	
			divs2[d].addEventListner('mouseup',function(){
				highlight('yellow');
			});
			alert("ccc");
			}catch(err){
			alert(err.message);
			 }
			 
	   }
}
// this will 'on' the document.designmode and edit it and 'off' the design mode
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
	 clickcolor();
		alert("aaaa");
});

