var rndNameList = ["Hope", "Bron","Walker", "Anton", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];
var sprite = document.getElementById("charsprite")
var dialouge = document.getElementById("dialougeText")
var charname = document.getElementById("charname") 
const getnameIndex = (max) => Math.floor(Math.random() * max);
const getRandomSideName = () => `${rndNameList[getnameIndex(rndNameList.length)]}`;

var Chars = {
  cathy: {
    name: "Cathy",
    dateable: false,
    dating: false,
    dialouge: "",
    madeEspresso: false,
    achievementFirstDate: false,
    askout: false,
    interest: 15
  },
  earthy:{
    name: "Earth Chan",
    dateable: false,
    dating: false,
    dialouge: "",
    madeGreenTea: false,
    achievementFirstDate: false,
    askout: false,
    interest: 20
  },
  alexa:{
    name: "Alexa",
    dateable: false,
    dating: false,
    dialouge: "",
    madeCoffee: false,
    achievementFirstDate: false,
    askout: false,
    interest: 20
  },
  honey:{
    name: "Honey",
    dateable: false,
    dating: false,
    dialouge: "",
    madeEspressoDoppio: false,
    achievementFirstDate: false,
    askout: false,
    interest: 25
  },
  sidechar:{
    name: getRandomSideName(),
    dateable: false
  },
  missingChar:{
    name: "",
    dateable: false,
    loaded: false
  },
  pepe:{
    name: "Pepe",
    dateable: false,
    interest: 30
  },
  barista:{
    name: gameData.playerName,
    dialouge: "",
    tutorialmode: true
  }
}

var choices = [
  [75, "sidechar"],
  [5, "cathy"],
  [5, "earthy"],
  [5,"alexa"],
  [5, "pepe"],
  [5, "honey"]
],
rand, min, max, i, i2, choice;

function between(x, min, max) {
return x >= min && x <= max;
}

function pickChoice() {
console.log("picked choice")
rand = Math.floor(Math.random() * 100);
choice = -1;

for (i = 0; i < choices.length; i++) {

  if (i === 0) {
    min = 0;
  } else {
    min = 0;

    for (i2 = 0; i2 < i; i2++) {
      min += choices[i2][0];
    }
    min++;
  }

  if (i === 0) {
    max = choices[i][0];
  } else {
    max = 0;

    for (i2 = 0; i2 < i + 1; i2++) {
      max += choices[i2][0];
    }
  }

  if (rand >= min && rand <= max) {
    choice = i;
    break;
  }
}

if(choices[choice][1] == "sidechar"){
  loadSideChar();
}
if(choices[choice][1] == "alexa"){
  loadAlexa();
}
if(choices[choice][1] == "earthy"){
  loadEarthy();
}
if(choices[choice][1] == "cathy"){
  loadCathy();
}
if(choices[choice][1] == "pepe"){
  loadPepe();
}
if(choices[choice][1] == "honey"){
  loadHoney();
}
return choices[choice][1]
};

function drawStayValue(min, max){
return Math.floor(Math.random() * (max - min) + min); 
}

//The reason behind me putting the text into the dialouge variable, which then is put into the HTML is because the text will be later put into an array
//All i have to do is just delete the text and give the variable the array index

