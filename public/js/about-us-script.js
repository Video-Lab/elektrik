gsap.fromTo(".section-title", {opacity: 0}, {duration: 1, delay: 0.2, ease: "circ.out", opacity: 1})


var delayTime = 0
for(var i = 1; i < 4; i++) {
	var id = ".value-" + i
	delayTime += 0.7
	gsap.fromTo(id, {opacity: 0, y: "10vh"}, {duration: 1, delay: delayTime, ease:"circ.out", opacity: 1, y: "0vh"}) 
}

gsap.fromTo(".our-history", {opacity: 0, x: "-50vw"}, {duration: 1, delay: 2.9, ease:"circ.out", opacity: 1, x: "0vw"})
gsap.fromTo(".our-mission", {opacity: 0, x: "50vw"}, {duration: 1, delay: 3.6, ease:"circ.out", opacity: 1, x: "0vw"})
