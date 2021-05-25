let total = 0,count = 1;
while(count <= 1){
  total += count;
  count += 1;
}
console.log(total);

console.log(sum(range(1,10)))

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

