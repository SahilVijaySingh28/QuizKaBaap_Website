// Quiz data
const quizData = {
    general: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correct: 1
        },
        {
            question: "In which year did World War II end?",
            options: ["1944", "1945", "1946", "1947"],
            correct: 1
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2
        },
        {
            question: "Which is the longest river in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            correct: 1
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
            correct: 2
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correct: 2
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2
        },
        {
            question: "Which ocean is the largest?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3
        }
    ],
    science: [
        {
            question: "What is the speed of light in vacuum?",
            options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "298,792,458 m/s"],
            correct: 0
        },
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "NaCl", "CH4"],
            correct: 0
        },
        {
            question: "Which gas makes up about 78% of Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
            correct: 2
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
            correct: 1
        },
        {
            question: "What is the atomic number of carbon?",
            options: ["4", "6", "8", "12"],
            correct: 1
        },
        {
            question: "Which scientist developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            correct: 1
        },
        {
            question: "What is the study of earthquakes called?",
            options: ["Geology", "Seismology", "Meteorology", "Oceanography"],
            correct: 1
        },
        {
            question: "Which blood type is known as the universal donor?",
            options: ["A", "B", "AB", "O"],
            correct: 3
        },
        {
            question: "What is the most abundant element in the universe?",
            options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
            correct: 2
        },
        {
            question: "How many bones are in an adult human body?",
            options: ["206", "208", "210", "212"],
            correct: 0
        }
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
            correct: 1
        },
        {
            question: "In which year did the Berlin Wall fall?",
            options: ["1987", "1988", "1989", "1990"],
            correct: 2
        },
        {
            question: "Which ancient wonder of the world was located in Alexandria?",
            options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis"],
            correct: 2
        },
        {
            question: "Who was known as the 'Iron Lady'?",
            options: ["Queen Elizabeth II", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
            correct: 1
        },
        {
            question: "Which empire was ruled by Julius Caesar?",
            options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
            correct: 1
        },
        {
            question: "In which year did the Titanic sink?",
            options: ["1910", "1911", "1912", "1913"],
            correct: 2
        },
        {
            question: "Who wrote the Communist Manifesto?",
            options: ["Vladimir Lenin", "Karl Marx", "Friedrich Engels", "Both Karl Marx and Friedrich Engels"],
            correct: 3
        },
        {
            question: "Which war was fought between the North and South in America?",
            options: ["Revolutionary War", "Civil War", "War of 1812", "Spanish-American War"],
            correct: 1
        },
        {
            question: "Who was the last Pharaoh of Egypt?",
            options: ["Nefertiti", "Cleopatra VII", "Hatshepsut", "Ankhesenamun"],
            correct: 1
        },
        {
            question: "Which city was the capital of the Byzantine Empire?",
            options: ["Rome", "Athens", "Constantinople", "Alexandria"],
            correct: 2
        }
    ],
    Html: [
        {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ],
        correct: 1
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<a>",
            "<link>",
            "<href>",
            "<hyperlink>"
        ],
        correct: 0
    },
    {
        question: "Which HTML element is used for inserting a line break?",
        options: [
            "<break>",
            "<br>",
            "<lb>",
            "<linebreak>"
        ],
        correct: 1
    },
    {
        question: "Which attribute is used to specify the URL in an anchor tag?",
        options: [
            "href",
            "src",
            "link",
            "url"
        ],
        correct: 0
    },
    {
        question: "What is the purpose of the <head> section in an HTML document?",
        options: [
            "To contain the main content of the page",
            "To include metadata and links to scripts/styles",
            "To display the footer",
            "To embed images"
        ],
        correct: 1
    },
    {
        question: "Which HTML element is used to define an unordered list?",
        options: [
            "<list>",
            "<ul>",
            "<ol>",
            "<li>"
        ],
        correct: 1
    },
    {
        question: "Which attribute is used to specify an image source?",
        options: [
            "src",
            "href",
            "alt",
            "source"
        ],
        correct: 0
    },
    {
        question: "What does the <table> tag define in HTML?",
        options: [
            "A list of items",
            "A table for data",
            "A paragraph",
            "A division of content"
        ],
        correct: 1
    },
    {
        question: "Which HTML element is used to define a section in a document?",
        options: [
            "<section>",
            "<div>",
            "<article>",
            "<header>"
        ],
        correct: 0
    },
    {
        question: "Which attribute is used to specify alternative text for an image?",
        options: [
            "alt",
            "src",
            "title",
            "longdesc"
        ],
        correct: 0
    }
    ],
    Css : [
         {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: 0
    },
    {
        question: "Which property is used to change the background color?",
        options: [
            "background-color",
            "color",
            "bg-color",
            "background"
        ],
        correct: 0
    },
    {
        question: "How do you select an element with id='header' in CSS?",
        options: [
            "#header",
            ".header",
            "header",
            "*header"
        ],
        correct: 0
    },
    {
        question: "Which CSS property controls the text size?",
        options: [
            "font-size",
            "text-size",
            "font-style",
            "size"
        ],
        correct: 0
    },
    {
        question: "Which property is used to add space between the border and the content?",
        options: [
            "margin",
            "padding",
            "border-spacing",
            "spacing"
        ],
        correct: 1
    },
    {
        question: "What does the 'float' property do in CSS?",
        options: [
            "Positions an element relative to its parent",
            "Removes an element from the document flow",
            "Positions an element to the left or right allowing text to wrap around it",
            "Centers the element horizontally"
        ],
        correct: 2
    },
    {
        question: "Which property is used to set the transparency of an element?",
        options: [
            "opacity",
            "visibility",
            "transparency",
            "alpha"
        ],
        correct: 0
    },
    {
        question: "How do you select all paragraph elements in CSS?",
        options: [
            "p",
            ".p",
            "#p",
            "*"
        ],
        correct: 0
    },
    {
        question: "Which property is used to control the stacking order of elements?",
        options: [
            "z-index",
            "stack-order",
            "order",
            "layer"
        ],
        correct: 0
    },
    {
        question: "What is the default position value of an HTML element?",
        options: [
            "static",
            "relative",
            "absolute",
            "fixed"
        ],
        correct: 0
    }
    ],
    JavaScript : [
        {
        question: "What does JavaScript primarily do?",
        options: [
            "Design the website layout",
            "Add interactivity to web pages",
            "Manage server-side operations",
            "Style the webpage"
        ],
        correct: 1
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "//",
            "/* */",
            "<!-- -->",
            "#"
        ],
        correct: 0
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "All of the above"
        ],
        correct: 3
    },
    {
        question: "Which keyword is used to define a function in JavaScript?",
        options: [
            "function",
            "def",
            "func",
            "declare"
        ],
        correct: 0
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correct: 0
    },
    {
        question: "What is the output of 'typeof null' in JavaScript?",
        options: [
            "object",
            "null",
            "undefined",
            "boolean"
        ],
        correct: 0
    },
    {
        question: "Which operator is used for comparison in JavaScript?",
        options: [
            "==",
            "===",
            "!=",
            "All of the above"
        ],
        correct: 3
    },
    {
        question: "How can you convert a string to an integer in JavaScript?",
        options: [
            "parseInt()",
            "Number()",
            "Both of the above",
            "parseFloat()"
        ],
        correct: 2
    },
    {
        question: "Which statement is used to handle errors in JavaScript?",
        options: [
            "try...catch",
            "if...else",
            "for loop",
            "switch"
        ],
        correct: 0
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
            "The current object",
            "The global object",
            "The parent object",
            "The function itself"
        ],
        correct: 0
    }
    ]
};

