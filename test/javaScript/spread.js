let object={
    name:"sakib",
    class:13,
    college:"Potiya Govt College"
}

let object2={
    name:"Shihab",
    class:11,
    college:"Hulain Govt College"
}

console.log({...object,name:"Ekon"}) //Test1:testing if I can change value of a key's value =success
console.log({...object,name:object2.name})// Test2:testing if I can change value referring to another objects keys value=success

let object3={...object,religion:"Islam"}// adding new key value=success
console.log(object3)

//adding new object as a key into an Object=success
//type 1
let object4={...object,newObject:object2}
console.log(object4)
//type 2
let object5={...object,newObject:{...object3}}
console.log(object5)