// ===========================================
// PORTFOLIO PREMIUM - ALAA CHAKORI SEMMANE
// ===========================================

// Configuration EmailJS
const EMAILJS_CONFIG = {
    serviceId: 'service_c3lab2q', // À remplacer par votre service ID EmailJS
    templateId: 'template_51pgw2w', // À remplacer par votre template ID EmailJS
    publicKey: 'lyptTJRYGK302Yssm' // À remplacer par votre clé publique EmailJS
};

// Variables globales
let isLoading = true;
let currentLanguage = 'fr';
let isEmailJSInitialized = false;

// ===========================================
// INITIALIZATION
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio Premium initializing...');
    initializeApp();
});

async function initializeApp() {
    try {
        // Initialize language first
        currentLanguage = window.initializeLanguage ? window.initializeLanguage() : 'fr';
        
        // Initialize EmailJS
        await initializeEmailJS();
        
        // Initialize all components
        initializeLoading();
        initializeNavigation();
        initializeLanguageSelector();
        initializeScrollEffects();
        initializeAnimations();
        initializeContactForm();
        initializeMobileMenu();
        initializeScrollToTop();
        initializeTypingEffect();
        initializeParticles();
        initializeThemeToggle();
        
        console.log('✅ Portfolio Premium initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing portfolio:', error);
    }
}

// ===========================================
// EMAILJS INTEGRATION
// ===========================================

async function initializeEmailJS() {
    try {
        // Vérifier si les clés sont configurées
        if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID') {
            console.warn('⚠️ EmailJS not configured. Using fallback email method.');
            return;
        }

        // Charger EmailJS depuis CDN
        if (!window.emailjs) {
            await loadScript('https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js');
        }
        
        // Initialiser EmailJS
        emailjs.init(EMAILJS_CONFIG.publicKey);
        isEmailJSInitialized = true;
        console.log('✅ EmailJS initialized successfully');
        
    } catch (error) {
        console.error('❌ Failed to initialize EmailJS:', error);
        isEmailJSInitialized = false;
    }
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// ===========================================
// ENHANCED CONTACT FORM WITH EMAILJS
// ===========================================

function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleFormSubmission);
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
    
    // Enhanced UX
    addFormEnhancements(contactForm);
}

function addFormEnhancements(form) {
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Animation on focus
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            if (!this.value) {
                this.parentElement.classList.remove('filled');
            } else {
                this.parentElement.classList.add('filled');
            }
        });
        
        // Check if already filled
        if (input.value) {
            input.parentElement.classList.add('filled');
        }
    });
}

async function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = {
        name: formData.get('name')?.trim(),
        email: formData.get('email')?.trim(),
        company: formData.get('company')?.trim() || '',
        subject: formData.get('subject')?.trim(),
        message: formData.get('message')?.trim()
    };
    
    // Validation
    if (!validateFormData(data, form)) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;
    setButtonLoading(submitBtn, true);
    
    try {
        if (isEmailJSInitialized) {
            await sendEmailWithEmailJS(data);
        } else {
            sendEmailFallback(data);
        }
        
        // Success
        showNotification('Message envoyé avec succès! Je vous répondrai rapidement.', 'success');
        form.reset();
        
        // Reset form states
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('filled', 'focused');
        });
        
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Erreur lors de l\'envoi. Veuillez réessayer ou utiliser l\'email direct.', 'error');
    } finally {
        setButtonLoading(submitBtn, false, originalContent);
    }
}

async function sendEmailWithEmailJS(data) {
    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        subject: data.subject,
        message: data.message,
        to_email: 'alaa.chakori.semmane@gmail.com'
    };
    
    await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
    );
}

