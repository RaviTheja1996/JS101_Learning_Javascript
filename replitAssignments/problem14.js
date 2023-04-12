let n = 100;
let bag = 0;
while(n > 5)
{
  if(n % 5 == 0 && n % 10 == 0)
  {
    bag = bag + 5;
  }
  n--;
}
console.log(bag);