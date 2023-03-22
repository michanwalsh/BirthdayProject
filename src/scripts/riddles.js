const questions = [
    {
        'que': `I am a word that Ares knows, 
                With letters that in order, disclose.
                My meaning can set your heart ablaze,
                But use caution, or it might amaze.
                What am I?`,

        'correct': "sear"
    },
    {
        'que': `Where she lay, twas scripture seen detected
                The same as the beginning, whence her lover was erected.
                Her family has several men, a team of loving goons,
                In time with hope that I may see her soon.`,

        'correct': 'june'
    },
    {
        'que': `She perched at the limit of my bed,
                Her nearness impacting me til I was red
                Not terror, but wonder at what lay ahead,
                Being with her urged me to the brink instead.
                What am I?`,

        'correct': 'edge',
    },
    {
        'que': `Once I was lost, my soul without guide,
                But then she appeared, my doubts to subside.
                She led me to see, with her gentle care,
                That beyond this life, love transcends everywhere.
                What am I?`,

        'correct': 'faith'
    }
];

let index = 0;
let total = questions.length; // total marks
let right = 0, wrong = 0; // initialize right and wrong answers to 0
let data = null;
const answerInput = document.querySelectorAll('.answer')
const quesBox = document.getElementById('quesBox');
const quesText = document.getElementById('quesText');

// load next questions

const loadQuestion = () => {
    if (index === total) { // If all questions are done, call endQuiz function.
        return endQuiz();
    }
    // Reset answer input box.
    reset();

    // Get current question data.
    data = questions[index];

    // Display current question in the UI.
    quesBox.innerText = `Riddle No. ${index + 1}: -\n `;
    quesText.innerText = `${data.que}`;

    // Set the correct answer for the current question.
    answerInput.innerText = data.correct;

    // If the previous audio is still playing, stop it.
    if (audio) {
        audio.pause();
        audio = null;
    }

    // Play the relevant audio file for the current question.
    audio = new Audio(`../../assets/audios/audio${index + 1}.mp3`);
    audio.play();

    // When the user submits their answer, load the next question and its corresponding audio file.
    submitBtn.addEventListener('click', () => {
        index++;
        loadQuestion();
    });
}


const submitQuiz = () => { // this function will check the answers
    const ans = getAnswer()
    if (ans == data.correct) { // if the answer is correct
        right++
    } else { // if the answer is wrong
        wrong++
    }
    index++; // moving to next question
    loadQuestion()
    return
};

const getAnswer = () => {
    const answerInput = document.querySelector('.answer');
    const answer = answerInput.value.trim();
    console.log(answer);
    return answer;
}

const reset = () => {
    const answerInput = document.querySelector('.answer');
    answerInput.value = '';
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <br/>
        <div class="wrapper">
            <div class="header">
                <h1>Well done Ola!</h1>
                <p>You have successfully solved the puzzle of the map and unlocked the clues to the treasure.</p>
            </div>
            <div class="content">
                <h2>To find out the location of this treasure, email the codeword <span class="greeting">"OlaIzACutiePie"</span> to <span class="greeting">michanwalsh@gmail.com.</span> </h2>
                <p>Keep up the good work, we're rooting for you!</p>
                <img src="../../assets/images/xavier.jpg" alt="Xavier" width="400rem" height="250rem" />
            </div>
            <div class="footer">
                <marquee><p>Thank you for playing the Game!</p></marquee>
            </div>
        </div>
    `;
};


// initial call
loadQuestion();
