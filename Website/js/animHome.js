'use strict';


// Homepage animations
const timeline = gsap.timeline({defaults:{duration:1}})
timeline
    .from('.navbar', {y:'-100%'},0.4)
    .from('.logo', {y:'-100%'}, 0.5)
    .from('.menulist', {opacity: 0, stagger: 1.5})
    
    .from('.content-wrap', {y:'1000%', ease:'power4'}, 0.5)
    .from('.grid', {y:'1000%', ease:'power3'},0.5)      



button.addEventListener('click', () => {
    timeline.timeScale(0.5)
    timeline.reverse();
})


