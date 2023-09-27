//create a tasks array. You can use this to persist the list in local storage.

// get the ul element handle. use document.querySelector

function addItem(){
    //let's read the task from the HTML and let's check if we read that value correctly.

    //now let's also clear the input textbox so we can accept new tasks

    //create list item to add to the UI

    //adding bootstrap classes to the li to give it an upgraded look

    //create a span for each task row

    // creating a checkbox input element. Set type attribute to be "checkbox"

    //adding bootstrap classes to the checkbox to give it an upgraded look. "form-check-input","me-5". element.classList.add()

    //add event listener for click event to checkbox
    
    //create a text element for the text of the task. document.createTextNode()
    
    //append the checkbox and text to the span

    //create a button to delete the task. set the innerHTML to be "X"

    //adding bootstrap classes to the delete button to give it an upgraded look. "btn", "btn-danger", "float-end"

    //attach event listener to the click event of this button to remove the item from the list

    //append all span and delete button to the list item
    
    //append list item to ul

}

//changes appearance of task based on completeness. checkbox checked or not. ev.target

//deletes task from the list. ev.target.parentElement. Get ul element. use removeChild().

//fun activity - try to add an edit button to edit tasks that have already been added


