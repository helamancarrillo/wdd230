
const hamButton = document.querySelector('#menu');
const navElement = document.querySelector('#animateme');

hamButton.addEventListener('click', () => {
	navElement.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//last modified 

function displayLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}

window.onload = displayLastModified;


// local storage

const welcomeMessage = document.getElementById('local-storage');

    if (welcomeMessage) {
        const lastVisit = localStorage.getItem('lastVisit');
        const currentVisit = Date.now();

        if (lastVisit) {
            const daysBetween = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
            if (daysBetween < 1) {
                welcomeMessage.textContent = 'Back so soon! Awesome!';
            } else if (daysBetween === 1) {
                welcomeMessage.textContent = 'You last visited 1 day ago.';
            } else {
                welcomeMessage.textContent = `You last visited ${daysBetween} days ago.`;
            }
        } else {
            welcomeMessage.textContent = 'Welcome! Let us know if you have any questions.';
        }

        localStorage.setItem('lastVisit', currentVisit);
    } else {
        console.error('Element with id "visit-message" not found. Skipping visit message update.');
    }
