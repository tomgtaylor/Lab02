"use strict"

let userName = prompt("What is your name?");
alert("Welcome to my site " + userName + ".");
alert("Good luck answering the below questions " + userName + ".");
//---------------------------Name Prompt-----------------------------

let myCity = prompt("Do I live in Spokane, WA?  y or n ")
    if (myCity == "y") {
        alert("well done " + userName + ", you are correct!");
    } else if (myCity == "n") {
    	alert(userName + ", that was a wrong answer.");
    } else if (myCity == "") {
    	alert("Listen " + userName + ", you should pick an answer.")
    }
        //console.log("the user answered " + myCity " about me living in Spokane.");
        
//---------------------------Name Prompt-----------------------------  
        
let myEd = prompt("Did I graduate from WSU? y / n");
	if (myEd == "y") {
    	alert("Bingo " + userName + ". That is correct. I graduated from WSU.");
    } else if (myEd == "n") {
    	alert("Sorry" + userName + ", that was not correct.");
    } else if (myEd == "") {
        alert("Seriously " + userName + "??  It's a yes or no answer. It's not rocket science.");        
    }
    	//console.log("the user answered" + myName);
               
//---------------------------Name Prompt-----------------------------    

let myWork = prompt("Was I elected President of the USA? y / n");
	if (myWork == "y") {
    	alert("I appreciate the support " + userName + ", but that is incorrect. I was never the President.")
    } else if (myWork == "n") {
    	alert("Correct. I wasn't President, but I worked at a psychiatric hospital.")
    } else if (myWork == "") {
    	alert("It's one thing to abstain from a Presidential vote " + userName + ", but it's another whole issue not to type a simple  'y or n'... I mean, it's literally one button!!");
    }

//---------------------------Name Prompt-----------------------------   