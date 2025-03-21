// Enhanced Smooth Scrolling Effect with Easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Improved Glowing Candle Flicker Effect
function flickerCandle() {
    const logo = document.querySelector('.logo h1');
    if (!logo) return;
    
    const intensity = Math.random() * 4 + 6; // More controlled flickering
    const blur = Math.random() * 12 + 4; // Smoother glow
    const opacity = Math.random() * 0.6 + 0.4; // Soft breathing effect

    logo.style.textShadow = `0px 0px ${blur}px rgba(255, 215, 0, ${opacity})`;
}
setInterval(flickerCandle, 200); // Slightly faster flickering

// Smoother Page Flip Effect for Stories & Blogs
document.querySelectorAll('.story-card, .blog-post').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transition = 'transform 0.8s ease-in-out';
        this.style.transform = 'rotateY(180deg)';
        
        setTimeout(() => {
            this.style.transform = 'rotateY(0deg)';
        }, 1200);
    });
});

// Floating Hover Glow Effect for Story Cards
document.querySelectorAll('.story-card, .blog-post').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease-out, box-shadow 0.3s ease-in-out';
        this.style.transform = 'scale(1.07)';
        this.style.boxShadow = '0px 0px 20px rgba(255, 215, 0, 0.8)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Smooth Fade-In Effect on Scroll
const fadeInText = () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            el.style.transition = 'opacity 0.8s ease-out, transform 0.6s ease-out';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', fadeInText);
document.addEventListener('DOMContentLoaded', fadeInText);

// Beautiful Smooth Opacity Hover Effect for Sections
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('mouseenter', function() {
        this.style.transition = 'opacity 0.5s ease-in-out';
        this.style.opacity = 1;
    });
    section.addEventListener('mouseleave', function() {
        this.style.opacity = 0.9;
    });
});

// Auto Glowing Header on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.transition = 'background 0.5s ease-in-out, box-shadow 0.5s ease-in-out';
        navbar.style.background = 'rgba(44, 26, 29, 0.95)';
        navbar.style.boxShadow = '0px 4px 15px rgba(255, 215, 0, 0.6)';
    } else {
        navbar.style.background = 'rgba(44, 26, 29, 1)';
        navbar.style.boxShadow = 'none';
    }
});
