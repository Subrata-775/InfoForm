const password = document.getElementById("pass");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "Hide Password";
    } else {
        password.type = "password";
        toggle.textContent = "Show Password";
    }

});