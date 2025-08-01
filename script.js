var btn=document.querySelector("button");

btn.addEventListener("click", function(){
    window.open("https://www.wookaao.com/")
})




function anim(){
var tl=gsap.timeline();

tl.from(".hero img",{
    scale:0,
    duration:1
},"move")
tl.from(".head",{
    y:-100,
    duration:1
},"move");

tl.from(".left h1",{
    x:-500,
    duration:1
},"move");

tl.from(".right h1",{
    x:500,
    duruation:1
},"move")

tl.from(".left h4",{
    y:600,
    duration:1,
    opacity:0
},"move")

tl.from(".right button",{
    y:-600,
    duration:1
},"move")
}
anim();