// part-1:Basic

gsap.to('#box',{
    x:1000,
   
    duration:3,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:.5,
    repeat:-1,
    yoyo:true,
})
// gsap.from('#box-2',{
//     x:1000,
   
//     duration:3
// })

// gsap.to("h1",{
//     color:"lightblue",
//     duration:2,
//     y:30,
// })
// gsap.from("h1",{
//     color:"lightblue",
//     duration:2,
//     y:30,
//     stagger:1
// })

var tl=gsap.timeline()

tl.to("#box",{
    x:1000,
    duration:3,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:.5,
    // repeat:-1,
    // yoyo:true,
})
tl.to("#box-2",{
    x:500,
    duration:3,
    rotate:360,
    backgroundColor:"green",
    borderRadius:"50%",
    scale:.5,
    repeat:-1,
    yoyo:true,
})


// paer-2:scrollTriger


gsap.to(".page1 .box",{
    scale:0,
    duration:3,
    rotate:360,
    
})

// marker:it is a property that denotes the point of starting of an animation
// gsap.to(".page2 .box",{
//     scale:0,
//     duration:3,
//     rotate:360,
//     // scrollTrigger:".page2 .box"
//     scrollTrigger:{
//         trigger:".page2 .box",
//         scroller:"body",
//         markers:true, 
//         start:"top 60%",
//         // scrub:true,
//         scrub:2,
//     }
    
// })
gsap.to(".page3 h1",{
    transform:"translateX(100%)",
    duration:3,
    scrollTrigger:{
        trigger:".page3",
        scroller:'body',
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:true,
        pin:true
    }
})


