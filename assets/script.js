// Questions with Choices and Answer
var questionOne = [{
    title: "JavaScript is generally used as?",
    choices: [
        "a client-side scripting language", 
        "a server-side scripting language", 
        "an application development language", 
        "an embedded language for mobile devices",
    ],
    answer: ["a client-side scripting language"]
}]
var questionTwo = [{
    title: "JavaScript is a?",
    choices: [
        "strongly typed language", 
        "a loosely typed language", 
        "a variable type language", 
        "none of the mentioned",
    ],
    answer: ["a loosely typed language"]
}]
var questionThree = [{
    title: "Which JavaScript method is used to write content into a web page as it is loading?",
    choices: [
        "printf()", 
        "echo()", 
        "document.write()", 
        "document.innerHTML",
    ],
    answer: ["document.write()"]
}]
var questionFour = [{
    title: "Which property of a page element (eg a div) is used by JavaScript to alter the content of a page after it has loaded?",
    choices: [
        "content", 
        "text", 
        "innerHTML", 
        "firstChild",
    ],
    answer: ["innerHTML"]
}]
var questionFive = [{
    title: "Which of the following html elements is not a block level element by default? ",
    choices: [
        "h1", 
        "div", 
        "p", 
        "img",
    ],
    answer: ["img"]
}]
var questionSix = [{
    title: "Which attribute of a page element allows CSS and JavaScript to deal with several elements in the same way?",
    choices: [
        "id", 
        "name", 
        "class", 
        "value",
    ],
    answer: ["class"]
}]
var questionSeven = [{
    title: "The JavaScript method used to obtain a reference to an element that has its id attribute set is?",
    choices: [
        "getElementById()", 
        "document.element.getId()", 
        "document.getElementById()", 
        "getElementsByTagName()",
    ],
    answer: ["document.getElementById()"]
}]
var questionEight = [{
    title: "Which tag is used to display text in title bar of a web document?",
    choices: [
        "Body tag", 
        "Meta tag", 
        "Title tag", 
        "Comment tag",
    ],
    answer: ["Title tag"]
}]
var questionNine = [{
    title: "What is the name of the location address of the hypertext documents?",
    choices: [
        "Uniform Resource Locator", 
        "Web server", 
        "File", 
        "Web address",
    ],
    answer: ["Uniform Resource Locator"]
}]
var questionTen = [{
    title: "Which of the following selector selects an element if it???s the only child of its parent?",
    choices: [
        ":root", 
        ":nth-oftype(n)", 
        ":only-child", 
        "none of the mentioned",
    ],
    answer: [":only-child"]
}]
var questionEleven = [{
    title: "Which of the following selector selects an element that has no children?",
    choices: [
        ":empty", 
        ":nochild", 
        ":inheritance", 
        ":no-child",
    ],
    answer: [":empty"]
}]

//Start Screen
var viewHs = document.createElement ("a");
var timer = 75;
var secondsLeft = document.createElement("h3")
var startScreen = document.createElement("article");
var head = document.createElement("h1");
var instruct = document.createElement("p");
var startButton = document.createElement("button");
viewHs.innerHTML = "View Highscores";
head.innerHTML = "Coding Quiz Challenge";
instruct.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalise your time/score by 10 seconds.";
startButton.innerHTML = "Start Quiz";
secondsLeft.innerHTML = "Time: " + timer
document.body.appendChild(viewHs);
document.body.appendChild(secondsLeft)
document.body.appendChild(startScreen);
startScreen.appendChild(head);
startScreen.appendChild(instruct);
startScreen.appendChild(startButton);

