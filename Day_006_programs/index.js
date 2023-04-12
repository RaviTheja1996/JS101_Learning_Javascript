let i = 1;
let sum = 0;
while(i<=20)
  {
    if(i%5 === 0)
    {
      console.log(i);
      sum = sum + i;
    }
    i++;
  }
console.log('sum is =',sum);
