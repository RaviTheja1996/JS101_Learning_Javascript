let arr = [1,-1,-2,-3,6,0];

for(let i = 0; i < arr.length; i++)
{
  if(arr[i] < 0)
  {
    arr[i] = 0
  }
}

console.log(arr);