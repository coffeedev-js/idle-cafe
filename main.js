var gameData = {
  money: 0,
  moneyPerClick: 1,
  coffeelvl: 0,
  coffeeCost: 10,
  autocoffeelvl: 0,
  autocoffeeCost: 20,
  espressolvl: 0,
  espressoCost: 100,
  espressoDoppiolvl: 0,
  espressoDoppioCost: 200,
  pumpkinmod: 0,
  pumpkinspiceModCost: 1000,
  flowerupgrade: 0,
  flowerupgradeCost: 1000,
  charme: 0
}

function update(id, content) {
  document.getElementById(id).innerHTML = content;
}

function serveCup() {
  gameData.money += gameData.moneyPerClick
  document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+ gameData.money + "💵"
}

function buyCoffee() {
  if (gameData.money >= gameData.coffeeCost) {
    gameData.money -= gameData.coffeeCost
    gameData.moneyPerClick += 1
    gameData.coffeelvl += 1
    gameData.coffeeCost *= 2
    document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
    document.getElementById("buyCoffee").innerHTML = "Coffee (Level " + gameData.coffeelvl+") | Cost: " + gameData.coffeeCost + "💵"
  }
}

function buyAutoCoffee(){
  if(gameData.money >= gameData.autocoffeeCost){
    gameData.money -= gameData.coffeeCost
    gameData.moneyPerClick +=1
    gameData.autocoffeelvl +=1
    gameData.autocoffeeCost *=2
    document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money+"💵"
    document.getElementById("buyAutoCoffee").innerHTML = "Auto-Coffee(Level "+gameData.autocoffeelvl+") Cost: "+gameData.autocoffeeCost+ "💵"
  }
}

function buyEspresso() {
  if(gameData.money >= gameData.espressoCost) {
    gameData.money -= gameData.espressoCost
    gameData.moneyPerClick += 2
    gameData.espressoCost *=3
    gameData.espressolvl += 1
    document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
    document.getElementById("buyEspresso").innerHTML = "Espresso (Level " + gameData.espressolvl + ") | Cost: " + gameData.espressoCost + "💵"
  }
}

function buyEspressoDoppio(){
  if(gameData.money >= gameData.espressoDoppioCost) {
    gameData.money -= gameData.espressoDoppioCost
    gameData.moneyPerClick += 3
    gameData.espressoDoppioCost *=4
    gameData.espressoDoppiolvl += 1
    document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
    document.getElementById("buyEspressoDoppio").innerHTML = "Espresso Doppio (Level " + gameData.espressoDoppiolvl + ") | Cost: " + gameData.espressoDoppioCost + "💵"
  }
}

function buyPumpkinspiceMod() {
  if(gameData.money >= gameData.pumpkinspiceModCost) {
    gameData.money -= gameData.pumpkinspiceModCost
    gameData.moneyPerClick += 2
    gameData.pumpkinmod += 1
    document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
    document.getElementById("buyPumpkinspiceMod").innerHTML = "Pumpkin Spice Mod: Installed ✅"
    pumpkinmodCheck();
  }
}

function buyFlowers() {
  if(gameData.money >= gameData.flowerupgradeCost) {
    gameData.money -= gameData.flowerupgradeCost
    gameData.flowerupgrade +=1
    gameData.charme += 10
    document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
    document.getElementById("buyFlowers").innerHTML = "Flowers  are on the table ✅"
    flowermodCheck();
  }
}
function flowerCheck(){
  if(gameData.flowerupgrade == 1){
    document.getElementById("buyFlowers").disabled = true;
    document.getElementById("buyFlowers").innerHTML = "Flowers  are on the table ✅"
  }
}

function pumpkinmodCheck(){
  if(gameData.pumpkinmod == 1) {
    document.getElementById("buyPumpkinspiceMod").disabled = true;
    document.getElementById("buyPumpkinspiceMod").innerHTML = "Pumpkin Spice Mod: Installed ✅"
  }
}

var mainGameLoop = window.setInterval(function() {
  serveCup()
  pumpkinmodCheck();
  flowerCheck();
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = savegame
}

function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  document.getElementById("counterMenue").style.display = "none"
  document.getElementById("shelfMenue").style.display = "none"
  document.getElementById("machineMenue").style.display = "none"
  document.getElementById("cafebarMenue").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
// go to a tab for the first time, so not all show
tab("counterMenue")