function interact(){
  var rollText = Math.floor(Math.random() * 2)

  //Earthy
  if(choices[choice][1] == "earthy" && gameData.charm <= Chars.earthy.interest){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/earthy/earthyidle2.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "H...Hey!"
  } else if(rollText == 1){
      sprite.src="graphics/charactersprites/earthy/earthyidle2.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "I know i'm literally *your* planet, but you shouldn't just touch me like that!"
  }else (Chars.earthy.dialouge)
}
  if(choices[choice][1] == "earthy" && gameData.charm >= Chars.earthy.interest){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/earthy/earthyidle.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "H...Human~"
  } else if(rollText == 1){
      sprite.src="graphics/charactersprites/earthy/earthyidle.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "Hehe~ Boop~"
  }else (Chars.earthy.dialouge)
  }
  if(choices[choice][1] == "earthy" && Chars.earthy.askout == true){
    if(Chars.earthy.dating == false){
    dialouge.innerHTML = Chars.earthy.dialouge = "So...next time i get a coffee, i hope you'll be behind this counter, with me~"
    Chars.earthy.dating = true
    if(Chars.earthy.achievementFirstDate == false){achievements()}
    }
  }
  if(choices[choice][1] == "earthy" && Chars.earthy.dating == true){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/earthy/earthyidle.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "Yes love?~"
    } else if(rollText == 1){
      sprite.src="graphics/charactersprites/earthy/earthyidle.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "Hehe Huuuman~♡"
    }
  }

  //Alexa
  if(choices[choice][1] == "alexa" && gameData.charm <= Chars.alexa.interest){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/alexa/Alexa-base-2.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "Yes?"
  } else if(rollText == 1){
      sprite.src="graphics/charactersprites/alexa/Alexa-base-2.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "You seem to like being all touchey touchey huh?~"
  }else (Chars.earthy.dialouge)
}
  if(choices[choice][1] == "alexa" && gameData.charm >= Chars.alexa.interest){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/alexa/alexadate.gif"
      dialouge.innerHTML = Chars.alexa.dialouge = "You want a hug? Come here my little Pog-"+gameData.playerName+"!"
  } else if(rollText == 1){
      sprite.src="graphics/charactersprites/alexa/alexadate.gif"
      dialouge.innerHTML = Chars.alexa.dialouge = "Hmm?~"
  }else (Chars.alexa.dialouge)
  }
  if(choices[choice][1] == "alexa" && Chars.alexa.askout == true){
    if(Chars.alexa.dating == false){
    dialouge.innerHTML = Chars.alexa.dialouge = "I'm sooooo glad! You see, being so direct...it was either a sweet win or a very hard punch to the face for me!"
    Chars.alexa.dating = true
    if(Chars.alexa.achievementFirstDate == false){achievements()}
    }
  }
  if(choices[choice][1] == "alexa" && Chars.alexa.dating == true){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/alexa/alexadate.gif"
      dialouge.innerHTML = Chars.alexa.dialouge = "Hun Hun~♡"
    } else if(rollText == 1){
      sprite.src="graphics/charactersprites/alexa/alexadate.gif"
      dialouge.innerHTML = Chars.alexa.dialouge = "How was your shift so far?~ Wanna go on a Date once you are finished here?~♡"
    }
  }

  //Cathy
  if(choices[choice][1] == "cathy" && gameData.charm <= Chars.cathy.interest){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/cathy/cathyidle1.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "H..huh?"
  } else if(rollText == 1){
      sprite.src="graphics/charactersprites/cathy/cathyidle2.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "HUH?! I I AM AWAKE! Y...Yes! My order?! Uhhh let's seeeee"
  }else (Chars.cathy.dialouge)
}
  if(choices[choice][1] == "cathy" && gameData.charm >= Chars.cathy.interest){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/cathy/cathyidle2.gif"
      dialouge.innerHTML = Chars.cathy.dialouge = "I was so sleepy, i forgot to put something on!"
  } else if(rollText == 1){
      sprite.src="graphics/charactersprites/cathy/cathyidle2.gif"
      dialouge.innerHTML = Chars.cathy.dialouge = "H..Hey...let's keep this a secret between us...there is no one around anyway!"
  }else (Chars.cathy.dialouge)
  }
  if(choices[choice][1] == "cathy" && Chars.cathy.askout == true){
    if(Chars.cathy.dating == false){
      dialouge.innerHTML = Chars.cathy.dialouge = "Hey Barista! I now declare us officially dating couple!"
    Chars.cathy.dating = true
    if(Chars.cathy.achievementFirstDate == false){achievements()}
    }
  }
  if(choices[choice][1] == "cathy" && Chars.cathy.dating == true){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/cathy/cathyidle1.gif"
      dialouge.innerHTML = Chars.cathy.dialouge = "Whaaa? "+gameData.playerName+" i love you too! (Is what you could make out of her mumbeling while she is dreaming.)"
    } else if(rollText == 1){
      sprite.src="graphics/charactersprites/cathy/cathyidle3.gif"
      dialouge.innerHTML = Chars.cathy.dialouge = gameData.playerName+" Oh! ♡ Must've found my way here in my sleep!"
    }
  }
  //Honey
  if(choices[choice][1] == "honey" && gameData.charm <= Chars.honey.interest){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/honey/honey-base.gif"
      dialouge.innerHTML = Chars.honey.dialouge = "Excuse me?"
  } else if(rollText == 1){
      sprite.src="graphics/charactersprites/honey/honey-base.gif"
      dialouge.innerHTML = Chars.earthy.dialouge = "I don't remember ordering a poke with my Espresso?"
  }else (Chars.cathy.dialouge)
}
  if(choices[choice][1] == "honey" && gameData.charm >= Chars.honey.interest){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/honey/honey-base-2.gif"
      dialouge.innerHTML = Chars.honey.dialouge = "Hehe Stop!~"
  } else if(rollText == 1){
      sprite.src="graphics/charactersprites/honey/honey-base-2.gif"
      dialouge.innerHTML = Chars.honey.dialouge = "You need something, Hun?~"
  }else (Chars.honey.dialouge)
  }
  if(choices[choice][1] == "honey" && Chars.honey.askout == true){
    if(Chars.honey.dating == false){
    sprite.src="graphics/charactersprites/honey/honey-base-2.gif"
    dialouge.innerHTML = Chars.honey.dialouge = "Ufufufu~♡"
    Chars.honey.dating = true
    if(Chars.honey.achievementFirstDate == false){achievements()}
    }
  }
  if(choices[choice][1] == "honey" && Chars.honey.dating == true){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/honey/honey-base-2.gif"
      dialouge.innerHTML = Chars.honey.dialouge = "Hehe, i sometimes don't know if you are reffering to me by my name or my pet name that you gave me~"
    } else if(rollText == 1){
      sprite.src="graphics/charactersprites/cathy/honey-base-2.gif"
      dialouge.innerHTML = Chars.honey.dialouge = "Hi Honey!~ No! I mean you of course, silly~♡"
    }
  }
  //Pepe
  if(choices[choice][1] == "pepe"){
    if(rollText == 0){
      sprite.src="graphics/charactersprites/pepe/pepeidle.gif"
      dialouge.innerHTML = Chars.honey.dialouge = "Ah right! My order! Let's see...do you serve Lattés with Pumpkin spice?"
    }
    if(choices[choice][1] == "pepe"){
      sprite.src="graphics/charactersprites/pepe/pepeidle.gif"
      dialouge.innerHTML = Chars.honey.dialouge = "Me? I'm allright! This is just my everyday mood, sorry, i'll have a Latté please"
    }
  }
  //MissingChar
  if(charname.innerHTML == Chars.missingChar.name){
    sprite.src="graphics/charactersprites/placeholder/chair.png"
    dialouge.innerHTML = "Nobody here..."
  }
}

