import { makeJourney } from "./makeJourney.js";
import { onReset } from "./onReset.js";

// Imported functions listed above this comment.

function onSubmit (originDD, destinationDD) {
    const submitBtn = document.getElementById("submit-btn");
    const searchForm = document.getElementById("search-form");
    const searchOptions =  document.getElementById("search-options");


    // When this function is called, remove the hidden attribute from submitBtn.
    submitBtn.attributes.hidden ? submitBtn.removeAttribute("hidden") : "";
    // When the form is submitted, run this function.
        searchForm.addEventListener("submit", (e) => {
            const originResult = document.getElementById("result-origin");
            const destinationResult = document.getElementById("result-destination");
            const resultText = document.getElementById("result-text");

            // Prevent default form submit behaviour.
            e.preventDefault();
            
            // Hide the search form and the header.
            searchForm.classList.add("hidden");
            document.getElementById("header").classList.add("hidden");
            // Change logo background colour to white.
            document.getElementById("logo").style.backgroundColor = "var(--clr-white)";
            // Remove hidden class to show the result div.
            document.getElementById("result").classList.remove("hidden");

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
                originResult.innerHTML = `${originName}`;
                destinationResult.innerHTML = `${destinationName}`;
                resultText.innerHTML = `You can travel from ${originName} to ${destinationName} directly via the ${originLine} line.`
            } else {
                // Otherwise the destination cannot be reached directly.
               resultText.innerHTML = `There is no direct route from ${originName} to ${destinationName}.`
            };
            
            onReset();
        });
    };

export { onSubmit  };