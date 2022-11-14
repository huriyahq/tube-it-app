function onSubmit () {
    const submitBtn = document.getElementById("submit-btn");
    // When this function is called, remove the hidden attribute from submitBtn.
    submitBtn.attributes.hidden ? submitBtn.removeAttribute("hidden") : "";

    // Get entire search form, origin dropdown and destination dropdown.
    const searchForm = document.getElementById("search-form");
    const origin = document.getElementById("origin-list");
    const destination = document.getElementById("destination-list");

    // Create empty variables for origin/destination names, ids and lines.
    let  originName, destinationName, originId, destinationId, originLine, destinationLine;

    // This function runs when the form is submitted via the submit button.
    searchForm.addEventListener("submit", (e) => {
        // Prevent default form submit behaviour.
        e.preventDefault();

        // On submit, get origin and destination names, ids and lines.
        originName = origin.options[origin.selectedIndex].value;
        originId = origin.options[origin.selectedIndex].getAttribute("data-naptan-id");
        originLine = origin.options[origin.selectedIndex].getAttribute("data-line-id");

        destinationName = destination.options[destination.selectedIndex].value;
        destinationId = destination.options[destination.selectedIndex].getAttribute("data-naptan-id");
        destinationLine = destination.options[destination.selectedIndex].getAttribute("data-line-id");

        // Console.log to check if data is coming through correctly.
        // console.log(`Origin is ${originName}, ${originId}. It is on the ${originLine} line. Destination is ${destinationName}, ${destinationId}. It is on the ${destinationLine} line`);

        // Compare if destination and origin ids share same lineIds.
        if (originLine === destinationLine) {
            // If the origin and destination are on the same line, then the destination can be reached directly from that line.
            console.log(`You can travel from ${originName} to ${destinationName} directly via the ${originLine} line.`);
        } else {
            // Otherwise the destination cannot be reached directly.
            console.log(`There is no direct route from ${originName} to ${destinationName}.`);
        };
    });
};

export { onSubmit };