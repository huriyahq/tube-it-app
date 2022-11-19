import { lines } from "./lines.js";

const departureList = document.getElementById("departure");
const destinationList = document.getElementById("destination");

let stopPointNames = [];

function makeSelect(select) {
    const uniqueStopPoints = [...new Set(stopPointNames)].sort();

    for ( let i = 0; i < uniqueStopPoints.length; i++ ) {
        let option = document.createElement("option");
        option.text = uniqueStopPoints[i].slice(0, -20);
        option.value = uniqueStopPoints[i];
        select.appendChild(option);
    };
}

async function getStopPointNames(select) {
    try {
            for ( let i = 0; i < lines.length; i++ ) {
            const lineId = lines[i].id;

            const request = await axios.get(` https://api.tfl.gov.uk/line/${lineId}/stopPoints`);
            // Store requested data in data variable.
            const data = await request.data;

            for ( let i = 0; i < data.length; i++ ) {
                let stopPointName = data[i].commonName;
                stopPointNames.push(stopPointName);
            };
        };
        makeSelect(departureList);
        makeSelect(destinationList);
    }
    catch (e) {
        // If there are any errors, console.log an error message.
        console.log("Error: ", e);
    };
};

getStopPointNames()

export { getStopPointNames };