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

function normalize(){
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({coords: [0,2,3],length: 5});

//////////////////////////////////////////////////////
// Prototypes

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);

console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}


let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEEEEE BITCH");


/////////////////////////////////////////////////
// Classes

function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

function Rabbit(type){
    this.type = type;
}
Rabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit));
console.log(Object.getPrototypeOf(weirdRabbit));