function sendEmailFallback(data) {
    // Méthode de fallback: ouvrir le client email avec les données pré-remplies
    const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
    const body = encodeURIComponent(`
Nom: ${data.name}
Email: ${data.email}
${data.company ? `Entreprise: ${data.company}` : ''}

Message:
${data.message}
    `);
    
    const mailtoLink = `mailto:alaa.chakori.semmane@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
    
    // Simuler un délai pour l'UX
    return new Promise(resolve => setTimeout(resolve, 1000));
}

function validateFormData(data, form) {
    let isValid = true;
    
    // Required fields validation
    const requiredFields = ['name', 'email', 'subject', 'message'];
    requiredFields.forEach(field => {
        if (!data[field]) {
            isValid = false;
            showFieldError(form.querySelector(`[name="${field}"]`), 'Ce champ est requis');
        }
    });
    
    // Email validation
    if (data.email && !isValidEmail(data.email)) {
        isValid = false;
        showFieldError(form.querySelector('[name="email"]'), 'Adresse email invalide');
    }
    
    // Message length validation
    if (data.message && data.message.length < 10) {
        isValid = false;
        showFieldError(form.querySelector('[name="message"]'), 'Le message doit contenir au moins 10 caractères');
    }
    
    if (!isValid) {
        showNotification('Veuillez corriger les erreurs dans le formulaire', 'error');
    }
    
    return isValid;
}

function setButtonLoading(button, loading, originalContent = null) {
    if (loading) {
        button.disabled = true;
        button.innerHTML = `
            <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-opacity="0.3"/>
                <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"/>
            </svg>
            Envoi en cours...
        `;
        button.style.opacity = '0.7';
    } else {
        button.disabled = false;
        button.innerHTML = originalContent || `
            <i class="fas fa-paper-plane"></i>
            Envoyer le Message
        `;
        button.style.opacity = '1';
    }
}

// ===========================================
// ENHANCED ANIMATIONS AND EFFECTS
// ===========================================

function initializeAnimations() {
    // Enhanced scroll animations
    initializeScrollAnimations();
    
    // Particle effect for hero
    createHeroParticles();
    
    // Smooth reveal animations
    addRevealAnimations();
    
    // Enhanced hover effects
    addHoverEffects();
    
    // CSS for animations
    addAnimationStyles();
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                    
                    // Special animations for specific elements
                    if (entry.target.classList.contains('skill-category')) {
                        animateSkillCategory(entry.target);
                    }
                    
                    if (entry.target.classList.contains('project-card')) {
                        animateProjectCard(entry.target);
                    }
                    
                    if (entry.target.classList.contains('tech-item')) {
                        animateTechItems(entry.target.parentElement);
                    }
                    
                }, index * 100);
                
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
        .interest-item,
        .language-item,
        .objective-card,
        .about-text,
        .profile-img
    `);
    
    animatableElements.forEach(element => {
        observer.observe(element);
    });
}

function animateSkillCategory(element) {
    const skillItems = element.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'slideInFromLeft 0.6s ease forwards';
        }, index * 150);
    });
}

function animateProjectCard(element) {
    const techTags = element.querySelectorAll('.tech-tag');
    techTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.animation = 'bounceIn 0.6s ease forwards';
        }, index * 100);
    });
}

function animateTechItems(container) {
    const items = container.querySelectorAll('.tech-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'popIn 0.4s ease forwards';
        }, index * 50);
    });
}

function addRevealAnimations() {
    // Text reveal animations
    const textElements = document.querySelectorAll('h1, h2, h3, .hero-description');
    textElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
    });
}

