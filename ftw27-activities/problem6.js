let array = ["Goku", "luffy", "zabuza", "Naruto", "Saskue"];
let count = 0;
for(let i = 0; i < array.length; i++)
{
  count += array[i].length;
}
console.log(count);