// rest spread operator

const emp = {
    id:1,
    name:"ram",
    salary:"123456",
    address:"delhi",
    age:25,
    department:"HR"
}

const empCopy = {...emp} //  ...emp --->>>>> spread

const {id,name,salary, ...otherInfo} = emp; // ...otherInfo --->>>>> rest
console.log(otherInfo)

console.log(empCopy)


// update the address 

const empUpd = {...emp, address:"varanasi"};
console.log(empUpd)
