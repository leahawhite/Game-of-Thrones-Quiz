'use strict';

const QUIZCONTENT = [
  {
    question: '\"Game of Thrones\" is based on a series of fantasy novels written by:',
    answers: [
      'J.R.R. Tolkien',
      'George R.R. Martin',
      'H.G. Wells',
      'C.S. Lewis'
    ],
    correctAnswer: 'George R.R. Martin',
    pic: 'images/GOTauthor.jpg',
    alt: 'A portrait of the author of Game of Thrones'
  },
  {
    question: 'Jon Snow names his direwolf:',
    answers: [
      'Summer',
      'Nymeria',
      'Grey Wind',
      'Ghost'
    ],
    correctAnswer: 'Ghost',
    pic: 'images/jonsnow_direwolf.jpg',
    alt: 'Jon Snow holds a white direwolf pup by its scruff.'
  },
  {
    question: 'What was revealed about Jon Snow\'s ancestry at the end of Season 7?',
    answers: [
      'He\'s a bastard',
      'He\'s a Baratheon',
      'He\'s a Targaryen',
      'He\'s a Lannister'
    ],
    correctAnswer: 'He\'s a Targaryen',
    pic: 'images/dragon_jon.jpg',
    alt: 'Jon stands in front of a dragon.'
  },
  {
    question: 'Beric Dondarrion was first resurrected by Thoros of Myr after he was killed by:',
    answers: [
      'Sandor Clegane',
      'Jaime Lannister',
      'Barristan Selmy',
      'Gregor Clegane'
    ],
    correctAnswer: 'Gregor Clegane',
    pic: 'images/beric_sword.jpg',
    alt: 'Beric Dondarrion brandishes a flaming sword.'
  },
  {
    question: 'Arya trains as an assassin in this city:',
    answers: [
      'Braavos',
      'Dorne',
      'Volantis',
      'Meereen'
    ],
    correctAnswer: 'Braavos',
    pic: 'images/Arya_Stark.jpg',
    alt: 'Arya Stark stands on a bridge overlooking the city.',
  },
  {
    question: 'Daenerys and her army launch barrels of these over the walls of Meereen:',
    answers: [
      'The heads of her enemies',
      'Dragon dung',
      'Broken slave collars',
      'Fireballs'
    ],
    correctAnswer: 'Broken slave collars',
    pic: 'images/dany_meereen.jpg',
    alt: 'Jorah, Dany, and Missandei stare up at the walls of Meereen.'
  },
  {
    question: 'When Jaime Lannister gives Brienne of Tarth his Valyrian steel sword, she names it:',
    answers: [
      'Lightbringer',
      'Ice',
      'Oathkeeper',
      'Widow\'s Wail'
    ],
    correctAnswer: 'Oathkeeper',
    pic: 'images/brienne_swords.jpg',
    alt: 'Brienne stands in front of a wall of swords.'
  },
  {
    question: 'Hodor\'s nickname is derived from:',
    answers: [
      'Hold on',
      'Hold the door',
      'Horse odor',
      'Hold order'
    ],
    correctAnswer: 'Hold the door',
    pic: 'images/hodor_bran.jpg',
    alt: 'Hodor carries Bran on his back.'
  },
  {
    question: 'Who said, \"Chaos isn\'t a pit. Chaos is a ladder\"?',
    answers: [
      'Tywin Lannister',
      'Cersei Lannister',
      'Lord Varys',
      'Petyr Littlefinger Baelish'
    ],
    correctAnswer: 'Petyr Littlefinger Baelish',
    pic: 'images/empty_throne.jpg',
    alt: 'The Iron Throne sits ominously empty.'
  },
  {
    question: 'Jon Snow comes face to face with the Night King at the Battle of:',
    answers: [
      'Hardhome',
      'the Whispering Wood',
      'the Blackwater',
      'the Bastards'
    ],
    correctAnswer: 'Hardhome',
    pic: 'images/nights-king.jpg',
    alt: 'In an icy landscape, the Night King raises his arms to resurrect the dead.'
  }
];

