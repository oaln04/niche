// larper, egirl, gymbro, khaleeji, looksmaxxer, ecomm 

const questions = [
    {
        question: "it's 2am. you're not tired. you —",
        answers: [
            { text: "try to read a book and give up after 2 pages.", scores: { larper: 3, gymbro: 1 } },
            { text: "get on val to find huzz.", scores: { egirl: 3, larper: 1, khaleeji: 1 } },
            { text: "pinterest. no reason.", scores: { khaleeji: 3, larper: 1, egirl: 1 } },
            { text: "check shopify.", scores: { ecomm: 3, looksmaxxer: 1 } }
        ]
    },
    {
        question: "you're about to go to university, you —",
        answers: [
            { text: "buy a matcha before class obviously.", scores: { khaleeji: 3, larper: 2 } },
            { text: "make sure your shirt is tight on your arms.", scores: { gymbro: 3, looksmaxxer: 1 } },
            { text: "take your laptop and nothing else.", scores: { ecomm: 3, larper: 1 } },
            { text: "check your night market and get on disc.", scores: { egirl: 3, larper: 1 } }
        ]
    },
    {
        question: "you have a date, you —",
        answers: [
            { text: "wear a ribbed tank and a chain", scores: { gymbro: 3, looksmaxxer: 1 } },
            { text: "meet up in the car, duh.", scores: { khaleeji: 3} },
            { text: "put on your catears and join vc", scores: { egirl: 3, larper: 1} },
            { text: "have no time for dates", scores: { ecomm: 3, looksmaxxer: 2} }
        ]
    },
    {
        question: "your dream destination is —",
        answers: [
            { text: "lndn.", scores: { khaleeji: 3, larper: 1 } },
            { text: "tokyo.", scores: { egirl: 3, larper: 1 } },
            { text: "dubai.", scores: { ecomm: 3, khaleeji: 1 } },
            { text: "india.", scores: { looksmaxxer: 3, ecomm: 1 } }
        ]
    },
    {
        question: "your favorite app is —",
        answers: [
            { text: "tiktok.", scores: { looksmaxxer: 3} },
            { text: "discord.", scores: { egirl: 3}},
            { text: "twitter.", scores: { khaleeji: 3}},
            { text: "letterboxd.", scores: { larper: 3}}
        ]
    },
    {
        question: "you're at a restaurant, you —",
        answers: [
            { text: "don't eat.", scores: { looksmaxxer: 3, egirl: 2, khaleeji: 1 } },
            { text: "order the cheapest thing and take pics.", scores: { larper: 3, ecomm: 1 } },
            { text: "get a protein shake to go.", scores: { gymbro: 3, looksmaxxer: 1 } },
            { text: "get the most expensive thing on the menu.", scores: { ecomm: 3, khaleeji: 1 } }
        ]
    }
];

let currentQuestion = 0;
let scores = {
    larper: 0,
    egirl: 0,
    gymbro: 0,
    khaleeji: 0,
    looksmaxxer: 0,
    ecomm: 0
};

function selectAnswer(answerScores) {
    for (let niche in answerScores) {
        scores[niche] += answerScores[niche];
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
        showResult();
    } else {
        renderQuestion();
    }
}

function getResult() {
    let topNiche = null;
    let topScore = 0;
    for (let niche in scores) {
        if (scores[niche] > topScore) {
            topScore = scores[niche];
            topNiche = niche;
        }
    }
    return topNiche;
}

function showResult() {
    let result = getResult();
    console.log("you are: " + result);
}

const results = {
    larper: {
        name: "the larper",
        description: "you are perceived as cultured. you are not cultured. you own four books and have finished none of them. your letterboxd has 11 films logged and two of them are pixar. you talk about 'the human condition' at parties and nobody stops you.",
        traits: [
            "goodreads account, 2 books marked 'read', both from 2021",
            "carries a tote bag with a book in it. same book since september.",
            "has opinions on directors they've never actually watched"
        ]
    },
    egirl: {
        name: "the egirl",
        description: "you live in a pink room that nobody outside of discord has seen. your aim is better than your grades. you have a body count of zero and a kill count of forty. you are simultaneously the most online and most unreachable person anyone knows.",
        traits: [
            "valorant rank is higher than your gpa",
            "three different discord servers think you're their girlfriend",
            "camera roll is 90% crosshair screenshots and one accidental selfie"
        ]
    },
    gymbro: {
        name: "the soft gym bro",
        description: "you PR'd your deadlift this morning and cried to frank ocean on the drive home. you text in paragraphs. you are built like a fridge and emotionally available in a way that confuses people. nobody knows what to do with you and that's your power.",
        traits: [
            "spotify wrapped was 87% frank ocean, 10% melodic drill, 3% taylor swift (denied)",
            "sends 'you good?' at 1am and actually means it",
            "has a protein shaker that hasn't been cleaned since march"
        ]
    },
    khaleeji: {
        name: "khaleeji in london",
        description: "you descend on london every summer like a force of nature and leave in september like it never happened. harrods is not a destination, it's a personality. your group chat is entirely voice notes in gulf dialect and nobody outside it will ever understand a single reference.",
        traits: [
            "flies business for a 7 hour flight without thinking twice",
            "has a london apartment that sits empty 9 months of the year",
            "orders the whole menu 'just to try' and leaves after two bites"
        ]
    },
    looksmaxxer: {
        name: "the looksmaxxer",
        description: "you are running a long term project and that project is your face. you have a red light therapy mask, a jawline exerciser, and a spreadsheet tracking your canthal tilt over time. you chose india for a reason. you are simultaneously the most self-aware and least self-aware person in any room.",
        traits: [
            "mewing since 2022. jaw unchanged. still mewing.",
            "has a folder on his phone called 'progress pics' with 340 photos",
            "researched the best countries for rhinoplasty before booking a holiday"
        ]
    },
    ecomm: {
        name: "that ecomm guy",
        description: "you are 19, you are scaling, and you have made $340 total. you have a ring light, a laptop, and an andrew tate quote saved to your camera roll. you will be rich in six months. you have been saying this for two years. the dream is alive.",
        traits: [
            "laptop open at a café. one tab is shopify. fourteen are youtube ads.",
            "bio says 'entrepreneur' and links to a store with 0 reviews",
            "has never finished a book but has finished four alex hormozi podcasts today"
        ]
    }
};

// grab all screens and buttons
const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('retry-btn');

// screen switcher
function showScreen(screen) {
    introScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    screen.classList.remove('hidden');
}

// renders current question and answer buttons
function renderQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('progress').textContent = `${currentQuestion + 1} / ${questions.length}`;
    document.getElementById('question-text').textContent = q.question;

    const container = document.getElementById('answers-container');
    container.innerHTML = '';

    q.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.textContent = answer.text;
        btn.onclick = () => selectAnswer(answer.scores);
        container.appendChild(btn);
    });
}

// updated showResult to actually render the card
function showResult() {
    let result = getResult();
    const card = results[result];

    document.getElementById('result-name').textContent = card.name;
    document.getElementById('result-description').textContent = card.description;

    const traitsList = document.getElementById('result-traits');
    traitsList.innerHTML = '';
    card.traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = trait;
        traitsList.appendChild(li);
    });

    showScreen(resultScreen);
}

// button listeners
startBtn.onclick = () => {
    showScreen(quizScreen);
    renderQuestion();
};

retryBtn.onclick = () => {
    currentQuestion = 0;
    scores = { larper: 0, egirl: 0, gymbro: 0, khaleeji: 0, looksmaxxer: 0, ecomm: 0 };
    showScreen(introScreen);
};