"use strict"

let userName = prompt("What is your name?");
alert("Welcome to my site " + userName + ".");
alert(userName + ", Good luck answering the below questions.");

//---------------------------City-----------------------------

let myCity = prompt("Do I live in Spokane, WA?  y / n ")
    if (myCity == "y") {
        alert("well done " + userName + ", you are correct!");
    } else if (myCity == "n") {
    	alert(userName + ", that was a wrong answer.");
    } else if (myCity == "") {
    	alert("Listen " + userName + ", you should pick an answer.")
    }
        //console.log(userName + " answered " + myCity + " about me living in Spokane.");

//---------------------------Education-----------------------------
        
let myEd = prompt("Did I graduate from WSU? y / n ");
	if (myEd == "y") {
    	alert("Bingo " + userName + ". That is correct. I graduated from WSU.");
    } else if (myEd == "n") {
    	alert("Sorry" + userName + ", that was not correct.");
    } else if (myEd == "") {
        alert("Seriously " + userName + "??  It's a yes or no answer. It's not rocket science.");        
    }
    	//console.log(userName + " answered" + myName + "about whether I graduated from WSU.");

//---------------------------Work-----------------------------

let myWork = prompt("Was I elected President of the USA? y / n ");
	if (myWork == "y") {
    	alert("I appreciate the support " + userName + ", but that is incorrect. I was never the President.")
    } else if (myWork == "n") {
    	alert("Correct. I wasn't President, but I worked at a psychiatric hospital.")
    } else if (myWork == "") {
    	alert("It's one thing to abstain from a Presidential vote " + userName + ", but it's another whole issue not to type a simple  'y or n'... I mean, it's literally one button!!");
    }
		//console.log(userName + " answered " + myWork + "about if I was elected US President.");

//---------------------------Travel-----------------------------

let myTravel = prompt("Did I ever live in China and Taiwan? y / n ");
	while (myTravel != "y") {
    	alert("No no no.... " + userName + " That's completely wrong. TRY AGAIN.");
        myTravel = prompt("Try again. Did I ever live in China and Taiwan?? y or n")
    } if (myTravel === "y") {
    	alert("Well done " + userName + ". On to the next question.");
    }
        //console.log(userName + " answered " + myTravel + about if I was elected US President.);
//---------------------------Age-----------------------------

let myAge = prompt("Am I 28 years old? y / n ");
	while (myAge != "n") {
    	alert("Wow, I can't believe " + userName + " would pick that answer. TRY AGAIN!")
        myAge = prompt("Let's try again. Am I 28 years old?? y or n"); 
    } if (myAge === "n") {
    	alert("Correct. I'm not 28. But " + userName + ", a man never tells his true age.")     
    }
        //console.log(userName + " answered " + myAge + "regarding that I'm 28.")

//console.log(myAnswers[1]);
//-----------------------for loop math---------------------------------
const numAnswer = 7;

for (let i = 0; i < 4; i++) {
	let numQuestion = prompt("Guess a number between 1 and 15. You get 4 tries.");
    if (numAnswer == numQuestion) {
    	alert("That is correct!");
    	i = 4;
    } else if (numQuestion > numAnswer){
    	alert("Too High!");
    } else if (numQuestion < numAnswer){
    	alert("Too Low!");
    }
}
//-----------------------for loop---------------------------------

let myAnswers = ["basketball", "baseball", "hockey"];

for (let number = 0; number < 5; number++){
	let myQuestions = prompt("What are my favorite sports? 3 right answers are basketball, baseball, or hockey.");
	if (myAnswers[0] == myQuestions || myAnswers[1] == myQuestions || myAnswers[2] == myQuestions) {
    	alert("Correct.");
        number = 5;
    } else {
    	alert("Wrong. Correct answers were basketball, baseball, or hockey."); 
        //console.log("testing");
    }
}
