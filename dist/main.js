// src/main.ts
// Intersection Observer for scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });
    elements.forEach(element => {
        observer.observe(element);
    });
};
// Mobile menu toggle
const initMobileMenu = () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Change icon
            if (mainNav.classList.contains('active')) {
                mobileMenuToggle.textContent = '✕';
            }
            else {
                mobileMenuToggle.textContent = '☰';
            }
        });
        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            });
        });
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (!mainNav.contains(target) && !mobileMenuToggle.contains(target)) {
                mainNav.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
            }
        });
    }
};
// Smooth scroll for anchor links
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
};
// Header scroll effect
const initHeaderScroll = () => {
    const header = document.querySelector('header');
    let lastScroll = 0;
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }
            else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
            lastScroll = currentScroll;
        });
    }
};
// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
});
