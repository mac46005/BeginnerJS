// Chapter 4 Excersizes

// 4-1 The Sum of a range
function range(start,end,step = 1){
    let count = start;
    let array = [];
    if(start > end + 1){
        while(count > end){
            array.push(count);
            count += step;
        }
    }
    else{
        while (count < end + 1) {
            array.push(count);
            count += step;
        }
    }
    return array;
}
console.log(range(3,9));

console.log(range(10,4,-1));

function sum(array){
    let s = 0;
    for (let x = 0; x < array.length; x++) {
        s += array[x];
    }
    return s;
}
//console.log(sum(range(3,9)));

// 4-2 Reversing an array
let someArray = [1,2,3,4,5,6,7,8,9,10];


function reverseArray(array){
    let revArray = [];
    for(x = array.length; x > -1; x--){
        revArray.push(array[x]);
    }
    return revArray;
}

function reverseArrayInPlace(...array){
    let revArray = [];
    for(x = array.length; x > -1; x--){
        revArray.push(array[x]);
    }
    return revArray;
}

console.log(reverseArray.name + ": " + reverseArray(someArray));
console.log(reverseArrayInPlace.name + ": " +reverseArrayInPlace([6,5,4,3,2,1]));

// 4-3 A List
//list example
let list = {
    value: 1,
    rest:{
        value:2,
        rest:{
            value: 3,
            rest: null
        }
    }
}
console.log(list);