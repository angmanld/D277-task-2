function validateEmail() {
    const email = document.getElementById("email").value;
    const emailConfirm = document.getElementById("emailConfirm").value;

    if (email !== emailConfirm) {
        alert("Emails do not match. Please make sure the email fields match.");
    }
}