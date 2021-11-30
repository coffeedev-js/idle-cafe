function achievements(){
  if(choices[choice][1] == "earthy" && Chars.earthy.achievementFirstDate == false){
    document.getElementById("widget").style.display = "inline"
    document.getElementById("widget").style.backgroundImage = "graphics/achievements/dateearthy.png"
    Chars.earthy.achievementFirstDate = true
  } else if (choices[choice][1] == "alexa" && Chars.alexa.achievementFirstDate == false){
    document.getElementById("widget").style.display = "inline"
    document.getElementById("widget").style.backgroundImage = "graphics/achievements/datealexa.png"
    Chars.alexa.achievementFirstDate = true
  } else if(choices[choice][1] == "cathy" && Chars.cathy.achievementFirstDate == false){
    document.getElementById("widget").style.display = "inline"
    document.getElementById("widget").style.backgroundImage = "graphics/achievements/datecathy.png"
    Chars.cathy.achievementFirstDate = true
  } else if(choices[choice][1] == "honey" && Chars.honey.achievementFirstDate == false){
    document.getElementById("widget").style.display = "inline"
    document.getElementById("widget").style.backgroundImage = "graphics/achievements/datehoney.png"
    Chars.honey.achievementFirstDate = true
  }
}

function closeWidget(){
  document.getElementById("widget").style.display ="none"
}

