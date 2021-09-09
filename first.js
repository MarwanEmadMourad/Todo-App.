const todos = []

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
    document.querySelector('#input-todo').value = ''
    if (to_be_added.text.length)
        {
            // deep copying in order to validate that the input is not empty
            todos.push(Object.assign({}, to_be_added))
            to_be_added.text=''
            render_todos(todos)
        }
})
 
// removing all our todos from our screen and from our list
document.querySelector('#remove-todos').addEventListener('click',function(){
    document.querySelector('#all-content').innerHTML = ''
    while(todos.length)
        todos.pop()
})
 

const render_todos = (todos)=>{
    // craeting a lable
    const curr_label = document.createElement('label')
    // setting label text to our added todo
    curr_label.textContent = todos[todos.length-1].text
    // giving it a color red means not completed
    curr_label.setAttribute("style", "color: red;")

    // creating check box with each label 
    const chk_bx =  document.createElement('input')
    chk_bx.setAttribute('type','checkbox')
    chk_bx.setAttribute('class','chbx')
    // add event listner to our created checkbox
    chk_bx.addEventListener('change',(e)=>{
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
    // printing new line
    const new_line = document.createElement('br')
    document.querySelector('#all-content').appendChild(new_line)
}
