

const gridbutton = document.querySelector("#gridB");
const listbutton = document.querySelector("#listB");
const display = document.querySelector("#main-div");



gridbutton.addEventListener("click", () => {
	 
	display.classList.add("gridC");
	display.classList.remove("listB");
});

listbutton.addEventListener("click", showList);  

function showList() {
	display.classList.add("listB");
	display.classList.remove("gridC");
}