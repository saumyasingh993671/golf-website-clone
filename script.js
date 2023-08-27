var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    // console.log(dets.y);
    // console.log(dets.x);
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x -150 + "px"
    blur.style.top = dets.y -150 + "px"
});


gsap.to("#nav",{
    backgroundColor:"#000",
    duration: 0.5,
    height:"120px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
        
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})


var h4all=document.querySelectorAll("#nav h4");
console.log(h4all);
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=6;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
        crsr.style.transition="all ease 1.5s";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.transition="all ease 1s";
      });
})



gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub: 3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // marker:true,
        start:"top 55%",
        end:"top 47%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // marker:true,
        start:"top 55%",
        end:"top 47%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // marker:true,
        start:"top 90%",
        end:"top 80%",
        scrub:1
    }
})
