const email_input = document.querySelector("#email");
const email_error_msg = document.querySelector(".email-wrapper .error-msg");

const postalcode_input = document.querySelector("#postal-code");
const postalcode_error_msg = document.querySelector(".postal-code-wrapper .error-msg");

const password_input = document.querySelector("#password");
const password_error_msg = document.querySelector(".password-wrapper .error-msg");

const password_repeat_input = document.querySelector("#password-repeat");
const password_repeat_error_msg = document.querySelector(".password-repeat-wrapper .error-msg");

const submit_button = document.querySelector("#submit-button");

const form = document.querySelector("form");

email_input.addEventListener("input", (e) => {
    email_error_msg.innerText = "";
    email_error_msg.style.display = "none";
    if(email_input.validity.typeMismatch){
        email_error_msg.innerText = "Email should conform to: <localname>@<subdomain><domain>!"
        email_error_msg.style.display = "inline-block";
    }
    else if(email_input.validity.valueMissing){
        email_error_msg.innerText = "Field should not be empty!"
        email_error_msg.style.display = "inline-block";
    }
});

postalcode_input.addEventListener("input", (e) => {
    postalcode_error_msg.innerText = "";
    postalcode_error_msg.style.display = "none";
    if(postalcode_input.validity.tooLong || postalcode_input.validity.tooShort){
        console.log("postal-code");
        postalcode_error_msg.innerText = "Postal code should be 4 characters long!";
        postalcode_error_msg.style.display = "inline-block";
    }
    else if(postalcode_input.validity.valueMissing){
        postalcode_error_msg.innerText = "Field should not be empty!"
        postalcode_error_msg.style.display = "inline-block";
    }
});

password_input.addEventListener("input", (e) => {
    password_error_msg.innerText = "";
    password_error_msg.style.display = "none";
    if(password_input.validity.tooShort || password_input.validity.tooLong){
        password_error_msg.innerText = "Password should be between 6 and 30 characters!";
        password_error_msg.style.display = "inline-block";
    }
});

submit_button.addEventListener("click", (e) => {
    password_repeat_error_msg.style.display = "none";
    password_repeat_error_msg.innerText = "";
    if(password_input.value !== password_repeat_input.value){
        password_repeat_error_msg.style.display = "inline-block";
        password_repeat_error_msg.innerText = "Passwords do not match";
    }
    else if(form.checkValidity()){
        console.log("USPESHNO BATE");
    }
    e.preventDefault(); 
})

form.addEventListener("input", (e) => {
    console.log("test");
});