// Chapter 4 Excersizes

// 4-1 The Sum of a range
function range(start,end){
    let array = [];
    for(x = start; x < end + 1; x++){
        array.push(x)
    }
    return array;
}
console.log(range(3,9));
