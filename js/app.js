gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  scroller: '[data-scroll-container]',
  markers: false
});

var scroll = new LocomotiveScroll( {
    el: document.querySelector( '[data-scroll-container]' ),
    smooth: true,
    multiplier: 1.0,
    getDirection: true,
});


// Update scroll position
scroll.on( 'scroll', ( instance ) => {
    ScrollTrigger.update();
    document.documentElement.setAttribute( 'data-scrolling', instance.direction );
});

// Scroll position for ScrollTrigger
ScrollTrigger.scrollerProxy( '[data-scroll-container]', {
    scrollTop( value ) {
        return arguments.length ? scroll.scrollTo( value, 0, 0 ) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector( '[data-scroll-container]' ).style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener( 'refresh', () => scroll.update() );
ScrollTrigger.refresh();


// Animated Text
var typed = new Typed(".r_text", {
    strings: ["engineers", "statisticians", "scientists", "analysts", "thinkers", "innovators"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


// Menu
const navSlide = () => {
    
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.menu');
    const body = document.querySelector('body');
  
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        burger.classList.toggle('togglemenu');
        body.classList.toggle('no_overflow');
    });

}
  
navSlide();


document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    // Select the paragraph by its ID
    var copyright = document.getElementById('copyright');
    // Update its HTML content to include the current year dynamically
    copyright.innerHTML = '© ' + currentYear + ' <a href="index.html">Vritam</a> | All Rights Reserved';
  });
