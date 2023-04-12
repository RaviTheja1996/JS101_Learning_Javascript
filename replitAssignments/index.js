let a = "goku", b = "goku", c = "gon";

if(a == b && a == c)
{
  console.log("all the names are same.");
}
else
{
  if(a == b)
  {
    console.log(`a, b are same`);
  }
  else if(b == c)
  {
    console.log(`b, c are same`);
  }
  else if(a == c)
  {
    console.log(`a, c are same`);
  }
}