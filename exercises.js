// Exercise Content Database
const exercisesContent = {
    1: {
        title: "Exercise 1: Working with Variables",
        description: "Create and manipulate variables",
        starter: `// Create variables for a student
// TODO: Create a variable 'studentName' with your name
// TODO: Create a variable 'studentAge' with your age
// TODO: Create a variable 'gpa' with a GPA value

// Log all variables to console
// console.log(studentName);
// console.log(studentAge);
// console.log(gpa);`,
        solution: `// Create variables for a student
let studentName = "John Doe";
let studentAge = 20;
let gpa = 3.8;

// Log all variables to console
console.log(studentName);
console.log(studentAge);
console.log(gpa);`,
        hints: [
            "Use 'let' to declare variables",
            "Variables are case-sensitive",
            "Strings need quotes, numbers don't",
            "You can log multiple types of variables"
        ]
    },
    2: {
        title: "Exercise 2: Conditionals",
        description: "Use if/else statements to check conditions",
        starter: `// Check if a number is even or odd
let number = 15;

// TODO: Use if/else to check if the number is even
// TODO: If even, log "The number is even"
// TODO: If odd, log "The number is odd"`,
        solution: `// Check if a number is even or odd
let number = 15;

if (number % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}`,
        hints: [
            "Use the modulo operator % to find remainder",
            "If remainder is 0, number is even",
            "Remember the if/else syntax",
            "Test with different numbers"
        ]
    },
    3: {
        title: "Exercise 3: Writing Functions",
        description: "Create a function that performs a calculation",
        starter: `// Write a function that calculates the sum of two numbers
// TODO: Create a function named 'add' with parameters a and b
// TODO: The function should return a + b
// TODO: Call the function with arguments 5 and 3

// function add(a, b) {
//   // Your code here
// }

// let result = add(5, 3);
// console.log(result);`,
        solution: `// Write a function that calculates the sum of two numbers
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8`,
        hints: [
            "Function syntax: function name(parameters) { ... }",
            "Use 'return' to send back a value",
            "The result will be 8",
            "You can call the function multiple times with different values"
        ]
    },
    4: {
        title: "Exercise 4: Loops",
        description: "Print numbers using a for loop",
        starter: `// Print numbers from 1 to 10 using a for loop
// TODO: Create a for loop that starts at 1
// TODO: Loop while i is less than or equal to 10
// TODO: Increment i by 1 each time
// TODO: Log each number to console`,
        solution: `// Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}`,
        hints: [
            "Syntax: for (let i = start; condition; increment) { ... }",
            "Start from 1",
            "Use <= to include 10",
            "Each iteration will print a number"
        ]
    },
    5: {
        title: "Exercise 5: Working with Arrays",
        description: "Manipulate and iterate through an array",
        starter: `// Work with an array of fruits
let fruits = ["apple", "banana", "cherry"];

// TODO: Add "orange" to the end of the array
// TODO: Add "grape" to the beginning of the array
// TODO: Log the entire array
// TODO: Log the length of the array
// TODO: Print each fruit using forEach`,
        solution: `// Work with an array of fruits
let fruits = ["apple", "banana", "cherry"];

// Add "orange" to the end
fruits.push("orange");

// Add "grape" to the beginning
fruits.unshift("grape");

// Log the entire array
console.log(fruits);

// Log the length
console.log(fruits.length);

// Print each fruit
fruits.forEach(function(fruit) {
  console.log(fruit);
});`,
        hints: [
            "push() adds to the end",
            "unshift() adds to the beginning",
            "length property shows how many items",
            "forEach loops through each element"
        ]
    },
    6: {
        title: "Exercise 6: DOM Manipulation",
        description: "Change HTML content dynamically",
        starter: `// This exercise shows how to manipulate the DOM
// Create a simple counter that increments when a button is clicked

// HTML:
// &lt;div id="counter"&gt;0&lt;/div&gt;
// &lt;button id="counterBtn"&gt;Increment&lt;/button&gt;

let count = 0;
let counterDisplay = document.getElementById("counter");
let button = document.getElementById("counterBtn");

// TODO: Add a click event listener to the button
// TODO: When clicked, increment the count variable
// TODO: Update the display to show the new count`,
        solution: `let count = 0;
let counterDisplay = document.getElementById("counter");
let button = document.getElementById("counterBtn");

// Add click event listener
button.addEventListener("click", function() {
  count = count + 1;
  counterDisplay.textContent = count;
});`,
        hints: [
            "Use addEventListener to listen for clicks",
            "Increment count by 1 each time",
            "Use textContent to update the display",
            "The display should update immediately when clicked"
        ]
    }
};

