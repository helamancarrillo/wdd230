function displayLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}

window.onload = displayLastModified;

//nav stuff

const hamButton = document.querySelector('#menu');
const navElement = document.querySelector('#animateme');

hamButton.addEventListener('click', () => {
	navElement.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//dark button

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const sections = document.querySelector(".card");
const title1 = document.querySelector("#title1");
//const darkHeadFoot = document.querySelector(".darkHeadFoot"); future enhancement


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("◐")) {
		main.style.background = "#000";
        sections.style.color = "#000";
        title1.style.color = "#fff";
		//main.style.color = "#fff";
		modeButton.textContent = "◑";
		//darkHeadFoot.style.background = "#fff";

	} else {
		main.style.background = "#fff";
		//main.style.color = "#000";
		modeButton.textContent = "◐";
        sections.style.color = "#000";
        title1.style.color = "#000";
		//darkHeadFoot.style.background = "#013e4f";

	}
});

// Counter Stuff


const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
 
