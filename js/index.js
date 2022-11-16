import { getStopPoints } from "./helpers/getStopPoints.js";
import { handleSubmit } from "./helpers/handleFunctions.js";
// Imported functions listed above this comment.

document.forms["form"].addEventListener("change", () => {

        const search = document.getElementById("btn_search");
        const selectDeparture = document.forms["form"].departure;
        const selectDestination = document.forms["form"].destination;
        const headerText = document.getElementById("header__text");
        
        if ((selectDeparture.value !== "") && (selectDestination.value == "")) {
              // If departure is selected but destination isn't, do this:
            selectDestination.classList.remove("hide");
            return headerText.innerText = `You selected ${selectDeparture.value}. Where would you like to go?`;
        } else if ((selectDeparture.value !== "") && (selectDestination.value !== "")) {
            // If departure and destination are selected, do this:
            search.classList.remove("hide");
            search.addEventListener("click", handleSubmit);
            return headerText.innerText = `You've selected ${selectDeparture.value} to ${selectDestination.value}`;
            // return onSubmit(form, selectDeparture, selectDestination);
        } else {
            return headerText.innerText = "Where are you leaving from?";
        }
    });
