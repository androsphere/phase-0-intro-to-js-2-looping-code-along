// Code your solutions in this file
const names = ["Tom", "Billy", "James"];
const event = ["surprise"];

function writeCards(names, event) {
    let output = [];
  for (let i = 0; i < names.length; i++) {
     output[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; 
  }
  return output;
}
function countDown(int){
    let i = int;
    while(i>=0){
        console.log(i);
        i--;
    }
}