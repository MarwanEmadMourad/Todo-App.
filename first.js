const todos = ['Do Your bed.',
'Solve on leetcode',
'Complete your course',
'Be productive',
'Do your chores',
'Complete your quraan part']

let search_text = ''

// taking the text input from the input field
document.querySelector('#search-todo').addEventListener('input',function(e){
    search_text = e.target.value 
    render_todos(todos,search_text)
})

// rendering our todos in our div after filtering them
const render_todos = function(todos,search_text){
    // filtering todos    
    const filtered = todos.filter((todo)=>{
        return todo.toLowerCase().includes(search_text.toLowerCase())
    })

    // between each two renders clear your div
    document.getElementById('all-content').innerHTML = ''

    // rendering the filtered todos
    filtered.forEach(ftodo => {
        const added = document.createElement('p')
        added.textContent = ftodo
        document.querySelector('#all-content').appendChild(added)
    });
    
}

