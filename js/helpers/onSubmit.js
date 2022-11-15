import { makeJourney } from "./makeJourney.js";
import { onReset } from "./onReset.js";

// Imported functions listed above this comment.

function onSubmit (originDD, destinationDD) {
    const submitBtn = document.getElementById("submit-btn");
    const form = document.getElementById("form");

    // When this function is called, remove the hidden class.
    submitBtn.classList.remove("hidden");

    // When the form is submitted, run this function.
        form.addEventListener("submit", (e) => {
            const jvOrigin = document.getElementById("jv__origin");
            const jvDestination = document.getElementById("jv__destination");
            const journeyText = document.getElementById("j-textbox__text");

            // Prevent default form submit behaviour.
            e.preventDefault();

            // Remove hidden class from journey element.
            document.getElementById("journey").classList.remove("hidden");

            // Hide the search form and the header.
            form.classList.add("hidden");
            document.getElementById("header-section").classList.replace("show-header", "hide-header");
            document.getElementById("header").classList.add("hidden");


            // Get values and attributes for selected origin and destination.
            let originName = originDD.options[originDD.selectedIndex].value;
            let originId = originDD.options[originDD.selectedIndex].getAttribute("data-naptan-id");
            let originLine = originDD.options[originDD.selectedIndex].getAttribute("data-line-id");
            
            let destinationName = destinationDD.options[destinationDD.selectedIndex].value;
            let destinationId = destinationDD.options[destinationDD.selectedIndex].getAttribute("data-naptan-id");
            let destinationLine = destinationDD.options[destinationDD.selectedIndex].getAttribute("data-line-id");

            // Compare if destination and origin ids share same lineIds.
            if (originLine === destinationLine) {
                // If the origin and destination are on the same line, then the destination can be reached directly from that line.
                jvOrigin.innerHTML = `${originName}`;
                jvDestination.innerHTML = `${destinationName}`;
                journeyText.innerHTML = `You can travel from ${originName} to ${destinationName} directly via the ${originLine} line.`
            } else {
                // Otherwise the destination cannot be reached directly.
                journeyText.innerHTML = `There is no direct route from ${originName} to ${destinationName}.`
            };
            
            onReset();
        });
    };

export { onSubmit  };