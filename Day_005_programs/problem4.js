let i = 1;
let sum = 0;
while(i <= 10)
  {
    if(i % 3 === 0)
    {
      sum = sum + i;
    }
    i++;
  }
console.log("sum is =", sum);