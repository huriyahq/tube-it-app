const lineIDs = ["bakerloo", "central", "circle", "district", "hammersmith-city", "jubilee", "metropolitan", "northern", "piccadilly", "victoria", "waterloo-city"];

// stopPoints array will be populated by data from getStopPointsByLine function. 
let stopPointsArr = [];

// An async function that accepts an id to use to get data for id's value.
const getStopPointsByLine = async (lineID) => {
    try {
    // Axios library used to make http request with .get method, will also parse the JSON.
    // Response stored in res variable.
    const res = await axios.get(`https://api.tfl.gov.uk/line/${lineID}/stoppoints`);
    // Store response data in data variable.
    const data = await res.data;
    // Store only needed values in an object for each item then push this object to the stopPoints array.
    const stopPoints = data.map((item, i) => {
        return {
        commonName: item.commonName,
        naptanId: item.naptanId,
        stationNaptan: item.stationNaptan,
        line: lineID
        }
    });
    // stopPoints.map((sp) => {stopPointsArr.push(sp)});
    stopPointsArr.push(stopPoints);
    } 
    catch(e) {
        // If there are errors, do this:
        console.log("Error: ", e);
    };
};
console.log(stopPointsArr);

// Use forEach to make a http request using each line in the lineIDs array.
lineIDs.forEach((line) => {
    getStopPointsByLine(line);
});

// console.log(stopPoints);