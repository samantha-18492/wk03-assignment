console.log("testing");

//create object for cookieCount and cps
let state = {
  cookieCount: 0,
  cps: 1,
};

// increase cookieCount by cookieCount+cps
setInterval(function () {
  state.cookieCount = state.cookieCount + state.cps;
  //display count on page
  document.getElementById("cookies").innerText = state.cookieCount;
  //save state to local storage using setItem
  saveStateToLocal();
}, 1000);

//stringify and save to local
function saveStateToLocal() {
  const saveStateString = JSON.stringify(state);
  localStorage.setItem("state", saveStateString);
}

//get from localStorage and update cookieCount and cps
const returnStateString = localStorage.getItem("state");
const returnedState = JSON.parse(returnStateString);
state.cookieCount = returnedState.cookieCount;
state.cps = returnedState.cps;

//make the cookie image functional and increase cookieCount by 1 for every click
const cookieImage = document.getElementById("cookieImage");
cookieImage.addEventListener("click", function () {
  state.cookieCount++;
  document.getElementById("cookies").innerText = state.cookieCount;
});

//show cps count in p tag
const cpsDisplay = document.getElementById("cps");
cpsDisplay.innerText = "CPS: " + state.cps;

//get shop items displayed on screen from api
//async function with await fetch and .json()

//the upgrades are an array of objects

//we can use forEach for each of the upgrades
//use create element to create tags for the upgrade name, cps and increase value
//also need to make a buy button
//add click event for each button
//can we afford the upgrade, if yes update cps to add the increase of the upgrade & take away the cost of the upgrade from our cookies
//if no, send an alert to say action forbidden

//purchasing upgrades: create generic function that uses a + b that works for all shop upgrades
