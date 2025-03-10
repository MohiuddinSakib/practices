const array=[1,2,3,4,5,6]
const array2=['Ekon','Sakib']
// const index=array.findIndex((element)=>{
//  return element==3
// })

const index=array.reduce((prevValue,currentValue)=>{
 prevValue + currentValue
 return currentValue
},0)//prevvalue
console.log(index)