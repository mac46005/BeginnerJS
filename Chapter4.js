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