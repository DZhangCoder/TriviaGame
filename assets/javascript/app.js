// create an object of a set of questions and answers options
var questionSet = {
    questions: ["What is the world's longest river?", "What is the capital city of Spain?", "Which of these is NOT a disney movie?",
        "Which actress has won the most Oscars?", "Who played Monica Geller in friends?", "Which of these is Not a masterpiece of Audrey Hepburn?",
        "Which country is Prague in?", "What is the world's biggest island?", "Which of these is NOT an English Band?",
        "Which of these islands is the largest in Hawaii?"],
    answers : {
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
        "Czech Republic", "Greenland", "The Beach Boys","Big Island"]
}

// When click the start button, the page's content would change into a question and its answer set. 
$("#start").on("click", function(){
    $("#mainContent").html(questionSet.questions[0] + questionSet.answers.answersSet1); 
})