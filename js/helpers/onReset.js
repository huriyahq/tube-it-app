function onReset() {
    const resetBtn = document.getElementById("reset-btn");
    // When reset button is clicked, it resets all form values, hides destination dropdown and submit button and shows origin dropdown.
    resetBtn.addEventListener("click", () => {
        document.getElementById("destination-list").hidden = true;
        document.getElementById("header-text").innerHTML = "Select an origin station";
        document.getElementById("submit-btn").hidden = true;
        document.getElementById("search-options").classList.remove("hidden");
        document.getElementById("search-result").classList.add("hidden");
    });
};

export { onReset };