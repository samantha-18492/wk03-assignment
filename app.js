console.log("testing");

//create object for cookieCount and cps
let state = {
  cookieCount: 0,
  cps: 1,
};

const cpsDisplay = document.getElementById("cps");
const cookieDisplay = document.getElementById("cookies");
const shopDisplay = document.getElementById("shop");
const imgSound = document.getElementById("imgSound");
const successSound = document.getElementById("successSound");
const failSound = document.getElementById("failSound");

// increase cookieCount by cookieCount+cps
setInterval(function () {
  state.cookieCount = state.cookieCount + state.cps;
  //display count on page
  cookieDisplay.innerText = "Cookie count: " + state.cookieCount;
  cpsDisplay.innerText = "CPS: " + state.cps;
  //save state to local storage using setItem
  saveStateToLocal();
}, 1000);

//stringify and save to local
function saveStateToLocal() {
  const saveStateString = JSON.stringify(state);
  localStorage.setItem("state", saveStateString);
}

//get from localStorage and if there's a value update cookieCount and cps
const returnStateString = localStorage.getItem("state");
if (returnStateString) {
  const returnedState = JSON.parse(returnStateString);
  state.cookieCount = returnedState.cookieCount || 0;
  state.cps = returnedState.cps || 1;
}

//show cookieCount and cps count in p tag - not needed nor or statement in place?
// cookieDisplay.innerText = "Cookie count: " + state.cookieCount;
// cpsDisplay.innerText = "CPS: " + state.cps;

//make the cookie image functional and increase cookieCount by 1 for every click
const cookieImage = document.getElementById("cookieImage");
cookieImage.addEventListener("click", function () {
  state.cookieCount++;
  document.getElementById("cookies").innerText =
    "Cookie count: " + state.cookieCount;
  imgSound.currentTime = 0;
  imgSound.play();
});

//get upgrade data from api using async function with await fetch and .json()
async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  return data;
}

//get upgrade data from api to show on webpage as buy items using forEach, create elements and append
async function displayUpgrades() {
  const upgrades = await getUpgrades();
  upgrades.forEach(function (shopUpgrade) {
    //create button
    const upgradeButton = document.createElement("button");
    //add text
    upgradeButton.innerText = `${shopUpgrade.name} (Cost: ${shopUpgrade.cost}, Increase: ${shopUpgrade.increase})`;
    //add click event
    upgradeButton.addEventListener("click", function () {
      //if cookie count is more than cost, add the increase of the upgrade to cps and minus cost of the upgrade from cookie count
      if (state.cookieCount >= shopUpgrade.cost) {
        state.cps = state.cps + shopUpgrade.increase;
        state.cookieCount = state.cookieCount - shopUpgrade.cost;
        cpsDisplay.innerText = "CPS: " + state.cps;
        cookieDisplay.innerText = "Cookie count: " + state.cookieCount;
        successSound.currentTime = 0;
        successSound.play();
      } else {
        //otherwise alert the user they don't have enough cookies and delay the laert so the sound plays immediately
        setTimeout(function () {
          alert("You don't have enough cookies to buy that upgrade!");
        }, 10);
        failSound.currentTime = 0;
        failSound.play();
      }
    });

    //append
    shopDisplay.appendChild(upgradeButton);
  });
}

displayUpgrades();

//the upgrades are an array of objects

//purchasing upgrades: create generic function that uses a + b that works for all shop upgrades
