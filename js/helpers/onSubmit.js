import { onReset } from "./onReset.js";
// Imported functions listed above this comment.

function onSubmit (originDD, destinationDD) {
    const submitBtn = document.getElementById("submit-btn");
    const searchForm = document.getElementById("search-form");
    const searchOptions =  document.getElementById("search-options");
    const displayText = document.getElementById("display-text");
    
    // When this function is called, remove the hidden attribute from submitBtn.
    submitBtn.attributes.hidden ? submitBtn.removeAttribute("hidden") : "";
    // When the form is submitted, run this function.
        searchForm.addEventListener("submit", (e) => {
            // Prevent default form submit behaviour.
            e.preventDefault();
    
            // Get values and attributes for selected origin and destination.
            let originName = originDD.options[originDD.selectedIndex].value;
            let originId = originDD.options[originDD.selectedIndex].getAttribute("data-naptan-id");
            let originLine = originDD.options[originDD.selectedIndex].getAttribute("data-line-id");
            
            let destinationName = destinationDD.options[destinationDD.selectedIndex].value;
            let destinationId = destinationDD.options[destinationDD.selectedIndex].getAttribute("data-naptan-id");
            let destinationLine = destinationDD.options[destinationDD.selectedIndex].getAttribute("data-line-id");

            searchOptions.hidden = true;
            // Compare if destination and origin ids share same lineIds.
            if (originLine === destinationLine) {
                // If the origin and destination are on the same line, then the destination can be reached directly from that line.
                displayText.innerHTML = `You can travel from ${originName} to ${destinationName} directly via the ${originLine} line.`
            } else {
                // Otherwise the destination cannot be reached directly.
                displayText.innerHTML = `There is no direct route from ${originName} to ${destinationName}.`
            };
            
            onReset(destinationDD, displayText, submitBtn, searchOptions);
        });
    };

export { onSubmit  };