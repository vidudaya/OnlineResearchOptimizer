var divs = document.getElementsByTagName("p");
	 
	   for(var d in divs) {
		  divs[d].addEventListener('click',function(){this.style.background='yellow';});	
		  
	  }
	 