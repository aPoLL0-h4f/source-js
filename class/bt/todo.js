window.addEventListener("load", function () {
    const form = document.querySelector(".todo-form");
    const todoList = document.querySelector(".todo-list");
    let todos = localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];
    console.log(localStorage);

    if (Array.isArray(todos) && todos.length > 0){
      todos.forEach((item) => createTodoItem(item));
    }

    function createTodoItem(title) {
      const template = `<div class="todo-item">
      <span class="todo-text">${title}</span>
      <i class="bx bx-trash todo-remove"></i>
    </div>`;
      todoList.insertAdjacentHTML("beforeend", template);
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const todoVal = this.elements["todo"].value;
      console.log(todoVal);
      if (!todoVal) return;
      createTodoItem(todoVal);
      todos.push(todoVal);
      if(localStorage){
          localStorage.setItem("todoList", JSON.stringify(todos));
      }
      this.elements["todo"].value = "";
    });

    todoList.addEventListener("click",function(e){
        if(e.target.matches(".todo-remove")){
            // remove todo in DOM
            const todo = e.target.parentNode;
            todo.parentNode.removeChild(todo);
            // remove todo in localStorage
            const todoText = e.target.previousElementSibling.textContent;
            const index = todos.findIndex((item) => item === todoText);
            todos.splice(index,1);
            localStorage.setItem("todoList", JSON.stringify(todos));
          }
    });
});
