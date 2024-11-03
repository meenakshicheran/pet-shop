// Get the navigation menu
const nav = document.querySelector('nav');

// Add event listener to toggle navigation menu on small screens
nav.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Get the pet cards
const petCards = document.querySelectorAll('.pet-card');

// Add event listener to each pet card to show more information
petCards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('show-more');
    });
});

// Get the contact form
const contactForm = document.querySelector('#contact-form');
// Add event listener to contact form to send email
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Send email logic here
    alert('Email sent!');
});