// Global variables
let currentUser = null;
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let quizTimer = null;
let timeLeft = 300; // 5 minutes
let startTime = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const savedUser = localStorage.getItem('quizAppUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showSection('dashboardSection');
        document.getElementById('userName').textContent = `Welcome, ${currentUser.name}!`;
    } else {
        showSection('loginSection');
    }

    // Add event listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
});

// Authentication functions
function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        tabBtns[0].classList.add('active');
    } else {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        tabBtns[1].classList.add('active');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple validation (in real app, this would be server-side)
    const savedUsers = JSON.parse(localStorage.getItem('quizAppUsers') || '[]');
    const user = savedUsers.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('quizAppUser', JSON.stringify(user));
        document.getElementById('userName').textContent = `Welcome, ${user.name}!`;
        showSection('dashboardSection');
    } else {
        alert('Invalid email or password!');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simple validation
    if (name.length < 2) {
        alert('Name must be at least 2 characters long!');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }

    const savedUsers = JSON.parse(localStorage.getItem('quizAppUsers') || '[]');
    
    // Check if user already exists
    if (savedUsers.find(u => u.email === email)) {
        alert('User with this email already exists!');
        return;
    }

    // Create new user
    const newUser = { name, email, password };
    savedUsers.push(newUser);
    localStorage.setItem('quizAppUsers', JSON.stringify(savedUsers));

    currentUser = newUser;
    localStorage.setItem('quizAppUser', JSON.stringify(newUser));
    document.getElementById('userName').textContent = `Welcome, ${name}!`;
    showSection('dashboardSection');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('quizAppUser');
    showSection('loginSection');
    
    // Reset forms
    document.getElementById('loginForm').reset();
    document.getElementById('signupForm').reset();
}

