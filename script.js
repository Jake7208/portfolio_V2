gsap.registerPlugin(Flip, ScrollTrigger);

gsap.set('.cursor', 
{
    xPercent: -50, yPercent: -50    
})

let cursor = document.querySelector('.cursor');
let cursor2 = document.querySelector('.cursor2');

let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to ('.cursor', .5, {
        x: mouseX, y: mouseY
    })

})

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
            intro.style.top = '-120%';
            intro.style.borderRadius = '60%';
            
            // Reset overflow to its original value
            document.body.style.overflow = originalOverflow;
        }, 2500);
    });
});
