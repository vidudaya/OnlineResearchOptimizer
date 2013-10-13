/*
* Online Research Optimizer
* Version 1.0.0
* Author : Vidudaya Neranjan Bandara
*/

bindImg();

function bindImg(){
	var imgz = img_find();
	var noOfImages = imgz.length;
	
	var newDiv = document.createElement("div");
	newDiv.id="cvNew";
	document.getElementsByTagName("body")[0].appendChild(newDiv);
	
	var element = document.createElement('h1');
	var topic = document.createTextNode('The Images of the page');
	element.appendChild(topic);
	document.getElementById("cvNew").appendChild(element);
	  
	while(0<imgz.length){
		var img = document.createElement("img");
		img.src=imgz.pop();
		//alert("good ");
		document.getElementById("cvNew").appendChild(img);
	}
	alert(noOfImages+" Images of this page have been loaded to the bottom of the page Successfully ");
     
}

function img_find() {
    var imgs = document.getElementsByTagName('img');
    var imgSrcs = [];
	//alert(imgs.length);
    for (var i = 0; i < imgs.length; i++) {
        imgSrcs.push(imgs[i].src);
		//alert(imgs[i].src);
    } 
	/*for(var j =0;j<imgSrcs.length;j++){
		alert("vidda "+imgSrcs.pop());
	}*/
	return imgSrcs;
}

 
 