
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}



function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the old name of Canada?", ["Canada", "kanata","keneda", "North America"], "Canada"),
    new Question("When did canada become independent?", ["July 1, 1865", "July 1, 1868","July 1, 1867", "July 1, 1861"], "July 1, 1867"),
    new Question("From which empire, Canada get Independence?", ["The Byzantine Empire", "The Achaemenid Empire", "The British empire", "The Armenian Empire"], "The British empire"),
    new Question("Who is the Canada first president?", ["John A. Macdonald", "Alexander Mackenzie","John Abbott", "John Thompson"], "John A. Macdonald"),
    new Question("How many provinces are there in Canada?", ["8", "9", "10", "11"], "10"),
    new Question("What is the Capital of Canada?", ["Toronto", "Vancouver", "Ontario", "Ottawa"], "Ottawa"),
    new Question("Canada has ____million km² area", ["9.288","9.818","8.958","9.985"], "9.288"),
    new Question("Which is the national bird of Canada?", ["Giant ibis","Gray jay","Grand Cayman parro","Andean condor"], "Gray jay"),
    new Question("Which is the national Animal of Canada?", ["Carp", "Eider Ducks","Polar Bears", "Beaver"], "Beaver"),
    new Question("Which is the national game of Canada?", ["lacrosse", "Cricket", "Football", "Baseball"], "lacrosse"),
    new Question("What is the height of CN tower?", ["551m", "553m","559m", "550m"], "553m"),
    new Question("What is the old name of Canada?", ["Canada", "kanata","keneda", "North America"], "Canada"),
    new Question("When did canada become independent?", ["July 1, 1865", "July 1, 1868","July 1, 1867", "July 1, 1861"], "July 1, 1867"),
    new Question("From which empire, Canada get Independence?", ["The Byzantine Empire", "The Achaemenid Empire", "The British empire", "The Armenian Empire"], "The British empire"),
    new Question("Who is the Canada first president?", ["John A. Macdonald", "Alexander Mackenzie","John Abbott", "John Thompson"], "John A. Macdonald"),
    new Question("How many provinces are there in Canada?", ["8", "9", "10", "11"], "10"),
    new Question("What is the Capital of Canada?", ["Toronto", "Vancouver", "Ontario", "Ottawa"], "Ottawa"),
    new Question("Canada has ____million km² area", ["9.288","9.818","8.958","9.985"], "9.288"),
    new Question("Which is the national bird of Canada?", ["Giant ibis","Gray jay","Grand Cayman parro","Andean condor"], "Gray jay"),
    new Question("Which is the national Animal of Canada?", ["Carp", "Eider Ducks","Polar Bears", "Beaver"], "Beaver")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}