// Lesson Content Database
const lessonsContent = {
    1: {
        title: "Introduction to JavaScript",
        content: `
            <h2>What is JavaScript?</h2>
            <p>JavaScript is a lightweight, interpreted programming language that runs in web browsers. It's one of the three core technologies of web development, alongside HTML and CSS.</p>
            
            <h3>Why Learn JavaScript?</h3>
            <ul>
                <li><strong>Web Development:</strong> Essential for creating interactive websites</li>
                <li><strong>Frontend & Backend:</strong> Can be used with Node.js for backend development</li>
                <li><strong>Job Opportunities:</strong> High demand in the job market</li>
                <li><strong>Easy to Learn:</strong> Beginner-friendly syntax</li>
                <li><strong>Immediate Results:</strong> See your code work instantly in the browser</li>
            </ul>

            <h3>What Can JavaScript Do?</h3>
            <ul>
                <li>Validate form data</li>
                <li>Manipulate HTML content</li>
                <li>React to user events (clicks, hovers, etc.)</li>
                <li>Store data in the browser</li>
                <li>Create animations and visual effects</li>
                <li>Make requests to servers (AJAX)</li>
            </ul>

            <h3>Where Does JavaScript Run?</h3>
            <p>JavaScript primarily runs in web browsers, but with Node.js, it can also run on servers.</p>
            <div class="example-box">
                <div class="example-title">Getting Started:</div>
                <pre><code>&lt;script&gt;
  console.log('Hello, JavaScript!');
&lt;/script&gt;</code></pre>
            </div>

            <h3>Key Features</h3>
            <ul>
                <li><strong>Dynamic:</strong> Can change HTML and CSS at runtime</li>
                <li><strong>Event-Driven:</strong> Responds to user interactions</li>
                <li><strong>Functional:</strong> Supports functional programming paradigms</li>
                <li><strong>Object-Oriented:</strong> Supports OOP concepts</li>
            </ul>
        `
    },
    2: {
        title: "Variables & Data Types",
        content: `
            <h2>Variables & Data Types</h2>
            <p>Variables are containers for storing data. JavaScript has three ways to declare variables: var, let, and const.</p>

            <h3>Declaring Variables</h3>
            <div class="example-box">
                <div class="example-title">Using var (older way):</div>
                <pre><code>var name = "John";
var age = 25;</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">Using let (recommended for modern JavaScript):</div>
                <pre><code>let city = "Amsterdam";
let salary = 50000;</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">Using const (for constants):</div>
                <pre><code>const PI = 3.14159;
const MAX_USERS = 100;</code></pre>
            </div>

            <h3>Differences: var vs let vs const</h3>
            <ul>
                <li><strong>var:</strong> Function-scoped, can be re-declared and updated</li>
                <li><strong>let:</strong> Block-scoped, can be updated but not re-declared</li>
                <li><strong>const:</strong> Block-scoped, cannot be updated or re-declared</li>
            </ul>

            <h3>JavaScript Primitive Data Types</h3>
            <table class="data-types-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Example</th>
                        <th>typeof Returns</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>number</strong></td>
                        <td><code>5, 3.14, 34e-2 (=0.34), 2_500 (=2500)</code></td>
                        <td><code>"number"</code></td>
                        <td>Integers, decimals, scientific notation</td>
                    </tr>
                    <tr>
                        <td><strong>string</strong></td>
                        <td><code>"hello", 'world', \`template\`</code></td>
                        <td><code>"string"</code></td>
                        <td>Text data with double, single, or backticks</td>
                    </tr>
                    <tr>
                        <td><strong>boolean</strong></td>
                        <td><code>true, false</code></td>
                        <td><code>"boolean"</code></td>
                        <td>True or false values for logic</td>
                    </tr>
                    <tr>
                        <td><strong>array</strong></td>
                        <td><code>['red', 'green', 'blue']</code></td>
                        <td><code>"object"</code></td>
                        <td>Ordered list of values (also an object)</td>
                    </tr>
                    <tr>
                        <td><strong>object</strong></td>
                        <td><code>{name:'John', age:30}</code></td>
                        <td><code>"object"</code></td>
                        <td>Collection of key-value pairs</td>
                    </tr>
                    <tr>
                        <td><strong>null</strong></td>
                        <td><code>null</code></td>
                        <td><code>"object"</code></td>
                        <td>Intentional empty or non-existent value</td>
                    </tr>
                    <tr>
                        <td><strong>undefined</strong></td>
                        <td><code>undefined</code></td>
                        <td><code>"undefined"</code></td>
                        <td>Variable declared but not assigned a value</td>
                    </tr>
                </tbody>
            </table>

            <h3>JavaScript Data Types - Detailed Examples</h3>
            <div class="example-box">
                <div class="example-title">Number:</div>
                <pre><code>let age = 25;
let price = 99.99;
let scientific = 34e-2; // 0.34
let withUnderscore = 2_500; // 2500 (for readability)</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">String:</div>
                <pre><code>let name = "Alice";
let message = 'Hello, World!';
let template = \`Hello, \${name}!\`;</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">Boolean:</div>
                <pre><code>let isStudent = true;
let isGraduated = false;</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">Undefined & Null:</div>
                <pre><code>let empty;  // undefined
let noValue = null;  // explicitly set to nothing</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">Object:</div>
                <pre><code>let person = {
  name: "Bob",
  age: 30,
  city: "Rotterdam"
};</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">Array:</div>
                <pre><code>let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];</code></pre>
            </div>

            <h3>typeof Operator</h3>
            <p>Use <code>typeof</code> to check the data type of a variable:</p>
            <div class="example-box">
                <div class="example-title">Example:</div>
                <pre><code>typeof "Hello"        // "string"
typeof 42             // "number"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof null           // "object" (quirk in JavaScript!)
typeof ['a', 'b']     // "object"
typeof {name: "John"} // "object"</code></pre>
            </div>

            <h3>Type Conversion</h3>
            <p>JavaScript can convert between types:</p>
            <div class="example-box">
                <div class="example-title">String Conversion:</div>
                <pre><code>String(123);      // "123"
String(true);     // "true"
(50).toString();  // "50"</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">Number Conversion:</div>
                <pre><code>Number("123");    // 123
Number("3.14");   // 3.14
Number(true);     // 1
Number(false);    // 0</code></pre>
            </div>

            <h3>Key Takeaways</h3>
            <ul>
                <li>Use <code>let</code> and <code>const</code> instead of <code>var</code> in modern JavaScript</li>
                <li>JavaScript is dynamically typed - variables can change types</li>
                <li>The <code>typeof</code> operator helps identify variable types</li>
                <li><code>null</code> and <code>undefined</code> are different (null is intentional, undefined is accidental)</li>
                <li>Arrays and objects are both of type "object"</li>
            </ul>
        `
    },
    3: {
        title: "Operators & Control Flow",
        content: `
            <h2>Operators & Control Flow</h2>

            <h3>Arithmetic Operators</h3>
            <div class="example-box">
                <div class="example-title">Basic Math:</div>
                <pre><code>let a = 10;
let b = 3;

console.log(a + b);  // 13 (addition)
console.log(a - b);  // 7 (subtraction)
console.log(a * b);  // 30 (multiplication)
console.log(a / b);  // 3.33... (division)
console.log(a % b);  // 1 (modulo - remainder)
console.log(a ** 2); // 100 (exponentiation)</code></pre>
            </div>

            <h3>Comparison Operators</h3>
            <p>These operators compare values and return true or false:</p>
            <div class="example-box">
                <div class="example-title">Comparisons:</div>
                <pre><code>5 == "5"   // true (loose equality)
5 === "5"  // false (strict equality)
5 != "5"   // false
5 !== "5"  // true
5 > 3      // true
5 < 3      // false
5 >= 5     // true
5 <= 3     // false</code></pre>
            </div>

            <h3>Logical Operators</h3>
            <div class="example-box">
                <div class="example-title">AND, OR, NOT:</div>
                <pre><code>true && true   // true
true && false  // false
true || false  // true
!true          // false
!false         // true</code></pre>
            </div>

            <h3>If/Else Statements</h3>
            <div class="example-box">
                <div class="example-title">Basic if/else:</div>
                <pre><code>let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">if/else if/else:</div>
                <pre><code>let grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}</code></pre>
            </div>

            <h3>Switch Statement</h3>
            <div class="example-box">
                <div class="example-title">Switch Example:</div>
                <pre><code>let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown day");
}</code></pre>
            </div>

            <h3>Ternary Operator</h3>
            <p>A shorthand for if/else:</p>
            <div class="example-box">
                <div class="example-title">Syntax: condition ? trueValue : falseValue</div>
                <pre><code>let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"</code></pre>
            </div>
        `
    },
    4: {
        title: "Functions",
        content: `
            <h2>Functions</h2>
            <p>Functions are reusable blocks of code that perform a specific task.</p>

            <h3>Function Declaration</h3>
            <div class="example-box">
                <div class="example-title">Basic Function:</div>
                <pre><code>function greet() {
  console.log("Hello, World!");
}

greet(); // Calls the function</code></pre>
            </div>

            <h3>Function with Parameters</h3>
            <div class="example-box">
                <div class="example-title">With Parameters:</div>
                <pre><code>function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8</code></pre>
            </div>

            <h3>Arrow Functions</h3>
            <p>Modern way to write functions (ES6):</p>
            <div class="example-box">
                <div class="example-title">Arrow Function Syntax:</div>
                <pre><code>const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(4, 5)); // 20

// Shorthand for single expression:
const square = x => x * x;
console.log(square(5)); // 25</code></pre>
            </div>

            <h3>Function Scope</h3>
            <p>Variables defined inside a function are local to that function:</p>
            <div class="example-box">
                <div class="example-title">Scope Example:</div>
                <pre><code>let globalVar = "I'm global";

function myFunc() {
  let localVar = "I'm local";
  console.log(globalVar); // Works
  console.log(localVar);  // Works
}

myFunc();
console.log(globalVar); // Works
console.log(localVar);  // Error: localVar is not defined</code></pre>
            </div>

            <h3>Return Statement</h3>
            <p>Functions can return values:</p>
            <div class="example-box">
                <div class="example-title">Return Values:</div>
                <pre><code>function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));  // true
console.log(isEven(5));  // false</code></pre>
            </div>

            <h3>Default Parameters</h3>
            <div class="example-box">
                <div class="example-title">Default Values:</div>
                <pre><code>function welcome(name = "Guest") {
  console.log("Welcome, " + name);
}

welcome();        // "Welcome, Guest"
welcome("Alice"); // "Welcome, Alice"</code></pre>
            </div>

            <h3>Function Best Practices</h3>
            <ul>
                <li>Use meaningful function names</li>
                <li>Keep functions small and focused</li>
                <li>Add comments explaining what the function does</li>
                <li>Return values when appropriate</li>
            </ul>
        `
    },
    5: {
        title: "Arrays & Objects",
        content: `
            <h2>Arrays & Objects</h2>

            <h3>Arrays Basics</h3>
            <p>Arrays store multiple values in a single variable:</p>
            <div class="example-box">
                <div class="example-title">Creating Arrays:</div>
                <pre><code>let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Access elements by index (0-based)
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"</code></pre>
            </div>

            <h3>Array Methods</h3>
            <div class="example-box">
                <div class="example-title">Common Methods:</div>
                <pre><code>let arr = [1, 2, 3];

arr.push(4);        // Add to end: [1, 2, 3, 4]
arr.pop();          // Remove from end: [1, 2, 3]
arr.unshift(0);     // Add to start: [0, 1, 2, 3]
arr.shift();        // Remove from start: [1, 2, 3]

arr.length;         // Get array length: 3
arr.indexOf(2);     // Find index of element: 1

arr.includes(2);    // Check if contains: true</code></pre>
            </div>

            <h3>Array Iteration</h3>
            <div class="example-box">
                <div class="example-title">For Loop:</div>
                <pre><code>let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">forEach Method:</div>
                <pre><code>let colors = ["red", "green", "blue"];

colors.forEach(function(color) {
  console.log(color);
});</code></pre>
            </div>

            <div class="example-box">
                <div class="example-title">map Method (transform elements):</div>
                <pre><code>let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]</code></pre>
            </div>

            <h3>Objects Basics</h3>
            <p>Objects store key-value pairs:</p>
            <div class="example-box">
                <div class="example-title">Creating Objects:</div>
                <pre><code>let person = {
  name: "Alice",
  age: 30,
  city: "Amsterdam",
  isStudent: false
};

// Access properties
console.log(person.name);   // "Alice"
console.log(person["age"]); // 30

// Modify properties
person.age = 31;
person.email = "alice@example.com";</code></pre>
            </div>

            <h3>Object Methods</h3>
            <div class="example-box">
                <div class="example-title">Methods in Objects:</div>
                <pre><code>let person = {
  name: "Bob",
  greet: function() {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet(); // "Hi, I'm Bob"</code></pre>
            </div>

            <h3>Useful Object Methods</h3>
            <div class="example-box">
                <div class="example-title">Object Utilities:</div>
                <pre><code>let obj = { a: 1, b: 2, c: 3 };

Object.keys(obj);           // ["a", "b", "c"]
Object.values(obj);         // [1, 2, 3]
Object.entries(obj);        // [["a", 1], ["b", 2], ["c", 3]]

"a" in obj;                 // true
obj.hasOwnProperty("a");    // true</code></pre>
            </div>
        `
    },
    6: {
        title: "DOM & Events",
        content: `
            <h2>DOM & Events</h2>
            <p>The DOM (Document Object Model) allows JavaScript to interact with HTML elements.</p>

            <h3>Selecting Elements</h3>
            <div class="example-box">
                <div class="example-title">Query Selectors:</div>
                <pre><code>// Get by ID
let element = document.getElementById("myId");

// Get by class
let elements = document.getElementsByClassName("myClass");

// CSS selectors (modern)
let element = document.querySelector(".myClass");
let elements = document.querySelectorAll("p");</code></pre>
            </div>

            <h3>Modifying Content</h3>
            <div class="example-box">
                <div class="example-title">Change HTML & Text:</div>
                <pre><code>let element = document.getElementById("demo");

// Change text content
element.textContent = "Hello, World!";

// Change HTML content
element.innerHTML = "&lt;strong&gt;Bold Text&lt;/strong&gt;";</code></pre>
            </div>

            <h3>Modifying Styles</h3>
            <div class="example-box">
                <div class="example-title">Change CSS:</div>
                <pre><code>let element = document.getElementById("box");

element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.padding = "20px";
element.style.display = "none";</code></pre>
            </div>

            <h3>Classes & Attributes</h3>
            <div class="example-box">
                <div class="example-title">Modify Classes & Attributes:</div>
                <pre><code>let element = document.getElementById("btn");

// Add/Remove classes
element.classList.add("active");
element.classList.remove("disabled");
element.classList.toggle("highlight");

// Check class
element.classList.contains("active");

// Get/Set attributes
element.getAttribute("data-value");
element.setAttribute("disabled", "true");
element.removeAttribute("disabled");</code></pre>
            </div>

            <h3>Event Listeners</h3>
            <div class="example-box">
                <div class="example-title">Handling User Actions:</div>
                <pre><code>let button = document.getElementById("myBtn");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// With arrow function
button.addEventListener("click", () => {
  console.log("Button clicked!");
});</code></pre>
            </div>

            <h3>Common Events</h3>
            <div class="example-box">
                <div class="example-title">Event Types:</div>
                <pre><code>// User interactions
element.addEventListener("click", handleClick);      // Mouse click
element.addEventListener("mouseenter", handleHover); // Mouse enters
element.addEventListener("mouseleave", handleLeave); // Mouse leaves
element.addEventListener("double", handleDouble);    // Double click

// Form events
input.addEventListener("input", handleInput);        // Text input changes
form.addEventListener("submit", handleSubmit);       // Form submitted

// Keyboard events
element.addEventListener("keydown", handleKeyDown);  // Key pressed
element.addEventListener("keyup", handleKeyUp);      // Key released</code></pre>
            </div>

            <h3>Creating & Removing Elements</h3>
            <div class="example-box">
                <div class="example-title">Dynamic Elements:</div>
                <pre><code>// Create element
let newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";

// Add to page
document.body.appendChild(newDiv);

// Remove element
let element = document.getElementById("old");
element.remove();
// or
element.parentElement.removeChild(element);</code></pre>
            </div>

            <h3>Practical Example</h3>
            <div class="example-box">
                <div class="example-title">Interactive Example:</div>
                <pre><code>&lt;button id="toggleBtn"&gt;Toggle&lt;/button&gt;
&lt;div id="content"&gt;Hello!&lt;/div&gt;

&lt;script&gt;
let btn = document.getElementById("toggleBtn");
let content = document.getElementById("content");

btn.addEventListener("click", () => {
  content.style.display = 
    content.style.display === "none" ? "block" : "none";
});
&lt;/script&gt;</code></pre>
            </div>
        `
    }
};

