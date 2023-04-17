let array = ["goku","gohan","gon","luffy", "google", "google", "nami"];
let count = 0;
for(let i = 0; i < array.length; i++)
{
  if(array[i][0] === 'g')
  {
    count++;
  }
}
console.log(count);