import * as THREE from 'three';


gsap.registerPlugin(Flip, ScrollTrigger);

const heading2 = document.querySelectorAll('h2');
const splitTypes = document.querySelectorAll('.reveal-type');
const projectText = document.querySelectorAll('.project-text');
const gallery = document.querySelector('.gallery');

gsap.from(gallery, {
  scrollTrigger: {
    trigger: gallery,
    start: 'top 90%',
    end: 'top top',
    scrub: true,
  },
  opacity: 0
})
gsap.to (gallery, {
  scrollTrigger: {
    trigger: gallery,
    start: 'top 90%',
    end: 'top top',
    scrub: true,
  },
  y: 50,
  background: 'var(--color-bg)',
  duration: 1
})

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
    case "drag":
      return " fa-solid fa-arrows"
      default:
        return "fa-solid fa-arrow-right"
      }
    }
    console.log(getTrailerClass());

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
  const body = document.body; // Get a reference to the document's body element
  body.dataset.navToggle = body.dataset.navToggle === 'true' ? 'false' : 'true';
  
  // Toggle overflow based on the navToggle dataset value
  body.style.overflowY = body.dataset.navToggle === 'false' ? 'hidden' : `visible`; 
};

const navToggleBtn = document.getElementById('nav-toggle');
const navLink = document.querySelectorAll('.nav-link');
navToggleBtn.addEventListener('click', toggleNav);
navLink.forEach(link => link.addEventListener('click', toggleNav));

document.addEventListener('DOMContentLoaded', () => {

  const galleryMover = document.querySelector('.gallery-container');
  galleryMover.dataset.prevPercentage = '0'; // Initialize prevPercentage
  galleryMover.dataset.percentage = '0';     // Initialize data-percentage

  let isDragging = false;
  let initialX = 0;

  galleryMover.addEventListener('mousedown', e => startDragging(e.clientX));
  galleryMover.addEventListener('touchstart', e => startDragging(e.touches[0].clientX));

  window.addEventListener('mousemove', e => moveGallery(e.clientX));
  window.addEventListener('touchmove', e => moveGallery(e.touches[0].clientX));

  window.addEventListener('mouseup', stopDragging);
  window.addEventListener('touchend', stopDragging);

  function startDragging(clientX) {
    isDragging = true;
    initialX = clientX;
  }

  function moveGallery(clientX) {
    if (!isDragging) return;

    const mouseDelta = clientX - initialX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * 100;
    let nextPercentage = parseFloat(galleryMover.dataset.prevPercentage) + percentage;

    // Limit the nextPercentage value to a certain range
    const minPercentage = -80; // Limit on the left side
    const maxPercentage = 2;  // Limit on the right side
    nextPercentage = Math.max(minPercentage, Math.min(maxPercentage, nextPercentage));

    galleryMover.dataset.percentage = nextPercentage;

    // Adjust the animation durations and easing functions for a more intense effect
    const animationOptions = {
      duration: 500,       // Increase the duration for a more prolonged effect
      fill: "forwards",
      easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" // Use a different easing function for a more dramatic effect
    };

    galleryMover.animate(
      { transform: `translateX(${nextPercentage}%)` },
      animationOptions
    );

    const galleryImages = galleryMover.querySelectorAll('.gallery-item img');
    galleryImages.forEach(img => {
      img.animate(
        { objectPosition: `${100 + nextPercentage}% -200%` }, // Adjust the value to move more intensely
        animationOptions
      );
    });
  }

  function stopDragging() {
    isDragging = false;
    galleryMover.dataset.prevPercentage = galleryMover.dataset.percentage;
  }
});


  const inputs = document.querySelectorAll('.entry-area input');

  inputs.forEach(input => {
      input.addEventListener('input', function() {
          if (this.value.trim() !== '') {
              this.classList.add('has-text');
          } else {
              this.classList.remove('has-text');
          }
      });
  });