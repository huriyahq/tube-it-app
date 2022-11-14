// import { journey } from "./journey.js";

function onSubmit () {
    // Get submit button, reset button, search form and display text div.
    const submitBtn = document.getElementById("submit-btn");
    const resetBtn = document.getElementById("reset-btn");
    const searchForm = document.getElementById("search-form");
    const displayText = document.getElementById("display-text");

    // When this function is called, remove the hidden attribute from submitBtn.
    submitBtn.attributes.hidden ? submitBtn.removeAttribute("hidden") : "";


    // When the form is submitted, run this function.
        searchForm.addEventListener("submit", (e) => {
            // Prevent default form submit behaviour.
            e.preventDefault();
    
            // Get values and attributes for selected origin and destination.
            const origin = document.getElementById("origin-list");
            const originName = origin.options[origin.selectedIndex].value;
            const originId = origin.options[origin.selectedIndex].getAttribute("data-naptan-id");
            const originLine = origin.options[origin.selectedIndex].getAttribute("data-line-id");
            
            const destination = document.getElementById("destination-list");
            const destinationName = destination.options[destination.selectedIndex].value;
            const destinationId = destination.options[destination.selectedIndex].getAttribute("data-naptan-id");
            const destinationLine = destination.options[destination.selectedIndex].getAttribute("data-line-id");

            // Hide the search form.
            searchForm.attributes.hidden ? searchForm.addAttribute("hidden") : "";

            // Compare if destination and origin ids share same lineIds.
            if (originLine === destinationLine) {
                // If the origin and destination are on the same line, then the destination can be reached directly from that line.
                displayText.innerHTML = `You can travel from ${originName} to ${destinationName} directly via the ${originLine} line.`
            } else {
                // Otherwise the destination cannot be reached directly.
                displayText.innerHTML = `There is no direct route from ${originName} to ${destinationName}.`
                };
            
            resetBtn.attributes.hidden ? resetBtn.removeAttribute("hidden") : "";

        });
    };

export { onSubmit  };