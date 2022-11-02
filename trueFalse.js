//False
const name= 0
const nameOne= ""
const nameTwo= null 
const nameThree= undefined 
const nameFour= NaN 
if(name || nameOne || nameTwo || nameThree || nameFour)
{
    console.log('flase');
}

//Truth
const nameFive = "0";
const nameSeven = " ";
const nameSix = "false";
if(nameFive || nameSix || nameSeven)
{
    console.log('True');
}
