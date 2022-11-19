import { getStopPointNames } from "./helpers/getStopPointNames.js";
import { handleSubmit } from "./helpers/eventHandlers.js";

document.forms["form"].addEventListener("change", () => {

        const search = document.getElementById("btn_search");
        const selectDeparture = document.forms["form"].departure;
        const selectDestination = document.forms["form"].destination;
        const headerText = document.getElementById("header__text");
        
        if ((selectDeparture.value !== "") && (selectDestination.value == "")) {
              // If departure is selected but destination isn't, do this:
            selectDestination.classList.remove("hide");
            return headerText.innerText = `You selected ${selectDeparture.value.slice(0, -20)}. Where would you like to go?`;
        } else if ((selectDeparture.value !== "") && (selectDestination.value !== "")) {
            // If departure and destination are selected, do this:
            search.classList.remove("hide");
            search.addEventListener("click", handleSubmit);
            return headerText.innerText = `You've selected ${selectDeparture.value.slice(0, -20)} to ${selectDestination.value.slice(0, -20)}`;
        } else {
            return headerText.innerText = "Where are you leaving from?";
        }
    });

