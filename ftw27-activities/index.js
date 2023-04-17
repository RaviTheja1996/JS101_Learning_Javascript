let array = [1,2,3,4,5];
let arr = [];
let j = 0;
// 1st way
// for(let i = (array.length - 1); i >= 0; i--)
// {
//   arr[j++] = array[i];
// }
// 2nd way
for(let i = (array.length - 1); i >= 0; i--)
{
  arr.push(array[i]);
}
console.log(arr);