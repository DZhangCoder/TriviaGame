// create an array of objects that contain questions and answers 
var questionSet = [
    {
        question: "What is the world's longest river?",
        answer1: "Congo River",
        answer2: "Nile River",
        answer3: "Amazon River",
        answer4: "Yangtze River",
        correctAnswer: "Nile River",
        image: "<img src = 'assets/images/nile river.gif' alt = 'Nile River'>",
    },
    {
        question: "What is the capital city of Spain?",
        answer1: "Madrid",
        answer2: "Washington, D.C.",
        answer3: "Beijing",
        answer4: "Meekong",
        correctAnswer: "Madrid",
        image: "<img src = 'assets/images/madrid.gif' alt = 'Madrid'>",
    },
    {
        question: "Which of these is NOT a disney movie?",
        answer1: "Moana",
        answer2: "The Lion King",
        answer3: "Black Panther",
        answer4: "Spirited Away",
        correctAnswer: "Spirited Away",
        image: "<img src = 'assets/images/Spirited Away.gif' alt = 'Spirited Away'>",
    },
    {
        question: "Which actress has won the most Oscars?",
        answer1: "Ingrid Bergman",
        answer2: "Katharine Hepburn",
        answer3: "Meryl Streep",
        answer4: "Dianne Wiest",
        correctAnswer: "Katharine Hepburn",
        image: "<img src = 'assets/images/Katharine Hepburn.gif' alt = 'Katharine Hepburn'>",
    },
    {
        question: "Who played Monica Geller in friends?",
        answer1: "Reese Witherspoon",
        answer2: "Lisa Kudrow",
        answer3: "Courteney Cox",
        answer4: "Jennifer Aniston",
        correctAnswer: "Courteney Cox",
        image: "<img src = 'assets/images/Courteney Cox.gif' alt = 'Courteney Cox'>",
    },
    {
        question: "Which of these is Not a masterpiece of Audrey Hepburn?",
        answer1: "Breakfast at Tiffany's",
        answer2: "Roman Holiday",
        answer3: "My Fair Lady",
        answer4: "Modern Times",
        correctAnswer: "Modern Times",
        image: "<img src = 'assets/images/Modern Times.gif' alt = 'Modern Times'>",
    },
    {
        question: "Which country is Prague in?",
        answer1: "Czech Republic",
        answer2: "Spain",
        answer3: "Italy",
        answer4: "Norway",
        correctAnswer: "Czech Republic",
        image: "<img src = 'assets/images/Prague.gif' alt = 'Prague'>",
    },
    {
        question: "What is the world's biggest island?",
        answer1: "Madagascar",
        answer2: "Greenland",
        answer3: "New Guinea",
        answer4: "Baffin Island",
        correctAnswer: "Greenland",
        image: "<img src = 'assets/images/Greenland.gif' alt = 'Greenland'>",
    },
    {
        question: "Which of these is NOT an English Band?",
        answer1: "Queen",
        answer2: "The Beatles",
        answer3: "Coldplay",
        answer4: "The Beach Boys",
        correctAnswer: "The Beach Boys",
        image: "<img src = 'assets/images/The Beach Boys.gif' alt = 'The Beach Boys'>",
    },
    {
        question: "Which of these islands is the largest in Hawaii?",
        answer1: "Maui",
        answer2: "Big Island",
        answer3: "Oahu",
        answer4: "Kauai",
        correctAnswer: "Big Island",
        image: "<img src = 'assets/images/Big Island.gif' alt = 'Big Island Hawaii'>"
    }
]

// global variables of counters 
var wins = 0;
var losses = 0;
var unanswered = 0;
var TIME_OUT = 10;
var timeCount = TIME_OUT;
var index = 0;
var pause = false;
var interval;
var BREAK = 2000;

//Write a function that displays questions and options 
var displayQuestion = function (j) {
    $("#result").hide();
    $("#gif").hide();
    if (j < questionSet.length && j >=0) {
        // write question into html
        $("#question").text(questionSet[j].question);

        // write answers options into html 
        $("#answerOption1").text(questionSet[j].answer1);
        $("#answerOption2").text(questionSet[j].answer2);
        $("#answerOption3").text(questionSet[j].answer3);
        $("#answerOption4").text(questionSet[j].answer4);

        $("#changeContent").show();
    }
    pause = false;
}


// create a counting time function 
var counting = function () {
    $("#timer").html("Remaining Time: " + timeCount);
    interval = setInterval(function () {
        timeCount--;
        if (pause) {
            timeCount++;
        }
        $("#timer").html("Remaining Time: " + timeCount);
        // running out of time 
        if (timeCount === 0) {
            $("#changeContent").hide();
            $("#result").show();
            $("#gif").show();
            $("#result").text("Out of Time! The correct answer was: " + questionSet[index].correctAnswer);
            $("#gif").html(questionSet[index].image);
            pause = true;
            unanswered++;
            index++;
            setTimeout(displayQuestion, BREAK, index);
            timeCount = TIME_OUT;
            if (index >= questionSet.length) {
                clearInterval(interval)
                final();
            }
        }

    }, 1000);
}
// Write a function that shows the result of wins, losses, and unanswered when reaching the last question 
var final = function () {
    $("#changeContent").hide();
    $("#result").hide();
    $("#gif").hide();
    $("#timer").hide();
    $("#final").text("Here is how you did: ");
    $("#wins").text("Correct answers: " + wins);
    $("#losses").text("Incorrect answers: " + losses);
    $("#unanswered").text("Unanswered: " + unanswered);
}

// when click the answer option 
$(".options").on("click", function () {
    console.log($(this)[0].innerText);
    if (index < questionSet.length) {
        $("#changeContent").hide();
        $("#result").show();
        $("#gif").show();
        $("#gif").html(questionSet[index].image);
        pause = true;

        $("#timer").html("Remaining Time: " + timeCount);
        // correct 
        if ($(this)[0].innerText === questionSet[index].correctAnswer) {
            $("#result").text("Correct!");
            wins++;
        }
        // wrong
        else {
            $("#result").text("Nope! The correct answer was: " + questionSet[index].correctAnswer);
            losses++;
        }
        index++;
        if (index === questionSet.length) {
            clearInterval(interval)
            final();
        }
        setTimeout(displayQuestion, BREAK, index);
        timeCount = TIME_OUT;
    }
});

// When click the start button, the page's content would change into a question and its answer set. 
$("#start").on("click", function () {
    $("#timer").show();
    displayQuestion(0);
    counting();
});

$("#pause").on("click", function () {
    pause = !pause;
});

