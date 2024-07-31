

let taskForm = document.getElementById('taskForm')
let divContainer = document.getElementById('divContainer')
let tasks = []

function addTask(taskName, taskType) {

    let task = {
        name: taskName,
        task: taskType,
        isCompleted : false

    }

    tasks.push(task)
    console.table(tasks)

    showTasks(task)


}

function EditTask(div , i){
   div.classList.remove('alert-secondary')
   div.classList.add('alert-success')
   tasks[i].isCompleted = true
   console.table(tasks)
}
function removeTask(div , i){
    // div.classList.add('d-none')
    tasks.splice(i , 1)
    console.table(tasks)
    showTasks()
}

function showTasks() {
    divContainer.innerText = ""
    // divContainer.textContent = ""

    tasks.forEach((ele, i) => {

        let div = document.createElement('div');
        (ele.isCompleted) ? div.classList.add('alert', 'alert-success') : div.classList.add('alert', 'alert-secondary');
        
        let h2 = document.createElement('h2')
        h2.innerText = ele.name
        let p = document.createElement('p')
        p.innerText = ele.task
        let completedBtn = document.createElement('button')
        completedBtn.innerText = "completed Task"
        completedBtn.classList.add('btn', 'btn-success')
        let removeBtn = document.createElement('button')
        removeBtn.classList.add('btn', 'btn-danger')
        removeBtn.innerText = 'Remove Task'
        completedBtn.addEventListener('click', function () {
           EditTask(div , i)
        })
        removeBtn.addEventListener('click', () => {
            removeTask(div , i)
        })
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(completedBtn)
        div.appendChild(removeBtn)
    
    
        divContainer.appendChild(div)
    })







}



taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log(e.target[0].value)
    console.log(e.target.elements.taskName.value)
    console.log(e.target.elements.taskType.value)
    addTask(e.target.elements.taskName.value, e.target.elements.taskType.value)



})


let users = [{
    name : 'Nouran', 
    address:'Nasr city'
}]


// localStorage.setItem('userName' , 'Nouran')
localStorage.removeItem('userName')
localStorage.removeItem('userName')



localStorage.setItem('usersInfo' , JSON.stringify(users))

let usersLocalStorage = JSON.parse(localStorage.getItem('usersInfo'))

// usersLocalStorage.push()

console.log(usersLocalStorage)