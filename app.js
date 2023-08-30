// When the page content is fully loaded, execute the following code
document.addEventListener('DOMContentLoaded', function() {
    // Get the menu toggle and navigation links
    const menuToggle = document.getElementById('menu-toggle');
    const navlinks = document.getElementById('navlinks');

    // Add a click event listener to the menu toggle
    menuToggle.addEventListener('click', function() {
        // Toggle the "menu-open" class on the navigation links
        navlinks.classList.toggle('menu-open');
    });
});

// Get the HTML elements for the contact form inputs
const InputName = document.getElementById('name');
const InputEmail = document.getElementById('email');
const InputMessage = document.getElementById('message');

// Function to send the email
const sendEmail = () => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Gather the input values into an object
    const params = {
        name: InputName.value,
        email: InputEmail.value,
        message: InputMessage.value
    };

    // Define the service and template IDs for EmailJS
    const serviceID = "service_bsngs6t";
    const templateID = "template_8awldq9";

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Show a success message with an emoji
            alert("💌 Your email has been successfully sent. Thank you for reaching out!");

            // Clear the input fields after successful sending
            InputName.value = '';
            InputEmail.value = '';
            InputMessage.value = '';
        })
        .catch(error => {
            // Show an alert with the error message
            alert("⚠️ An error occurred while sending the email. Please try again later.");
            console.log(error);
        });
};
