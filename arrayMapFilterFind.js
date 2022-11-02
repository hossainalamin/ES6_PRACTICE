let numbers = [1,2,3,424,2321]

let output = numbers.map((x)=> x*x)
console.log(output);

let filterValue = numbers.filter((x)=> x>2);
console.log(filterValue);

let findValue = numbers.find((x) => x<2);
console.log(findValue);

