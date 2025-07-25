// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// https://jsonplaceholder.typicode.com/todos

// completed // false
// id // 1
// title // "delectus aut autem"
// userId // 1

// async function getData() {
//     const rawResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const responseJSON = await rawResponse.json();

//     const titles = responseJSON.map((elem) => `${elem.id}:${elem.title}</br>`)

//     console.log(responseJSON)
//     console.log(titles)

//     document.getElementById('main').innerHTML = titles;
// }

// getData();

// elements from DOM
const filterAllButton = document.getElementById('filterAll');
const filterActiveButton = document.getElementById('filterActive');
const filterDoneButton = document.getElementById('filterDone');
const tasksBlock = document.getElementById("tasks");
const addNewTaskButton = document.getElementById("addNewTask")

// local storage data
const allTasksData = ["task1", "task2", "task3"];

filterAllButton.addEventListener('click', () => {handleFilterAllButtonClick()})
filterActiveButton.addEventListener('click', () => {handleFilterActiveButtonClick()})
filterDoneButton.addEventListener('click', () => {handleFilterDoneButtonClick()})
addNewTaskButton.addEventListener('click', () => {handleAddNewTaskButtonClick()})

function renderTasks(tasks) {
    return tasks.map(task => `<p>${task}</p>`).join("")
}
function renderOnlyFirstTask(tasks) {
    return `<p>${tasks[0]}</p>`
}

function renderOnlyLastTask(tasks) {
    return `<p>${tasks[tasks.length-1]}</p>`
}

tasksBlock.innerHTML = renderTasks(allTasksData);

// all
function handleFilterAllButtonClick() {
    // filter array right way
    // add data to local storage
    tasksBlock.innerHTML = renderTasks(allTasksData);
} 
// for 1 one only
function handleFilterActiveButtonClick() {
    tasksBlock.innerHTML = renderOnlyFirstTask(allTasksData);
} 

// for the last one only
function handleFilterDoneButtonClick() {
    tasksBlock.innerHTML = renderOnlyLastTask(allTasksData);
} 

function handleAddNewTaskButtonClick() {
    allTasksData.push(`task${allTasksData.length + 1}`);
    tasksBlock.innerHTML = renderTasks(allTasksData);
}


// [].filter(taskData => taskData.isCompleted)
// [].filter(taskData => taskData.text.contains("input text"))

const task = {
    date: "",
    isCompleted: true,
    text: "my task"
} 

function makeTask(date, isCompleted, text) {
    return {
        date,
        isCompleted,
        text
    }
}


const newTask = makeTask(Date.now(), false, /**querySelector.getText.... */)

const completedTasks = [task, task].filter(taskData => taskData.isCompleted)