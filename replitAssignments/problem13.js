let arr = [23,45,67,22,44,2,82,40,10,80,49];
let sum = 0;
let count = 0;
for(let i = 0; i < arr.length; i++)
{
  if(arr[i]%2 === 0)
  {
    sum = sum + arr[i];
    count += 1;
  }
}
console.log(sum/count);