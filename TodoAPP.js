// ================================
// GET THINGS FROM THE HTML
// ================================

// Get the form
const form = document.getElementById("todo-form");

// Get the text input
const input = document.getElementById("todo-input");

// Get the list where todos will appear
const list = document.getElementById("todo-list");


// ================================
// LOAD SAVED TODOS
// ================================

// Try to get saved todos from the browser
// localStorage remembers data even after refresh
//
// JSON.parse changes text back into an array
//
// If there are no saved todos,
// use an empty array []
let todos = JSON.parse(localStorage.getItem("todos")) || [];


// ================================
// SHOW TODOS ON SCREEN
// ================================

// Run the function once when the page loads
renderTodos();


// ================================
// WHEN USER ADDS A TODO
// ================================

// Listen for form submit
form.addEventListener("submit", function (e) {

  // Stop page refresh
  e.preventDefault();

  // Get text from input
  //
  // trim() removes empty spaces
  const todoText = input.value.trim();

  // If input is empty, stop here
  if (todoText === "") return;

  // Create a todo object
  const todo = {

    // Unique id using current time
    id: Date.now(),

    // The text the user typed
    text: todoText,

    // Todo starts as NOT completed
    completed: false
  };

  // Add todo into array
  todos.push(todo);

  // Save todos into localStorage
  saveTodos();

  // Draw todos again
  renderTodos();

  // Clear input box
  input.value = "";
});


// ================================
// FUNCTION: SHOW TODOS
// ================================

function renderTodos() {

  // Clear old list first
  list.innerHTML = "";

  // Go through every todo
  todos.forEach(function (todo) {

    // Create <li>
    const li = document.createElement("li");

    // If completed is true
    // add completed CSS class
    if (todo.completed) {
      li.classList.add("completed");
    }

    // ================================
    // CREATE TODO TEXT
    // ================================

    // Create <span>
    const span = document.createElement("span");

    // Put todo text inside span
    span.textContent = todo.text;


    // ================================
    // CLICK TODO = COMPLETE TODO
    // ================================

    span.addEventListener("click", function () {

      // Change true to false
      // or false to true
      todo.completed = !todo.completed;

      // Save changes
      saveTodos();

      // Draw again
      renderTodos();
    });


    // ================================
    // CREATE DELETE BUTTON
    // ================================

    const deleteBtn = document.createElement("button");

    // Button text
    deleteBtn.textContent = "Delete";


    // ================================
    // DELETE TODO WHEN CLICKED
    // ================================

    deleteBtn.addEventListener("click", function () {

      // Keep all todos
      // EXCEPT the clicked one
      todos = todos.filter(function (t) {

        // Return todos with different id
        return t.id !== todo.id;
      });

      // Save updated todos
      saveTodos();

      // Draw updated todos
      renderTodos();
    });


    // ================================
    // PUT THINGS INSIDE <li>
    // ================================

    // Add text
    li.appendChild(span);

    // Add delete button
    li.appendChild(deleteBtn);

    // Add li into ul
    list.appendChild(li);
  });
}


// ================================
// SAVE TODOS
// ================================

function saveTodos() {

  // Change array into text
  const todosString = JSON.stringify(todos);

  // Save text in browser
  localStorage.setItem("todos", todosString);
}