import { setLineColour } from "./setLineColour.js";

const form = document.forms["form"];
const search = document.getElementById("btn_search");
const reset = document.getElementById("btn_reset");
const selectDeparture = form.departure;
const selectDestination = form.destination;
const hiddenForm = form.classList.contains("hide");
// const journey = document.getElementById("journey");
const journeyClasses = document.getElementById("journey").classList;
const journeyWrapperClasses = document.getElementById("journey_wrapper").classList;
const header = document.getElementById("header");
const headerText = document.getElementById("header__text");

function handleSubmit(e) {
    // Prevent default behaviour.
    e.preventDefault();

    const departureStation = selectDeparture.value;
    const departureLine = selectDeparture.options[selectDeparture.selectedIndex].getAttribute("data-line-name");
    const departureNaptanId = selectDeparture.options[selectDeparture.selectedIndex].getAttribute("data-naptan-id");

    const destinationStation = selectDestination.value;
    const destinationLine = selectDestination.options[selectDestination.selectedIndex].getAttribute("data-line-name");

    if ((departureStation !== "") && (destinationStation !== "")) {
        // If both fields are filled in, do this:
        const departure = document.getElementById("journey__station_departure");
        const destination = document.getElementById("journey__station_destination");
        const journeyText = document.getElementById("journey__box__text");

        // If the form is not hidden, hide it.
        if (!hiddenForm) {
            form.classList.add("hide");
        }

        // If the journey div is hidden, show it.
        if (journeyClasses.contains("journey_hide")) {
            journeyClasses.remove("journey_hide");
            journeyClasses.add("journey_show");
        }

        // Make the header background transparent.
        header.classList.replace("header", "header_transparent");
        // Remove header text.
        headerText.innerText = "";
        // Add event listener to the reset button.
        reset.addEventListener("click", handleReset);
        
        if (departureLine === destinationLine) {
            // If the departure and destination station are on the same line, do this:

            // Show the div that displays the journey.
            journeyWrapperClasses.replace("journey_hide", "journey_show");

            // Set colour of line.
            setLineColour(departureLine);

            // Use selected stations for displayed station names.
            departure.innerText = `${departureStation}`;
            destination.innerText = `${destinationStation}`;

            // Return the journey text.
            return journeyText.innerText = `You can travel from ${departureStation} to ${destinationStation} directly via the ${departureLine} line.`;
        } else {
            // Otherwise, do this:
            // journeyWrapperClasses.replace("journey_show", "journey_hide");
            return journeyText.innerText = `There is no direct route from ${departureStation} to ${destinationStation}.`;
        }
    } else {
        console.log("Something went wrong.");
  };
};

function handleReset() {
    // Reset all form values and displayed/hidden elements.
    form.reset();

    // Show the form again.
    form.classList.remove("hide");

    // Hide the journey div again.
    if (journeyClasses.contains("journey_show")) {
        journeyClasses.remove("journey_show");
        journeyClasses.add("journey_hide");
    }

    // If the journey was displayed, then hide it again.
    if (journeyWrapperClasses.contains("journey_show")) {
        journeyWrapperClasses.remove("journey_show");
        journeyWrapperClasses.add("journey_hide");
    }

    // Hide the destination list.
    selectDestination.classList.add("hide");
    // Hide the search button.
    search.classList.add("hide");
    // Show header background again.
    header.classList.replace("header_transparent", "header");
    // Add header text.
    headerText.innerText = "Where are you leaving from?";
   };

export { handleSubmit, handleReset };