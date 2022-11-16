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

        // form.classList.contains("hide") ?  "" : form.classList.add("hide");
        if (!hiddenForm) {
            form.classList.add("hide");
        }
        
        if (journeyClasses.contains("journey_hide")) {
            journeyClasses.remove("journey_hide");
            journeyClasses.add("journey_show");
        }
        if (journeyWrapperClasses.contains("journey_hide")) {
            journeyWrapperClasses.remove("journey_hide");
            journeyWrapperClasses.add("journey_show");
        }

        header.classList.replace("header", "header_transparent");
        headerText.innerText = "";

        
        if (departureLine === destinationLine) {
            reset.addEventListener("click", handleReset);
            setLineColour(departureLine);
            departure.innerText = `${departureStation}`;
            destination.innerText = `${destinationStation}`;
            return journeyText.innerText = `You can travel from ${departureStation} to ${destinationStation} directly via the ${departureLine} line.`;
        } else {
            journeyWrapperClasses.replace("journey_show", "journey_hide");
            return journeyText.innerText = `There is no direct route from ${departureStation} to ${destinationStation}.`;
        }
    } else {
        console.log("Something went wrong.");
  };

};

function handleReset() {
    // Reset all form values and displayed/hidden elements.
    form.reset();

    form.classList.remove("hide");

    if (journeyClasses.contains("journey_show")) {
        journeyClasses.remove("journey_show");
        journeyClasses.add("journey_hide");
    }
    if (journeyWrapperClasses.contains("journey_show")) {
        journeyWrapperClasses.remove("journey_show");
        journeyWrapperClasses.add("journey_hide");
    }

    selectDestination.classList.add("hide");
    search.classList.add("hide");
    header.classList.replace("header_transparent", "header");
    headerText.innerText = "Where are you leaving from?";
   };

export { handleSubmit, handleReset };