document.addEventListener('DOMContentLoaded', function() {
    // Check the current page and underline the corresponding navigation link
    let currentPage = window.location.pathname.split('/').pop();

    if (currentPage === "index.html" || currentPage === "") {
        document.getElementById("homeLink").classList.add("active");
    } else if (currentPage === "careers.html") {
        document.getElementById("careersLink").classList.add("active");
    } else if (currentPage === "about.html") {
        document.getElementById("aboutLink").classList.add("active");
    }

    // Text typing animation (only for pages that have the text element)
    const textElement = document.getElementById('text');
    if (textElement) {
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
    }

    // Update copyright year
    var currentYear = new Date().getFullYear();
    var copyright = document.getElementById('copyright');
    if (copyright) {
        copyright.innerHTML = '© ' + currentYear + ' <a href="index.html">Vritam</a> | All Rights Reserved';
    }
});