// cached jQuery selector
const $questionAnswers = $('.question-answers');

// initialize counters to 0 
let questionNumber = 0;
let score = 0;

// generate question HTML
function generateQuestion() {

  const answers = QUIZCONTENT[questionNumber].answers.map((answer, index) => {
    return `
        <label>
          <input type="radio" name="answer" value="${answer}" required/>
          <span>${answer}</span>
        </label>`;
  });

  return `
    <form id='question-form' class='js-question-form'>
      <fieldset>
        <legend>${QUIZCONTENT[questionNumber].question}</legend>
        ${answers.join('')}
      </fieldset>
      <button type='submit' id='submit-button'>SUBMIT</button>
    </form>`;
}

// switches image src and alt
function changePic() {
  $('.pic-holder').html(`<img src='${QUIZCONTENT[questionNumber].pic}' alt='${QUIZCONTENT[questionNumber].alt}'/>`);
}

// inserts question form HTML into DOM
function renderQuestion() {
  const questionAnswersString = generateQuestion(QUIZCONTENT);
  $questionAnswers.html(questionAnswersString);
  changePic();
}

// removes start page content
// renders question-answer form to page
function startQuiz() {
  $('#js-start-button').click(function (event) {
    $('.quiz-start').remove();
    $('.question-number').text('1');
    renderQuestion();
  });
}

// add 1 to score and display
function updateScore() {
  score++;
  $('.score').text(`${score}`);
}

// on form submit, compares user answer to correct answer, 
// shows feedback based on correct/incorrect
function submitAnswer() {
  $questionAnswers.submit(function (event) {
    event.preventDefault();

    let userAnswer = $("input[type=radio][name=answer]:checked").val();
    let correctAnswer = QUIZCONTENT[questionNumber].correctAnswer;

    if (userAnswer === correctAnswer) {
      feedbackMessage(true, 'Correct!');
    } else {
      const message = `Sorry, the correct answer is ${QUIZCONTENT[questionNumber].correctAnswer}.`;
      feedbackMessage(false, message);
    }
  });
}

function feedbackMessage(isCorrect, message) {
  $questionAnswers.html(`
  <div class='answer'>
    <h1>${message}</h1>
  </div>
  <button type='button' id='next-button'>NEXT</button>`);
  if (isCorrect) {
    updateScore();
  }
}

// Render final quiz results HTML in DOM
// change picture
function showResults() {
  let message;
  if (score >= 8) {
    message = `Way to go, nerd!<br>You got ${score} out of 10!`;
  } else if (score <= 7 && score >= 5) {
    message = `You scored a ${score} out of 10.<br>You might need a series recap!`;
  } else {
    message = `You scored a ${score} out of 10.<br>I guess dragons just aren't your thing?`;
  }

  $questionAnswers.html(`
    <div class='results'><h1>${message}</h1></div>
    <button type='button' id='restart-button'>PLAY AGAIN</button>`);

  $('.pic-holder').html(`<img src='images/jon_dany.jpg' alt='Dramatic portrait of Jon Snow and Daenerys Targaryen giving each other the side-eye'/>`);
}

// increment question number by 1 and display
function updateQuestionNumber() {
  questionNumber++;
  $('.question-number').text(`${questionNumber + 1}`);
}

// Loads next question-answer set into DOM
function handleNextQuestion() {
  $questionAnswers.on('click', '#next-button', function (event) {
    const ifNotLastQuestion = questionNumber < QUIZCONTENT.length - 1;
    if (ifNotLastQuestion) {
      updateQuestionNumber();
      renderQuestion();
    } else {
      showResults();
    }
  });
}

function handleRestart() {
  $questionAnswers.on('click', '#restart-button', function (event) {
    questionNumber = 0;
    score = 0;
    $('.question-number').text(`${questionNumber + 1}`);
    $('.score').text(`${score}`);
    renderQuestion();
  });
}

startQuiz();
submitAnswer();
handleNextQuestion();
handleRestart();