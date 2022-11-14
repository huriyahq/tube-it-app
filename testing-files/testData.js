let stopPointsArr = [];

async function populateDD(dropdown) {
    try {
        const lineIds = ["bakerloo", "central", "circle", "district", "hammersmith-city", "jubilee", "metropolitan", "northern", "piccadilly", "victoria", "waterloo-city"];

        for ( let i = 0; i < lineIds.length; i++ ) {
            let lineId = lineIds[i];
            const res = await axios.get(`https://api.tfl.gov.uk/line/${lineId}/stoppoints`);
            const data = await res.data;

            const stopPoints = data.map((item) => {
                return {
                    commonName: item.commonName,
                    naptanId: item.naptanId,
                    stationNaptan: item.stationNaptan,
                    lineId: lineId
                };
            });
            stopPointsArr.push(stopPoints);
            console.log(stopPointsArr);
        };
    }
    catch (e) {
        console.log("Error: ", e);
    }
};
// console.log(stopPointsArr);

export { populateDD };
        