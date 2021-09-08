const todos = []

document.querySelector('#input-todo').addEventListener('change',function(e){
    const text = e.target.value 
    todos.push(text)
    console.log(todos[todos.length-1])
})
document.querySelector('#add-todo').addEventListener('click',function(){
    todos.push(text)
})

