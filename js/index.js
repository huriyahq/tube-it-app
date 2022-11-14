import { populateDD } from "./helpers/populateDD.js";
import { onSubmit } from "./helpers/onSubmit.js";
// Imported functions listed above this comment.

// Get the origin dropdown list and destination dropdown list to pass as arguments.
const originDD = document.getElementById("origin-list");
const destinationDD = document.getElementById("destination-list");

// Call the populateDD function to get data for the dropdown lists. This will add list of stations to the dropdown list passed as argument.
populateDD(originDD);
populateDD(destinationDD);

// Function to track selection when it's changed on dropdown list. Takes dropdown list as argument.
function setSelection (dropdown) {

    // Get empty div for displaying text about user selection.
    let displayText = document.getElementById("display-text");

    dropdown.addEventListener("change", (e) => {
        // Declare empty variables to use in function.
        let commonName, stationNaptan, naptanId, lineId;

        // Get the commonName, naptanId, stationNaptan and lineId of the selected item from the list.
        commonName = e.target.options[e.target.selectedIndex].value;
        naptanId = e.target.options[e.target.selectedIndex].dataset.naptanId;
        stationNaptan = e.target.options[e.target.selectedIndex].dataset.stationNaptan;
        lineId = e.target.options[e.target.selectedIndex].dataset.lineId;

        // Display text to tell the user which station they have selected.
        displayText.innerHTML = `You selected ${commonName}`;

        // Check if all option attributes are working in console.
        // console.log(commonName, stationNaptan, naptanId, lineId);

        // Show destination dropdown only if the user has selected something from the origin dropdown. Otherwise do nothing (keeps destination dropdown hidden).
        originDD.value ? destinationDD.removeAttribute("hidden") : "";
        
        // Call onSubmit() if values for origin and destination are not false. Otherwise do nothing (keeps submit button hidden).
        originDD.value && destinationDD.value ? onSubmit() : "";
    });
};

// Call setSelection function passing origin and destination dropdown lists as arguments.
setSelection(originDD);
setSelection(destinationDD);

