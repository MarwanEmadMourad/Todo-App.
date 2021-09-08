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

document.querySelector('button').addEventListener('click',(e)=>{
    e.target.textContent = 'You Clicked Me !!'
})