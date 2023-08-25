import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));



gsap.registerPlugin(Flip, ScrollTrigger);

const heading2 = document.querySelectorAll('h2');
const splitTypes = document.querySelectorAll('.reveal-type');
const projectText = document.querySelectorAll('.project-text');
const galleryContainer = document.querySelectorAll('.gallery-container');

heading2.forEach((heading, i) => {
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading, // Use the current heading as the trigger
      start: 'top 90%',
      end: 'top 20%',
      scrub: true,
    },
    x: -50,
  });
});


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

projectText.forEach((text, i) => {
  gsap.from(text, {
    scrollTrigger: {
      trigger: text,
      start: 'top 85%',
      end: 'top 20%',
      scrub: true,
    },
    opacity: 0,
    stagger: .8
  })
})

galleryContainer.forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      end: 'top 50%',
    },
    x: '100',
    duration: 1.5
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

const galleryGroup = document.querySelectorAll('.gallery-group');
const galleryMover = document.querySelector('.gallery-mover');

const mover = document.querySelector('.mover');

const moving = (e) => {
  const x = e.clientX;
  console.log(moving.x);
}



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

