function onSubmit () {
    const submitBtn = document.getElementById("submit-btn");
    // When this function is called, remove the hidden attribute from submitBtn.
    submitBtn.attributes.hidden ? submitBtn.removeAttribute("hidden") : "";

    // Get entire search form, origin dropdown and destination dropdown.
    const searchForm = document.getElementById("search-form");
    const origin = document.getElementById("origin-list");
    const destination = document.getElementById("destination-list");

    // Create empty variables for originSelection and destinationSelection.
    let originSelection, destinationSelection;

    // This function runs when the form is submitted via the submit button.
    searchForm.addEventListener("submit", (e) => {
        // Prevent default form submit behaviour.
        e.preventDefault();

        // On submit, get the naptanId from the user's origin selection.
        originSelection = origin.options[origin.selectedIndex].getAttribute("data-naptan-id");
        // On submit, get the naptanId from the user's destination selection.
        destinationSelection = destination.options[destination.selectedIndex].getAttribute("data-naptan-id");

        // Use console.log to check if the origin and destination id's have come through on submit.
        console.log("Origin Station:", originSelection);
        console.log("Destination Station:", destinationSelection);

        // Compare if destination and origin ids share same lineIds. 
        // If yes, then the destination can be reached directly on the origin station's line.
        // If no, then the user cannot reach their destination directly.
    });
};

export { onSubmit };