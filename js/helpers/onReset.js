function onReset() {
    const resetBtn = document.getElementById("reset-btn");
    // When reset button is clicked, it resets all form values, hides destination dropdown and submit button and shows origin dropdown.
    resetBtn.addEventListener("click", () => {
        document.getElementById("header-text").innerHTML = "Select an origin station";
        document.getElementById("destination-list").classList.add("hidden");
        document.getElementById("submit-btn").classList.add("hidden");
        document.getElementById("journey").classList.add("hidden")
        document.getElementById("form").classList.remove("hidden");
        document.getElementById("header-section").classList.replace("hide-header", "show-header");
        document.getElementById("header").classList.remove("hidden");
    });
};

export { onReset };