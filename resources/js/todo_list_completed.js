let tasks = [];

const list = document.querySelector("ul");

function addItem(){
    //let's read the task from the HTML
    let newTask = document.querySelector("#taskItem").value;
    console.log(newTask);

    document.querySelector("#taskItem").value = "";

    //add it to the task array
    tasks.push(newTask);
    console.log(tasks);

    //create list item to add to the UI
    let list_item = document.createElement("li");

    //adding bootstrap classes to the li to give it an upgraded look
    list_item.classList.add("list-group-item");

    //create a span for each task row
    let spanRow = document.createElement("span");
    spanRow.classList.add("mark-done");

    // creating a checkbox input element
    let check = document.createElement("input");
    check.type="checkbox";

    //adding bootstrap classes to the checkbox to give it an upgraded look
    check.classList.add("form-check-input","me-5");

    //create a text element for the text of the task
    var taskTextNode = document.createTextNode(newTask);
    
    //append the checkbox and text to the span
    spanRow.appendChild(check);
    spanRow.appendChild(taskTextNode);
    check.addEventListener('click', toggleStatus);

    //create a button to delete the task
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.classList.add("btn", "btn-danger", "float-end");

    //attach event listener to this button to remove the item from the list
    deleteBtn.addEventListener('click', deleteTask);


    //append all the items to the list item
    list_item.appendChild(spanRow);
    list_item.appendChild(deleteBtn);

    //append list item to ul
    list.appendChild(list_item);

}

//changes appearance of task based on completeness
toggleStatus = (ev) => {
    if(ev.target.checked){
        ev.target.parentElement.classList.add('done');
    }
    else{
        ev.target.parentElement.classList.remove('done');
    }
}

//deletes task from the list
deleteTask = (ev) =>{
    document.querySelector("ul").removeChild(ev.target.parentElement);
}

//fun activity - try to add an edit button to edit tasks that have already been added


