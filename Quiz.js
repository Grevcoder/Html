
//Array for questions and  answers
var questions = [
  {
    question: "1.Javascript is an _______ language?",
    option1: "Object-Oriented",
    option2: "Object-Based",
    option3: "Procedural",
    option4: "None of the above",
  },
  {
    question: "2.Which of the following keywords is used to define a variable in Javascript?    ",
    option1: "var",
    option2: "let",
    option3: "Both A and B",
    option4: "None of the above",
  },
  {
    question: "3.Which of the following methods is used to access HTML elements using Javascript?",
    option1: "getElementbyId()",
    option2: "getElementbyClassName()",
    option3: "Both A and B",
    option4: "None of the above",
  },
  {
    question: "4.Which of the following methods can be used to display data in some form using Javascript?  ",
    option1: "document.write()",
    option2: "console.log()",
    option3: "window.alert()",
    option4: "All of the above",
  },
  {
    question: "5.How can a datatype be declared to be a constant type? ",
    option1: "const",
    option2: "var",
    option3: "let",
    option4: "constant",
  },

];

var answers = ["Object-Oriented", "Both A and B", "Both A and B","All of the above","const"];
var submittedAnswers = [];

var index = 0;
var selectedOption = null;
//apear when page is loaded

function loadQuestionAndOptions() {
    
  var questionObj = questions[index];
  
  document.getElementById("question").innerHTML = questionObj.question;

  document.getElementById("radio_1").value = questionObj.option1;
  document.getElementById("option1").innerHTML = questionObj.option1;

  document.getElementById("radio_2").value = questionObj.option2;
  document.getElementById("option2").innerHTML = questionObj.option2;

  document.getElementById("radio_3").value = questionObj.option3;
  document.getElementById("option3").innerHTML = questionObj.option3;

  document.getElementById("radio_4").value = questionObj.option4;
  document.getElementById("option4").innerHTML = questionObj.option4;

  document.getElementById("next").style.visibility='hidden';
}

//chck those
function enableNext() {
    document.getElementById("next").style.visibility='visible';
}

//move to next page
function next() {
  var radios = document.getElementsByName("options");

  for (i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      submittedAnswers.push(radios[i].value);
      document.getElementById("next").style.visibility='visible';
      radios[i].checked = false;
    }
  }

  index++;

  if (index == questions.length - 1) {
    document.getElementById("next").innerText = "Submit";
    

  }
  if (index == questions.length) {
    var mark = 0;
    for (var i = 0; i < questions.length; i++) {
      if (submittedAnswers[i] === answers[i]) {
        mark++;
      }
    }

    //alert("Mark :" + mark);
    document.getElementById("main").style.display="none";
    var $message="You Scored:" + mark + " Correct Answers" ;
   document.getElementById("result").innerHTML=$message;
  } else {
    document.getElementById("next").attributes.disabled= true;

    loadQuestionAndOptions();
  }  
  
}

