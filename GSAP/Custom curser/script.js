var main=document.querySelector('.main')
var curser=document.querySelector('.curser')
var img=document.querySelector('.image')

// main.addEventListener('mousemove',function(dets){
//     var xAxis=dets.x;
//     var yAxis=dets.y;

//     curser.style.left=xAxis+'px'
//     curser.style.top=yAxis+'px'

//     main.addEventListener('mouseenter',function(){
//         curser.style.opacity=1
//     })
//     console.log(dets)
// })



//with gsap
main.addEventListener('mousemove',function(dets){
   gsap.to(curser,{
    x:dets.x,
    y:dets.y,
    duration:0.3,
    // ease:'back.out'
   })

    // main.addEventListener('mouseenter',function(){
    //     curser.style.opacity=1
    // })
    // console.log(dets)
})

img.addEventListener('mouseenter',function(){
    curser.innerHTML="hoverd"
    console.log('clicked')

    gsap.to(curser,{
        scale:4
    })
})
img.addEventListener('mouseleave',function(){
     curser.innerHTML=''
    console.log('clicked')

    gsap.to(curser,{
        scale:1
    })
})