// ==================== GAMIFICATION SYSTEM ====================
class GameState {
    constructor() {
        const saved = localStorage.getItem('jsGameState');
        const data = saved ? JSON.parse(saved) : {};
        
        this.points = data.points || 0;
        this.completedLessons = data.completedLessons || new Set();
        this.completedExercises = data.completedExercises || new Set();
        this.achievements = data.achievements || new Set();
        this.codeRunCount = data.codeRunCount || 0;
        this.totalTime = data.totalTime || 0;
    }

    save() {
        localStorage.setItem('jsGameState', JSON.stringify({
            points: this.points,
            completedLessons: Array.from(this.completedLessons),
            completedExercises: Array.from(this.completedExercises),
            achievements: Array.from(this.achievements),
            codeRunCount: this.codeRunCount,
            totalTime: this.totalTime
        }));
    }

    addPoints(amount, message = '') {
        const oldPoints = this.points;
        this.points += amount;
        this.save();
        
        if (message) {
            showToast(`+${amount} points! ${message}`, 'success');
        }
        
        updateStats();
        return this.points;
    }

    completeLesson(lessonNum) {
        if (!this.completedLessons.has(lessonNum)) {
            this.completedLessons.add(lessonNum);
            this.addPoints(50, 'Lesson completed!');
            this.checkAchievements();
            this.save();
        }
    }

    completeExercise(exerciseNum) {
        if (!this.completedExercises.has(exerciseNum)) {
            this.completedExercises.add(exerciseNum);
            this.addPoints(100, 'Exercise completed! 🎉');
            celebrateAchievement();
            this.checkAchievements();
            this.save();
        }
    }

    unlockAchievement(achievementId) {
        if (!this.achievements.has(achievementId)) {
            this.achievements.add(achievementId);
            showToast(`🏆 Achievement Unlocked!`, 'success');
            celebrateAchievement();
            this.save();
        }
    }

    checkAchievements() {
        // First Steps - complete first lesson
        if (this.completedLessons.size >= 1) {
            this.unlockAchievement('first-lesson');
        }

        // Quick Learner - complete 3 lessons
        if (this.completedLessons.size >= 3) {
            this.unlockAchievement('quick-learner');
        }

        // Exercise Master - complete all 6 exercises
        if (this.completedExercises.size === 6) {
            this.unlockAchievement('exercise-master');
        }

        // Sandbox Explorer - run 10 pieces of code
        if (this.codeRunCount >= 10) {
            this.unlockAchievement('sandbox-explorer');
        }

        // Code Warrior - earn 500 points
        if (this.points >= 500) {
            this.unlockAchievement('code-warrior');
        }

        // Master Coder - complete all lessons and exercises
        if (this.completedLessons.size === 6 && this.completedExercises.size === 6) {
            this.unlockAchievement('master-coder');
        }
    }

    getProgress() {
        const totalItems = 6 + 6; // 6 lessons + 6 exercises
        const completed = this.completedLessons.size + this.completedExercises.size;
        return (completed / totalItems) * 100;
    }
}

let gameState = new GameState();

// ==================== MOBILE MENU FUNCTIONALITY ====================
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    
    if (navMenu && hamburger) {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    
    if (navMenu && hamburger) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (navbar && !navbar.contains(e.target)) {
        closeMobileMenu();
    }
});

// Navigation functionality
function navigateTo(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));

    // Show selected section
    const targetSection = `${section}-section`;
    const element = document.getElementById(targetSection);
    if (element) {
        element.classList.add('active');
    }

    // Update URL hash
    window.location.hash = section;
    updateProgress();
}

// Update stats display
function updateStats() {
    const pointsEl = document.getElementById('points');
    const achievementsEl = document.getElementById('achievements');
    
    if (pointsEl) pointsEl.textContent = gameState.points;
    if (achievementsEl) achievementsEl.textContent = gameState.achievements.size;

    // Update achievement displays
    document.querySelectorAll('.achievement').forEach(el => {
        const achievementId = el.dataset.achievement;
        if (gameState.achievements.has(achievementId)) {
            el.classList.add('unlocked');
        }
    });
}

// Update progress bar
function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressPercent = document.getElementById('progress-percent');
    
    const progress = gameState.getProgress();
    
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    if (progressPercent) {
        progressPercent.textContent = Math.round(progress) + '%';
    }
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Celebrate achievement
function celebrateAchievement() {
    createConfetti();
    playSound();
}

// Create confetti effect
function createConfetti() {
    const colors = ['#f39c12', '#3498db', '#27ae60', '#e74c3c', '#9b59b6'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confetti-fall ${2 + Math.random()}s ease-in forwards`;
        confetti.style.transform = `rotateZ(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Play success sound (optional)
function playSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

// Load section from URL hash
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash);
    updateStats();
    updateProgress();
});

// ==================== SANDBOX FUNCTIONALITY ====================
let consoleOutput = [];
let executionStartTime = 0;

// Override console.log
const originalLog = console.log;
console.log = function(...args) {
    originalLog.apply(console, args);
    addConsoleOutput(args.join(' '), 'log');
};

// Override console.error
const originalError = console.error;
console.error = function(...args) {
    originalError.apply(console, args);
    addConsoleOutput(args.join(' '), 'error');
};

// Override console.warn
const originalWarn = console.warn;
console.warn = function(...args) {
    originalWarn.apply(console, args);
    addConsoleOutput(args.join(' '), 'warning');
};

function addConsoleOutput(message, type = 'log') {
    const outputDiv = document.getElementById('console-output');
    if (!outputDiv) return;

    const logElement = document.createElement('div');
    logElement.className = `console-log ${type}`;
    logElement.textContent = message;
    logElement.style.animation = 'fadeInUp 0.3s ease';
    outputDiv.appendChild(logElement);
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function runCode() {
    const codeInput = document.getElementById('code-input');
    const executionInfo = document.getElementById('execution-info');
    const code = codeInput.value;

    // Clear console
    clearConsole();
    consoleOutput = [];

    if (!code.trim()) {
        addConsoleOutput('💡 Write some JavaScript code to execute!', 'warning');
        return;
    }

    try {
        executionStartTime = performance.now();
        
        // Execute the code
        eval(code);
        
        const executionTime = (performance.now() - executionStartTime).toFixed(2);
        if (executionInfo) {
            executionInfo.textContent = `✓ Executed in ${executionTime}ms`;
            executionInfo.style.color = '#27ae60';
        }
        
        // Award points and track
        gameState.codeRunCount++;
        gameState.addPoints(10, 'Code executed!');
        gameState.checkAchievements();
        
    } catch (error) {
        const executionTime = (performance.now() - executionStartTime).toFixed(2);
        if (executionInfo) {
            executionInfo.textContent = `✗ Error after ${executionTime}ms`;
            executionInfo.style.color = '#e74c3c';
        }
        addConsoleOutput(`❌ Error: ${error.message}`, 'error');
    }
}

function resetSandbox() {
    document.getElementById('code-input').value = `let message = 'Hello, JavaScript!';
console.log(message);`;
    clearConsole();
}

function clearConsole() {
    const outputDiv = document.getElementById('console-output');
    if (outputDiv) {
        outputDiv.innerHTML = '';
    }
    const executionInfo = document.getElementById('execution-info');
    if (executionInfo) {
        executionInfo.textContent = '';
    }
    consoleOutput = [];
}

// Allow running code with Ctrl+Enter
document.addEventListener('keydown', (e) => {
    const codeInput = document.getElementById('code-input');
    if (e.ctrlKey && e.key === 'Enter' && codeInput && codeInput === document.activeElement) {
        runCode();
    }
});
