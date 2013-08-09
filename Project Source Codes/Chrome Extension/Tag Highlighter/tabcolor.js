var divs = document.getElementsByTagName("p");
	 
	   for(var d in divs) {
		  //divs[d].addEventListener('click',function(){this.style.background='yellow';});	
		  
		  // to check mousedown behaviour , for user mousedown event
		  //divs[d].addEventListener('mousedown',function(){this.style.background='yellow'; alert('testing');});
		  
		  // check getSelection()
		 //divs[d].addEventListener('mouseup',function(){var str= document.getSelection() ; alert(str);});  
		 
		 // highlight a part of a <p> tag
		 divs[d].addEventListener('mouseup',function(){var str= document.getSelection() ;alert(str);
			//str=str.replace(str, 'x');
			//this.innerHTML =this.innerHTML.replace(str,'<b><background = yellow>'+str+'</b>');
			this.innerHTML =this.innerHTML.replace(str,'<span style="background-color: '+'yellow'+' ">'+str+'</span>');
			});	
	  }
	 