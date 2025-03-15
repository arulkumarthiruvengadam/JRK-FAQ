document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    // Reset error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    // Validate Name
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    }

    // Validate Email
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
    }

    // Validate Message
    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required.";
        isValid = false;
    }

    // Show success message if the form is valid
    if (isValid) {
        document.getElementById("successMessage").innerText = "Your message has been sent successfully!";
        document.getElementById("contactForm").reset();
    }
});
