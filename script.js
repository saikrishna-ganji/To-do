
//creatting the todo action when clicked on CREATE
function createNewElement(){         
    var li=document.createElement('li');     //creating list 
    var theInputValue=document.getElementById("the-input").value;  //taking value from input
    var textNode=document.createTextNode(theInputValue); 
    li.appendChild(textNode);    //adding textNode to list 

    if(theInputValue ===''){           //alert message if i/p is empty
        alert("list cant be empty")     
    }else{
        document.getElementById("the-ul").appendChild(li); //return to ul, to create list
    }
    document.getElementById("the-input").value=""; //making the input to null to create Todo
    
    /* creating the X mark to list*/
    var theSpanTag=document.createElement("SPAN");
    var text=document.createTextNode("\u00D7");  // unicode for X
    theSpanTag.className="close";    
    theSpanTag.appendChild(text);     //link the text
    li.appendChild(theSpanTag);     //link the list and text

    // remove list when clicked on X
    for (i = 0; i<closeButton.length; i++){
        closeButton[i].onclick=function(){     //creating event i.e"click" and adding function
            var parentDiv=this.parentElement;  //UL is parent element
            parentDiv.style.display="none";  // clears the list

        }
    }
    // edit an element in the same list
  var edit = document.createElement("SPAN");
  var eText = document.createTextNode("\u270E");
  var editt = document.getElementsByClassName("edit");
  var i;
  
  //edit an element in the same list
  edit.className = "edit";
  edit.appendChild(eText);
  li.appendChild(edit);
  


  for (i = 0; i < editt.length; i++) {
    editt[i].onclick = function() {
      var liElement = this.parentElement;
      var p = prompt("Edit your entry", inputValue);
      
      liElement.getElementsByClassName("title")[0].innerText = p;
    }
  }  

}

//creating class button
var closeButton=document.getElementsByClassName("close");  //declaring function to "close"

//creating check mark
var ulList=document.querySelector('ul');  //returns the class or id element given at style sheet
ulList.addEventListener('click',function(event){   //create event i.e "click" & create function to event
    if(event.target.tagName === 'LI'){        //if event i.e "click" is equal to list item
        event.target.classList.toggle('checked');  //take event i.e"click" to the class id "checked"
    }
},false);   //default condition "false".... if "true" ,it means the condition is already checked



