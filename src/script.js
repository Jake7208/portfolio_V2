import * as THREE from 'three';

gsap.registerPlugin(Flip, ScrollTrigger);

const heading2 = document.querySelector('h2');

const splitTypes = document.querySelectorAll('.reveal-type');

gsap.from(heading2, {
  scrollTrigger: {
    trigger: heading2,
    start: 'top 90%',
    end: 'top 20%',
    scrub: true,
  },

  x : -50
})

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, {type: 'chars'});
  
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 50%',
      end: 'top 20%',
      scrub: true,
    },
    opacity: 0.2,
    stagger: .8
  })
})
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute('href'))
  });
})



const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "video":
      return "fa-solid fa-play"
    case "view":
      return "fa-solid fa-eye"
    default:
      return "fa-solid fa-arrow-right"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}


const toggleNav = () => {
  document.body.dataset.navToggle = document.body.dataset.navToggle === 'true' ? 'false' : 'true';
};

const navToggleBtn = document.getElementById('nav-toggle');
navToggleBtn.addEventListener('click', toggleNav);



// const magnetic = document.querySelectorAll(".magnetic");
// const eyes = document.querySelectorAll(".eyes");
// const anchor = document.getElementById("anchor");
// const position = anchor.getBoundingClientRect();
// const anchorX = position.left + position.width / 2;
// const anchorY = position.top + position.height / 2;


// magnetic.forEach((item) => {
//   item.addEventListener("mousemove", (e) => {
//     const x = e.clientX;
//     const y = e.clientY;

//     const angleDeg = angle(x, y, anchorX, anchorY);
    
//     eyes.forEach((item) => {
//       item.style.transform = `rotate(${90 + angleDeg}deg)`;
//     });
//   });
// });

// function angle(cx, cy, ex, ey) {
//   const dy = ey - cy;
//   const dx = ex - cx;
//   const rad = Math.atan2(dy, dx);
//   const deg = rad * (180 / Math.PI);
//   return deg;
// }

