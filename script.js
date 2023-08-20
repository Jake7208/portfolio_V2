let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

const cursor = () =>
{
    
}

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
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-120%';
            intro.style.borderRadius = '80%';
            
            // Reset overflow to its original value
            document.body.style.overflow = originalOverflow;
        }, 2300);
    });
});
