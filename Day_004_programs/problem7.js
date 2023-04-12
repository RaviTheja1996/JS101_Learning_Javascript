let storedUserName = "Naruto";
let storedPassword = "RasenShuriken";

let inputUserName = "Naruto";
let inputPassword = "RasenShuriken";

if(inputUserName == storedUserName)
{
  if(inputPassword == storedPassword)
  {
    console.log(`user can login`);
  }
  else
  {
    console.log(`user cannot login`);
  }
}
else
{
  console.log(`user cannot login`);
}