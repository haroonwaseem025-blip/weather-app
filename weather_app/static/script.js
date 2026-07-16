// Wait until page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select form and button
    const form = document.querySelector("form");
    const button = document.querySelector("button");

    // When form is submitted
    form.addEventListener("submit", function () {

        // Change button text
        button.innerText = "Loading...";

        // Disable button to prevent multiple clicks
        button.disabled = true;

    });

});