function openLesson(lessonNumber) {
    const lessonDetail = document.getElementById('lesson-detail');
    const lessonContent = document.getElementById('lesson-content');
    const lesson = lessonsContent[lessonNumber];

    if (lesson) {
        const isCompleted = gameState.completedLessons.has(lessonNumber);
        
        lessonContent.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2>${lesson.title}</h2>
                </div>
                <div class="lesson-points">
                    ${isCompleted ? `<span class="badge badge-success">✓ Completed!</span>` : `<span class="badge">+50 points</span>`}
                </div>
            </div>
            ${lesson.content}
            <div style="margin-top: 3rem; display: flex; gap: 1rem; justify-content: center;">
                ${!isCompleted ? `
                    <button class="btn btn-primary" onclick="markLessonComplete(${lessonNumber})">
                        ✓ Mark as Complete & Earn Points
                    </button>
                ` : `
                    <button class="btn btn-primary" disabled style="opacity: 0.7; cursor: default;">
                        ✓ Completed!
                    </button>
                `}
                <button class="btn btn-secondary" onclick="closeLessonDetail()">
                    ← Close Lesson
                </button>
            </div>
        `;
        lessonDetail.classList.remove('hidden');
        lessonDetail.scrollIntoView({ behavior: 'smooth' });
        
        // Apply syntax highlighting if available
        if (window.hljs) {
            lessonContent.querySelectorAll('code').forEach(block => {
                hljs.highlightElement(block);
            });
        }
    }
}

function markLessonComplete(lessonNumber) {
    gameState.completeLesson(lessonNumber);
    updateStats();
    updateProgress();
    
    // Reopen the lesson to show completion status
    openLesson(lessonNumber);
    
    // Visual feedback on the card
    const card = document.querySelector(`.lesson-card:nth-child(${lessonNumber})`);
    if (card) {
        card.style.opacity = '0.7';
        const badge = card.querySelector('.completed-badge');
        if (!badge) {
            const completedBadge = document.createElement('div');
            completedBadge.className = 'completed-badge';
            completedBadge.innerHTML = '✓ Completed';
            card.appendChild(completedBadge);
        }
    }
}

function closeLessonDetail() {
    const lessonDetail = document.getElementById('lesson-detail');
    lessonDetail.classList.add('hidden');
}
