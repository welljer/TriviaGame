"use strict";
// Questions in a object //
var quest=[
{
    question:"Which famous toy manufacturer is also the world’s largest tire manufacturer by units produced?",
    answer:["lego","hasbro","mattel","bandai"],
    name: "tireManufacturer",
    correct: "lego",
    divClass: ".tireManufacturer"
},
{
    question:"In which state was the first oil well drilled in the United States?",
    answer: ["North Carolina","Texas","Pennsylvania","Tennessee"],
    name: "oilWell",
    correct: "Pennsylvania",
    divClass: ".oilWell",
},
{
    question:"How many letters are in the Greek alphabet?",
    answer: ["18","24","26","22"],
    name: "greek",
    correct: "24",
    divClass: ".greek"
},
{
    question:"Who was the first queen of England?",
    answer: ["Elizabeth I","Anne","Emma","Mary I"],
    name: "queen",
    correct: "Mary I",
    divClass: ".queen"
},
{
    question:"How many moons does the planet Venus have?",
    answer:["4","0","1","2"],
    name: "moons",
    correct: "0",
    divClass: ".moons"
},
{
    question:"Which country lies on the border between Spain and France?",
    answer:["Morocco","Andorra","Italy","Switzerland"],
    name: "country",
    correct: "Andorra",
    divClass:".country",
},
{
    question:"What is the most abundant element in the earth’s atmosphere?",
    answer:["Nitrogen","Oxygen","Hydrogen","Ethanol"],
    name: "element",
    correct: "Nitrogen",
    divClass:".element",
},
{
    question:"The largest volcano ever discovered in our solar system is located on which planet?",
    answer:["Earth","Jupiter","Pluto","Mars"],
    name: "volcano",
    correct: "Mars",
    divClass: ".volcano"
},
{
    question:"The island of Saipan is a commonwealth of which country?",
    answer:["The United States","Canada","Japan","United Kingdom"],
    name: "island",
    correct: "The United States",
    divClass: ".island",
},
{
    question:"Su Lin was the name given to what type of animal captured in China and brought to the United States for the first time in 1936?",
    answer:["Flying Fox","Giant Panda","Bengal Tiger","Macaque"],
    name:"animal",
    correct:"Giant Panda",
    divClass:".animal",
},
]
//ends questions
// console.log(quest)
//labels for answer
var labels=["A","B","C","D"];

// click to start and display questions //
var startGame = $("#start-btn").on("click", function() {
    $(this).parent().hide();
    $(".timerBox").show();
    countdown(60);
    question();
});

// console.log(startGame)

//function for questions
var question = function() {
        $(".questions :not('#sub-but')").empty();
    for (var i = 0; i < 10; i++) {
        $('.questions').prepend('<div class="' + quest[i].name + '"></div>');
        $(quest[i].divClass).append('<div class ="question-title">' + quest[i].question + '</div>');
//loop for radio buttons/answers
    for (var j = 0; j <= 3; j++) {
            $(quest[i].divClass).append('<input type="radio"  name="' + quest[i].name + '" value="' + quest[i].answer[j] + '" ti/><label for="' + labels[j] + '">' + quest[i].answer[j] + '</label>');
        };
        $('.questions').prepend('<br />');
    };
};


// function for countdown timer //

var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $(".timerBox");
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;




//loop to radio buttons and answers//
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + quest[i].name + '"]:checked').val() === quest[i].correct) {

        correctAnswers++;
        console.log("this is correct! number:" + i)
        }else {
        wrongAnswers++;
        console.log("this is wrong! number:" + i)
    };
};
//display correct answers//
//             $("#correctTimesUp").append(correctAnswers);
// //display incorrect answers//
//             $("#wrongTimesUp").append(wrongAnswers);
// //times over//
//             $("#timesUp").show();

//             $(".timerBox").hide();
//stop timer
        clearInterval(timer);
        return 0;
        };
    },1000);
            $("#sub-but").on("click", function() {
        clearInterval(timer);
    });
};

//grading game//
var grade= $("#sub-but").on("click", function(){
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    for (var i=0; i<10; i++){
        if ($("input:radio[name='" + quest[i].name + "']:checked").val() === quest[i].correct) {
            correctAnswers++;
    }else{
        wrongAnswers++;
        };
};

countdown();
//paste to html results
// $(".timerBox").fadeOut(5);
$("#answerScreen").show();
$("#correctScreen").append(correctAnswers);
$("#wrongScreen").append(wrongAnswers);
$("#timerBox").hide()
});