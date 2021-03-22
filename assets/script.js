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
    title: "Which attribute of a page element (eg a div) should be set to allow CSS and JavaScript to deal with several elements in the same way?",
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
    title: "Which of the following selector selects an element if it’s the only child of its parent?",
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

//Function start goes here

// All questions into one variable
var questionVar = [questionEleven,questionTen,questionNine,questionEight,questionSeven,
    questionSix,questionFive,questionFour,questionThree,questionTwo,questionOne];
  
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

//Injects Choice One into HTML
var choiceOne = document.createElement("li");
choiceOne.innerHTML = randomChoiceArray[0];
question.appendChild(choiceOne);

//Injects Choice Two into HTML
var choiceTwo = document.createElement("li");
choiceTwo.innerHTML = randomChoiceArray[1];
question.appendChild(choiceTwo);

//Injects Choice Three into HTML
var choiceThree = document.createElement("li");
choiceThree.innerHTML = randomChoiceArray[2];
question.appendChild(choiceThree);

//Injects Choice Four into HTML
var choiceFour = document.createElement("li");
choiceFour.innerHTML = randomChoiceArray[3];
question.appendChild(choiceFour);

//Styling of Quiz
question.setAttribute()
choiceOne.setAttribute()
choiceTwo.setAttribute()
choiceThree.setAttribute()
choiceFour.setAttribute()
//Listens to answers
//Compares response to answer
//Timer Function
//Prints score to storage
