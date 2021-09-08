const todo = [{
    text:'Do Your Prayers',
    completed:0
},{
    text:'Solve On leetcode',
    completed:0
},{
    text:'Eat Breakfast',
    completed:1
},{
    text:'Visit the Doctor',
    completed:0
},{
    text:'Finish your project',
    completed:1
}]


document.querySelector('#show').addEventListener('click',function(e){
    const after_that = document.querySelector('#up') ;
    for (let i = 0 ; i<todo.length ;i++){
        let child = document.createElement('p')
        child.textContent = todo[i].text ;
        after_that.appendChild(child)
    }
})

document.querySelector('#Dont-show').addEventListener('click',function(){
    const all_todos = document.querySelectorAll('p')
    all_todos.forEach(todo => {
        todo.remove()
    });
})