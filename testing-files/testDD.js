originList.addEventListener("change", (event) => {
    let originName;
    let originID;

    originName = event.target.options[event.target.selectedIndex].value;
    originID = event.target.options[event.target.selectedIndex].dataset.id;
    let text = `You selected ${originName}`;
    displayText.innerHTML = text;

    return generateDestinations(originID);
});



const generateDestinations = (originID) => {
    destinationList.classList.remove("hide");

    console.log("The ID is", originID);
} 


searchForm.addEventListener("submit", (e) => {
    // Prevent form default behaviour
    e.preventDefault();
    // Get origin select list and its selected option
    let originOption = originList.options[originList.selectedIndex];
    // Get origin ID attribute from selected option
    let originOptionID = originOption.getAttribute("data-id");

    // Get destination select list and its selected option
    let destinationOption = destinationList.options[destinationList.selectedIndex];
   // Get destination ID attribute from selected option
    let destinationOptionID = destinationOption.getAttribute("data-id");

    console.log("Origin Station ID:", originOptionID);
    console.log("Destination Station ID:", destinationOptionID);
    })