//Styling of Start Screen
viewHs.setAttribute('href','highscore.html');
viewHs.setAttribute('id','viewHs');
viewHs.setAttribute('style', 'font-weight:bold; text-decoration:none; color:#008CBA; text-align:left; width:fit-content; margin:18.720px; font-size:20px; display:inline-block; text-align:left; width:fit-content; position: absolute; left:1%')
startScreen.setAttribute('style', 'width:30%; display:flex; flex-wrap:wrap; position: absolute; top: 30%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%)');
secondsLeft.setAttribute('id','secondsLeft')
secondsLeft.setAttribute('style', 'display:inline-block; text-align:right; width:fit-content; position: absolute; right:1%')
head.setAttribute('style','flex-basis:100%; text-align:center; margin-bottom:0px');
instruct.setAttribute('style','text-align:center');
startButton.setAttribute('style', 'margin: 0; position: absolute; top: 120%; left: 50%; transform: translate(-50%, -50%);background-color: #008CBA; color:white; border-radius: 8px;');

//Starts the game
startButton.addEventListener('click', function(){
    gameTime();
    game();
});

// All questions into one variable
var questionVar = [questionEleven,questionTen,questionNine,questionEight,questionSeven,
    questionSix,questionFive,questionFour,questionThree,questionTwo,questionOne];


//Number of game Repeats
var count = 5

