////////////////////////////////////////
// Methods
let rabbit = {};
rabbit.speak = function(line){
    console.log(`The rabbit says '${line}'`);
};


rabbit.speak("Blah");

function speak(line){
    console.log(`the ${this.type} rabbit says '${line}'`);
}
let whiterabbit = {type: "white",speak};
let hungryRabbit = {type: "hungry", speak};

whiterabbit.speak("Oh my ears and whiskers, how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");

speak.call(hungryRabbit,"Burp");