function openExercise(exerciseNumber) {
    const exerciseDetail = document.getElementById('exercise-detail');
    const exerciseContent = document.getElementById('exercise-content');
    const exercise = exercisesContent[exerciseNumber];

    if (exercise) {
        let hintsHTML = exercise.hints.map((hint, index) => 
            `<li>${hint}</li>`
        ).join('');

        const completedClass = gameState.completedExercises.has(exerciseNumber) ? 'completed' : '';
        const completedText = gameState.completedExercises.has(exerciseNumber) ? '✓ COMPLETED' : '';

        exerciseContent.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <div>
                    <h2>${exercise.title}</h2>
                    <p style="color: #999;"><em>${exercise.description}</em></p>
                </div>
                <div class="exercise-meta">
                    <span class="badge badge-primary">+100 points</span>
                    ${completedText ? `<span class="badge badge-success">${completedText}</span>` : ''}
                </div>
            </div>
            
            <h3>📋 Starter Code:</h3>
            <pre><code>${escapeHtml(exercise.starter)}</code></pre>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
                <div>
                    <button class="btn btn-primary" onclick="showSolution(${exerciseNumber})">
                        💡 Show Solution
                    </button>
                </div>
                <div>
                    <button class="btn btn-secondary" onclick="showHints(${exerciseNumber})">
                        🔍 Show Hints
                    </button>
                </div>
            </div>
            
            <div id="solution-${exerciseNumber}" class="solution-box hidden" style="display: none;">
                <h3>✅ Solution:</h3>
                <pre><code>${escapeHtml(exercise.solution)}</code></pre>
                <button class="btn btn-success" onclick="completeExercise(${exerciseNumber})">
                    ✓ I Completed This!
                </button>
            </div>
            
            <div id="hints-${exerciseNumber}" class="hints-box hidden" style="display: none;">
                <h3>💡 Hints:</h3>
                <ul>
                    ${hintsHTML}
                </ul>
            </div>
            
            <h3>🎯 How to Complete:</h3>
            <ol>
                <li>Understand the starter code</li>
                <li>Read the hints if needed</li>
                <li>Try to complete it yourself</li>
                <li>Check the solution when ready</li>
                <li>Copy to Sandbox and test</li>
                <li>Click "I Completed This!" to earn points</li>
            </ol>
        `;

        exerciseDetail.classList.remove('hidden');
        exerciseDetail.scrollIntoView({ behavior: 'smooth' });
    }
}

function closeExerciseDetail() {
    // Hide solution and hints when closing
    const exercise = document.getElementById('exercise-detail');
    const solEls = exercise.querySelectorAll('[id^="solution-"]');
    const hintEls = exercise.querySelectorAll('[id^="hints-"]');
    
    solEls.forEach(el => el.style.display = 'none');
    hintEls.forEach(el => el.style.display = 'none');
    
    exercise.classList.add('hidden');
}

function showSolution(exerciseNumber) {
    const solutionBox = document.getElementById(`solution-${exerciseNumber}`);
    if (solutionBox.style.display === 'none') {
        solutionBox.style.display = 'block';
    } else {
        solutionBox.style.display = 'none';
    }
}

function showHints(exerciseNumber) {
    const hintsBox = document.getElementById(`hints-${exerciseNumber}`);
    if (hintsBox.style.display === 'none') {
        hintsBox.style.display = 'block';
    } else {
        hintsBox.style.display = 'none';
    }
}

function completeExercise(exerciseNumber) {
    gameState.completeExercise(exerciseNumber);
    updateStats();
    updateProgress();
    
    // Update the button
    const btn = event.target;
    btn.textContent = '✓ Completed!';
    btn.disabled = true;
    btn.style.opacity = '0.5';
    
    // Show celebration
    celebrateAchievement();
    showToast(`Exercise ${exerciseNumber} completed! +100 points`, 'success');
    
    // Update exercise card
    const card = document.querySelector(`.exercise-card:nth-child(${exerciseNumber})`);
    if (card) {
        const badge = card.querySelector('.completed-badge');
        if (!badge) {
            const completedBadge = document.createElement('div');
            completedBadge.className = 'completed-badge';
            completedBadge.textContent = '✓ Done';
            card.appendChild(completedBadge);
        }
    }
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
