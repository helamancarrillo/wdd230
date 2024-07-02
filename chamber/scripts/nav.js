
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
