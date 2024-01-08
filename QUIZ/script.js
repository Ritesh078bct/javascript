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
//   resetState();

    question.innerHTML=currentQuestionIndex+1+"."+questions[currentQuestionIndex].question;
    // console.log(questions[index].question)
    // console.log(q.question);
    let answers=questions[currentQuestionIndex].
    answers.forEach(element=>{

        let createButton=document.createElement("button");
        createButton.innerText=element.text;
        answerButton.appendChild(createButton);
        console.log(element.text);

      });
    
}

function resetState(){
    nextButton.style.display="none";
    // while(answerButton.firstChild){
    //     answerButton.remove(answerButton.firstChild);
    // }
}
startQuiz();