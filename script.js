
var tl = gsap.timeline()

function load(){
    var a = 0
    setInterval(() => {
        a = a +  Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader").innerHTML = a + "%"
        }
        else{
            a = 100
            document.querySelector("#loader").innerHTML = a + "%"
        }
    }, 100);
}

tl.to("#loader h1", {
    scale: 0,
    duration: 1,
    delay: 0.5,
    onStart: load
})

tl.to("#loader", {
    y: "-100vh",
    duration: 0.5,
})
tl.from("#nav", {
    y: -100,
    duration: 1,
    delay: 1,
    stagger: .5,
}, 'anime')
tl.from("#nav a", {
    y: -100,
    duration: 1,
    delay: 1,
    stagger: .2,
}, 'anime')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: "#page2",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
}})
tl2.to("#fanta",{
    top: "120%",
    left: "0%"
}, "orange")
tl2.to("#leave1",{
    top: "148%",
    left: "0%"
}, "orange")
tl2.to("#orange",{
    top: "100%",
    left: "10%"
}, "orange")
tl2.to("#leave2",{
    top: "105%",
    right: "10%"
}, "orange")

tl2.to("#orange2",{
    top: "150%",
    left: "30%"
}, "orange")

var tl3 = gsap.timeline({scrollTrigger:{
    trigger: "#page3",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
}})

tl3.to("#fanta",{
    top: "205%",
    left: "28%",
    scale: 0.9,
}, "product")

tl3.to("#orange",{
    top: "190%",
    left: "38%",
    scale: 1,
}, "product")

tl3.to("#leave2",{
    top: "190%",
    right: "10%",
    scale: 1,
}, "product")

tl3.to("#orange2",{
    top: "180%",
    left: "10%",
    scale: 1,
}, "product")

tl3.from("#coca", {
    transform: "translateX(-100%)"
}, "product")

var tl4 = gsap.timeline({scrollTrigger:{
    trigger: ".footer",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
}})

tl4.to("#fanta",{
    top: "300%",
    left: "30%",
    scale: 0.4,
}, "footer")

tl4.to("#orange",{
    top: "300%",
    left: "35%",
    scale: 0.4,
}, "footer")

tl4.to("#orange2",{
    top: "340%",
    left: "80%",
    scale: 0.6,
}, "footer")

tl4.to("#leave2",{
    top: "320%", 
    scale: 1,
    right: "0%",
}, "footer")
