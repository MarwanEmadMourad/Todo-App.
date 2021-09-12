// function returns a new line dom element
const create_new_line =  ()=>{
    return document.createElement('br')
}

// create a checkbox
const create_check_box = ()=>{
    const chk_bx = document.createElement('input')
    chk_bx.setAttribute('type','checkbox')
    return chk_bx 
}

// create button function
const create_button = (button_txt) =>{
    const button = document.createElement('button')
    button.textContent = button_txt
    return button
}

// create todo node consists of a:
// check box , todo text , remove button
// the three elements will belong to a separate div element
const create_todo_node = (todo_txt) =>{
    // our new div that will be attached to our root div
    const new_div = document.createElement('div') ;
    // 1-) our check box
    const chk_bx = create_check_box()
    // 2-) our todo text
    const todo = document.createElement('span')
    todo.textContent = todo_txt 
    todo.setAttribute("style", "color: red;")
    // 3-) our remove button
    const button = create_button('remove')

    // add event listner to our created checkbox
    chk_bx.addEventListener('change',(e)=>{
        // if you checked the box change the color to green otherwise to red
        if(e.target.checked){
            todo.setAttribute("style", "color: green;")
        }else
            todo.setAttribute("style", "color: red;")
    })

    // adding an event listner to the remove button
    // when pressing removce we delete the todo from our todo-list
    //  and our local storage and from the DOM
    button.addEventListener('click',(e)=> {
        // removing div from the DOM
        new_div.remove()
        // removing that element from our list
        const removed_text = todo.textContent 
        const index = todos.findIndex((item)=>{
            return item.text === removed_text
        })
        todos.splice(index,1)
        // clearing the local storage and updating it with our new todo-list
        // after removing the wanted todo
        localStorage.clear()
        localStorage.setItem('todos',JSON.stringify(todos))
    })

    // eventually appending all of our 3 created elements to our div
    new_div.appendChild(chk_bx)
    new_div.appendChild(todo)
    new_div.appendChild(button)
    
    return new_div
}

// function takes a div id and clear all of it's content
const clear_div = (id) =>{
    document.querySelector(`#${id}`).innerHTML = ''
}

// function that clears an array
const clear_array = (array) =>{
    while(array.length){
        array.pop()
    }
}

const render_todos = (todos)=>{
    // clearing our div with each time to render the whole list again
    clear_div('all-content')

    // rendering our todo list 
    for (let i = 0 ; i < todos.length ; i++){
        // appending our todo-div to our root-div
        document.querySelector('#all-content').appendChild(create_todo_node(todos[i].text))
    }
}

const getSavedData = ()=>{
    const string_todos = localStorage.getItem('todos')  
    if (string_todos !== null){
        return  JSON.parse(string_todos)
    }else{
        return []
    }
}


// //create new label with a certain text and a certain attribute
// const create_new_label = (text ='',key_attribute ='',value_attribute='') =>{
//     const label =  document.createElement('label')
//     if (text.length){
//         label.textContent = text ;
//     }
//     if (key_attribute.length){
//         label.setAttribute(key_attribute,value_attribute)
//     }
//     return label 
// }