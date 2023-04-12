let i = 2;
let sum = 0;
while(i < 20)
  {
    if(i%3 == 0 && i%2 == 0)
    {
      sum += i;
    }
    i++;
  }
console.log(sum);