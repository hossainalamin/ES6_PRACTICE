let mood = "funny";
function defineMood()
{
    if(mood == "funny")
    {
        // let moodNow = "funny";
        var moodNow = "funny"; //scopeHoisting
    }
    console.log(moodNow);
}
defineMood()
// console.log(moodNow);