// Basic JavaScript Program Structure

// 1. DOM Elements
const myButton = document.getElementById('myButton');

// 2. Event Listeners
myButton.addEventListener('click', handleButtonClick);

// 3. Function Definitions
function handleButtonClick() {
    console.log('Button was clicked!');
    // we can use any of the function here console or alert
    alert('Hello! You clicked the button.');
}

// 4. Initialization (runs when page loads)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully!');
    initializeApp();
});

function initializeApp() {
    console.log('App initialized');
    // initialization code here
}

// 5. Utility Functions (helper functions)
function logMessage(message) {
    console.log(`[INFO] ${message}`);
}

// 6. API Calls (if needed)
// async function fetchData() {
//     try {
//         const response = await fetch('your-api-url');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