function serveCup() { 
    gameData.money += gameData.moneyPerClick
    document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
  }
  
  function autoServe() {
    gameData.money += gameData.autoclickvalue
    document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
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

  function buyCoffeeWithMilk(){
    if (gameData.money >= gameData.coffeeWithMilkCost) {
      gameData.money -= gameData.coffeeWithMilkCost
      gameData.moneyPerClick += 1
      gameData.coffeeWithMilklvl += 1
      gameData.coffeeWithMilkCost *= 2
      document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
      document.getElementById("buyCoffeeWithMilk").innerHTML = "Coffee with milk (Level " + gameData.coffeeWithMilklvl+") | Cost: " + gameData.coffeeWithMilkCost + "💵"
    }
  }

  function buyMilkCoffee(){
    if (gameData.money >= gameData.milkCoffeeCost) {
      gameData.money -= gameData.milkCoffeeCost
      gameData.moneyPerClick += 1
      gameData.milkCoffeelvl += 1
      gameData.milkCoffeeCost *= 2
      document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
      document.getElementById("buyMilkCoffee").innerHTML = "Milk coffee (Level " + gameData.milkCoffeelvl+") | Cost: " + gameData.milkCoffeeCost + "💵"
    }
  }
  
  function buyGlasMilk(){
    if(gameData.money >= gameData.glasMilkCost){
      gameData.money -= gameData.glasMilkCost
      gameData.moneyPerClick += 1
      gameData.glasMilklvl +=1
      gameData.glasMilkCost *=2
      document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
      document.getElementById("buyGlasMilk").innerHTML = "Glas of milk (Level "+gameData.glasMilklvl+") Cost: "+gameData.glasMilkCost+ "💵"
    }
  }

  function buyAutoCoffee(){
    if(gameData.money >= gameData.autocoffeeCost){
      gameData.money -= gameData.autocoffeeCost
      gameData.autoclickvalue +=1
      gameData.autocoffeelvl +=1
      gameData.autocoffeeCost *=2
      document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
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

  function buyCafeLatte(){
    if(gameData.money >= gameData.cafeLatteCost){
      gameData.money -= gameData.cafeLatteCost
      gameData.moneyPerClick +=4
      gameData.cafeLatteCost *=5
      gameData.cafeLattelvl += 1
      document.getElementById("buyCafeLatte").innerHTML = "Bank account says: "+gameData.money + "💵"
      document.getElementById("buyCafeLatte").innerHTML = "Espresso Doppio (Level " + gameData.cafeLattelvl + ") | Cost: " + gameData.cafeLatteCost + "💵"
    }
  }
  
  function buySteamWandMod() {
    if(gameData.money >= gameData.steamWandModCost) {
      gameData.money -= gameData.steamWandModCost
      gameData.steamWandMod = true
      document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
      document.getElementById("buySteamWandMod").innerHTML = "Steam wand Mod: Installed ✅"
    }
  }
  
  function buyFlowers() {
    if(gameData.money >= gameData.flowerupgradeCost) {
      gameData.money -= gameData.flowerupgradeCost
      gameData.flowerupgrade = true
      gameData.charm += 10
      document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
      document.getElementById("buyFlowers").innerHTML = "Flowers  are on the table ✅"
    }
  }

  function buyCuteApron() {
    if(gameData.money >= gameData.cuteApronUpgradeCost) {
      gameData.money -= gameData.cuteApronUpgradeCost
      gameData.cuteApronUpgrade = true
      gameData.charm += 10
      document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
      document.getElementById("buyFlowers").innerHTML = "You look cute ✅"
    }
  }
  
  function modCheck(){
    if(gameData.steamWandMod == true) {
      document.getElementById("buySteamWandMod").disabled = true;
      document.getElementById("buySteamWandMod").innerHTML = "Steam wand Mod: Installed ✅"
      document.getElementById("frothMilk").style.display ="inline"
    }
    if(gameData.flowerupgrade == true){
      document.getElementById("buyFlowers").disabled = true;
      document.getElementById("buyFlowers").innerHTML = "Flowers  are on the table ✅"
      document.getElementById("buyCuteApron").style.display ="inline"
    }
    if(gameData.cuteApronUpgrade == true){
      document.getElementById("buyCuteApron").disabled = true;
      document.getElementById("buyCuteApron").innerHTML = "You look cute ✅"
      document.getElementById("buyCuteApron").style.display ="inline"
    }
  }

  function openSocialMedia(){
    document.getElementById("brewbudText").innerHTML ='CoffeeDev says: "Coming soon™"'
  }

  function openSlick(){
    document.getElementById("brewbudText").innerHTML ='CoffeeDev says: "Coming soon™"'
  }

  function checkDiscoveredBeverages(){
    if(gameData.discoveredCoffee == true){
      document.getElementById("buyCoffee").style.display ="inline"
    }
    if(gameData.discoveredCoffeeWithMilk == true){
      document.getElementById("buyCoffeeWithMilk").style.display ="inline"
    }
    if(gameData.discoveredMilkCoffee == true){
      document.getElementById("buyMilkCoffee").style.display ="inline"
    }
    if(gameData.discoveredGlasMilk == true){
      document.getElementById("buyGlasMilk").style.display ="inline"
    }
    if(gameData.discoveredGreenTea == true){
      document.getElementById("buyGreenTea").style.display ="inline"
    }
    if(gameData.discoveredCafeAmericano == true){
      document.getElementById("buyCafeAmericano").style.display ="inline"
    }
    if(gameData.discoveredCafeLatte == true){
      document.getElementById("buyCafeLatte").style.display ="inline"
    }
  }

  function checkDiscoveredIngrediants(){
    if(gameData.charm >= 10){
      document.getElementById("hotWater").style.display = "inline"
    }
    if(gameData.charm >= 20){
      document.getElementById("greenTeaLeafs").style.display ="inline"
    }
    if(gameData.charm >= 30){
      document.getElementById("robustaPremium").style.display ="inline"
    }

  }

  function tab(tab) {
    document.getElementById("counterMenue").style.display = "none"
    document.getElementById("shelfMenue").style.display = "none"
    document.getElementById("brewMenue").style.display = "none"
    document.getElementById("machineMenue").style.display = "none"
    document.getElementById("cafebarMenue").style.display = "none"
    document.getElementById("brewbudMenue").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
  }
  tab("counterMenue")
function goldRoastInfo(){
  document.getElementById("brewbudText").innerHTML ='Coffee Beans of the Golden Roast type. These Beans have been roasted very carefully, making them mildy yet bitter.'
}
function coffeeInfo() {
  document.getElementById("brewbudText").innerHTML ="Coffee: A caffeine rich hot beverage. Very popular. Upgrade your coffee making skills by using better coffeebeans! This upgrade will give you more money per serving."
}
  
function coffeeInfo() {
  document.getElementById("brewbudText").innerHTML ="Coffee: A caffeine rich hot beverage. Very popular. Upgrade your coffee making skills by using better coffeebeans! This upgrade will give you more money per serving."
}
function autocoffeeInfo() {
  document.getElementById("brewbudText").innerHTML ="Auto-Coffee: No one knows how this works, except for baristas. Baristas are so good at making coffee, they'll brew you something up while doing several different tasks! This neat skill auto-serves a cup each time a second passes."
}

function espressoInfo(){
  document.getElementById("brewbudText").innerHTML="Espresso: *The* hot energy kick. Because it's beans have been roasted longer than it's coffee counterpart it's oils and natural acids have been vaporized. People with a weak stomach should therefore try an Espresso over Coffee. This upgrade will give you more money per serving. Different upgrades will be added together."
}

function espressodoppioInfo(){
  document.getElementById("brewbudText").innerHTML="Espressio Doppio: Just a regular Espressio, but twice the size for twice the price (And caffeine) This upgrade brings you more money per serving."
}

function socialmediaInfo(){
  document.getElementById("brewbudText").innerHTML='_SPEEN - "The social media that actually cares about your data!" or atleast that is what they advertise.'
}
function slickInfo(){
  document.getElementById("brewbudText").innerHTML="SLiCK music app."
}
function resetBrewBud(){
  document.getElementById("brewbudText").innerHTML="(ᴗ˳ᴗ)💤"
}