const info = {name : "Al Amin", age : '25', salary : '25k', address : 'dhaka', university : 'JnU'}
const {age,salary} = info
console.log(age, salary)

const moreInfo = {name : "Al Amin", age : '25', salary : '25k'
, address : {
    country : 'Bangladesh',
    city : 'Dhaka',
    area : 'Mirpur'
}
, university : 'JnU'}

const{city} = moreInfo.address
console.log(city);

const infoArray = {'name' : "Al Amin", 
'age' : '25', 
'salary' : '25k',
'address' : {
    country : 'Bangladesh',
    city : 'Dhaka',
    area : 'Mirpur'
},
'university' : 'JnU'
}


const{ageCount, ...restInfo} = infoArray
console.log(age, restInfo);