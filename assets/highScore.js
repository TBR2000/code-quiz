// The following function renders items in a todo list as <li> elements
function renderScores() {
    // Clear todoList element and update todoCountSpan
    highScoreList.innerHTML = "";
    todoCountSpan.textContent = highScores.length;
  
    // Render a new li for each todo
    for (var i = 0; i < highScores.length; i++) {
      var todo = todos[i];
  
      var li = document.createElement("li");
      li.textContent = highScores;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Complete ✔️";
  
      li.appendChild(button);
      todoList.appendChild(li);
    }
  }