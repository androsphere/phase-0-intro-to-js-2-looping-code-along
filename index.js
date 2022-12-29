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

writeCards(names, "surprise");

function countDown()
{
    let counter = 10;
    while (counter >=0)
    {
        console.log(counter);
        counter--;
    }
}
