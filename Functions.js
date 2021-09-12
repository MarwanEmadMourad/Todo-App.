// function returns a new line dom element
const create_new_line =  ()=>{
    return document.createElement('br')
}

//create new label with a certain text and a certain attribute
const create_new_label = (text ='',key_attribute ='',value_attribute='') =>{
    const label =  document.createElement('label')
    if (text.length){
        label.textContent = text ;
    }
    if (key_attribute.length){
        label.setAttribute(key_attribute,value_attribute)
    }
    return label 
}

// create a checkbox
const create_check_box = ()=>{
    const chk_bx = document.createElement('input')
    chk_bx.setAttribute('type','checkbox')
    return chk_bx 
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

        // craeting a lable with our todo text and with red color attribute
        const curr_label = create_new_label(todos[i].text,"style", "color: red;")
        
        // creating check box with each label 
        const chk_bx =  create_check_box()

        // add event listner to our created checkbox
        chk_bx.addEventListener('change',(e)=>{
            // if you checked the box change the color to green
            if(e.target.checked){
                e.target.parentNode.setAttribute("style", "color: green;")
            }else
                e.target.parentNode.setAttribute("style", "color: red;")
        })
        // appending our chkbox to our label (todo-text)
        curr_label.appendChild(chk_bx)

        // appending our label to our div
        document.querySelector('#all-content').appendChild(curr_label)

        // printing new line with each added todo
        document.querySelector('#all-content').appendChild(create_new_line())
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

