// Function to add a new todo

function addTodo() {
    let todoInput = document.getElementById("todoInput");
    let todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a todo!");
        return;
    }

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));

    displayTodos();
    todoInput.value = "";
}

// Function to display todos
function displayTodos() {
    let todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.forEach(function (todo, index) {
        let li = document.createElement("li");
        li.textContent = todo;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            deleteTodo(index);
        };
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Function to delete a todo
function deleteTodo(index) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
}

document.addEventListener('DOMContentLoaded',  () => {

    document.querySelector('button').onclick = addTodo;
});

// Initial display of todos
document.addEventListener('DOMContentLoaded',  () => {

    displayTodos();
});

