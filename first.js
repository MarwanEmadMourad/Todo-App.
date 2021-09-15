let todos = getSavedData()

// checking if we have data stored in our local storage we render it
if (todos !== []){
    render_todos(todos)
}
// debugger
// the later added todo to our list
const to_be_added = {
    id:'',
    text:'',
    completed:0
}

// taking the text input from the input field
document.querySelector('#input-todo').addEventListener('change',function(e){
    to_be_added.text = e.target.value 
    to_be_added.id = uuidv4()
})
 
// appending the input text to our todos list when pressing add button
document.querySelector('#add-todo').addEventListener('click',function(){
    // clearing the input text-box field
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
 
// removing all our todos from our screen and from our list and from our storage (No leaks)
document.querySelector('#remove-todos').addEventListener('click',function(){
    // clearing our div that contains all of our todos
    clear_div('all-content')
    // clearing our list array
    clear_array(todos)
    // clearing our LocalStorage
    localStorage.clear()
})
 


 