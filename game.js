var gameData = {
  money: 0,
  moneyPerClick: 1,
  coffeelvl: 0,
  coffeeCost: 10,
  coffeeWithMilklvl: 0,
  coffeeWithMilkCost: 10,
  milkCoffeelvl: 0,
  milkCoffeeCost: 10,
  autocoffeelvl: 0,
  autocoffeeCost: 20,
  glasMilklvl: 0,
  glasMilkCost: 10,
  autoclickvalue: 0,
  espressolvl: 0,
  espressoCost: 100,
  espressoDoppiolvl: 0,
  espressoDoppioCost: 200,
  steamWandMod: false,
  steamWandModCost: 500,
  flowerupgrade: false,
  flowerupgradeCost: 1000,
  cuteApronUpgrade: false,
  cuteApronUpgradeCost: 1500,
  charm: 0,
  goldenRoastCost: 5,
  milkCost: 5,
  hotWaterCost: 50,
  greenTeaLeafsCost: 50,
  greenTeaCost: 100,
  robustaPremiumCost: 100,
  cafeAmericanoCost: 150,
  cafeAmericanolvl: 0,
  cafeLatteCost: 200,
  cafeLattelvl: 250,
  playerName: "Barista",
  coffeeShopName: "Le café Idle",
  playHours: 0,
  playMinutes: 0,
  currentRunTime: 0,
  introduced: false,
  discoveredCoffee: false,
  discoveredCoffeeWithMilk: false,
  discoveredMilkCoffee: false,
  discoveredGlasOfMilk: false,
  discoveredGreenTea: false,
  discoveredCafeAmericano: false,
  discoveredCafeLatte: false
}

//get's only triggered onload
function loadUI(){
  if(gameData.coffeelvl >= 1){
    document.getElementById("buyCoffee").innerHTML = "Coffee (Level " + gameData.coffeelvl+") | Cost: " + gameData.coffeeCost + "💵"
  }
  if(gameData.espressolvl >= 1){
    document.getElementById("buyEspresso").innerHTML = "Espresso (Level" + gameData.espressolvl+") | Cost: " + gameData.espressoCost + "💵"
  }
  if(gameData.autocoffeelvl >= 1){
    document.getElementById("buyAutoCoffee").innerHTML = "Auto-Coffee(Level "+gameData.autocoffeelvl+") Cost: "+gameData.autocoffeeCost+ "💵"
  }
  if(gameData.espressoDoppiolvl >= 1){
    document.getElementById("buyEspressoDoppio").innerHTML = "Espresso Doppio (Level " + gameData.espressolvl + ") | Cost: " + gameData.espressoCost + "💵"
  }
}

function tutorial(){
  loadBarista();
}
function loadName(){
  if(gameData.coffeeShopName == ""){
    gameData.coffeeShopName = "Le café Idle"
  }
  document.getElementById("cafeName").innerHTML = gameData.coffeeShopName
  document.getElementById("playerName").innerHTML = gameData.playerName
}
  var cafeName = document.getElementById("cafeName")
  cafeName.onclick = function changeCafeName(){
    gameData.coffeeShopName =  prompt("Please enter a caffeine rich name for your Coffee shop!")
    loadName();
  }
function update(id, content) {
  document.getElementById(id).innerHTML = content;
}

function buttonCheck()  {
  if(gameData.money < gameData.coffeeCost){
   document.getElementById("buyCoffee").disabled = true;
  } else document.getElementById("buyCoffee").disabled = false;
  //if(gameData.money < gameData.autocoffeeCost){
  //  document.getElementById("buyAutoCoffee").disabled = true;
  //} else document.getElementById("buyAutoCoffee").disabled = false;
  //if(gameData.money < gameData.espressoCost){
  //  document.getElementById("buyEspresso").disabled = true;
  //}else document.getElementById("buyEspresso").disabled = false;
  //if(gameData.money < gameData.espressoDoppioCost){
  //  document.getElementById("buyEspressoDoppio").disabled = true;
  //} else document.getElementById("buyEspressoDoppio").disabled = false;
  if(gameData.money < gameData.goldenRoastCost){
    document.getElementById("goldenRoast").disabled = true;
  }else document.getElementById("goldenRoast").disabled = false;
  if(gameData.money < gameData.coffeeWithMilkCost){
    document.getElementById("buyCoffeeWithMilk").disabled = true;
  }else document.getElementById("buyCoffeeWithMilk").disabled = false;
  if(gameData.money < gameData.milkCoffeeCost){
    document.getElementById("buyMilkCoffee").disabled = true;
  }else document.getElementById("buyMilkCoffee").disabled = false;
  if(gameData.money < gameData.greenTeaCost){
    document.getElementById("buyGreenTea").disabled = true;
  }else document.getElementById("buyGreenTea").disabled = false;
  if(gameData.money < gameData.milkCost){
    document.getElementById("milk").disabled = true;
  }else document.getElementById("milk").disabled = false;
  if(gameData.money < gameData.hotWaterCost){
    document.getElementById("hotWater").disabled = true;
  }else document.getElementById("hotWater").disabled = false;
  if(gameData.money < gameData.glasMilkCost){
    document.getElementById("buyGlasMilk").disabled = true;
  }else document.getElementById("buyGlasMilk").disabled = false;
  if(gameData.money < gameData.cafeAmericanoCost){
    document.getElementById("buyCafeAmericano").disabled = true;
  }else document.getElementById("buyCafeAmericano").disabled = false;
  if(gameData.money < gameData.robustaPremiumCost){
    document.getElementById("robustaPremium").disabled = true;
  }else document.getElementById("robustaPremium").disabled = false;
  if(gameData.money < gameData.steamWandModCost){
    document.getElementById("buySteamWandMod").disabled = true;
  }else document.getElementById("buySteamWandMod").disabled = false;
  if(gameData.money < gameData.flowerupgradeCost){
    document.getElementById("buyFlowers").disabled = true;
  }else document.getElementById("buyFlowers").disabled = false;
  if(gameData.money < gameData.cuteApronUpgradeCost){
    document.getElementById("buyCuteApron").disabled = true;
  }else document.getElementById("buyCuteApron").disabled = false;
  if(gameData.money < gameData.cafeLatteCost){
    document.getElementById("buyCafeLatte").disabled = true;
  }else document.getElementById("buyCafeLatte").disabled = false;
}

function loadIntroState(){
  //Make an intro, but let the game run in the background
  if(gameData.introduced == false){

  }
}

  var mainGameLoop = window.setInterval(function() {
       autoServe();
       modCheck();
       checkDiscoveredIngrediants();
       buttonCheck();
       document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
    }, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("baristaSaveGame", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("baristaSaveGame"))
if (savegame !== null) {
  gameData = savegame
}

var charsSaveLoop = window.setInterval(function() {
  localStorage.setItem("Chars", JSON.stringify(Chars))
}, 15000)

var charSave = JSON.parse(localStorage.getItem("Chars"))
if (charSave !== null) {
  Chars = charSave
}