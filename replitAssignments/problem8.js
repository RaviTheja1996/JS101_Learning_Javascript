for(let i = 10; i > 0; i--)
  {
    if(i%2 !== 0)
    {
      continue;
    }
    console.log(i);
  }

let i = 10;
while(i > 0)
  {
    if(i%2 !== 0)
    {
      i--;
      continue;
    }
    console.log(i);
    i--;
  }