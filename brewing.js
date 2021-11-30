//Add fake and synthesized coffee, because cyberpunk
var brew ={
    parameter:{
        tries: 0,
        triesAllowed: 3,
        costTracker: 0
    },
    index:{
        brewCount: 0,
        coffee: 4,
        CoffeeWithMilk: 5,
        milkCoffee: 6,
        glasMilk: 7,
        greenTea: 12,
        cafeAmericano: 14,
        cafeLatte: 10,
        frothMilk: false
    }
}
function goldenRoast(){
    if(gameData.money >= gameData.goldenRoastCost) {
        gameData.money -= gameData.goldenRoastCost
        brew.parameter.costTracker += gameData.goldenRoastCost
        document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
        if(brew.parameter.tries == 0){
            brew.parameter.tries +=1
            brew.index.brewCount +=2
        } else if(brew.parameter.tries < brew.parameter.triesAllowed){
            brew.parameter.tries +=1
            brew.index.brewCount +=1
        }
        console.log("Tries: "+brew.parameter.tries+" "+brew.index.brewCount)
    }
}
function milk(){
    if(gameData.money >= gameData.milkCost) {
        gameData.money -= gameData.milkCost
        brew.parameter.costTracker += gameData.milkCost
        document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
        if(brew.parameter.tries == 0){
            brew.parameter.tries +=1
            brew.index.brewCount +=3
        } else if(brew.parameter.tries < brew.parameter.triesAllowed){
            brew.parameter.tries +=1
            brew.index.brewCount +=2
        }
    }
    console.log("Tries: "+brew.parameter.tries+" "+brew.index.brewCount)
}

function hotWater(){
    if(gameData.money >= gameData.hotWaterCost) {
        gameData.money -= gameData.hotWaterCost
        brew.parameter.costTracker += gameData.hotWaterCost
        document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"

        if(brew.parameter.tries == 0){
            brew.parameter.tries +=1
            brew.index.brewCount +=4
        } else if(brew.parameter.tries < brew.parameter.triesAllowed){
            brew.parameter.tries +=1
            brew.index.brewCount +=3
        }
    }
    console.log("Tries: "+brew.parameter.tries+" "+brew.index.brewCount)
}

function greenTeaLeafs(){
    if(gameData.money >= gameData.greenTeaLeafsCost) {
        gameData.money -= gameData.greenTeaLeafsCost
        brew.parameter.costTracker += gameData.greenTeaLeafsCost
        document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"

        if(brew.parameter.tries == 0){
            brew.parameter.tries +=1
            brew.index.brewCount +=5
        } else if(brew.parameter.tries < brew.parameter.triesAllowed){
            brew.parameter.tries +=1
            brew.index.brewCount +=4
        }
    }
    console.log("Tries: "+brew.parameter.tries+" "+brew.index.brewCount)
}

function robustaPremium(){
    if(gameData.money >= gameData.robustaPremiumCost) {
        gameData.money -= gameData.robustaPremiumCost
        brew.parameter.costTracker += gameData.robustaPremiumCost
        document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"

        if(brew.parameter.tries == 0){
            brew.parameter.tries +=1
            brew.index.brewCount +=6
        } else if(brew.parameter.tries < brew.parameter.triesAllowed){
            brew.parameter.tries +=1
            brew.index.brewCount +=5
        }
    }
    console.log("Tries: "+brew.parameter.tries+" "+brew.index.brewCount)
}
function frothMilk(){
    brew.index.frothMilk = true
    document.getElementById("frothMilk").innerHTML = "Froth milk up ✅"
    document.getElementById("frothMilk").disabled = true
}

//Add "Jupiter"
//Später: PumpkinSpice Mod doch wieder zu machine upgrades hinzufügen und nach upgrade als brew option darbieten
function brewIt(){
    if(brew.index.brewCount == brew.index.coffee){
        gameData.discoveredCoffee = true
        document.getElementById("buyCoffee").style.display ="inline"
        console.log("You made Coffee!")
    } else if(brew.index.brewCount == brew.index.CoffeeWithMilk){
        gameData.discoveredCoffeeWithMilk = true
        document.getElementById("buyCoffeeWithMilk").style.display ="inline"
        console.log("You made Coffee with milk!")
    } else if(brew.index.brewCount == brew.index.milkCoffee){
        gameData.discoveredMilkCoffee = true
        document.getElementById("buyMilkCoffee").style.display ="inline"
        console.log("You made milk coffee!")
    } else if(brew.index.brewCount == brew.index.glasMilk){
        gameData.discoveredGlasOfMilk = true
        document.getElementById("buyGlasMilk").style.display ="inline"
        console.log("You made a glass of milk!")
    } else if(brew.index.brewCount == brew.index.greenTea){
        gameData.discoveredGreenTea = true
        document.getElementById("buyGreenTea").style.display ="inline"
    } else if(brew.index.brewCount == brew.index.cafeAmericano){
        gameData.discoveredCafeAmericano = true
        document.getElementById("buyCafeAmericano").style.display ="inline"
    } else if(brew.index.brewCount == brew.index.cafeLatte && brew.index.frothMilk == true){
        gameData.discoveredCafeLatte = true
        document.getElementById("buyCafeLatte").style.display ="inline"
    }
    else {
        console.log("That brew just doesn't seem right")
        resetBrew()
    }
    resetBrew()
}
function resetBrew(){
    if(gameData.steamWandMod == true){
        document.getElementById("frothMilk").disabled = false
        brew.index.frothMilk = false
        document.getElementById("frothMilk").innerHTML = "Froth milk up"
    }
    brew.parameter.tries = 0
    brew.index.brewCount = 0
    brew.parameter.costTracker = 0
}
function resetBrewByUser(){
    brew.parameter.tries = 0
    brew.index.brewCount = 0
    brew.parameter.costTracker + gameData.money
    gameData.money += brew.parameter.costTracker
    document.getElementById("moneyGrinded").innerHTML = "Bank account says: "+gameData.money + "💵"
    brew.parameter.costTracker = 0
    if(gameData.steamWandMod = true){
        document.getElementById("frothMilk").disabled = false
        brew.index.frothMilk = false
        document.getElementById("frothMilk").innerHTML = "Froth milk up"
    }
}