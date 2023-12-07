'use strict';

// Assigning all the necessary classes to variables so that it can be accessed at multiple places
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

// Printing all the content on all buttons
/* for (let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].textContent); 
}     */

// Code for popping the message with overlay when the button is clicked and removing it when not needed 
/* for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function() {
        console.log('Button Clicked');
        modal.classList.remove('hidden') // Removing the hidden feature from the modal class
        overlay.classList.remove('hidden') // Removing the hidden feature from the overlay class
    }) 
}     */

/* // Once the pop-up appears we need to remove it when we click the close button for it to happen
btnCloseModal.addEventListener('click', function() {
    modal.classList.add('hidden'); // Adding the hidden feature from the modal class
    overlay.classList.add('hidden'); // Adding the hidden feature from the overlay class
})

// The same thing should happen once the user clicks on the overlay
overlay.addEventListener('click', function() {
    modal.classList.add('hidden'); // Adding the hidden feature from the modal class
    overlay.classList.add('hidden'); // Adding the hidden feature from the overlay class
}) */

/* As we can see that the function to add back the hidden feature is being re-used again, that is not a good
practice and instead we can create a function out of it and add it back to multiple places. */

// Function for the pop-up to occur
const openModal = function() {
    modal.classList.remove('hidden') // Removing the hidden feature from the modal class
    overlay.classList.remove('hidden') // Removing the hidden feature from the overlay class
}

// Function for removing the overlay
const closeModal = function() {
    modal.classList.add('hidden'); // Adding the hidden feature from the modal class
    overlay.classList.add('hidden'); // Adding the hidden feature from the overlay class
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
}

// We are not adding brackets to closeModal function because we want the function to execute only when there is a click. 
btnCloseModal.addEventListener('click', closeModal); 
overlay.addEventListener('click', closeModal);

// Now we need the pop-up tp close when we click esc button
/* document.body.addEventListener("keydown", function(event) { // keydown is when the key is pressed and keyup is when the button is released
    console.log(event.key); // This will record which button is clicked
})     */

/* document.body.addEventListener("keydown", function(event) { 
    // We need the pop-up to go away when the button is escape button
    if (event.key === 'Escape') {
        if (!modal.classList.contains('hidden')) { // Escape should work only when the popup is present
            closeModal();
        }
    } 
}) */    

// We can rewrite the multiple if loops with && 

document.body.addEventListener("keydown", function(event) { 
    // We need the pop-up to go away when the button is escape button
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) { // Escape should work only when the popup is present
            closeModal();
    }        
});    