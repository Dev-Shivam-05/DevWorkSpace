/**
 * Layout.js - Enhanced Professional Layout System
 * Compliance: WCAG 2.1 AA, Industry Standards
 */

const Layout = {
    header: `
        <nav class="navbar-pro">
            <div class="container-standard d-flex align-items-center justify-content-between w-100">
                <a class="fw-bold text-decoration-none" href="index.html" style="font-size: var(--fs-xl); color: var(--primary)">AAMIR<span style="color: var(--text-main)">.</span></a>
                
                <div class="d-none d-lg-flex align-items-center gap-4">
                    <a class="nav-link-pro" href="index.html">Home</a>
                    <a class="nav-link-pro" href="about.html">About</a>
                    <a class="nav-link-pro" href="services.html">Services</a>
                    <a class="nav-link-pro" href="portfolio.html">Portfolio</a>
                    <a class="nav-link-pro" href="blog.html">Blog</a>
                    <a class="nav-link-pro" href="contact.html">Contact</a>
                </div>

                <div class="d-flex align-items-center gap-3">
                    <button id="theme-toggle" class="btn-icon-pro" aria-label="Toggle Dark Mode">
                        <i class="fas fa-moon"></i>
                    </button>
                    <a href="contact.html" class="btn-pro btn-primary d-none d-sm-flex">Start a Project</a>
                    <button class="d-lg-none btn-icon-pro" id="mobile-menu-toggle" aria-label="Toggle Menu">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </nav>
        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="mobile-menu-pro">
            <div class="p-4 d-flex flex-column gap-4">
                <a class="nav-link-pro fs-xl" href="index.html">Home</a>
                <a class="nav-link-pro fs-xl" href="about.html">About</a>
                <a class="nav-link-pro fs-xl" href="services.html">Services</a>
                <a class="nav-link-pro fs-xl" href="portfolio.html">Portfolio</a>
                <a class="nav-link-pro fs-xl" href="blog.html">Blog</a>
                <a class="nav-link-pro fs-xl" href="contact.html">Contact</a>
            </div>
        </div>
    `,
    footer: `
        <footer class="footer-pro">
            <div class="container-standard">
                <div class="row g-5">
                    <div class="col-lg-4">
                        <h3 class="fw-bold mb-4" style="color: var(--primary)">AAMIR<span style="color: var(--text-main)">.</span></h3>
                        <p>Senior Front-End Developer & UI/UX Specialist with 5+ years of experience in building high-performance web applications.</p>
                        <div class="d-flex gap-3 mt-4">
                            <a href="https://github.com/Aamir097" class="social-btn-pro" aria-label="GitHub"><i class="fab fa-github"></i></a>
                            <a href="#" class="social-btn-pro" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#" class="social-btn-pro" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-2 col-6">
                        <h6 class="fw-bold text-main mb-4">Sitemap</h6>
                        <ul class="list-unstyled d-flex flex-column gap-2">
                            <li><a href="index.html" class="footer-link-pro">Home</a></li>
                            <li><a href="about.html" class="footer-link-pro">About</a></li>
                            <li><a href="portfolio.html" class="footer-link-pro">Portfolio</a></li>
                            <li><a href="blog.html" class="footer-link-pro">Blog</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-6">
                        <h6 class="fw-bold text-main mb-4">Core Skills</h6>
                        <ul class="list-unstyled d-flex flex-column gap-2">
                            <li class="footer-link-pro">Full-Stack Development</li>
                            <li class="footer-link-pro">UI/UX Design Systems</li>
                            <li class="footer-link-pro">Performance Optimization</li>
                            <li class="footer-link-pro">Cloud Architecture</li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <h6 class="fw-bold text-main mb-4">Newsletter</h6>
                        <p class="small mb-3">Get monthly insights on web performance and UI trends.</p>
                        <form class="newsletter-form-pro">
                            <input type="email" placeholder="Email address" required>
                            <button type="submit" aria-label="Subscribe"><i class="fas fa-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
                <div class="mt-5 pt-4 border-top border-secondary opacity-20 text-center">
                    <p class="small mb-0">&copy; 2026 Aamir Shaikh. Built with Industry Standards. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    `,
    init() {
        const headerContainer = document.getElementById('header-placeholder');
        const footerContainer = document.getElementById('footer-placeholder');
        
        if (headerContainer) headerContainer.innerHTML = this.header;
        if (footerContainer) footerContainer.innerHTML = this.footer;
        
        this.bindEvents();
        this.setActiveLink();
    },
    bindEvents() {
        const menuBtn = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn?.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuBtn.querySelector('i').classList.toggle('fa-bars');
            menuBtn.querySelector('i').classList.toggle('fa-times');
        });
    },
    setActiveLink() {
        const path = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll('.nav-link-pro').forEach(link => {
            if (link.getAttribute('href') === path) {
                link.classList.add('active');
            }
        });
    }
};

// Add supporting CSS for new layout components
const layoutStyles = `
    .nav-link-pro {
        text-decoration: none;
        color: var(--text-muted);
        font-weight: 500;
        font-size: var(--fs-sm);
        transition: var(--transition-fast);
        position: relative;
    }
    .nav-link-pro:hover, .nav-link-pro.active {
        color: var(--primary);
    }
    .nav-link-pro.active::after {
        content: '';
        position: absolute;
        bottom: -4px; left: 0; width: 100%;
        height: 2px; background: var(--primary);
        border-radius: 99px;
    }
    .btn-icon-pro {
        width: 40px; height: 40px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border);
        background: var(--surface);
        color: var(--text-main);
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; transition: var(--transition-fast);
    }
    .btn-icon-pro:hover {
        border-color: var(--primary);
        color: var(--primary);
    }
    .mobile-menu-pro {
        position: fixed; top: 72px; left: 0; width: 100%; height: 0;
        background: var(--background);
        z-index: 999; overflow: hidden;
        transition: height 0.3s ease-in-out;
    }
    .mobile-menu-pro.active { height: calc(100vh - 72px); }
    .social-btn-pro {
        width: 36px; height: 36px;
        border-radius: var(--radius-sm);
        background: var(--surface);
        border: 1px solid var(--border);
        display: flex; align-items: center; justify-content: center;
        color: var(--text-muted);
        text-decoration: none; transition: var(--transition-fast);
    }
    .social-btn-pro:hover {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
    }
    .footer-link-pro {
        text-decoration: none;
        color: var(--text-muted);
        font-size: var(--fs-sm);
        transition: var(--transition-fast);
    }
    .footer-link-pro:hover { color: var(--primary); }
    .newsletter-form-pro {
        display: flex; gap: 0;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        overflow: hidden;
    }
    .newsletter-form-pro input {
        flex: 1; border: none; padding: 0.5rem 1rem;
        background: var(--surface); color: var(--text-main);
        outline: none;
    }
    .newsletter-form-pro button {
        background: var(--primary); color: white;
        border: none; padding: 0.5rem 1rem; cursor: pointer;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = layoutStyles;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', () => Layout.init());
