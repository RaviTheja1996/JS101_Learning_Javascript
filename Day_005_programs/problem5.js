let i = 1;
let j = 0;
let sum = 0;
while(i <= 100)
{
  if(i % 2 === 0)
  {
    sum = sum + i;
    j++;
  }
  i++;
}
console.log(sum/j);