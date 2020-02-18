gsap.fromTo(".section-title", {opacity: 0}, {duration: 1, delay: 0.2, ease: "circ.out", opacity: 1})


var delayTime = 0
for(var i = 1; i < 4; i++) {
	var id = ".value-" + i
	delayTime += 0.7
	gsap.fromTo(id, {opacity: 0, y: "10vh"}, {duration: 1, delay: delayTime, ease:"circ.out", opacity: 1, y: "0vh"}) 
}