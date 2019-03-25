// create an object of a set of questions and answers options
var questionSet = {
    questions: ["What is the world's longest river?", "What is the capital city of Spain?", "Which of these is NOT a disney movie?",
        "Which actress has won the most Oscars?", "Who played Monica Geller in friends?", "Which of these is Not a masterpiece of Audrey Hepburn?",
        "Which country is Prague in?", "What is the world's biggest island?", "Which of these is NOT an English Band?",
        "Which of these islands is the largest in Hawaii?"],
    answers: {
        answersSet1: ["Congo River", "Nile River", "Amazon River", "Yangtze River"],
        answersSet2: ["Madrid", "Washington, D.C.", "Beijing", "Meekong"],
        answersSet3: ["Moana", "The Lion King", "Black Panther", "Charlotte's Web"],
        answersSet4: ["Ingrid Bergman", "Katharine Hepburn", "Meryl Streep", "Dianne Wiest"],
        answersSet5: ["Reese Witherspoon", "Lisa Kudrow", "Courteney Cox", "Jennifer Aniston"],
        answersSet6: ["Breakfast at Tiffany's", "Roman Holiday", "My Fair Lady", "Modern Times"],
        answersSet7: ["Czech Republic", "Spain", "Italy", "Norway"],
        answersSet8: ["Madagascar", "Greenland", "New Guinea", "Baffin Island"],
        answersSet9: ["Queen", "The Beatles", "Coldplay", "The Beach Boys"],
        answersSet10: ["Maui", "Big Island", "Oahu", "Kauai"],
    },
    correctAnswers: ["Nile River", "Madrid", "Charlotte's Web", "Katharine Hepburn", "Courteney Cox", "Modern Times",
        "Czech Republic", "Greenland", "The Beach Boys", "Big Island"],
    images: ["<img src = 'assets/images/nile river.gif' alt = 'Nile River'>", "<img src = 'assets/images/madrid.gif' alt = 'Madrid'>",
        "<img src = 'assets/images/Charlotte's Web.gif' alt = 'Charlotte's Web'>", "<img src = 'assets/images/Katharine Hepburn.gif' alt = 'Katharine Hepburn'>",
        "<img src = 'assets/images/Courteney Cox.gif' alt = 'Courteney Cox'>", "<img src = 'assets/images/Modern Times.gif' alt = 'Modern Times'>",
        "<img src = 'assets/images/Prague.gif' alt = 'Prague'>", "<img src = 'assets/images/Greenland.gif' alt = 'Greenland'>",
        "<img src = 'assets/images/The Beach Boys.gif' alt = 'The Beach Boys'>", "<img src = 'assets/images/Big Island.gif' alt = 'Big Island Hawaii'>"]
}

// create a variable of timer 
var timeCount = 30;

// When click the start button, the page's content would change into a question and its answer set. 
$("#start").on("click", function () {
    //timer
    $("#timer").html(timeCount);
    // create a counting time function 
    var counting =
        setInterval(function () {
            timeCount--;
            $("#timer").html(timeCount);
        }, 1000);

    // write question into html
    $("#question").html(questionSet.questions[0]);

    // write answers options into html 
    $("#answerOption1").append("<div>" + questionSet.answers.answersSet1[0] + "</div>");
    $("#answerOption2").append("<div>" + questionSet.answers.answersSet1[1] + "</div>");
    $("#answerOption3").append("<div>" + questionSet.answers.answersSet1[2] + "</div>");
    $("#answerOption4").append("<div>" + questionSet.answers.answersSet1[3] + "</div>");

    // when click the answer option 
    $(".options").on("click", function () {
        console.log($(this)[0].innerText);
        clearInterval(counting);
        if ($(this)[0].innerText === questionSet.correctAnswers[0]) {
            $("#changeContent").html("Correct!");
            $("#changeContent").append("<div>" + questionSet.images[0] + "</div>");
        }
    })

});

