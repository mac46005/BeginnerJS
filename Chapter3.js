// 3-1 MINIMUM
function min(x,y){
    if(x > y){
        return y;
    }
    else{
        return x;
    }
}

console.log(min(4,5));

// 3-2 ISEVEN

function isEven(n){
    if(n == 0){
        return true;
    }
    else if(n == 1){
        return false;
    }
    else if(n < 0){
        return isEven(-n);
    }
    else{
        return isEven(n-2);
    }
}
console.log(isEven(50));
console.log(isEven(75));