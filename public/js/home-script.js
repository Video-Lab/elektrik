// ANIMATIONS 

gsap.fromTo(".hero", {width: 0, opacity: 0}, {duration: 1.5, ease: "circ.out", opacity: 1, width: "100%"})
gsap.fromTo(".hero-title", {opacity: 0}, {duration: 0.5, delay: 1.3, ease: "circ.out", opacity: 1})
gsap.fromTo(".company-vision-content", {x: "-50vw"}, {duration: 1, delay: 2, ease: "circ.out", x: "0vw"})
gsap.fromTo(".company-vision-btn", {x: "50vw"}, {duration: 1, delay: 2, ease: "circ.out", x: "0vw"})
gsap.fromTo(".car-carousel", {x: "100vw"}, {duration: 1, delay: 3, ease: "circ.out", x: "0vw"})
gsap.fromTo(".contact-us", {opacity: 0}, {duration: 1, delay: 4, ease:"circ.out", opacity: 1})