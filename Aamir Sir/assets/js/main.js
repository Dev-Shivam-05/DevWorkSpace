/**
 * main.js - Industry Standard Performance & Logic
 * Handles: Project Rendering, Progressive Loading, Theme Management
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Unified Theme Management
    const themeToggle = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    };

    const updateThemeIcon = (theme) => {
        const icon = document.querySelector('#theme-toggle i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    };

    document.getElementById('theme-toggle')?.addEventListener('click', themeToggle);

    // 2. Progressive Image Loading
    const loadImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => img.classList.add('loaded'));
            }
        });
    };
    loadImages();

    // 3. Reusable Project Component
    window.renderProjects = (containerId, projects) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = projects.map((p, idx) => `
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${idx * 100}">
                <div class="card-pro h-100">
                    <div class="position-relative overflow-hidden" style="aspect-ratio: 16/9; background: var(--surface-muted)">
                        <img src="${p.thumbnail}" 
                             alt="${p.title}" 
                             class="w-100 h-100 object-fit-cover img-pro" 
                             loading="lazy"
                             onerror="this.src='assets/img/fallback.svg'">
                    </div>
                    <div class="p-4">
                        <div class="d-flex gap-2 mb-3">
                            ${p.techStack.map(tech => `<span class="badge-tech">${tech}</span>`).join('')}
                        </div>
                        <h4 class="h5 mb-3">${p.title}</h4>
                        <p class="small text-muted mb-4">${p.description}</p>
                        <div class="d-flex gap-3">
                            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-pro btn-primary flex-grow-1 py-2">Live Demo</a>
                            <a href="${p.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn-pro btn-outline py-2 px-3" aria-label="GitHub"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        loadImages();
    };

    // 4. Global Animations & Performance
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-quart',
            once: true,
            offset: 50
        });
    }

    // NProgress Setup
    if (typeof NProgress !== 'undefined') {
        NProgress.configure({ showSpinner: false, speed: 400 });
        window.addEventListener('beforeunload', () => NProgress.start());
        NProgress.done();
    }
});
