let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


const cursor = {
    x: 0,
    y: 0
};

const targetElement = document.getElementById('newCursor');
const elementWidth = targetElement.offsetWidth;
const elementHeight = targetElement.offsetHeight;
const borderThickness = 30; // Border thickness in pixels

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX;
    cursor.y = event.clientY;

    // Calculate the centered position
    const centerX = cursor.x - elementWidth / 2;
    const centerY = cursor.y - elementHeight / 2;

    // Update the style of the target element to be centered within the border
    targetElement.style.left = centerX - borderThickness + 'px';
    targetElement.style.top = centerY - borderThickness + 'px';
});



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
