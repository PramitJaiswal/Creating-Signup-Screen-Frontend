function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var isValid = true;

    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Please enter your name";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Please enter your email";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "Please enter your password";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    return isValid;
}