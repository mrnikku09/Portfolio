// //locomotive
// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#lord"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#lord", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#lord").style.transform ? "transform" : "fixed"
// });




// // tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
// //   .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
// //   .to(".purple", {backgroundColor: "#28a92b"}, 0);



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


//normal


var loadingpage = gsap.timeline();
loadingpage
    .from("#a11", {
        opacity: 0,
        duration: .5,
        y: 50
    })
    .from("#a12", {
        opacity: 0,
        duration: .5,
        y: -50
    })
    .from("#a13", {
        opacity: 0,
        duration: .5,
        y: 50
    })
    .from("#a14", {
        opacity: 0,
        duration: .5,
        y: -50
    })
    .from("#a15", {
        opacity: 0,
        duration: .5,
        y: 50
    })
    .to("#loadingpage", {
        // opacity:0,
        ease: "Power4.easeOut",
        duration: 1,
        delay: .5,

        y: "-100%"
    })

var hello = gsap.timeline();
hello
    .from("#a22", {
        opacity: 0,
        // delay:3,
        duration: .5,
        y: 50
    })
    .from("#a23", {
        opacity: 0,
        duration: .5,
        y: 50
    })
    .from("#a24", {
        opacity: 0,
        duration: .5,
        y: 50
    })

gsap.to("#a32", {
    duration: 1,
    x: "100%",
    ease: "ease-in-out",
    scrollTrigger: {
        trigger: "#a32",
        scroller: "body",
        start: "top 50%",
        end: "top 50%"
    }
})


    gsap.from("#frontend", {
        duration: 1,
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: "#frontend",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top 80%",
            scrub: 5
        }
    })
    gsap.to("#a44", {
        // width:"95%",
        // stagger:"",
        duration: 3,
        width: "70%",
        opacity: 1,
        // ease:"ease-in-out",
        scrollTrigger: {
            trigger: "#a44",
            scroller: "body",
            // // markers:true,
            // start: "top 80%",
            // end: "top 80%",
            // scrub: 5
        }
    })

    gsap.to("#a45", {
        // width:"95%",
        // stagger:"",
        duration: 3,
        width: "70%",
        opacity: 1,
        // ease:"ease-in-out",
        scrollTrigger: {
            trigger: "#a44",
            scroller: "body",
            // markers:true,
            // start: "top 80%",
            // end: "top 80%",
            // scrub: 5
        }
    })
    gsap.to("#a47", {
        // width:"95%",
        // stagger:"",
        duration: 3,
        width: "60%",
        opacity: 1,
        // ease:"ease-in-out",
        scrollTrigger: {
            trigger: "#a47",
            scroller: "body",
            // markers:true,
            // start: "top 80%",
            // end: "top 80%",
            // scrub: 5
        }
    })
    gsap.to("#a48", {
        // width:"95%",
        // stagger:"",
        duration: 3,
        width: "60%",
        opacity: 1,
        // ease:"ease-in-out",
        scrollTrigger: {
            trigger: "#a48",
            scroller: "body",
            // markers:true,
            // start: "top 80%",
            // end: "top 80%",
            // scrub: 5
        }
    })
    gsap.to("#a49", {
        // width:"95%",
        // stagger:"",
        duration: 3,
        width: "70%",
        opacity: 1,
        // ease:"ease-in-out",
        scrollTrigger: {
            trigger: "#a49",
            scroller: "body",
            // markers:true,
            // start: "top 80%",
            // end: "top 80%",
            // scrub: 5
        }
    })
    gsap.to("#a50", {
        // width:"95%",
        // stagger:"",
        duration: 3,
        width: "60%",
        opacity: 1,
        // ease:"ease-in-out",
        scrollTrigger: {
            trigger: "#a50",
            scroller: "body",
            // markers:true,
            // start: "top 80%",
            // end: "top 80%",
            // scrub: 5
        }
    })
    gsap.to("#a51", {
        // width:"95%",
        // stagger:"",
        duration: 3,
        width: "60%",
        opacity: 1,
        // ease:"ease-in-out",
        scrollTrigger: {
            trigger: "#a51",
            scroller: "body",
            // markers:true,
            // start: "top 80%",
            // end: "top 80%",
            // scrub: 5
        }
    })
    gsap.from("#a42", {
        // width:"95%",
        // stagger:"",
        duration: 3,
        x: "-100%",
        opacity: 0,
        // ease:"ease-in-out",
        scrollTrigger: {
            trigger: "#a42",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top 80%",
            scrub: 5,
        }
    })

gsap.from("#a64", {
    duration: 1,
    opacity: 0,
    y: -50,
    delay: .5,
    scrollTrigger: "#a64",
    scrollTrigger:{
        trigger:"#a64",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
        scrub:5
    }
})

// var a61=gsap.timeline();
// a61

gsap.from("#a62",{
        duration:2,
        opacity:0,
        y:100,
        ease:"power 4",
        // stagger:1,
        scrollTrigger:{
            trigger:"#a62",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 80%",
            scrub:5
        }
    })
