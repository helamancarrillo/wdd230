
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