function loadSideChar(){
  let rollSprite = Math.floor(Math.random() * 2)
  if(rollSprite == 0){
    sprite.src="graphics/charactersprites/sidechars/sidechar1.gif"
  }
  if(rollSprite == 1){
    sprite.src="graphics/charactersprites/sidechars/sidechar2.gif"
  }
  charname.innerHTML = Chars.sidechar.name
  dialouge.innerHTML = ""
  setTimeout(loadMissingChar, drawStayValue(60000, 300000))
}

function loadMissingChar(){
  sprite.src="graphics/charactersprites/placeholder/chair.png"
  charname.innerHTML = Chars.missingChar.name
  dialouge.innerHTML = ""
  setTimeout(pickChoice, drawStayValue(2000, 60000))
}

function loadEarthy(){ 
  if(Chars.earthy.dating == true){
    sprite.src="graphics/charactersprites/earthy/earthydate.gif"
    charname.innerHTML = Chars.earthy.name
    dialouge.innerHTML = Chars.earthy.dialouge = 'Oh hey Hu- i mean love!~♡'
  }
  else if(Chars.earthy.dateable == true){
    sprite.src="graphics/charactersprites/earthy/earthydate.gif"
    charname.innerHTML = Chars.earthy.name
    dialouge.innerHTML = Chars.earthy.dialouge = 'Actually i was lying to you the last time...I dont get called "Earthy" by close friends, "Earthy" is only reserved for my Soulmate~ What do you think?'
    Chars.earthy.askout = true
    console.log("Loaded if statement 5")  } else{
  if(Chars.earthy.madeGreenTea == false && gameData.charm < Chars.earthy.interest){
    sprite.src="graphics/charactersprites/earthy/earthyidle.gif"
    charname.innerHTML = Chars.earthy.name
    dialouge.innerHTML = Chars.earthy.dialouge = "Aww~ Humans have built so many little and cute things, just like this Café!"
    console.log("Loaded if statement 1")
  } else if(Chars.earthy.madeGreenTea == true && gameData.charm < Chars.earthy.interest){
    charname.innerHTML = Chars.earthy.name
    dialouge.innerHTML = Chars.earthy.dialouge = "Awhh!~ The smell of Green Tea always brings me home!"
    sprite.src="graphics/charactersprites/earthy/earthyidle.gif"
    console.log("Loaded if statement 2")
  } else if(Chars.earthy.madeGreenTea == false && gameData.charm >= Chars.earthy.interest){
    sprite.src="graphics/charactersprites/earthy/earthyidle.gif"
    charname.innerHTML = Chars.earthy.name
    dialouge.innerHTML = Chars.earthy.dialouge = "Aww~ Humans have built so many little and cute things, just like this Café! (And this Barista...)"
    console.log("Loaded if statement 3")
  } else if (Chars.earthy.madeGreenTea == true && gameData.charm >= Chars.earthy.interest){
    sprite.src="graphics/charactersprites/earthy/earthyidle2.gif"
    charname.innerHTML = Chars.earthy.name = "Earthy"
    dialouge.innerHTML = Chars.earthy.dialouge = "Hehe~ My close friends often just call me Earthy!~ Aaaand since i think you are one of them, please just call me Earthy!"
    console.log("Loaded if statement 4")
    Chars.earthy.dateable = true
  }
  }
  setTimeout(loadMissingChar, drawStayValue(60000, 300000))
  console.log("loaded Earthy stays for: "+drawStayValue(min, max))
  console.log("Made beverage: "+Chars.earthy.madeGreenTea+"|"+" Charm is @ "+gameData.charm+"|"+" Earthy's interest is @ "+20+"|"+" Earthy dateable: "+Chars.earthy.dateable)
}

