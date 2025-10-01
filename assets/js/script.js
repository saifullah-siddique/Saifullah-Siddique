document.addEventListener('DOMContentLoaded', () => {

    // --- 1. HEADER SCROLL EFFECT ---
    const header = document.querySelector('.main-header');
    // Check if header exists on the page before adding scroll listener
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- 2. CUSTOM CURSOR LOGIC ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorGlow = document.querySelector('.cursor-glow');

    // Check if cursor elements exist
    if (cursorDot && cursorGlow) {
        window.addEventListener('mousemove', e => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            cursorGlow.style.left = `${posX}px`;
            cursorGlow.style.top = `${posY}px`;
        });
    }

    // --- 3. CURSOR HIDE/SHOW ON INTERACTIVE ELEMENTS ---
    const interactiveElements = document.querySelectorAll('a, button, .contact-btn');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursorDot && cursorGlow) {
                cursorDot.classList.add('hidden');
                cursorGlow.classList.add('hidden');
            }
        });
        el.addEventListener('mouseleave', () => {
            if (cursorDot && cursorGlow) {
                cursorDot.classList.remove('hidden');
                cursorGlow.classList.remove('hidden');
            }
        });
    });

    // --- 4. PROJECT PREVIEW HOVER EFFECT (for homepage) ---
    const projectItems = document.querySelectorAll('.project-item');
    const projectPreview = document.querySelector('.project-preview');

    if (projectPreview) {
        document.addEventListener('mouseleave', () => {
            projectPreview.classList.remove('visible');
        });

        projectItems.forEach(item => {
            const previewImage = item.dataset.image;

            item.addEventListener('mousemove', e => {
                projectPreview.src = previewImage;
                projectPreview.classList.add('visible');
                
                projectPreview.style.left = `${e.clientX}px`;
                projectPreview.style.top = `${e.clientY}px`;
            });

            item.addEventListener('mouseleave', () => {
                projectPreview.classList.remove('visible');
            });
        });
    }

    // --- 5. INITIALIZE FEATHER ICONS ---
    // This will find all data-feather attributes and replace them with SVG icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

