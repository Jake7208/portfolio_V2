gsap.registerPlugin(Flip, ScrollTrigger);

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


const navToggle = document.getElementById('nav2');;

const toggleNav = () => {
    document.body.dataset.navToggle = document.body.dataset.navToggle === 'true' ? 'false' : 'true';
    console.log( document.body.dataset.navToggle);
}


let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


window.addEventListener('DOMContentLoaded', () => {
    // Store the original overflow value
    const originalOverflow = document.body.style.overflow;

    // Set overflow to 'hidden'
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (index + 1) * 100);
            });
        }, 2300);

        setTimeout(() => {
            intro.style.top = '100%';
            intro.style.borderRadius = '60%';
            
            // Reset overflow to its original value
            document.body.style.overflow = originalOverflow;
        }, 2500);
    });
});
