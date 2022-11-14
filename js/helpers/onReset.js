function onReset(destinationDD, displayText, submitBtn, searchOptions) {
    const resetBtn = document.getElementById("reset-btn");

    // Display the reset button.
    resetBtn.attributes.hidden ? resetBtn.removeAttribute("hidden") : "";
    // When reset button is clicked, it resets all form values, hides destination dropdown and submit button and shows origin dropdown.
    resetBtn.addEventListener("click", () => {
        destinationDD.hidden = true;
        displayText.innerHTML = "";
        submitBtn.hidden = true;
        searchOptions.hidden = false;
        resetBtn.hidden = true;
    });
};

export { onReset };