import { lines } from "./lines.js";

function setLineColour(line) {
    let colour;

    switch(line) {
        case "Bakerloo":
            colour = lines[0].colour;
            break;
        case "Central":
            colour = lines[1].colour;
            break;
        case "Circle":
            colour = lines[2].colour;
            break;
        case "District":
            colour = lines[3].colour;
        break;
        case "Hammersmith & City":
            colour = lines[4].colour;
        break;
        case "Jubilee":
            colour = lines[5].colour;
        break;
        case "Metropolita":
            colour = lines[6].colour;
        break;
        case "Northern":
            colour = lines[7].colour;
        break;
        case "Piccadilly":
            colour = lines[8].colour;
        break;
        case "Victoria":
            colour = lines[9].colour;
        break;
        case "Waterloo & City":
            colour = lines[10].colour;
        break;
        default:
            colour = "#1C1D22";
    };
    document.getElementById("journey__line").style.backgroundColor = colour;
};

export { setLineColour };