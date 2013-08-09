var divs = document.getElementsByTagName("p");
	 
	   for(var d in divs) {
		  //divs[d].addEventListener('click',function(){this.style.background='yellow';});	
		  
		  // to check mousedown behaviour , for user mousedown event
		  divs[d].addEventListener('mousedown',function(){this.style.background='yellow'; alert('testing');});
	  }
	 