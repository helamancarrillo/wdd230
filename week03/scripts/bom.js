
 /* 
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const ul = document.querySelector("#list"); 

button.addEventListener("click", () =>{ 
    if (input.value != "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        
        li.appendChild(deleteButton);
        list.appendChild(li);
        
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
        });

        input.value = "";
        input.focus();
        } else {
            alert("Enter a book and chapter");
            input.focus();
        }
    }); 
// */ 

const input = document.querySelector("#favchap");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    } else {
        alert("Please enter a chapter.");
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}









