const questions=[
    {
        question:"what is the extention of C language?",
        answers:[
            {text:".cpp",correct:"false" },
            { text:".js",correct:"false",
            },
            {text:".c",correct:"true"},
            {text:".txt",correct:"false"}
        ]
    },
    {
        question:"who is the father of computer?",
        answers:[
            {text:"ryan dahl",correct:"false" },
            { text:"charles babagge",correct:"true",
            },
            {text:"bjarne strautostrauf",correct:"false"},
            {text:"denis ritchi",correct:"false"}
        ]
    },
    {
        question:"which of the following is low level programming language?",
        answers:[
            {text:"c",correct:"false" },
            { text:"java",correct:"false",
            },
            {text:"fortran",correct:"true"},
            {text:"python",correct:"false"}
        ]
    },
];
const question=document.querySelector(".quiz h2");
const answerButton=document.querySelector(".answer-button");
const nextButton=document.querySelector("#next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="next";
    showQuestion();
}
function showQuestion(){
  resetState();

    question.innerHTML=currentQuestionIndex+1+"."+questions[currentQuestionIndex].question;
    // console.log(questions[index].question)
    // console.log(q.question);
    let answers=questions[currentQuestionIndex].
    answers.forEach(answer=>{

        let createButton=document.createElement("button");
        createButton.innerText=answer.text;
        answerButton.appendChild(createButton);
        // console.log(answer.text);
        if(answer.correct){
            createButton.dataset.correct=answer.correct;
        }
        createButton.addEventListener("click",selectAnswer)

      });
    
}
function selectAnswer(e){
    selectButton=e.target;
    console.log(selectButton);
    if(selectButton.dataset.correct==="true"){
        selectButton.style.backgroundColor="rgba(112, 239, 77, 0.655)";
        score++;   
    }
    else{
        selectButton.style.backgroundColor="rgba(203, 38, 38, 0.744)";
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.style.backgroundColor="rgba(112, 239, 77, 0.655)";
        }
        button.disabled=true;
    });
   nextButton.style.display="block";

}
function resetState(){
    nextButton.style.display="none";
  
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function showScore(){
    resetState();
    document.querySelector(".quiz h2").innerText=`Your score is: ${score}`;
    nextButton.innerText="play Again";
    nextButton.style.display="block";
   

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();//play again
    }
});

startQuiz();