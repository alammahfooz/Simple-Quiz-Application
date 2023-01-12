const question = [
    {
        'que': 'Which of the following is a markup language?',
        'a':    'HTML',
        'b':    'CSS',
        'c':    'Javascript',
        'd':    'PHP',
        'correct' : 'a'
    },
    {
        'que': 'What year was javascript launched?',
        'a':    '1995',
        'b':    '1996',
        'c':    '1935',
        'd':    'none',
        'correct' : 'b',
    },
    {
        'que': 'What does css stand for?',
        'a':    'Hyper tex Markup language',
        'b':    'Cascading style sheet',
        'c':    'json object notatin',
        'd':    'Helocom',
        'correct' : 'b',
    },
    {
        'que': 'Which of the following is a not a arkup language?',
        'a':    'HTML',
        'b':    'Hyper tex Markup language',
        'c':    'PHP',
        'd':    'none',
        'correct' : 'c',
    },
]
let index = 0;
let total = question.length;
let right = 0;
wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".option")
const loadQuestion = () =>{
    if(index === total){
            return endQuiz()
        
    }
    reset();
    const data = question[index]
    // console.log(data)
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = ()=>{
    const data = question[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
    
}
const getAnswer = () =>{
    let answer;

    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value; // yebatayega ke a tha k b tha k c the 
                
            }
        }
    )
    return answer;
}

const reset =()=>{
    optionInput.forEach(    
        (input)=>{
            input.checked = false;
    }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML =  `<h3>The  you for playing the Quiz</h3>
    <h2> ${right}/ ${total} are correct </h2>`
}

// input cell
loadQuestion()