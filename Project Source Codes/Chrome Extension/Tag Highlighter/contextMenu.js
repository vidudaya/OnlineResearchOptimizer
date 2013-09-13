 

// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

function speak_selected(info, tab){
    
	var str= info.selectionText; 
	var speak_url = 'http://translate.google.com/translate_tts?tl=en&q='+str+'&#8221';
	//chrome.tabs.create({ url: speak_url });
	try{
		chrome.windows.create({ url: speak_url,width:150, height: 200  });
	}catch(ex){
		alert("erorr");
	}
	//alert(ssss);
}

function color(info, tab){
    alert("color  a");
	highlight('yellow');	
}

function makeEditableAndHighlight(colour) {
    sel = window.getSelection();
	alert("sel is "+sel);
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
	//alert("hilightcolor");
    var range, sel;
    if (window.getSelection) {
		//alert("one ok");
        // IE9 and non-IE
        try {
            if (!document.execCommand("BackColor", false, colour)) {
				//alert("in two");
                makeEditableAndHighlight(colour);
				//alert("two ok");
            }else{
				//alert("two not ok still call the function");
			}
        } catch (ex) {
            makeEditableAndHighlight(colour);
			alert("exception");
        }
		//alert("ddd");
    }  else if (document.selection && document.selection.createRange) {
        // IE <= 8 case
        range = document.selection.createRange();
        range.execCommand("BackColor", false, colour);
    } 
}



////////////////////////////////////////////////////////////////////
/*var contexts = ["page","selection","link","editable","image","video",
                "audio"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Online Research Optimizer";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick});
  
}*/
// Create a parent item and two children.


// creates the context menu item to highlight
var child1 = chrome.contextMenus.create(
  {"title": "Pronounce it" ,"contexts":["selection"],"onclick": speak_selected});

 
 
