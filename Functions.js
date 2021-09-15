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

// remove a to-do from our list
const remove_todo_node = (id)=>{
    // removing that element from our list
    const index = todos.findIndex((item)=>{
        return item.id === id
    })
    if (index > -1){
        todos.splice(index,1)
    }
    render_todos(todos)
}

// create todo node consists of a:
// check box , todo text , remove button
// the three elements will belong to a separate div element
const create_todo_node = (todo) =>{
    // our new div that will be attached to our root div
    const new_div = document.createElement('div') ;
    // 1-) our check box
    const chk_bx = create_check_box()
    // 2-) our todo text
    const paragrapgh = document.createElement('span')
    paragrapgh.textContent = todo.text 
    paragrapgh.setAttribute("style", "color: red;")
    // 3-) our remove button
    const button = create_button('remove')

    // add event listner to our created checkbox
    chk_bx.addEventListener('change',(e)=>{
        // if you checked the box change the color to green otherwise to red
        if(e.target.checked){
            paragrapgh.setAttribute("style", "color: green;")
        }else
            paragrapgh.setAttribute("style", "color: red;")
    })

    // adding an event listner to the remove button
    // when pressing removce we delete the todo from our todo-list
    //  and our local storage and from the DOM
    button.addEventListener('click',(e)=> {
        remove_todo_node(todo.id)
        // clearing the local storage and updating it with our new todo-list
        // after removing the wanted todo
        localStorage.setItem('todos',JSON.stringify(todos))
    })

    // eventually appending all of our 3 created elements to our div
    new_div.appendChild(chk_bx)
    new_div.appendChild(paragrapgh)
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
        document.querySelector('#all-content').appendChild(create_todo_node(todos[i]))
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