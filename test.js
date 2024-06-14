const { faker } = require('@faker-js/faker/locale/es');
// or, if desiring a different locale
// const { fakerDE: faker } = require('@faker-js/faker');
const fs =require('fs');
let data='';
for(let i=1;i<=100000;i++){
    data+=`${faker.person.fullName()},${faker.phone.number()}\n`;
}
fs.writeFile('users.txt',data,(err)=>{
    console.log('write')
});