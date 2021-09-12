let todos = []

const render_todos = (todos)=>{
    // clearing our div with each time to render the whole list again
    document.querySelector('#all-content').innerHTML = '';

    // rendering pur list loop
    for (let i = 0 ; i < todos.length ; i++){
        // craeting a lable
        const curr_label = document.createElement('label')
        // setting label text to our added todo
        curr_label.textContent = todos[i].text
        // giving it a color red means not completed
        curr_label.setAttribute("style", "color: red;")

        // creating check box with each label 
        const chk_bx =  document.createElement('input')
        chk_bx.setAttribute('type','checkbox')
        // chk_bx.setAttribute('class','chbx')
        // add event listner to our created checkbox
        chk_bx.addEventListener('change',(e)=>{
            // if you checked the box change the color to green
            if(e.target.checked){
                e.target.parentNode.setAttribute("style", "color: green;")
            }
            else
                e.target.parentNode.setAttribute("style", "color: red;")
        })
        // appending our chkbox to our label(todo)
        curr_label.appendChild(chk_bx)
        // appending our label to our div
        document.querySelector('#all-content').appendChild(curr_label)
        // printing new line with each added todo
        const new_line = document.createElement('br')
        document.querySelector('#all-content').appendChild(new_line)
    }
}


// checking if we have data stored in our local storage we render it
const string_todos = localStorage.getItem('todos')  
if (string_todos !== null){
    todos = JSON.parse(string_todos)
    console.log(todos)
    render_todos(todos)
}

// the later added todo to our list
const to_be_added = {
    text:'',
    completed:0
}

// taking the text input from the input field
document.querySelector('#input-todo').addEventListener('change',function(e){
    to_be_added.text = e.target.value 
})
 
// appending the input text to our todos list
document.querySelector('#add-todo').addEventListener('click',function(){
    // clearing the input field
    document.querySelector('#input-todo').value = ''
    // adding only non empty todos
    if (to_be_added.text.length)
        {
            // deep copying in our todo list
            todos.push(Object.assign({}, to_be_added))
            // adding our updated todo list in our local storage
            localStorage.setItem('todos',JSON.stringify(todos))
            to_be_added.text=''
            render_todos(todos)
        }
})
 
// removing all our todos from our screen and from our list
document.querySelector('#remove-todos').addEventListener('click',function(){
    document.querySelector('#all-content').innerHTML = ''
    while(todos.length)
        todos.pop()
    localStorage.clear()
})
 


 