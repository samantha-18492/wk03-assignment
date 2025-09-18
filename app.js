console.log("testing");

//create object for cookieCount and cps
let state = {
  cookieCount: 0,
  cps: 1,
};

// increase cookieCount by cookieCount+cps
setInterval(function () {
  cookieCount = cookieCount + cps;
  //update dom to display the new using getElement
  //save state to local storage using setItem
}, 1000);

//make the cookie image functional
//getElementById
//add an event listener with a click function that then increases the cookieCount by 1

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
