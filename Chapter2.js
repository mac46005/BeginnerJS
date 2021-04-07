// 2-1 Minimum
function min(x,y){
    if(y > x){
        return y;
    }
    else{
        return x;
    }
}

console.log(min(10,3));

// 2-2 Recursion
//Define a recursive function that corresponds to the following
//Zero is even
//One is odd
//For any other number N, its evenness is the same as N-2
function isEven(x){
    if(x == 0){
        return true;
    }
    else if(x == 1){
        return false;
    }
    else if(x < 0){
        return isEven(-x);
    }
    else{
        return isEven(x - 2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

