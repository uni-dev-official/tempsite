// JavaScript for contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

