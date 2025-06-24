// ===========================================
// PORTFOLIO - ALAA CHAKORI SEMMANE
// ===========================================

// Variables globales
let currentLanguage = 'fr';

// ===========================================
// INITIALIZATION
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize language
    currentLanguage = initializeLanguage();
    
    // Core features
    initializeNavigation();
    initializeLanguageSelector();
    initializeScrollEffects();
    initializeMobileMenu();
    
    // Initialize particles after a small delay to ensure DOM is ready
    setTimeout(() => {
        initializeParticles();
    }, 100);
    
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 500);
}

// ===========================================
// PARTICLES.JS INITIALIZATION - DIRECT CONFIG
// ===========================================

function initializeParticles() {
    console.log('Initializing particles...');
    
    if (typeof particlesJS === 'undefined') {
        console.error('particlesJS is not defined!');
        return;
    }
    
    const particlesElement = document.getElementById('particles-js');
    if (!particlesElement) {
        console.error('particles-js element not found!');
        return;
    }
    
    // Configuration directe sans fichier externe
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#0066ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#0066ff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    
    console.log('Particles initialized successfully!');
}

// ===========================================
// NAVIGATION
// ===========================================

function initializeNavigation() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active link
                updateActiveNavLink(this.getAttribute('href'));
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
        
        // Update active section
        updateActiveSection();
    });
}

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

function updateActiveNavLink(href) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[href="${href}"]`)?.classList.add('active');
}

// ===========================================
// LANGUAGE SELECTOR
// ===========================================

function initializeLanguageSelector() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

function changeLanguage(lang) {
    if (!window.translatePage) {
        console.error('Translation function not available');
        return;
    }
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Apply translations
    window.translatePage(lang);
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
}

// ===========================================
// MOBILE MENU
// ===========================================

function initializeMobileMenu() {
    createMobileMenuToggle();
}

function createMobileMenuToggle() {
    const navbar = document.querySelector('.navbar');
    const navContainer = navbar.querySelector('.nav-container');
    const navLinks = navbar.querySelector('.nav-links');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    `;
    hamburger.setAttribute('aria-label', 'Toggle menu');
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .hamburger {
            display: none;
            flex-direction: column;
            justify-content: space-around;
            width: 30px;
            height: 25px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 1001;
        }
        
        .hamburger .line {
            width: 100%;
            height: 2px;
            background: var(--text-primary);
            border-radius: 2px;
            transition: all 0.3s ease;
        }
        
        .hamburger.active .line:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active .line:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .line:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }
            
            .nav-links {
                display: none;
                position: fixed;
                top: 4rem;
                left: 0;
                width: 100%;
                background: white;
                box-shadow: var(--shadow);
                flex-direction: column;
                padding: 1rem;
            }
            
            .nav-links.active {
                display: flex;
            }
            
            .nav-links a {
                padding: 0.75rem 1rem;
                border-bottom: 1px solid var(--border-light);
            }
        }
    `;
    
    document.head.appendChild(style);
    navContainer.appendChild(hamburger);
    
    // Toggle menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ===========================================
// SCROLL EFFECTS
// ===========================================

function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animatableElements = document.querySelectorAll(`
        .section-title,
        .project-card, 
        .skill-category, 
        .experience-item, 
        .education-item,
        .about-content
    `);
    
    animatableElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// ===========================================
// LANGUAGE INITIALIZATION
// ===========================================

function initializeLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['fr', 'en', 'es'];
    
    let defaultLang = 'fr';
    if (savedLang && supportedLangs.includes(savedLang)) {
        defaultLang = savedLang;
    } else if (supportedLangs.includes(browserLang)) {
        defaultLang = browserLang;
    }
    
    // Set active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === defaultLang) {
            btn.classList.add('active');
        }
    });
    
    // Apply translations
    if (window.translatePage) {
        window.translatePage(defaultLang);
    }
    
    return defaultLang;
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================================
// SCROLL TO TOP
// ===========================================

window.addEventListener('load', function() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Retour en haut');
    
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--accent);
        color: white;
        border: none;
        font-size: 1rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-md);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button
    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    }, 100));
    
    // Scroll to top
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ===========================================
// ACCESSIBILITY
// ===========================================

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Navigate sections with arrow keys when focused on nav
    if (e.target.closest('.nav-links')) {
        const links = Array.from(document.querySelectorAll('.nav-links a'));
        const current = document.activeElement;
        const currentIndex = links.indexOf(current);
        
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            const next = links[currentIndex + 1] || links[0];
            next.focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const prev = links[currentIndex - 1] || links[links.length - 1];
            prev.focus();
        }
    }
});