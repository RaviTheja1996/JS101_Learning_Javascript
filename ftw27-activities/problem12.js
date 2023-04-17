for(day = 1; day <= 3; day++)
{
  let str = "";
  console.log(`Travel to farm on day`,day);
  for(seed = 1; seed <= 5; seed++)
  {
    str = str + "*" + " ";
  }
  console.log(str);
  console.log(`Travel to Home on day`,day);
}