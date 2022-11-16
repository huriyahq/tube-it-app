
// const form = document.getElementById("form");
const search = document.getElementById("search");
const display = document.getElementById("display");

search.addEventListener("click", handleSubmit);

function handleSubmit(e) {
    // Prevent default behaviour.
    e.preventDefault();
    const form = document.forms["form"];


    // Alternative if not using
    // let departure = document.forms["form"].departure.value;
    // let destination = document.forms["form"].destination.value;
    // let departure = form.elements["departure"];

    // let departure = form.departure;
    let departureStation = form.departure.value;
    let departureLine = form.departure.options[form.departure.selectedIndex].getAttribute("data-line-name");
    let departureNaptanId = form.departure.options[form.departure.selectedIndex].getAttribute("data-naptan-id");

    let destinationStation = form.destination.value;
    let destinationLine = form.destination.options[form.destination.selectedIndex].getAttribute("data-line-name");
    let destinationNaptanId = form.destination.options[form.destination.selectedIndex].getAttribute("data-naptan-id");


    return display.innerText = `
    Departure is from: ${departureStation} (${departureNaptanId}), which is on the ${departureLine} line. Destination is ${destinationStation} (${destinationNaptanId}), which is on the ${destinationLine} line.
    `;

};

