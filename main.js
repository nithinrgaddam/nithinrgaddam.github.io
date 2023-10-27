// Check the current page and underline the corresponding navigation link
let currentPage = window.location.pathname.split('/').pop();

if (currentPage === "index.html" || currentPage === "") {
    document.getElementById("homeLink").classList.add("active");
} else if (currentPage === "careers.html" || currentPage === "") {
    document.getElementById("careersLink").classList.add("active");
} else if (currentPage === "about.html") {
    document.getElementById("aboutLink").classList.add("active");
}

const textElement = document.getElementById('text');
const textToType = ['engineers.', 'statisticians.', 'scientists.', 'analysts.', 'thinkers.', 'innovators.'];

let wordIndex = 0;
let letterIndex = 0;

function typeWord() {
    if (letterIndex < textToType[wordIndex].length) {
        textElement.textContent += textToType[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWord, 100); // Typing speed
    } else {
        setTimeout(() => {
            textElement.textContent = ''; // Clear the word
            wordIndex = (wordIndex + 1) % textToType.length; // Move to next word
            letterIndex = 0; // Reset letter index
            typeWord(); // Start typing the next word
        }, 2000); // Pause before starting the next word
    }
}

typeWord();
