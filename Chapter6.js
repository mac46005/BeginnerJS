////////////////////////////////////////
// Methods
let rabbit = {};
rabbit.speak = function(line){
    console.log(`The rabbit says '${line}'`);
};


//rabbit.speak("Blah");

function speak(line){
    console.log(`the ${this.type} rabbit says '${line}'`);
}
let whiterabbit = {type: "white",speak};
let hungryRabbit = {type: "hungry", speak};

//whiterabbit.speak("Oh my ears and whiskers, how late it's getting!");
//hungryRabbit.speak("I could use a carrot right now.");

//speak.call(hungryRabbit,"Burp");

function normalize(){
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({coords: [0,2,3],length: 5});

//////////////////////////////////////////////////////
// Prototypes

let empty = {};
//console.log(empty.toString);
//console.log(empty.toString());

//console.log(Object.getPrototypeOf({}) == Object.prototype);

//console.log(Object.getPrototypeOf(Object.prototype));

//console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

//console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}


let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
//killerRabbit.speak("SKREEEEEEEE BITCH");


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

//console.log(Object.getPrototypeOf(Rabbit));
//console.log(Object.getPrototypeOf(weirdRabbit));

///////////////////////////////////////////////
// Class Notation

class RabbitModel{
    constructor(type){
        this.type = type;
    }
    speak(line)
    {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
}

killerRabbit = new RabbitModel("Killer");
let blackRabbit = new RabbitModel("black");

let object = new class{getWord(){return "hello"}};
//console.log(object.getWord());

////////////////////////////////////////////////////////////
// Overriding Derived Properties

RabbitModel.prototype.teeth = "small";
//console.log(killerRabbit.teeth);

killerRabbit.teeth = "long,sharp,and bloody";
//console.log(killerRabbit.teeth);
//console.log(blackRabbit.teeth);
//console.log(RabbitModel.prototype.teeth);

//console.log(Array.prototype.toString == Object.prototype.toString);

//console.log([1,2].toString());

//console.log(Object.prototype.toString.call([1,2]));

///////////////////////////////////////////////
// Maps

let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62
}

//console.log(`Julia is ${ages["Julia"]}`);
//console.log("Is Jack's age known?","Jack" in ages);
//console.log("Is toString's afe known?","toString" in ages);

//console.log("toString" in Object.create(null));

ages = new Map();
ages.set("Boris", 39);
ages.set("Liang",22);
ages.set("Julia",62);

//console.log(`Julia is ${ages.get("Julia")}`);
//console.log("Is Jack's age known?",ages.has("Jack"));
//console.log(ages.has("toString"));

//console.log({x: 1}.hasOwnProperty("x"));
//console.log({x: 1}.hasOwnProperty("toString"));

////////////////////////////////////////////////////////////////
// Polymorphism
RabbitModel.prototype.toString = function(){
    return `a ${this.type} rabbit`;
}
//console.log(String(blackRabbit));

/////////////////////////////////////////////////////////////////
// Symbols

let sym = Symbol("name");
//console.log(sym == Symbol("name"));
RabbitModel.prototype[sym] == 55;
//console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
    return `${this.length} cm of blue yarn`;
};

//console.log([1,2].toString());
//console.log([1,2][toStringSymbol]());

let stringObject = {
    [toStringSymbol](){return "a jute rope";}
};

//console.log(stringObject[toStringSymbol]());

///////////////////////////////////////////////////
// The Iterator Interface

let okIterator = "Hello"[Symbol.iterator]();
console.log(okIterator.next());

class Matrix{
    constructor(width,height,element = (x,y) => undefined){
        this.width = width;
        this.height = height;
        this.content = [];

        for(let y = 0; y < height; y++){
            for(let x = 0;x < width; x++){
                this.content[y * width + x] = element(x,y);
            }
        }
    }

get(x,y){
    return this.content[y * this.width + x];
}

set(x,y,value){
    this.content[y * this.width + x] = value;
}

}
//////fuckkkkkk

class MatrixIterator{
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next(){
        if(this.y == this.matrix.height){
            return {done: true};
        }
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x,this.y)
        }

        x++;

        if(this.x == this.matrix.width){
            this.x = 0;
            this.y++;
        }
    }
}