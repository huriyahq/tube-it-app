import { lines } from "./lines.js";
// Imported functions listed above this comment.

// Async function to get data for dropdown and to append that data to the select element.
// Accepts dropdown argument to use for generating a dropdown list.
async function getStopPoints(select) {
    try {
        for ( let i = 0; i < lines.length; i++ ) {
            // Iterate over lines array to get line id for request and line name for stopPoints object.            
            const lineId = lines[i].id;
            const lineName = lines[i].name;
            // Make a request for each lineId (11 requests).
            const request = await axios.get(`https://api.tfl.gov.uk/line/${lineId}/stoppoints`);
            // Store requested data in data variable.
            const data = await request.data;

            // Map through the data and store required info in new array called stopPoints.
            const stopPoints = data.map((item) => {
                return {
                    commonName: item.commonName.slice(0, -20),
                    naptanId: item.naptanId,
                    stationNaptan: item.stationNaptan,
                    lineName: lineName
                };
            });
            for ( let i = 0; i < stopPoints.length; i++ ) {
                // Loop through stopPoints array. For each stopPoint, create option element with value and dataset attributes. Set option text to stopPoint's commonName.
                let option = document.createElement("option");
                option.value = stopPoints[i].commonName;
                option.text = stopPoints[i].commonName;
                option.dataset.naptanId = stopPoints[i].naptanId;
                option.dataset.stationNaptan = stopPoints[i].stationNaptan;
                option.dataset.lineName = stopPoints[i].lineName;
                // Append option to the dropdown that was passed as argument.
                select.appendChild(option);            
            };   
        };
    } 
    catch (e) {
        // If there are any errors, console.log an error message.
        console.log("Error: ", e);
    };
};

// Get all the select elements. Returns an array.
const selectElements = document.querySelectorAll("select");
// Use forEach method to call getStopPoints function on all select elements.
selectElements.forEach((select) => {
    getStopPoints(select);
});

export { getStopPoints };
