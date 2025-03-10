// console.log("working")
const obj={
    name:"sakib",
    class:13
}
const obj4={
    name:"sakib",
    class:13
}
let ab ='name'
let x =Object.keys(obj)
console.log(`${x[0]}:`,obj[x[0]],`${x[1]}:`,obj[x[1]])


for(item in obj){
    // console.log(item,"= ",obj[item])
}

//obj with nested obj


let X={
    Red:{
        x:'Wear the tshirt',
        y:'Wear the tshirt',
    },
    Green:{
        xl:'Wear the hoodies'
    }
}

let y =Object.keys(X['Red'])
console.log(y)

let {name,year}={
    name:"Miskah",
    year:7
}



// let obj5={}

// if(obj5[obj4.name]=='sakib'){
//     console.log("yes")
// }else{
//     console.log("false")
//     obj5.name=obj4.name
// }


let itemCode='class'
// obj5[itemCode]=14
// console.log(obj5)


let obj6={}
obj6[itemCode]={}
obj6[itemCode]['detail']={name,year}
console.log(obj6)





// console.log(name)
//destructure
const array=["shihab",'ekon','rafi']
const [a,...rest2]=array
console.log(a,rest2)

// let [first,second]=array
// let [first, ,third]=array
let [first,...rest]=array

// console.log(first,third)
// console.log(first,rest)

const obj2={...array}
// console.log(obj2)

// console.log(obj)
const obj3=JSON.parse(JSON.stringify(obj))
// console.log(obj3)


const Arr=[
    {
        name:"sakib",
        class:13
    },
    {
        name:"ekon",
        class:13
    },
]

let newarr=Arr.map((item)=>{
return item.class
})
// console.log(newarr)
let farr=Arr.find((item)=>item.name=="sakib")
console.log('far',farr)

const savecart=(string)=>{
// console.log(string)
}
string="hi"
savecart(string)


for(let element of Arr){
    // console.log(element.name)
}

let product,sumTotal=0
console.log(sumTotal)

let newArray=[]
newArray.push(string)
console.log(newArray)

const loopArray=['sakib','Akib',"shihab"]


// for(let item in loopArray){
//     console.log(loopArray[item])
// }
// let sum;
//     for(let i=0;i<loopArray.length;i++){
//         setTimeout(() => {
//             sum+=i
//             console.log(sum)
//         },1000);
//     }
   


let num=0
for(let i=0;i<10;i++){
    // console.log(i)

    // num+=i
    num=i
    // console.log( num+=i,)
    
}
console.log(num)

function addnum() {
   
}

addnum(5,5)
// console.log(xx)
// console.log(num)