//Game Function
function game(){
    
     count--;

    // Removes start screen
    startScreen.setAttribute('style','display:none');      
  
    // Random selects question    
    questionToUse = questionVar[Math.floor(Math.random() * questionVar.length)];

   //Randomise Choice array (Fisher-Yates Shuffle)
    choiceArray = questionToUse[0].choices

    function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {  
    
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;  
      
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
    shuffle(choiceArray);
    randomChoiceArray = choiceArray
    
    
    // Remove Selection from questionVar array
    const index = questionVar.indexOf(questionToUse);
    if (index > -1) { 
    questionVar.splice(index, 1) 
    };

    //Injects question to html
    var question = document.createElement("ul");
    question.innerHTML = questionToUse[0].title;
    document.body.appendChild(question);

    //Injects Choice One into html
    var choiceOne = document.createElement("li");
    var btnOne = document.createElement('button')
    btnOne.innerHTML = "A: " + randomChoiceArray[0];
    question.appendChild(choiceOne);
    choiceOne.appendChild(btnOne);


    //Injects Choice Two into html
    var choiceTwo = document.createElement('li');
    var btnTwo = document.createElement('button');
    btnTwo.innerHTML = "B: " + randomChoiceArray[1];
    question.appendChild(choiceTwo);
    choiceTwo.appendChild(btnTwo);

    //Injects Choice Three into html
    var choiceThree = document.createElement("li");
    var btnThree = document.createElement('button');
    btnThree.innerHTML = "C: " + randomChoiceArray[2];
    question.appendChild(choiceThree);
    choiceThree.appendChild(btnThree);

    //Injects Choice Four into html
    var choiceFour = document.createElement("li");
    var btnFour = document.createElement('button');
    btnFour.innerHTML ="D: " + randomChoiceArray[3];
    question.appendChild(choiceFour);
    choiceFour.appendChild(btnFour);

    //Styling of Quiz
    question.setAttribute('id', 'question')
    question.setAttribute('style','border-style: dotted; border-color:#008CBA; border-radius:8px; text-align: left; font-weight:1000; font-size:20px; width:fit-content; color:black; content-align:left; width:30%; position: absolute; top: 30%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%');
    choiceOne.setAttribute('style', 'text-align:left; list-style: none; width:fit-content; border:10px; padding-left:5px;');
    choiceTwo.setAttribute('style', 'text-align:left; list-style: none; width:fit-content; border:10px; padding-left:5px;');
    choiceThree.setAttribute('style', 'text-align:left; list-style: none; width:fit-content; border:10px; padding-left:5px;');
    choiceFour.setAttribute('style', 'text-align:left; list-style: none; width:fit-content; border:10px; padding-left:5px; margin-bottom: 5px;');
    btnOne.setAttribute("id", "btnOne");
    btnTwo.setAttribute( "id", "btnTwo");
    btnThree.setAttribute( "id", "btnThree");
    btnFour.setAttribute("id", "btnFour");
    btnOne.setAttribute('style', 'background: #008CBA; color:white; border-radius: 8px;');
    btnTwo.setAttribute('style', 'background: #008CBA; color:white; border-radius: 8px;');
    btnThree.setAttribute('style', 'background: #008CBA; color:white; border-radius: 8px;');
    btnFour.setAttribute('style', 'background-color: #008CBA; color:white; border-radius: 8px;');

    //Listens to and processes answers
    var one = document.querySelector("#btnOne");
    var two = document.querySelector("#btnTwo");
    var three = document.querySelector("#btnThree");
    var four = document.querySelector("#btnFour");
    
    one.addEventListener("click", function() {
        if (randomChoiceArray[0] == questionToUse[0].answer[0]) {correct();}
        else {incorrect();}
    });
    two.addEventListener("click", function() {
        if (randomChoiceArray[1] == questionToUse[0].answer[0]) {correct();}
        else {incorrect();}
    });
    three.addEventListener("click", function() {
        if (randomChoiceArray[2] == questionToUse[0].answer[0]) {correct();}
        else {incorrect();}
    });

    four.addEventListener("click", function() {
        if (randomChoiceArray[3] == questionToUse[0].answer[0]) {correct();}
        else {incorrect();}
    });

    if (count <= 0) {endGame();}
    else if (timer <= 0){endGame();}
    
};

//Repeats game  
function correct(){
    window.question.remove()
    {game();}
};

//Incorrect function
function incorrect(){
    if (count <= 0) {endGame();}
    else if (timer <= 0){endGame();}
    else {window.timer -= 10;
    var incor = window.document.createElement("footer");
    incor.innerHTML = "Incorrect!";
    document.body.appendChild(incor);
    incor.setAttribute('style',' font-size:25px; border:top; border-color:#5e5d59; color:#5e5d59; width:30%; position: absolute; top: 15%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%')
    incor.setAttribute('id', 'incor')
    setTimeout(function(){window.incor.remove()},1000);}
}

//Timer Function
function gameTime() {
    setInterval(function() {
    if(timer > 0){
    timer--;}
    window.secondsLeft.innerHTML = "Time: " + timer
    }, 1000);
} 

//Ends game and bring up Intials and high score
function endGame(){
    window.question.remove()
    var highScore = document.createElement('h1')
    var score = document.createElement('h2')
    var initials = document.createElement('form')
    var input = document.createElement("input");
    var submit = document.createElement ('button')
    highScore.innerHTML = "Well Done"
    score.innerHTML = "Your Score is " + timer
    initials.innerHTML = "Enter Initials:"
    input.innerHTML = ''
    submit.innerHTML = "submit"
    document.body.appendChild(highScore);
    document.body.appendChild(score);
    document.body.appendChild(initials);
    initials.appendChild(input)
    initials.appendChild(submit)
    highScore.setAttribute('style', 'width:30%; display:flex; flex-wrap:wrap; position: absolute; top: 30%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%)')
    score.setAttribute('style', 'width:30%; display:flex; flex-wrap:wrap; position: absolute; top: 40%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%)')
    initials.setAttribute('style', 'width:30%; display:flex; flex-wrap:wrap; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%)')
    initials.setAttribute('name','initials');
    initials.setAttribute('type','text')
    initials.setAttribute('id', 'initials')
    submit.setAttribute('id','submit')
    //submit.setAttribute('type',"submit");
    //submit.setAttribute('value',"Submit");
    submit.setAttribute('href','highscore.html');
    submit.setAttribute('style','background-color: #008CBA; color:white; border-radius: 8px;')
       
        submit.addEventListener('click', function(){
            event.preventDefault();
            console.log('help me god')
            var input = document.getElementById("initials");
            console.log(input.value)
            var score = window.timer
            localStorage.setItem("Initials",JSON.stringify(input));
            localStorage.setItem("Score", JSON.stringify(score));
            
    });
};  

 
    