function loadAlexa(){ 
  if(Chars.alexa.dating == true){
    sprite.src="graphics/charactersprites/alexa/alexadate.gif"
    charname.innerHTML = Chars.alexa.name
    dialouge.innerHTML = Chars.alexa.dialouge = 'Hello love ♡ you will not believe when i tell you what happened before i came here!'
  }
  else if(Chars.earthy.dateable == true){
    sprite.src="graphics/charactersprites/alexa/alexadate.gif"
    charname.innerHTML = Chars.alexa.name
    dialouge.innerHTML = Chars.alexa.dialouge = "Hey "+gameData.playerName+"! You. Me. Are Dating. Now! Ok?~"
    Chars.alexa.askout = true
    console.log("Loaded if statement 5")  } else{
  if(Chars.alexa.madeCoffee == false && gameData.charm < Chars.alexa.interest){
    sprite.src="graphics/charactersprites/alexa/Alexa-base-2.gif"
    charname.innerHTML = Chars.alexa.name
    sprite.innerHTML = Chars.alexa.dialouge = "Hey Ho Barista!~ Can i get a cup of Coffee?"
    console.log("Loaded if statement 1")
  } else if(Chars.alexa.madeCoffee == true && gameData.charm < Chars.alexa.interest){
    charname.innerHTML = Chars.alexa.name
    dialouge.innerHTML = Chars.alexa.dialouge = "Thanks!~"
    sprite.src="graphics/charactersprites/alexa/alexaidle2.gif"
    console.log("Loaded if statement 2")
  } else if(Chars.alexa.madeCoffee == false && gameData.charm >= Chars.alexa.interest){
    sprite.src="graphics/charactersprites/alexa/Alexa-base-2.gif"
    charname.innerHTML = Chars.alexa.name
    dialouge.innerHTML = Chars.alexa.dialouge = "Hello, i'm back! Does anyone know if "+gameData.playerName+" has their shift today?~"
    console.log("Loaded if statement 3")
  } else if (Chars.alexa.madeCoffee == true && gameData.charm >= Chars.alexa.interest){
    sprite.src="graphics/charactersprites/alexa/alexaidle2.gif"
    charname.innerHTML = Chars.alexa.name
    dialouge.innerHTML = Chars.alexa.dialouge = "Ahhh your Coffee is just THE best Coffee, you know that? But the Logo on my cup...oddly reminds me of something..."
    console.log("Loaded if statement 4")
    Chars.alexa.dateable = true
  }
  }
  setTimeout(loadMissingChar, drawStayValue(600000, 900000))
  console.log("loaded Alexa stays for: "+drawStayValue(min, max))
}

