imgLinks = ["../imgs/car-carousel-1.jpg", "../imgs/car-carousel-2.jpg", "../imgs/car-carousel-3.jpg"]

gsap.fromTo(".hero", {width: 0, opacity: 0}, {duration: 1.5, ease: "circ.out", opacity: 1, width: "100%"})
gsap.fromTo(".hero-title", {opacity: 0}, {duration: 1, delay: 1.3, ease: "circ.out", opacity: 1})

$(".titlebar").click(function(){
	$(".dropdown-container").animate({height: "toggle"})
})

$(".btn").click(function(){

})
