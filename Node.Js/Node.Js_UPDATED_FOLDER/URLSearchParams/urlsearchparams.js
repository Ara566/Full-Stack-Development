/* not mandatory
const { URLSearchParams } = require('url');
const params = new URLSearchParams('foo=bar&abc=123');

*/


let params=new URLSearchParams('user=Aravind&age=20')
let username=params.get('user')
let userage=params.get('age')
console.log(`user name: ${username} and age is: ${userage}`)

//add parameters

params.append('rollnum','520');  //must be name,value
let rollnum=params.get('rollnum')
console.log(`user name: ${username} and age is: ${userage} and rollnumber is : ${rollnum}`)

console.log(params)
params.set('rollnum','1000')
console.log("after set operation on roll num:",params)
params.forEach((key,value)=>{
    console.log(`${key}====>${value}`)
})



console.log("im going to convert this URLSearchParams object into QUERY string")
console.log(params.toString())