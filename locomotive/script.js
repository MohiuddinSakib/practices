function loading() {

    var tl=gsap.timeline()

    tl.to(".yellow1", {
       top:"-100%",
        duration: 1,
    
        delay: 0.5,
        ease: "expo.out",
    });
    tl.from(".yellow2", {
       top:"100%",
        duration: 1,
    
        delay: 0.5,
        ease: "expo.out",
    },"stime");
    
    tl.to('.loader h1' , {
        delay:0.6,
        duration:0.5,
        color:"black",
    },"stime")
    tl.to('.loader', {
        opacity:0,
    })
    tl.to('.loader', {
        display:"none",
    })


 }

loading();
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    
});

var footer=document.querySelector(".footer")
footer.addEventListener('click',function(){
    scroll.scrollTo(0)
})

var elems =document.querySelectorAll('.elem');
console.log(elems);
var page2=document.querySelector('.page2');

elems.forEach(function(elem){
console.log(elem)
elem.addEventListener('mouseenter',function(){
    console.log('entered');
    var bgImg= elem.getAttribute('data-img');
    console.log(bgImg);
    page2.style.backgroundImage=`url(${bgImg})`;
})

elem.addEventListener('mouseleave',function(){
 
    page2.style.backgroundImage="none";
})
})