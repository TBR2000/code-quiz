

function renderScores() {
      // Clears highscore element and update highscoreSpan
    highScoreList.innerHTML = "";
    highScoreSpan.innerHTML = highScores.length;
  
    // Render a new li each pass
    for (var i = 0; i < highScores.length; i++) {
      var todo = todos[i];
  
      var li = document.createElement("li");
      li.innerHTML = highScores;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.innerHTML = "Clear High Scores";
  
      li.appendChild(button);
      highScoreList.appendChild(ul);
    }
  }