function addHoverEffects() {
    // Enhanced card hover effects
    const cards = document.querySelectorAll('.project-card, .skill-category, .experience-item, .education-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });
}

function createRippleEffect(e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInFromLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes popIn {
            0% { transform: scale(0) rotate(180deg); opacity: 0; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes ripple {
            to { transform: scale(4); opacity: 0; }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .animate-in {
            animation: fadeInUp 0.8s ease forwards !important;
        }
        
        .animate-spin {
            animation: spin 1s linear infinite;
        }
        
        .float {
            animation: float 3s ease-in-out infinite;
        }
        
        /* Form focus animations */
        .form-group.focused label {
            color: var(--accent-color);
            transform: translateY(-2px);
        }
        
        .form-group.filled label {
            font-weight: 600;
        }
        
        /* Mobile menu animations */
        .nav-links.mobile-active {
            animation: slideInFromTop 0.3s ease;
        }
        
        @keyframes slideInFromTop {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        /* Loading enhancements */
        .loading {
            background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
            background-size: 400% 400%;
            animation: gradientShift 4s ease infinite;
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(style);
}

// ===========================================
// ENHANCED NAVIGATION
// ===========================================

function initializeNavigation() {
    // Smooth scrolling with offset
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
    
    // Enhanced navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Auto-hide on scroll down (mobile)
        if (window.innerWidth <= 768) {
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        // Update active section
        updateActiveSection();
    }, 10));
}

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
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
// ENHANCED LANGUAGE SELECTOR
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
    
    // Update active button with animation
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
            btn.style.animation = 'pulse 0.3s ease';
            setTimeout(() => btn.style.animation = '', 300);
        }
    });
    
    // Apply translations with smooth transition
    const mainContent = document.body;
    mainContent.style.transition = 'opacity 0.3s ease';
    mainContent.style.opacity = '0.8';
    
    setTimeout(() => {
        window.translatePage(lang);
        currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        mainContent.style.opacity = '1';
        
        // Update form placeholders
        updateFormPlaceholders(lang);
    }, 150);
}

function updateFormPlaceholders(lang) {
    const placeholders = {
        fr: 'Décrivez votre projet, vos besoins ou toute question...',
        en: 'Describe your project, needs or any questions...',
        es: 'Describe tu proyecto, necesidades o cualquier pregunta...'
    };
    
    const textarea = document.querySelector('textarea[name="message"]');
    if (textarea) {
        textarea.placeholder = placeholders[lang] || placeholders.fr;
    }
}

// ===========================================
// ENHANCED MOBILE MENU
// ===========================================

function initializeMobileMenu() {
    createMobileMenuToggle();
    handleMobileMenuInteractions();
}

function createMobileMenuToggle() {
    const navbar = document.querySelector('.navbar');
    const navContainer = navbar.querySelector('.nav-container');
    const navLinks = navbar.querySelector('.nav-links');
    
    // Create enhanced hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
    `;
    hamburger.setAttribute('aria-label', 'Toggle menu');
    
    // Enhanced hamburger styles
    const hamburgerStyles = `
        .hamburger {
            display: none;
            flex-direction: column;
            justify-content: space-around;
            width: 30px;
            height: 30px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 1001;
            transition: all 0.3s ease;
        }
        
        .hamburger .line {
            width: 100%;
            height: 3px;
            background: var(--text-primary);
            border-radius: 2px;
            transition: all 0.3s ease;
            transform-origin: center;
        }
        
        .hamburger.active .line1 {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .hamburger.active .line2 {
            opacity: 0;
            transform: scale(0);
        }
        
        .hamburger.active .line3 {
            transform: rotate(-45deg) translate(8px, -8px);
        }
        
        .nav-links.mobile-active {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            z-index: 1000;
            animation: slideInFromTop 0.3s ease;
        }
        
        .nav-links.mobile-active a {
            font-size: 1.5rem;
            font-weight: 600;
            padding: 1rem 2rem;
            border-radius: 1rem;
            transition: all 0.3s ease;
        }
        
        .nav-links.mobile-active a:hover {
            background: var(--accent-light);
            transform: scale(1.05);
        }
        
        body.menu-open {
            overflow: hidden;
        }
        
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }
        }
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = hamburgerStyles;
    document.head.appendChild(style);
    
    navContainer.appendChild(hamburger);
    
    // Mobile menu functionality
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Show/hide hamburger based on screen size
    function checkMobileMenu() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'flex';
        } else {
            hamburger.style.display = 'none';
            navLinks.classList.remove('mobile-active');
            hamburger.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
    
    window.addEventListener('resize', checkMobileMenu);
    checkMobileMenu();
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;
    
    navLinks.classList.toggle('mobile-active');
    hamburger.classList.toggle('active');
    body.classList.toggle('menu-open');
}

function handleMobileMenuInteractions() {
    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        if (navLinks.classList.contains('mobile-active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleMobileMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.querySelector('.nav-links').classList.contains('mobile-active')) {
            toggleMobileMenu();
        }
    });
}

