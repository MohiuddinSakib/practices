
//(.includes work in array)
//(.push work in array)



//concept from codeswear

let array=["Ekon","shihab"]

// console.log(array)

let object={
    name:"sakib",
    college:"pgc"
}
let object3={
    name:{
        byear:2017,
        dyear:2020,

    },
    college:"pgc"
}

let object2={}

object3[object.name]=JSON.parse(JSON.stringify(object))

for (let item of array) {
        // console.log(item)
    }

// console.log(object3)
// object2[object.name]=array
// object2[object.name].push("rakib")
// console.log(object2)

// for (let item in object) {
//     console.log(item)
// }
  

// console.log(  object['name'])
// success

// console.log(array.includes("Ekon"))
// Object.keys(object3).map((item)=>{console.log(item)})

// console.log(Object.keys(object3))
// console.log(object3.name['byear'])



let x={
    721302:["Khragpur","West Bengal"],
    110003:["Delhi","delhi"],
    560017:["Bangalore","Karnataka"]
}
console.log( x['560017'])