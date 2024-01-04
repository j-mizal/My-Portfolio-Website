

// Function to set dark mode state
function setDarkModeState() {
    const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');

    // Retrieve the dark mode state from localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Set the initial state based on the stored value
    if (isDarkMode) {
        toggle.classList.add('active');
        body.classList.add('active');
    }
}

// Toggle dark mode on click
function toggleDarkMode() {
    const toggle = document.getElementById('toggle');
    const body = document.querySelector('body');

    // Toggle the 'active' class on the button and body
    toggle.classList.toggle('active');
    body.classList.toggle('active');

    // Store the current dark mode state in localStorage
    const currentState = body.classList.contains('active');
    localStorage.setItem('darkMode', currentState);
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', setDarkModeState);

// Event listener for pageshow
window.addEventListener('pageshow', setDarkModeState);

// Event listener for toggle button click
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const body = document.querySelector('body');

    if (typeof Storage !== 'undefined') {
        // Toggle dark mode on click
        toggle.onclick = toggleDarkMode;
    } else {
        console.error('Web storage is not supported.');
    }
});


// Hamburger menu feature

document.addEventListener("DOMContentLoaded", function () {
    const parentContainer = document.querySelector('.nav');

    parentContainer.addEventListener('click', function (event) {
        const hamburger = event.target.closest('.hamburger');
        if (hamburger) {
            const hamburgerLinks = document.querySelector('.hamburger-links');
            hamburgerLinks.classList.toggle('active');
        }
    });
});
