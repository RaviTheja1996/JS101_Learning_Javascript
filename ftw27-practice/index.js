let string = "I am Iron Man";
let sum = 0;
let count = 0;
for(let i = 0; i <= string.length - 1; i++)
{
  if(string[i] == " ")
  {
    count++;
    count = count * count;
    sum = sum + count;
  }
}
console.log(sum);