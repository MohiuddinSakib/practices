var menu=document.querySelector(".nav i")
var cross=document.querySelector(".full i")


var tl= gsap.timeline()
//paused true to stop the animation
//we can use tl.pause() to stop the animation because here tl can access all the properties of the timeline
// var tl= gsap.timeline({paused:true})
tl.pause()

tl.to('.full',{
    right:0,
    duration:1,
})

tl.from('.full h4',{
    x:100,
    duration:1,
    stagger:0.3,
    opacity:0
})
tl.from('.full i',{
  
    opacity:0
})

menu.addEventListener('click',function(){
    tl.play()
})
cross.addEventListener('click',function(){
    console.log('clicked')
    tl.reverse()
})