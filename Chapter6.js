/////////////////////////////////////////////
// Getter, Setters, and Statics

let varyingSize = {
    get size(){
        return Math.floor(Math.random() * 100);
    }
}

//console.log(varyingSize.size);
//console.log(varyingSize.size);

class Temperature {
    constructor(celsius){
        this.celsius = celsius;
    }
    
    get fahrenheit(){
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value){
        this.celsius = (value - 32)/1.8;
    }
    
    static fromFarnheit(value){
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);

class SymmetricMatrix extends Matrix{
    constructor(size,element = (x,y) => undefined){
        super(size,size,(x,y) => {
            if(x < y){
                return element(y,x);
            }
            else{
                return element(x,y);
            }
        })
    }
    set(x,y,value){
        super.set(x,y,value);
        if(x != y){
            super.set(y,x,value);
        }
    }
}


console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
console.log(new SymmetricMatrix(2) instanceof Matrix);
console.log(new Matrix(2,2) instanceof SymmetricMatrix);
console.log([1] instanceof Array);

