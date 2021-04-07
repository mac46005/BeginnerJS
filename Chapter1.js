//prompt();

//Chapter 1 Excercises

// 1-1 Looping Triangle
//Write a loop that makes seven calls to console.log to output the following
//#
//##
//###
//####
//#####
//######
//#######

let hash = '#';
let string = "";
for (let x = 0; x < 7; x++){

    string += hash;
    console.log(string);
}

console.log();


// 1-2 FizzBuzz
//Write a program that uses console.log to print
//all the numbers from 1 to 100, with two exceptions.
//For numbers divisible by 3 print "Fizz"
//For numbers divisible by 5 print "Buzz"
//for both divisible by 3 and 5 print "FizzBuzz"
let f = "Fizz";
let b = "Buzz";
for (let x = 0; x < 101; x++){
    if ((x % 3 == 0) && (x % 5 == 0)) {
        //console.log(f + b);
    }
    else if(x % 3 == 0){
        //console.log(f);
    }
    else if(x % 5 == 0){
        //console.log(b);
    }
    else{
        //console.log(x)
    }
}

//1-3 ChessBoard
let board = "";
let size = 8;
for(x = 0; x < size; x++){
    for(y = 0; y < size; y++){
        if((x + y) % 2 == 0){
            board += "#";
        }
        else{
            board += " ";
        }
    }
    board += "\n";
}
console.log(board);

