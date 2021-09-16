const id = location.hash.substring(1)
const todos = getSavedData()

const wanted = todos.find((todo)=>{    
    return todo.id === id 
})
document.getElementById("edit-area").value = wanted.text 


document.getElementById("submit-edit").addEventListener('click',(e)=>{
    const edited_text = document.getElementById("edit-area").value     
    wanted.text = edited_text 
    localStorage.setItem('todos',JSON.stringify(todos))
    location.assign('/index.html')
})