// ===========================================
// ENHANCED LOADING
// ===========================================

function initializeLoading() {
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.animation = 'fadeOut 0.5s ease';
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    isLoading = false;
                    triggerEntranceAnimations();
                }, 500);
            }, 800);
        }
    });
}

function triggerEntranceAnimations() {
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const elements = heroContent.querySelectorAll('h1, .subtitle, .hero-description, .cta-buttons');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }
}

// ===========================================
// ENHANCED TYPING EFFECT
// ===========================================

function initializeTypingEffect() {
    const subtitle = document.querySelector('.hero .subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    const typewriterText = subtitle.cloneNode();
    typewriterText.textContent = '';
    
    subtitle.style.opacity = '0';
    subtitle.parentNode.insertBefore(typewriterText, subtitle);
    subtitle.remove();
    
    let i = 0;
    const typingSpeed = 80;
    const cursor = '|';
    
    function typeWriter() {
        if (i < text.length) {
            typewriterText.textContent = text.slice(0, i + 1) + cursor;
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Remove cursor and show final text
            typewriterText.textContent = text;
            typewriterText.style.opacity = '1';
        }
    }
    
    // Start typing after hero loads
    setTimeout(() => {
        typewriterText.style.opacity = '1';
        typeWriter();
    }, 1500);
}

// ===========================================
// PARTICLES EFFECT
// ===========================================

function initializeParticles() {
    createHeroParticles();
}

function createHeroParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    hero.appendChild(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const animationDuration = Math.random() * 20 + 10;
    const delay = Math.random() * 20;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        left: ${x}%;
        top: 100%;
        animation: floatUp ${animationDuration}s linear infinite;
        animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
    
    // Add keyframes for floating animation
    if (!document.querySelector('#particle-animations')) {
        const style = document.createElement('style');
        style.id = 'particle-animations';
        style.textContent = `
            @keyframes floatUp {
                0% {
                    opacity: 0;
                    transform: translateY(0) translateX(0);
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: translateY(-100vh) translateX(50px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===========================================
// THEME TOGGLE (FUTURE FEATURE)
// ===========================================

function initializeThemeToggle() {
    // This can be implemented later for dark/light theme switching
    console.log('Theme toggle ready for implementation');
}

// ===========================================
// ENHANCED SCROLL TO TOP
// ===========================================

function initializeScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    // Enhanced styles
    Object.assign(scrollBtn.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'var(--accent-color)',
        color: 'white',
        border: 'none',
        fontSize: '18px',
        cursor: 'pointer',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 0.3s ease',
        zIndex: '1000',
        boxShadow: 'var(--shadow-lg)',
        backdropFilter: 'blur(10px)'
    });
    
    document.body.appendChild(scrollBtn);
    
    // Enhanced show/hide logic
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.scrollY;
        const windowHeight = window.innerHeight;
        
        if (scrolled > windowHeight * 0.3) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
            scrollBtn.style.transform = 'scale(1)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
            scrollBtn.style.transform = 'scale(0.8)';
        }
    }, 100));
    
    // Enhanced scroll to top with easing
    scrollBtn.addEventListener('click', function() {
        smoothScrollTo(0, 800);
        this.style.animation = 'pulse 0.3s ease';
        setTimeout(() => this.style.animation = '', 300);
    });
    
    // Hover effects
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = 'var(--shadow-xl)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'var(--shadow-lg)';
    });
}

function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// ===========================================
// ENHANCED NOTIFICATIONS
// ===========================================

function showNotification(message, type = 'info', duration = 5000) {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(notification => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = getNotificationIcon(type);
    const color = getNotificationColor(type);
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icon} notification-icon"></i>
            <span class="notification-message">${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Enhanced styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: color,
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        boxShadow: 'var(--shadow-xl)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        maxWidth: '400px',
        animation: 'slideInRight 0.4s ease',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
    });
    
    // Notification content styles
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex: 1;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background 0.2s ease;
        opacity: 0.8;
    `;
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.2)';
        this.style.opacity = '1';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.background = 'none';
        this.style.opacity = '0.8';
    });
    
    document.body.appendChild(notification);
    
    // Auto remove
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
    
    // Add progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: rgba(255, 255, 255, 0.3);
        width: 100%;
        animation: shrink ${duration}ms linear;
    `;
    
    notification.appendChild(progressBar);
    
    // Add progress animation
    if (!document.querySelector('#notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes shrink {
                from { width: 100%; }
                to { width: 0%; }
            }
        `;
        document.head.appendChild(style);
    }
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        error: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
        warning: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        info: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)'
    };
    return colors[type] || colors.info;
}

