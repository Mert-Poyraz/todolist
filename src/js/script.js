//! SELECTOR //
const todoInput = document.querySelector(".todo-input");
const todoAddBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");

//Alerts!!//
const alertSuccess = document.querySelector(".alert-success");
const alertWarning = document.querySelector(".alert-warning");

//events
document.addEventListener("DOMContentLoaded" , function(){
  getTodos();
})
todoAddBtn.addEventListener("click", addTodo);  
todoList.addEventListener("click", marks);
todoFilter.addEventListener("click", filterTodo);

//function
function addTodo(event)
{
   event.preventDefault();

   //Alerts
   
   const isEmpty = str => !str.trim().length;
   
   if(isEmpty(todoInput.value)) {
   alertWarning.style.display = "flex";
   setTimeout(() => {
    alertWarning.style.display = "none";
   }, 3000);
   todoInput.value = "";
   trashBtn.value = "";
   completedBtn.value = ""; 
   } else {
    alertSuccess.style.display = "flex";
   setTimeout(() => {
    alertSuccess.style.display = "none";
   }, 3000);
  saveLocalTodos(todoInput.value);

    //new div too
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo", "h-20", "w-48");
 
 
    //tamamlandı icon 
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = "<i class='pointer-events-none fa-solid fa-check fa-2xl'></i>";
    completedBtn.classList.add("completedBtn", "relative","left-258","top-5");
    todoDiv.appendChild(completedBtn); 
 
    //delete trash btn
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = "<i  class=' pointer-events-none fa-solid fa-trash fa-xl'></i>";
    trashBtn.classList.add( "deleteBtn",  "relative", "left-300", "top-5");
    todoDiv.appendChild(trashBtn); 
 
    //todolist li 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; 
    newTodo.classList.add("todo-item","relative", "grid", "items-center", "justify-center",  "text-justify", "text-2xl", "leading-none", "w-256",  "h-25",  "bg-white/10", "shadow-xl");
    todoDiv.appendChild(newTodo); 
 
     //append to list 
     todoList.appendChild(todoDiv);
     todoInput.value = "";
   }
}

function marks(event){
  const item = event.target;

//delete btn


if(item.classList[0] === "deleteBtn"){
  const todo = item.parentElement;
  removeLocalStorage(todo)
  todo.addEventListener("DOMActivate", function(){
    todo.remove();
  })
}

//completed  btn 
if(item.classList[0]=== "completedBtn"){
  const todo = item.parentElement;
  todo.classList.toggle("line-through");
  
  
}  
}

 //filters
 function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (item) {
      switch (e.target.value) {
          case "all":
            item.style.display = "inline";
              break;
          case "completed":
              if(item.classList.contains("line-through")) {
                  item.style.display = "inline";
              } else {
                  item.style.display = "none";
              }
              break;
          case "uncompleted":
              if(!item.classList.contains("line-through")) {
                  item.style.display = "inline";
              } else{
                  item.style.display = "none";
              }
              break;
      }
  })
}
      
// localstorage null ise  boş array ata 
function saveLocalTodos(todo){
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos)) 

}

function getTodos(){
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    //new div too
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo", "h-20", "w-48");
    //tamamlandı icon 
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = "<i class='pointer-events-none fa-solid fa-check fa-2xl'></i>";
    completedBtn.classList.add("completedBtn", "relative","left-258","top-5");
    todoDiv.appendChild(completedBtn); 
    //delete trash btn
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = "<i  class=' pointer-events-none fa-solid fa-trash fa-xl'></i>";
    trashBtn.classList.add( "deleteBtn",  "relative", "left-300", "top-5");
    todoDiv.appendChild(trashBtn); 
    //todolist li 
    const newTodo = document.createElement("li");
    newTodo.innerText = todo; 
    newTodo.classList.add("todo-item","relative", "grid", "items-center", "justify-center",  "text-justify", "text-2xl", "leading-none", "w-256",  "h-25",  "bg-white/10", "shadow-xl");
    todoDiv.appendChild(newTodo); 
     //append to list 
     todoList.appendChild(todoDiv);
    
  })
}

    
//remove localStorage
function removeLocalStorage(todo){
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[1].innerText; 
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}


 