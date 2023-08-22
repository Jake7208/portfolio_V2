gsap.registerPlugin(Flip, ScrollTrigger);


let mouseCursor = document.querySelector('.cursor');
let hovering = document.querySelectorAll('.hero-btns, nav ul li a');

window.addEventListener('mousemove', e => {
    const cursor = () => {
        mouseCursor.style.top = e.clientY + 'px';
        mouseCursor.style.left = e.clientX + 'px';
    }
    cursor();


    hovering.forEach(link => {
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add('link-grow');
            mouseCursor.classList.add('hovered-link');
        })
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-grow');
            mouseCursor.classList.remove('hovered-link');
        })
    })
});


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
