const online = require('readline');
const Quiz = [
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["100°C", "100%", "75°C", "90%"],
        correctAnswer: "100°C"
    },
    {
        question:'How many continents are there on Earth?',
        options:['6','9','7'],
        answer:"7"
    },
    {
        question: "What is the capital of the United States?",
        options: ["Los Angeles", "Washington D.C", "California", "TimeSquare"],
        correctAnswer: "Washington D.C"
    }
];
function displayRandomQuestion() {
    const random = Math.floor(Math.random() * Quiz.length);
    const question = Quiz[random];
    console.log(question.question);
    question.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
    return question;
}
function checkAnswer(question, userAnswer) {
    return question.options[userAnswer - 1] === question.correctAnswer;
}
async function runQuizGame() {
    let correctAnswers = 0;
    let totalQuestions = Quiz.length;
    console.log("Welcome to your Online Quiz Game!");
    for (let i = 0; i < totalQuestions; i++) {
        const randomQuestion = displayRandomQuestion();
        const userAnswer = await askQuestion("Enter your answer: ");
        if (checkAnswer(randomQuestion, parseInt(userAnswer))) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log("Incorrect!");
        }
    }
    console.log(`Congratulation! Your final score is: ${correctAnswers}/${totalQuestions}`);
}
function askQuestion(question) {
    const final = online.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        final.question(question, answer => {
            final.close();
            resolve(answer);
        });
    });
}
runQuizGame();