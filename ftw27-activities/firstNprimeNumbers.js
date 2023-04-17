for(let i = 2; i <= 10; i++)
{
  let flag = false;
  for(let j = 1; j <= i; j++)
    {
      if(i%j === 0 && j !== 1 && i !== j)
      {
        flag = false;
        break;
      }
      else
      {
        flag = true;
      }
    }
  if(flag)
  {
    console.log(i);
  }
}