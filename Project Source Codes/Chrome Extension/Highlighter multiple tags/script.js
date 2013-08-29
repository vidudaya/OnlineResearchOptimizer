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
function clickcolor(e) {
    var divs = document.getElementsByTagName("p");
	var divs2 = document.getElementsByTagName("h");
	   for(var d in divs) { 
			 try{
			divs[d].addEventListener('mouseup',function(){var str= document.getSelection() ;
			//alert(divs[d].nodeName);
			this.innerHTML =this.innerHTML.replace(str,'<span style="background-color: '+'yellow'+' ">'+str+'</span>');
			});	
			 }catch(err){}
			 
	   }
	   for(var d in divs2) { 
			try{
			divs2[d].addEventListener('mouseup',function(){var str= document.getSelection() ;
			//alert(divs[d].nodeName);
			this.innerHTML =this.innerHTML.replace(str,'<span style="background-color: '+'yellow'+' ">'+str+'</span>');
			});	
			}catch(err){
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


document.addEventListener('DOMContentLoaded', function () {
	 clickcolor();
 
});

