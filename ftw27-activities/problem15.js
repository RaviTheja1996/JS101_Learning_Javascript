for(let i = 1; i <= 10; i++)
{
  let flag = false;
  for(let j = 2; j <= i; j++)
    {
      if(i%j === 0 && i !== 1)
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