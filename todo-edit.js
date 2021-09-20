// getting the right id for the coprresponding pressed edit todo
const id = location.hash.substring(1)

// retrieving our todo list from local storage
let todos = getSavedData()

// which one of our list you want to edit
const wanted = todos.find((todo)=>{    
    return todo.id === id 
})

const edit_area = document.getElementById("edit-area") 
// initially the text area will contain the original todo
edit_area.value = wanted.text 

// whenever you write anything in the text area update our list with it
edit_area.addEventListener('input',(e)=>{  
    // updating our todo-list with the edited text
    wanted.text =  edit_area.value 
})

// when pressing submit button go back to the home page
document.getElementById("submit-edit").addEventListener('click',(e)=>{
    // update the updated at property with the update time
    wanted.updated_at = moment().valueOf()
    // updating local storage after editing our list    
    localStorage.setItem('todos',JSON.stringify(todos)) 
    // go back to the home page
    location.assign('/index.html')
})

// if the local storage chaneged in any of the edit windows
// propagate to the rest windows
window.addEventListener('storage',(e)=>{
    if (e.key === 'todos'){
        todos = JSON.parse(e.newValue)
        const wanted = todos.find((todo)=>{    
            return todo.id === id 
        })
        edit_area.value = wanted.text   
    }  
})