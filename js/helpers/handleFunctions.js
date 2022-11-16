const form = document.forms["form"];
const search = document.getElementById("btn_search");
const selectDeparture = form.departure;
const selectDestination = form.destination;
const journey = document.getElementById("journey");
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
    // let destinationNaptanId = selectDestination.options[selectDestination.selectedIndex].getAttribute("data-naptan-id");

    if ((departureStation !== "") && (destinationStation !== "")) {
        // If both fields are filled in, do this:
        // Hide form, change header background to transparent, remove header text.
        form.classList.add("hide");
        header.classList.replace("header", "header_transparent");
        headerText.innerText = "";
        
        // Show journey element
        journey.classList.remove("hide");
        
        if (departureLine === destinationLine) {
            const departure = document.getElementById("journey__station_departure");
            const destination = document.getElementById("journey__station_destination");
            const journeyText = document.getElementById("journey__box__text");

            document.getElementById("btn_reset").addEventListener("click", handleReset);

            departure.innerText = `${departureStation}`;
            destination.innerText = `${destinationStation}`;
            return journeyText.innerText = `You can travel from ${departureStation} to ${destinationStation} directly via the ${departureLine} line.`;
        } else {
            return journeyText.innerText = `There is no direct route from ${departureStation} to ${destinationStation}.`;
        }
    } else {
        console.log("Something went wrong.");
  };

};

function handleReset() {
    // Reset all form values and displayed/hidden elements.
    form.classList.remove("hide");
    form.reset();

    selectDestination.classList.add("hide");
    search.classList.add("hide");
    journey.classList.add("hide");
    header.classList.replace("header_transparent", "header");
    headerText.innerText = "Where are you leaving from?";
   };

export { handleSubmit, handleReset };