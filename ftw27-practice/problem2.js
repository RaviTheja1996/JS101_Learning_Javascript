let num = 88;
if(num%2 == 0 && num / 10 < 8)
{
  console.log(1);
}
else if(num % 3 == 0 || num / 20 > 10)
{
  console.log(2);
}
else if(num % 4 == 0 || num % 40 == 0)
{
  console.log(3);
}
else
{
  console.log(4);
}