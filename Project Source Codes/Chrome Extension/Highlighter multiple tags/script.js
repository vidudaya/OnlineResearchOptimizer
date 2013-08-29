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

