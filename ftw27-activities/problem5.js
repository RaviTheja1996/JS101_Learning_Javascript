let array = "masai school hi everyone";
let count = 0;
for(let i = 0; i < array.length; i++)
{
  if(array[i] === " ")
  {
    count++
  }
}
console.log(`words:`, count+1);