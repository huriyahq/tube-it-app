import { populateDD } from "./helpers/populateDD.js";
import { onSubmit } from "./helpers/onSubmit.js";
// Imported functions listed above this comment.

// Get origin dropdown list and destination dropdown list.
const headerText = document.getElementById("header-text");
const form = document.getElementById("form");
const originDD = document.getElementById("origin-list");
const destinationDD = document.getElementById("destination-list");

// Call the populateDD function to get data for the dropdown lists. This will add list of stations to the dropdown list passed as argument.
populateDD(originDD);
populateDD(destinationDD);

form.addEventListener("change", (e) => {
        const originName = originDD.options[originDD.selectedIndex].value;
        const destinationName = destinationDD.options[destinationDD.selectedIndex].value;

        // Display text to tell the user which origin station they have selected.
        headerText.innerHTML = `You selected ${originName}`;

        // Show destination dropdown if the user has selected something from the origin dropdown. Otherwise do nothing (keeps destination dropdown hidden).
        originDD.value ? destinationDD.classList.remove("hidden") : "";
        // Display text to tell the user which stations they have selected.
        destinationDD.value ? headerText.innerHTML = `You selected ${originName} to ${destinationName}` : `You selected ${originName}`;
        
        // Call onSubmit() to display submit button if values for origin and destination are not false. Otherwise do nothing (keeps submit button hidden).
        originDD.value && destinationDD.value ? onSubmit(originDD, destinationDD) : "";
    });