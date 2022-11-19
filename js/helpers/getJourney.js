async function getJourney(departure, destination) {
    const departureStation = document.getElementById("journey__station_departure");
    const destinationStation = document.getElementById("journey__station_destination");
    const journeyInstructions = document.getElementById("journey__instructions");
    const journeyText = document.getElementById("journey__box__text");

    try {
        // Get the icsID for each station.
        const departureRequest = await axios.get(` https://api.tfl.gov.uk/StopPoint/Search?query=${departure}`);
        const departureData = await departureRequest.data;
        const departureID = departureData.matches[0].icsId;

        const destinationRequest = await axios.get(` https://api.tfl.gov.uk/StopPoint/Search?query=${destination}`);
        const destinationData = await destinationRequest.data;
        const destinationID = destinationData.matches[0].icsId;

        // Use icsIDs to search journey
        const request = await axios.get(`https://api.tfl.gov.uk/journey/journeyresults/${departureID}/to/${destinationID}`);
        // Store requested data in data variable.
        const data = await request.data;
        const route = data.journeys[0].legs;
        for (let detail of route) {
            const departurePoint = detail.departurePoint.commonName;
            const destinationPoint = detail.arrivalPoint.commonName;
            const instructions = detail.instruction.detailed;


        // Set colour of line.
        // setLineColour(departureLine);

        departureStation.innerText = `${departurePoint}`;
        destinationStation.innerText = `${destinationPoint}`;
        journeyInstructions.innerText = `${instructions}`;

        // Return the journey text.        
        return journeyText.innerText = `
        From ${departurePoint}
        ${instructions}
        Arrive at ${destinationPoint}
        `
        };
    }
    catch (e) {
        // If there are any errors, console.log an error message.
        console.log("Error: ", e);
    };
};


export { getJourney };
