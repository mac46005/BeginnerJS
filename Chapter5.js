let total = 0,count = 1;
while(count <= 1){
  total += count;
  count += 1;
}
//console.log(total);

//console.log(sum(range(1,10)))

function sum(array){
  let result = 0;
 for(let x in array){
   result += x;
 } 
 return result;
}

function range(start,end){
  let array = [];
  for (var i = start; i < end; i++){
  array.push(i);
  }
  return array;
}
////////////////////////////////////
//Abstraction Repetition


for (var i = 0; i < 10; i++) {
  console.log(i);
}

//and abracted function
function repeat(n){
  for (var i = 0; i < n; i++) {
    console.log(i);
    }
}

//repeat(10);

//a function with a funciton parameter
function repeater(n,action){
  for (var i = 0; i < n; i++) {
    action(i)
  }
}
repeater(3,console.log);

// create a funciton value on the spot
let labels = [];
repeater(5,i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);


/////////////////////////
//High order functions
function greaterThan(n){
  return m => m > n;
}
let greaterThan10 = greaterThan(11);
console.log(greaterThan10);

