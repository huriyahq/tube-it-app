import { getJourney } from "./getJourney.js";
import { setLineColour } from "./setLineColour.js";

const form = document.forms["form"];
const search = document.getElementById("btn_search");
const reset = document.getElementById("btn_reset");
const selectDeparture = form.departure;
const selectDestination = form.destination;
const hiddenForm = form.classList.contains("hide");
// const journey = document.getElementById("journey");
const journeyClasses = document.getElementById("journey").classList;
const header = document.getElementById("header");
const headerText = document.getElementById("header__text");

function handleSubmit(e) {
    // Prevent default behaviour.
    e.preventDefault();

    const departureStation = selectDeparture.value;

    const destinationStation = selectDestination.value;

        // If the form is not hidden, hide it.
        if (!hiddenForm) {
            form.classList.add("hide");
        }

        // Show the journey div.
        journeyClasses.remove("journey_hide");
        journeyClasses.add("journey_show");
        // Make the header background transparent.
        header.classList.replace("header", "header_transparent");
        // Remove header text.
        headerText.innerText = "";
        // Add event listener to the reset button.
        reset.addEventListener("click", handleReset);
        getJourney(departureStation, destinationStation);
};

function handleReset() {
    // Reset all form values and displayed/hidden elements.
    form.reset();

    // Show the form again.
    form.classList.remove("hide");

    // Hide the journey div again.
    journeyClasses.remove("journey_show");
    journeyClasses.add("journey_hide");

    // Hide the destination list.
    selectDestination.classList.add("hide");
    // Hide the search button.
    search.classList.add("hide");
    // Show header background again.
    header.classList.replace("header_transparent", "header");
    // Add header text.
    headerText.innerText = "Where are you leaving from?";

    document.getElementById("journey__station_departure").innerText="";
    document.getElementById("journey__station_destination").innerText="";
    document.getElementById("journey__instructions").innerText="";
    document.getElementById("journey__box__text").innerText="";
   };

export { handleSubmit, handleReset };