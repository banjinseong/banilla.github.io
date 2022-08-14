const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const input =toDoForm.querySelector("input");

let toDos = [];
const TODOS_KEY = "todos";

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function delTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos= toDos.filter((todo) => todo.id !== parseInt(li.id));
    console.log(toDos);
    saveTodos();
}

function paint(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="x";
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=newTodo.text;
    toDoList.appendChild(li);
    button.addEventListener("click",delTodo);
}

function enter(event){
    event.preventDefault();
    const newTodo =input.value;
    input.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paint(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit",enter);

const saveToDos=localStorage.getItem(TODOS_KEY);

if(saveToDos){
    const parseToDos = JSON.parse(saveToDos);
    toDos=parseToDos;
    parseToDos.forEach(paint);
}