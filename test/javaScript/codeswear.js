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



let colorSizeSlug={} //{red:{xl:{slug:"wear-the -code"}}} (expected)
 for(let item of Arr){
    console.log(item)
if(Object.keys(colorSizeSlug).includes(item.name)){
  colorSizeSlug[item.name][item.class]={slug:item}
}else{
    colorSizeSlug[item.name]={}
    colorSizeSlug[item.name][item.class]={slug:item.name,slug:item.name} //{red:{xl:{slug:"wear-the -code"}}} (expected)
  }}

console.log(colorSizeSlug)