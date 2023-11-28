let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () =>
{
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

window.onscroll = () => 
{
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

// scroll reveal//
ScrollReveal
({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.HOME-BIO h1, .ABOUT-resume', { origin:'right' });
ScrollReveal().reveal('.HOME-BIO p', { origin: 'left'});
ScrollReveal().reveal('.HOME-BIO, .haeding', { origin: 'bottom'});
ScrollReveal().reveal('.profile-picture, .ABOUT-items, .SKILLS-item, .form', { origin: 'top'});

//<!--Typing Animation-->//
const animText = new Typed ('.animated-text',
{
    strings:['Web Developer', 'College Student', 'Artist'],
    backSpeed:100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
});