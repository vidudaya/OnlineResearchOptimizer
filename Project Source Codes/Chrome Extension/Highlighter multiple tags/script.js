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