// ===========================================
// FORM VALIDATION HELPERS
// ===========================================

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    clearFieldError(field);
    
    if (!value && fieldName !== 'company') {
        showFieldError(field, 'Ce champ est requis');
        return false;
    }
    
    if (fieldName === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Adresse email invalide');
        return false;
    }
    
    if (fieldName === 'message' && value && value.length < 10) {
        showFieldError(field, 'Le message doit contenir au moins 10 caractères');
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    clearFieldError(field);
    field.classList.add('error');
    
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #EF4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
        animation: slideInFromLeft 0.3s ease;
    `;
    
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(this, args);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===========================================
// SCROLL EFFECTS
// ===========================================

function initializeScrollEffects() {
    // Parallax effect for hero section (subtle)
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.3;
            hero.style.transform = `translateY(${parallax}px)`;
        }, 16));
    }
    
    // Fade elements on scroll
    initializeScrollAnimations();
}

// ===========================================
// PERFORMANCE OPTIMIZATION
// ===========================================

// Optimize scroll events
const optimizedScroll = throttle(() => {
    // Handle scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScroll);

// ===========================================
// ERROR HANDLING
// ===========================================

window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
});

// ===========================================
// ACCESSIBILITY
// ===========================================

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        const mobileMenu = document.querySelector('.nav-links.mobile-active');
        if (mobileMenu) {
            toggleMobileMenu();
        }
    }
    
    // Navigate sections with arrow keys (when focused on nav)
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

// Focus management
document.addEventListener('DOMContentLoaded', function() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Passer au contenu principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        transition: top 0.3s;
        z-index: 10000;
        font-weight: 600;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.id = 'main-content';
        hero.setAttribute('role', 'main');
    }
});

// ===========================================
// EXPORT FOR EXTERNAL USE
// ===========================================

window.Portfolio = {
    changeLanguage,
    showNotification,
    currentLanguage: () => currentLanguage,
    isLoading: () => isLoading,
    sendEmail: handleFormSubmission
};

console.log('🎨 Portfolio Premium JavaScript loaded successfully');

// ===========================================
// INSTRUCTIONS EMAILJS SETUP
// ===========================================

/*
📧 CONFIGURATION EMAILJS POUR VOTRE PORTFOLIO

1. Créez un compte sur https://www.emailjs.com/
2. Dans votre dashboard EmailJS :
   - Créez un service email (Gmail, Outlook, etc.)
   - Créez un template avec ces variables :
     * {{from_name}} - Nom de l'expéditeur
     * {{from_email}} - Email de l'expéditeur  
     * {{company}} - Entreprise (optionnel)
     * {{subject}} - Sujet du message
     * {{message}} - Message principal
     * {{to_email}} - Votre email de réception
     
3. Remplacez dans EMAILJS_CONFIG :
   - YOUR_SERVICE_ID par votre Service ID
   - YOUR_TEMPLATE_ID par votre Template ID  
   - YOUR_PUBLIC_KEY par votre Public Key

4. Template EmailJS suggéré :
   Sujet: Nouveau message depuis votre portfolio - {{subject}}
   
   Corps:
   Nouveau message reçu depuis votre portfolio :
   
   Nom: {{from_name}}
   Email: {{from_email}}
   Entreprise: {{company}}
   
   Sujet: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Ce message a été envoyé depuis votre portfolio web.

5. Si EmailJS n'est pas configuré, le système utilisera automatiquement
   la méthode mailto: comme fallback.
*/