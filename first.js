const todos = []
let text = ''

// taking the text input from the input field
document.querySelector('#input-todo').addEventListener('input',function(e){
    text = e.target.value 
})

// appending the input text to our todos list
document.querySelector('#add-todo').addEventListener('click',function(){
    document.querySelector('#input-todo').value = ''
    todos.push(text)
    // console.log(todos[todos.length-1])
    render_todos(todos)
})

// removing all our todos from our screen and from our list
document.querySelector('#remove-todos').addEventListener('click',function(){
    document.querySelector('#all-content').innerHTML = ''
    while(todos.length)
        todos.pop()
})

// rendering our todos in our div
const render_todos = function(todos){
        const added = document.createElement('p')
        added.textContent = todos[todos.length-1]
        document.querySelector('#all-content').appendChild(added)
}

