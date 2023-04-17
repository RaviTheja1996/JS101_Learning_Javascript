for(farm = 1; farm<=5; farm++)
{
  let str = "";
  console.log(`Travel to farm`,farm);
  for(seed = 1; seed <= farm; seed++)
  {
    str = str + "*" + " ";
  }
  console.log(str);
  console.log(`Travel to Home from farm`,farm);
}