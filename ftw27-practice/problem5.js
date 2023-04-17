function subStringReverse(str)
{
  if(str.length % 2 === 0)
  {
    let x = str.length / 2;
    let output = "";
    for(let i = x - 1; i >= 0; i--)
    {
      output += str[i];
    }
    for(let i = str.length - 1; i >= x; i--)
    {
      output += str[i];
    }
    console.log(output);
  }
  else
  {
    console.log(`The string given is not in correct format for the substring reversal`);
  }
}
subStringReverse("google");