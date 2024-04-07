document.addEventListener("DOMContentLoaded", function() {
    // Get all the news buttons
    var newsButtons = document.querySelectorAll('.slider__btn');

    // Loop through each news button
    newsButtons.forEach(function(button) {
        // Add a click event listener to each button
        button.addEventListener('click', function() {
            // Remove the active class from all buttons
            newsButtons.forEach(function(btn) {
                btn.classList.remove('slider__btn--active');
            });

            // Add the active class to the clicked button
            button.classList.add('slider__btn--active');
        });
    });
});