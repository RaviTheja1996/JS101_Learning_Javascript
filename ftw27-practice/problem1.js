let arr = [12,14,15,23,36,46];
for(let i = 0; i <= arr.length; i++)
{
  if((arr[i]%2 == 0 || arr[i]%3 == 0) && arr[i] <= 40)
  {
    console.log(arr[i]);
  }
}