gsap.from("#a62 #a65",{
        duration:2,
        opacity:0,
        y:100,
        ease:"power 4",
        // stagger:1,
        scrollTrigger:{
            trigger:"#a62 #a65",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 80%",
            scrub:5
        }
    })
gsap.from("#a62 #a66 #a67",{
        duration:2,
        opacity:0,
        y:100,
        ease:"power 4",
        // stagger:1,
        scrollTrigger:{
            trigger:"#a62 #a66 #a67",
            scroller:"body",
            // markers:true,
            // start:"top 80%",
            // end:"top 80%",
            // scrub:5
        }
    })
gsap.from("#a62 #a66 #a69",{
        duration:2,
        opacity:0,
        y:100,
        ease:"power 4",
        // stagger:1,
        scrollTrigger:{
            trigger:"#a62 #a66 #a69",
            scroller:"body",
            // markers:true,
            // start:"top 70%",
            // end:"top 70%",
            // scrub:5
        }
    })
    gsap.from("#a63",{
        duration:2,
        opacity:0,
        y:100,
        ease:"power 4",
        stagger:1,
        scrollTrigger:{
            trigger:"#a62",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 80%",
            scrub:5
        }
    })
gsap.from("#a63 #a65",{
        duration:2,
        opacity:0,
        y:100,
        ease:"power 4",
        stagger:1,
        scrollTrigger:{
            trigger:"#a62 #a65",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 80%",
            scrub:5
        }
    })
gsap.from("#a63 #a66 #a67",{
        duration:2,
        opacity:0,
        y:100,
        ease:"power 4",
        stagger:1,
        scrollTrigger:{
            trigger:"#a62 #a66 #a67",
            scroller:"body",
            // markers:true,
            // start:"top 80%",
            // end:"top 80%",
            // scrub:5
        }
    })
gsap.from("#a63 #a66 #a69",{
        duration:2,
        opacity:0,
        y:100,
        ease:"power 4",
        stagger:1,
        scrollTrigger:{
            trigger:"#a62 #a66 #a69",
            scroller:"body",
            // markers:true,
            // start:"top 70%",
            // end:"top 70%",
            // scrub:5
        }
    })
    gsap.from("#a78", {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: .5,
        scrollTrigger: "#a78",
        scrollTrigger:{
            trigger:"#a78",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 80%",
            scrub:5
        }
    })
    // var education=gsap.timeline();
    // education
    gsap.from("#a79",{
        opacity:0,
        duration:1,
        stagger:.5,
        y:150,
        scrollTrigger:{
            trigger:"#a79",
            scroller:"body",
            // start:"top 80%",
            // end:"top 80%",
            // scrub:5
        }
    })
    gsap.from("#a80",{
        opacity:0,
        duration:1,
        stagger:.5,
        y:150,
        scrollTrigger:{
            trigger:"#a80",
            scroller:"body",
            // start:"top 80%",
            // end:"top 80%",
            // scrub:5
        }
    })
    gsap.from("#a81",{
        opacity:0,
        duration:1,
        stagger:.5,
        y:150,
        scrollTrigger:{
            trigger:"#a81",
            scroller:"body",
            // start:"top 80%",
            // end:"top 80%",
            // scrub:5
        }
    })

    gsap.from("#a93",{
        opacity:0,
        duration:1,
        stagger:.5,
        y:150,
        scrollTrigger:{
            trigger:"#a93",
            scroller:"body",
            start:"top 80%",
            end:"top 80%",
            scrub:5
        }
    })
    // var a92=gsap.timeline()
    // a92
    gsap.from(".a94",{
        opacity:0,
        duration:1,
        stagger:.5,
        y:150,
        scrollTrigger:{
            trigger:".a94",
            scroller:"body",
            start:"top 80%",
            end:"top 80%",
            scrub:5
        }
    })
    // let a104=gsap.timeline();
    // a104
    gsap.from(".a104",{

        opacity:0,
        duration:1,
        stagger:.2,
        y:50,
        scrollTrigger:{
            trigger:".a104",
            scroller:"body",
            // start:"top 80%",
            // end:"top 80%",
            // scrub:5
        }
    })
    // let a111=gsap.timeline();
    // a111
    gsap.from(".a111",{

        opacity:0,
        duration:1,
        stagger:.2,
        y:50,
        scrollTrigger:{
            trigger:".a111",
            scroller:"body",
            // start:"top 80%",
            //     end:"top 80%",
            //     scrub:5
        }
    })

    
    

var menubutton = document.querySelector(".menubutton");
var a20 = document.querySelector("#a20");
var lord = document.querySelector("#lord");
var navbar = document.querySelector("#navbar");
// a20.style.display="flex";
var flag = 0;
menubutton.addEventListener("click", function () {
    if (flag == 0) {
        a20.style.display = "block";
        navbar.style.backgroundColor = "black";
        lord.style.display = "none";

        flag = 1;
    }
    else {
        a20.style.display = "none";
        navbar.style.backgroundColor = "";
        lord.style.display = "block";
        flag = 0;
    }
})







    