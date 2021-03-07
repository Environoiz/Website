
'use strict';

//Animation for pages except Homepage
const timeline = gsap.timeline({defaults:{duration:0.4}})
timeline
  
    .from('.photo-card', {x:'-300%'},0.4)
    .from('.digi-card', {y:'300%'},0.4)
    .from('.hand-card', {x:'300%'},0.4)
    
    .from('.bio', {opacity: 0}, 0.4)
    .from('.form', {opacity: 0}, 0.4)
  

button.addEventListener('click', () => {
    timeline.timeScale(0.5)
    timeline.reverse();
})

