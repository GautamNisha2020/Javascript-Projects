const questions =[
    {
       question:"Which is largest animal in the world?",
       answers:[
        {text:"Shark" ,correct:false},
        {text:"Blue whale" ,correct:true},
        {text:"Elephant" ,correct:false},
        {text:"Giraffe" ,correct:false},
       ] 

    },
    {
        question:"In non-uniform electric field, electric dipole experiences?",
        answers:[
         {text:"force only" ,correct:false},
         {text:"None of these " ,correct:false},
         {text:"torque only" ,correct:false},
         {text:"torque as well as net force" ,correct:true},
        ] 
 
     },
     {
        question:"The surface considered for Gauss’s law is called ?",
        answers:[
         {text:"Plane surface" ,correct:false},
         {text:"Gaussian surface" ,correct:true},
         {text:"Closed surface " ,correct:false},
         {text:"Spherical surface" ,correct:false},
        ] 
 
     },
     {
        question:"The unit of electric dipole moment is ?",
        answers:[
         {text:"farad" ,correct:false},
         {text:"coulomb-meter " ,correct:true},
         {text:"newton" ,correct:false},
         {text:"coulomb" ,correct:false},
        ] 
 
     },
     {
        question:"The unit of intensity of electric field is ?",
        answers:[
         {text:"Newton/coulomb " ,correct:false},
         {text:"metre/volt" ,correct:true},
         {text:"Joule/newton " ,correct:false},
         {text:"Coulomb/newton " ,correct:false},
        ] 
 
     }
];

const questionElement = document.getElementById("Question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + "." + currentQuestion.question;

//to display the answer
currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
});
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

       function selectAnswer(e){
     const selectedBtn =e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
     }
     else{
        selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button=> {
if(button.dataset.correct ==="true"){
    button.classList.add("correct");
}
button.disabled =true;
     });
     nextButton.style.display ="block";
}

function showScore(){
   resetState();
   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
   nextButton.innerHTML ="Play Again";
   nextButton .style.display ="block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click" ,()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();
