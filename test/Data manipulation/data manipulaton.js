const products= [
      {
        "_id": "65b8f22dd1d6c3e65429788a",
        "title": "testhoodie",
        "desc": "testing",
        "color": "red",
        "price":2,
        "availableQty": 2,
        "imgurl": [
          "./3.jpg",
          "./4.jpg"
        ],
        "size": [
          "x,z"
        ],
        "likes": [],
        "createdAt": "2024-01-30T12:57:17.115Z",
        "updatedAt": "2024-01-30T12:57:17.115Z",
        "__v": 0
      },
      {
        "_id": "65b8f22dd1d6c3e65429788a",
        "title": "testhoodie",
        "desc": "testing",
        "color": "blue",
        "price":5,
        "availableQty": 2,
        "imgurl": [
          "./2.jpg",
          "./1.jpg"
        ],
        "size": [
          "Y,W"
        ],
        "likes": [],
        "createdAt": "2024-01-30T12:57:17.115Z",
        "updatedAt": "2024-01-30T12:57:17.115Z",
        "__v": 0
      },
      {
        "_id": "65b8f22dd1d6c3e65429788a",
        "title": "test",
        "desc": "testing",
        "color": "black",
        "price":6,
        "availableQty": 2,
        "imgurl": [
          "./3.jpg",
          "./4.jpg"
        ],
        "size": [
          "Y,W"
        ],
        "likes": [],
        "createdAt": "2024-01-30T12:57:17.115Z",
        "updatedAt": "2024-01-30T12:57:17.115Z",
        "__v": 0
      },
      {
        "_id": "65b8f22dd1d86c3e65429788a",
        "title": "test",
        "desc": "testing",
        "color": "blue",
        "price":6,
        "availableQty": 2,
        "imgurl": [
          "./3.jpg",
          "./4.jpg"
        ],
        "size": [
          "Y,W"
        ],
        "likes": [],
        "createdAt": "2024-01-30T12:57:17.115Z",
        "updatedAt": "2024-01-30T12:57:17.115Z",
        "__v": 0
      },
   
    ]
    // note:we use an array when we want store anything with just one variable
  //taking all color in one array
    // const allcolor=[]
    // for(let item of products){
    //     allcolor.push(item.color)
    // }
    // console.log(allcolor)
    const allcolor=[]
    for (let item of products){
    const existingitem=allcolor.find((color)=>color===item.color)
    if(existingitem){
      // console.log('existing',existingitem)
      // return
    }else{
      // const allcolor=[]
      if(item.availableQty >0){
        
        allcolor.push(item.color)
      }
    }
    }
    // console.log(allcolor)
    // note:we use object when we need to store something with key value pair 
    //color imageurl pair
    let colorImgurlObj={}
    //1
//     for(let item of products){
//  colorImgurlObj[item.color]=item.imgurl
//     }
    //2
    // for(let item of products){
    //   if(!colorImgurlObj[item.color]){

    //     colorImgurlObj[item.color]=item.imgurl
    //   }
    // }
    //3
    for(let item of products){
      if(colorImgurlObj[item.color]){
        let color=item.color +'2'
        colorImgurlObj[color]=item.imgurl
      }else{
        colorImgurlObj[item.color]=item.imgurl
      }
    }
    // console.log(colorImgurlObj)
    // console.log(Object.keys(colorImgurlObj).includes())

    //storing color/something based on common thing like title from an array

//
//separate array and obj--making an object and pushing it into the aray
let array=[]
let object={}
for(let item of products){
    let existingitem=array.find((product)=>product.title===item.title)
 
    if(existingitem){
        if(!existingitem.imgurl[item.color] && item.availableQty>0){
          console.log(!existingitem.color[item.color])
            existingitem.imgurl[item.color]=[]
          
            existingitem.imgurl[item.color].push(item.imgurl)
        }
      if (!existingitem.color.includes(item.color) && item.availableQty>0){
          existingitem.color.push(item.color)
        }
        if(!existingitem.price[item.color] && item.availableQty>0){
          existingitem.price[item.color]=item.price
          
        }
    }else{
      if(item.availableQty>0){
        object.title=item.title
        object.color=[item.color]
        object.imgurl={[item.color]:item.imgurl}
        object.price={[item.color]:item.price}
   
      }
        array.push({...object})
    }
}
// console.log(array)
// let array=[]

for(let item of products){
    let existingitem=array.find((product)=>product.title===item.title)
 
    if(existingitem){
        if(!existingitem.imgurl[item.color] && item.availableQty>0){
          console.log(!existingitem.color[item.color])
            existingitem.imgurl[item.color]=[]
          
            existingitem.imgurl[item.color].push(item.imgurl)
        }
      if (!existingitem.color.includes(item.color) && item.availableQty>0){
          existingitem.color.push(item.color)
        }
        if(!existingitem.price[item.color] && item.availableQty>0){
          existingitem.price[item.color]=item.price
          
        }
    }else{
      if(item.availableQty>0){
        object.title=item.title
        object.color=[item.color]
        object.imgurl={[item.color]:item.imgurl}
        object.price={[item.color]:item.price}
        // let newitem={
        //   title:item.title,
        //   color:[item.color],
        //   imgurl:{[item.color]:item.imgurl},
        //   price:{[item.color]:item.price}
         
        // }
        array.push(newitem)
      }
        // array.push({...object})
    }
}
// console.log(array)

// let test=array.splice(0,1)
// console.log(test)

// let test2={ title: 'test', color: { black: [Array] }, new: 2 }

// test2['new2']=56
// console.log(test2)

  //  let string ="x,f" 
  //  let sizearray=string.split(",")
  //  console.log(sizearray)
  
  let obj2= 
    {
        "_id": "65ba5a6e89cbaf5ecfdbe8fe",
        "title": "testhodie",
        "desc": "testing",
        "color": [
            "blue",
            "red"
        ],
        "availableQty": 2,
        "imgurl": [
            "./5.jpg",
            "./4.jpg"
        ],
        "size": "R,I",
        "__v": 0,
        "imageurl": {
            "blue": 
                [
                    "./5.jpg",
                    "./3.jpg"
                ],
            
            "red": 
                [
                    "./5.jpg",
                    "./4.jpg"
                
            ]
        }
    }

    // let x=obj2.imageurl['red'].map((img)=>{console.log(img)})
// console.log(obj2.imageurl['red'])
//
// const colorSizeSlug=[]
// for(let item of products){
//   let existingitem=colorSizeSlug.find((product)=>product[item.color])
//   if(existingitem){
// console.log(existingitem)
//   }else{
//     let newItem={[item.color]:{}}
//     newItem[item.color][item.size]={}
//     newItem[item.color][item.size]={[item.title]:item.size}
//     colorSizeSlug.push(newItem)
//   }
  
// }
// console.log(colorSizeSlug)


const arrayx=[
  {
    id:1,
    title:'sakib',
    desc:'this is description',
  },
  {
    id:2,
    title:'ekon',
    desc:'this is description',
  },
  {
    id:3,
    title:'shihab',
    desc:'this is description',
  },
 
]

// let findbyid=arrayx.find((item)=>item.id==1)
// console.log(findbyid)

function findbyid(id) {
  return arrayx.find((item)=>item.id==id)
}
let ans=findbyid(3)
console.log(ans)