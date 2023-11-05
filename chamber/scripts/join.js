function msg(){console.log("asd")};
function showMembershipInfo(membership) {
    const membershipDiv = document.querySelector(".membership-info");
    var info = "";
    switch (membership) {
        case "np":
        info = 
        `
        <ul>
        <li>Monthly price: <b>$0</b></li>
        <li>Access to general upcoming events</li>
        </ul>
        `
        break;

        case "bronze":
        info = 
        `
        <ul>
            <li>Monthly price: <b>$70</b></li>
            <li> Max of 2 professional development Training</li>
        </ul>
        `
        break;

        case "silver":
        info = 
        `
        <ul>
        <li>Monthly price: <b>$150</b></li>
        <li>Upto 7 professional training</li>
        <li>Upto 7 Days of advertisement in the our spotlights</li>
        <li>Up to 25% off discounts on all upcoming events</li>
        </ul>
        `
        break;

        case "gold":
        info = 
        `
        <ul>
        <li>Monthly price: <b>$170</b></li>
        <li>Unlimited professional training</li>
        <li>Upto 20 days of advertisement in the our spotlights</li>
        <li>Up to 50% off discounts on all upcoming events</li>
        </ul>
        `
        break;
    }
    membershipDiv.innerHTML = info;
}

/* GET LOCAL DAY */
function getHiddenDate() {
    let dateElement = document.querySelector("#hiddenDate");
    dateElement.value = date.toLocaleDateString("en-US", lastModifiedOptions);
    console.log(`this form was accessed on ${dateElement.value}`);
};