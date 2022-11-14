// Async function to get data for dropdown and to append that data to the select element.
// Accepts dropdown argument to use for generating a dropdown list.
async function populateDD(dropdown) {
    try {
        // Array of lineIds to use for http request. (Comment out when testing).
        // const lineIds = ["bakerloo", "central", "circle", "district", "hammersmith-city", "jubilee", "metropolitan", "northern", "piccadilly", "victoria", "waterloo-city"];
        
        // Use this array when testing. (Comment out when not testing).
        const lineIds = ["bakerloo"];

        for ( let i = 0; i < lineIds.length; i++ ) {
            // Loop through lineIds, get a single id and store it in a lineId variable.
            let lineId = lineIds[i];
            // Make a request for each lineId (11 requests).
            const res = await axios.get(`https://api.tfl.gov.uk/line/${lineId}/stoppoints`);
            // Store response data in data variable.
            const data = await res.data;

            // Map through the data and grab commonName, naptanId, stationNaptan and lineId to store in new array called stopPoints.
            const stopPoints = data.map((item) => {
                return {
                    commonName: item.commonName,
                    naptanId: item.naptanId,
                    stationNaptan: item.stationNaptan,
                    lineId: lineId
                };
            });
            for ( let i = 0; i < stopPoints.length; i++ ) {
                // Loop through stopPoints array. For each stopPoint in the array, create option element with value and dataset attributes. Set option text to stopPoint's commonName.
                let option = document.createElement("option");
                option.value = stopPoints[i].commonName;
                option.text = stopPoints[i].commonName;
                option.dataset.naptanId = stopPoints[i].naptanId;
                option.dataset.stationNaptan = stopPoints[i].stationNaptan;
                option.dataset.lineId = stopPoints[i].lineId;
                // Append option to the dropdown that was passed as argument.
                dropdown.appendChild(option);            
            };   
        };
    } 
    catch (e) {
        // If there are any errors, console.log an error message.
        console.log("Error: ", e);
    }
};

export { populateDD };