function loadCathy(){ 
  if(Chars.cathy.dating == true){
    sprite.src="graphics/charactersprites/cathy/cathyidle.gif"
    charname.innerHTML = Chars.cathy.name
    dialouge.innerHTML = Chars.cathy.dialouge = 'Hey love~ What do you mean by "How can you see me"? Since i am your girlfriend, i can smell you~ (That did not sound weird at all Cathy...)'
  }
  else if(Chars.cathy.dateable == true){
    sprite.src="graphics/charactersprites/cathy/cathyidle3.gif"
    charname.innerHTML = Chars.cathy.name
    dialouge.innerHTML = Chars.cathy.dialouge = "So...um...I'd like to have a cup of coffee, for this "+gameData.playerName+"-cutey here!"
    Chars.cathy.askout = true
    console.log("Loaded if statement 5")  } else{
  if(Chars.cathy.madeEspresso == false && gameData.charm < Chars.cathy.interest){
    sprite.src="graphics/charactersprites/cathy/cathyidle1.gif"
    charname.innerHTML = Chars.cathy.name
    dialouge.innerHTML = Chars.cathy.dialouge = "Barista... one Espresso please..."
    console.log("Loaded if statement 1")
  } else if(Chars.cathy.madeEspresso == true && gameData.charm < Chars.cathy.interest){
    charname.innerHTML = Chars.cathy.name
    dialouge.innerHTML = Chars.cathy.dialouge = "Ahhhh, this will wake me up! It's so warm~"
    sprite.src="graphics/charactersprites/cathy/cathyidle2.gif"
    console.log("Loaded if statement 2")
  } else if(Chars.cathy.madeEspresso == false && gameData.charm >= Chars.cathy.interest){
    sprite.src="graphics/charactersprites/cathy/cathyidle1.gif"
    charname.innerHTML = Chars.cathy.name
    dialouge.innerHTML = Chars.cathy.dialouge = "Oh hi "+gameData.playerName+' The usual please! What do you mean with "I am not a regular"?! Espresso...pretty pleaase~'
    console.log("Loaded if statement 3")
  } else if (Chars.cathy.madeEspresso == true && gameData.charm >= Chars.cathy.interest){
    sprite.src="graphics/charactersprites/cathy/cathyidle3.gif"
    charname.innerHTML = Chars.cathy.name
    dialouge.innerHTML = Chars.cathy.dialouge = "You know, i don't mind you seeing my underwear, hehe~"
    console.log("Loaded if statement 4")
    Chars.cathy.dateable = true
  }
  }
  setTimeout(loadMissingChar, drawStayValue(60000, 100000))
  console.log("loaded Cathy stays for: "+drawStayValue(min, max))
}

