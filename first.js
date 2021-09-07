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

const undone = todo.filter(function (item){
    if (!item.completed){
        return 1 ;
    }
})


const undone_message = document.createElement('p')
undone_message.textContent = `You still have got ${undone.length} Todos left.` 
document.querySelector('body').appendChild(undone_message)

const message = document.createElement('p')
message.textContent = 'Which Are: ' 
document.querySelector('body').appendChild(message)

for (let  i = 0 ; i < undone.length ; i++){
    const undone_message = document.createElement('p')
    undone_message.textContent = undone[i].text  
    document.querySelector('body').appendChild(undone_message)
}