var divs = document.getElementsByTagName("div");
  
	   for(var d in divs) { 
			divs[d].addEventListener('mouseup',function(){var str= document.getSelection() ;
			this.innerHTML =this.innerHTML.replace(str,'<span style="background-color: '+'yellow'+' ">'+str+'</span>');
			});	
			 
	   }
	   
 