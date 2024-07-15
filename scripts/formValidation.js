//Password

const passw1 = document.querySelector("#passid1");
const passw2 = document.querySelector("#passid2");
const fb = document.querySelector("#feedback");

passw2.addEventListener("focusout", controlarPassword)

function controlarPassword () {
    

    if (passw1.value !== passw2.value) {
        passw1.value=""
        passw2.value=""
        passw1.focus()
        fb.textContent = "Values do not match. Try again"
    } else {
        fb.textContent=""

    }
}

//Email

const emailconf = document.querySelector("#email1");
const fb2 = document.querySelector("#feedback2");

emailconf.addEventListener("focusout", controlarEmail);

function controlarEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    
    if (!emailPattern.test(emailconf.value)) {
        emailconf.value = "";
        emailconf.focus();
        fb2.textContent = "Invalid email address. Please enter a valid @byui.edu email.";
    } else {
        fb2.textContent = "";
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");


range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

//Red color labels