function loadHoney(){ 
  if(Chars.honey.dating == true){
    sprite.src="graphics/charactersprites/honey/honey-base.gif"
    charname.innerHTML = Chars.honey.name
    dialouge.innerHTML = Chars.honey.dialouge = 'Now we both are "Honey", huh?~' 
  }
  else if(Chars.honey.dateable == true){
    sprite.src="graphics/charactersprites/honey/honey-base2.gif"
    charname.innerHTML = Chars.honey.name
    dialouge.innerHTML = Chars.honey.dialouge = "Hehehe, i think this is the part were the lovley Barista asks the cute girl infront of them out~"
    Chars.honey.askout = true
    console.log("Loaded if statement 5")  } else{
  if(Chars.honey.madeEspressoDoppio == false && gameData.charm < Chars.honey.interest){
    sprite.src="graphics/charactersprites/honey/honey-base.gif"
    charname.innerHTML = Chars.cathy.name
    dialouge.innerHTML = Chars.cathy.dialouge = "Hey Barista! I'd like something that goes easy on the stomach but also has Coffee in it!"
    console.log("Loaded if statement 1")
  } else if(Chars.honey.madeEspressoDoppio == true && gameData.charm < Chars.cathy.honey){
    charname.innerHTML = Chars.honey.name
    dialouge.innerHTML = Chars.honey.dialouge = "Thank you for the Espresso! I prefer the Doppio because regular espressos are so small!"
    sprite.src="graphics/charactersprites/honey/honey-base.gif"
    console.log("Loaded if statement 2")
  } else if(Chars.honey.madeEspressoDoppio == false && gameData.charm >= Chars.cathy.honey){
    sprite.src="graphics/charactersprites/honey/honey-base.gif"
    charname.innerHTML = Chars.honey.name
    dialouge.innerHTML = Chars.honey.dialouge = 'The "'+gameData.coffeShopName+'" huh? This place is so small that i overlooked it the entire time. But it is very comfy here!'
    console.log("Loaded if statement 3")
  } else if (Chars.honey.madeEspresso == true && gameData.charm >= Chars.cathy.honey){
    sprite.src="graphics/charactersprites/honey/honey-base2.gif"
    charname.innerHTML = Chars.honey.name
    dialouge.innerHTML = Chars.honey.dialouge = "OI BARISTA! Baaaaariiiistaaa~ "+gameData.playerName+" from "+gameData.coffeShopName+"! You hear me? Just wanted to... no...i'll tell you a secret the next time i'll be here~"
    console.log("Loaded if statement 4")
    Chars.honey.dateable = true
  }
  }
  setTimeout(loadMissingChar, drawStayValue(20000, 50000))
  console.log("loaded Honey stays for: "+drawStayValue(min, max))
}

function loadPepe(){
  if(gameData.charm >= Chars.pepe.interest){
    sprite.src="graphics/charactersprites/pepe/pepeidle.gif"
    charname.innerHTML = Chars.pepe.name
    dialouge.innerHTML = Chars.pepe.dialouge = gameData.playerName+" was your name right? I really like this place, it's such a safespace" 
  } else {
    sprite.src="graphics/charactersprites/pepe/pepeidle2.gif"
    charname.innerHTML = Chars.pepe.name
    dialouge.innerHTML = Chars.pepe.dialouge = 'Henlo...' 
  }
  setTimeout(loadMissingChar, drawStayValue(50000, 90000))
  console.log("loaded Pepe stays for: "+drawStayValue(min, max))
}

function loadBarista(){
  sprite.src="graphics/charactersprites/placeholder/placeholder.webp"
  charname.innerHTML = Chars.barista.name
  dialouge.innerHTML = Chars.barista.dialouge = "Allright, let's start todays shift..."
  setTimeout(Chars.barista.tutorialmode = false, 5000)
  setTimeout(game, 6000)
}