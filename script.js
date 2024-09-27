// Write a JavaScript program that conducts a quiz for a user. The program should:

// Store a list of 5 questions and their correct answers in two arrays.
// Use a for loop to display each question using prompt and ask for the user's answer.
// Use if-else to check if the user's answer is correct.
// Keep track of how many answers are correct and how many are wrong.
// At the end, display the user's total score and a message based on their performance (using nested if for grading).

// Requirements:
// Use two arrays: one for the questions and one for the correct answers.
// Use a for loop to display the questions and capture the user's answer.
// Use if-else to compare the user's answer with the correct one.
// Use nested if statements to give feedback based on the score (like grading A, B, C, etc.).

let questions = [ 
    "What is the capital of Pakistan",
    "What is 5+9",
    "What is the largest planet in our solar system",
    "Who is the founder of Pakistan",
    "How many alphabets in English"
]; 

let answers = [
    "Islamabad",
    "14",
    "Jupitor",
    "Muhammad Ali Jinnah",
    "26"
];

let userAnswers = [];

let correctCount = 0;
let wrongCount = 0 ;


for (let i = 0; i < questions.length; i++){
    userAnswers.push(prompt(questions[i]));
}
for(let i=0; i< answers.length; i++){
    if (userAnswers[i] === answers[i]) {
        correctCount++;
    } else {
        wrongCount++;
    }
}



console.log(userAnswers,correctCount,wrongCount);

alert("Total answers:" + userAnswers + "\n" + "Correct answers:" + correctCount + "\n" + "Wrong Count:" + wrongCount);