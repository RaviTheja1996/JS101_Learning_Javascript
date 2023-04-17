function TotalBill(n)
{
  let bill;
    if(n <= 50)
    {
        bill = 80 + n*3;
    }
    else if(n > 50 && n <= 150)
    {
        bill = 80 + 150 + (n-50)*5;
    }
    else
    {
        bill = 80 + 150 + 500 + (n-150)*10;
    }
    console.log(bill);
}
console.log(TotalBill(178));