// Quiz functions
function startQuiz(category) {
    currentQuiz = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    timeLeft = 300;
    startTime = Date.now();

    // Update quiz category title
    const categoryNames = {
        general: 'General Knowledge Quiz',
        science: 'Science Quiz',
        history: 'History Quiz',
        html : 'HTML Quiz',
        css : 'CSS Quiz',
        JavaScript : 'JavaScript Quiz'
    };
    document.getElementById('quizCategory').textContent = categoryNames[category];

    showSection('quizSection');
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });

    // Update progress
    updateProgress();
    
    // Reset next button
    document.getElementById('nextBtn').disabled = true;
    selectedAnswer = null;
}

function selectOption(index) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
    
    selectedAnswer = index;
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === null) return;

    // Check answer
    const question = currentQuiz[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    if (selectedAnswer === question.correct) {
        score++;
        options[selectedAnswer].classList.add('correct');
    } else {
        options[selectedAnswer].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }

    // Disable all options
    options.forEach(option => option.onclick = null);
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 1500);
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('questionCounter').textContent = `${currentQuestionIndex + 1} / ${currentQuiz.length}`;
}

function startTimer() {
    quizTimer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(quizTimer);
    
    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    // Update results
    document.getElementById('scoreValue').textContent = `${Math.round((score / currentQuiz.length) * 100)}%`;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('totalQuestions').textContent = currentQuiz.length;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Update results message based on score
    const percentage = (score / currentQuiz.length) * 100;
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsMessage = document.getElementById('resultsMessage');
    const resultsIcon = document.getElementById('resultsIcon');
    
    if (percentage >= 80) {
        resultsTitle.textContent = 'Excellent!';
        resultsMessage.textContent = 'Outstanding performance! You really know your stuff!';
        resultsIcon.className = 'fas fa-trophy';
    } else if (percentage >= 60) {
        resultsTitle.textContent = 'Good Job!';
        resultsMessage.textContent = 'Well done! You have a solid understanding.';
        resultsIcon.className = 'fas fa-medal';
    } else {
        resultsTitle.textContent = 'Keep Learning!';
        resultsMessage.textContent = 'Don\'t worry, practice makes perfect!';
        resultsIcon.className = 'fas fa-book';
    }
    
    showSection('resultsSection');
}

function retakeQuiz() {
    // Find current quiz category
    const categoryNames = {
        'General Knowledge Quiz': 'general',
        'Science Quiz': 'science',
        'History Quiz': 'history'
    };
    const currentCategory = categoryNames[document.getElementById('quizCategory').textContent];
    startQuiz(currentCategory);
}

function goToDashboard() {
    if (quizTimer) {
        clearInterval(quizTimer);
    }
    showSection('dashboardSection');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}