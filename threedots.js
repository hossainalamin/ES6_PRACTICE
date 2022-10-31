const ageOne = [1,2,3]
const ageTwo = [4,5,6]
const ageFinal = [...ageOne, ...ageTwo];
console.log(ageFinal);
const maxAge = Math.max(...ageFinal);
console.log(maxAge);