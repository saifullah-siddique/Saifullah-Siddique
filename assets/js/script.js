document.addEventListener('DOMContentLoaded', () => {

    // --- 1. HEADER SCROLL EFFECT ---
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. CUSTOM CURSOR LOGIC ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorGlow = document.querySelector('.cursor-glow');

    window.addEventListener('mousemove', e => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorGlow.style.left = `${posX}px`;
        cursorGlow.style.top = `${posY}px`;
    });

    // --- 3. CURSOR HIDE/SHOW ON INTERACTIVE ELEMENTS ---
    const interactiveElements = document.querySelectorAll('a, .contact-btn');

    interactiveElements.forEach(el => {
        // FIX: Hide custom cursor on hover
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hidden');
            cursorGlow.classList.add('hidden');
        });
        // FIX: Show custom cursor when leaving
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hidden');
            cursorGlow.classList.remove('hidden');
        });
    });

    // --- 4. PROJECT PREVIEW HOVER EFFECT ---
    const projectItems = document.querySelectorAll('.project-item');
    const projectPreview = document.querySelector('.project-preview');

    document.addEventListener('mouseleave', () => {
        projectPreview.classList.remove('visible');
    });

    projectItems.forEach(item => {
        const previewImage = item.dataset.image;

        item.addEventListener('mousemove', e => {
            projectPreview.src = previewImage;
            projectPreview.classList.add('visible');
            
            // The position is now offset by the CSS transform property
            projectPreview.style.left = `${e.clientX}px`;
            projectPreview.style.top = `${e.clientY}px`;
        });

        item.addEventListener('mouseleave', () => {
            projectPreview.classList.remove('visible');
        });
    });

});
