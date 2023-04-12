let chrArray = ['a','b','c','d','e'];
console.log(`initial array is =`,chrArray);
for(let  i = 0; i < chrArray.length; i++)
{
  chrArray[i] = chrArray[i].toUpperCase();
}
console.log(`array after conversion is =`,chrArray);
