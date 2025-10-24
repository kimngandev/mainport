// === PORTFOLIO WEBSITE - REFACTORED VERSION ===
// Author: kimdevhere

// === CONFIGURATION ===

const CONFIG = {
    name: "kimdevhere",
    defaultTheme: 'light',
    animationDuration: 300,
    mobileBreakpoint: 768,
    lang: document.documentElement.lang || 'vi' 
};

// === GLOBAL STATE ===
let voucherData = [];
let currentOpenProjectId = null;
let typewriterTimeout;
let isMobile = window.innerWidth < CONFIG.mobileBreakpoint;
let projectData = [];
let productData = [];
let translations = {};

// === UTILITY FUNCTIONS ===
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// === CORE FUNCTIONS ===
async function loadData() {
    try {
        const [projectsRes, translationsRes, vouchersRes, productsRes] = await Promise.all([
            fetch('../data/projects.json'),
            fetch('../data/translations.json'),
            fetch('../data/vouchers.json'),
            fetch('../data/products.json')
        ]);
        projectData = await projectsRes.json();
        translations = await translationsRes.json();
        voucherData = await vouchersRes.json();
        productData = await productsRes.json();
        return true;
    } catch (error) {
        console.error("Failed to load data:", error);
        return false;
    }
}

function renderVouchers() {
    const grid = document.getElementById('voucher-grid');
    if (!grid) return;

    grid.innerHTML = ''; 

    voucherData.forEach(voucher => {
        const card = document.createElement('div');
        card.className = 'voucher-card animated-entry';
        
        const actionButton = voucher.type === 'code' 
            ? `<button class="copy-code-btn" onclick="copyCode(this, '${voucher.code}')">
                   <span data-key="voucherBtnCopy"></span>
                   <svg class="copy-icon w-4 h-4" ...></svg>
                   <svg class="check-icon w-4 h-4" ...></svg>
               </button>`
            : `<a href="${voucher.link}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary ...">
                   <span data-key="voucherBtnGet"></span>
               </a>`;

        card.innerHTML = `
            <div class="flex items-start justify-between">
                <div class="flex items-center gap-4">
                    <img src="${voucher.logo}" alt="${getText(`${voucher.id}.title`)}" class="w-12 h-12 rounded-lg border-2 border-white/50">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white">${getText(`${voucher.id}.title`)}</h3>
                        <span class="text-xs font-semibold ${voucher.statusClass}">${getText(`${voucher.id}.status`)}</span>
                    </div>
                </div>
            </div>
            <p class="text-slate-600 dark:text-slate-400 my-4 flex-grow">${getText(`${voucher.id}.desc`)}</p>
            <div class="mt-auto pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex justify-between items-center">
                <div>
                    <span class="text-xs text-slate-500 dark:text-slate-400 block">${voucher.type === 'code' ? 'CODE' : 'DEAL'}</span>
                    ${voucher.type === 'code' ? `<code class="text-lg font-bold tracking-wider">${voucher.code}</code>` : `<span class="text-lg font-bold">${getText('voucherBtnGet')}</span>`}
                </div>
                ${actionButton}
            </div>
        `;
        grid.appendChild(card);
    });
    // Re-run text updates for new content
    updateDOMText();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = productData.map(product => `
        <div class="product-item bg-white dark:bg-slate-900/50 rounded-lg overflow-hidden group border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300" data-category="${product.category}">
            <div class="overflow-hidden">
                <img src="${product.img}" alt="${getText(`${product.id}.title`)}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${getText(`${product.id}.title`)}</h3>
                <p class="text-slate-600 dark:text-slate-400 mb-4 h-16">${getText(`${product.id}.desc`)}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-violet-500 dark:text-violet-400">${getText(`${product.id}.price`)}</span>
                    <a href="#" class="bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-300 font-semibold px-5 py-2 rounded-lg hover:bg-violet-200 dark:hover:bg-violet-900 transition-colors">${getText('productBtnBuy')}</a>
                </div>
            </div>
        </div>
    `).join('');
}


function getText(key) {
    const lang = CONFIG.lang;
    const value = key.split('.').reduce((obj, k) => (obj || {})[k], translations[lang]);
    return typeof value === 'string' ? value.replace(/\[YOUR_NAME\]/g, CONFIG.name) : (value || '');
}

function updateDOMText() {
    const footerText = `© ${new Date().getFullYear()} ${CONFIG.name}. ` + (CONFIG.lang === 'vi' ? 'Mọi quyền được bảo lưu.' : (CONFIG.lang === 'ja' ? '全著作権所有。' : 'All Rights Reserved.'));
    const footerEl = document.querySelector('[data-key="footerText"]');
    if (footerEl) footerEl.innerText = footerText;


    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (key && key !== "footerText") {
            const text = getText(key);
            if (text) el.innerHTML = text;
        }
    });
    
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-key-placeholder');
        if (key) {
            const text = getText(key);
            if (text) el.placeholder = text;
        }
    });
    
    const pageTitleKey = document.body.dataset.titleKey || 'pageTitle';
    document.title = getText(pageTitleKey);

    const metaDescKey = document.body.dataset.descKey || 'metaDescription';
    const metaKeywordsKey = document.body.dataset.keywordsKey || 'metaKeywords';
    
    const metaDesc = document.getElementById('meta-description');
    const metaKeywords = document.getElementById('meta-keywords');
    if (metaDesc) metaDesc.setAttribute('content', getText(metaDescKey));
    if (metaKeywords) metaKeywords.setAttribute('content', getText(metaKeywordsKey));
}


function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem('language', lang);
    const currentPath = window.location.pathname.split('/').filter(p => p);
    const newPath = `/${lang}/${currentPath.slice(1).join('/')}`;
    window.location.pathname = newPath;
}


function updateLangSwitcherUI() {
    const lang = CONFIG.lang;
    const flagMap = { vi: '🇻🇳', en: '🇺🇸', ja: '🇯🇵' };
    const langTextMap = { vi: 'Vietnamese', en: 'English', ja: '日本語' };

    const flagEl = document.getElementById('lang-switcher-flag');
    const textEl = document.getElementById('lang-switcher-text');
    const mobileFlagEl = document.getElementById('mobile-lang-switcher-flag');
    const mobileTextEl = document.getElementById('mobile-lang-switcher-text');

    if (flagEl) flagEl.innerText = flagMap[lang];
    if (textEl) textEl.innerText = langTextMap[lang];
    if (mobileFlagEl) mobileFlagEl.innerText = flagMap[lang];
    if (mobileTextEl) mobileTextEl.innerText = langTextMap[lang];
}

// === THEME MANAGEMENT ===
function updateThemeUI(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    
    if (darkIcon) darkIcon.style.display = isDark ? 'none' : 'block';
    if (lightIcon) lightIcon.style.display = isDark ? 'block' : 'none';
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    updateThemeUI(currentTheme);
}

// === UI INTERACTIONS ===
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-nav-menu');
    const mobileMenuContent = mobileMenu.querySelector('div');
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileMenuContent.style.transform = 'translateX(100%)';
    } else {
        mobileMenu.classList.add('active');
        mobileMenuContent.style.transform = 'translateX(0)';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-nav-menu');
    const mobileMenuContent = mobileMenu.querySelector('div');
    
    mobileMenu.classList.remove('active');
    mobileMenuContent.style.transform = 'translateX(100%)';
}
function copyCode(buttonElement, codeToCopy) {
    navigator.clipboard.writeText(codeToCopy).then(() => {
        const originalText = buttonElement.querySelector('span').getAttribute('data-key');
        buttonElement.querySelector('span').innerText = getText('voucherBtnCopied');
        buttonElement.classList.add('copied');

        setTimeout(() => {
            buttonElement.querySelector('span').innerText = getText(originalText);
            buttonElement.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// === ANIMATIONS ===
function startTypewriter() {
    const el = document.querySelector('[data-key="heroSubtitle"]');
    if (!el) return;
    
    clearTimeout(typewriterTimeout);
    
    const roles = getText('heroRoles');
    if (!roles || !Array.isArray(roles) || roles.length === 0) return;
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentRole = roles[roleIndex];
        if (!currentRole) return;
        
        let displayText = isDeleting 
            ? currentRole.substring(0, charIndex--) 
            : currentRole.substring(0, ++charIndex);
        
        el.textContent = displayText;
        
        let typeSpeed = isDeleting ? 75 : 150;
        
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }
        
        typewriterTimeout = setTimeout(type, typeSpeed);
    }
    
    type();
}


// === PROJECT MANAGEMENT ===
function renderProjectCards() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;
    
    grid.innerHTML = projectData.map(project => `
        <div class="project-item" data-category="${project.category}" data-id="${project.id}">
            <div class="overflow-hidden relative">
                <img src="${project.cardImg}" alt="${getText(`${project.id}.title`)}" 
                     class="w-full h-48 object-cover" 
                     onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop';">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="content">
                <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                    ${getText(`${project.id}.title`)}
                </h3>
                <p class="text-slate-600 dark:text-slate-400 mb-4 h-12 line-clamp-2">
                    ${getText(`${project.id}.cardDesc`)}
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `
                        <span class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <button class="btn btn-secondary w-full" data-project-id="${project.id}">
                    ${getText('projectBtnDetails')}
                </button>
            </div>
        </div>
    `).join('');
}

function openModal(projectId) {
    const project = projectData.find(p => p.id === projectId);
    if (!project) return;
    
    currentOpenProjectId = projectId;
    
    const modal = document.getElementById('project-detail-modal');
    const modalContent = document.getElementById('modal-content');

    if (!modal || !modalContent) return;

    const imgEl = document.getElementById('modal-img');
    const titleEl = document.getElementById('modal-title');
    const descEl = document.getElementById('modal-desc');
    const tagsEl = document.getElementById('modal-tags');
    const liveLinkEl = document.getElementById('modal-live-link');
    const repoLinkEl = document.getElementById('modal-repo-link');

    if (imgEl) imgEl.src = project.detailImg;
    if (imgEl) imgEl.alt = getText(`${projectId}.title`);
    if (titleEl) titleEl.innerText = getText(`${projectId}.title`);
    if (descEl) descEl.innerText = getText(`${projectId}.detailDesc`);
    if (tagsEl) tagsEl.innerHTML = project.tags.map(tag => `
        <span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            ${tag}
        </span>
    `).join('');
    if (liveLinkEl) liveLinkEl.href = project.liveLink;
    if (repoLinkEl) repoLinkEl.href = project.repoLink;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modalContent.classList.add('scale-100');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('project-detail-modal');
    const modalContent = document.getElementById('modal-content');
    
    if (!modal || !modalContent) return;
    
    modal.classList.remove('opacity-100');
    modalContent.classList.remove('scale-100');
    document.body.style.overflow = '';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        currentOpenProjectId = null;
    }, 300);
}

// === HERO ANIMATION ===
function initHeroAnimation() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas || !window.THREE) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    function resizeRenderer() {
        const container = canvas.parentElement;
        const { clientWidth: width, clientHeight: height } = container;
        if (canvas.width !== width || canvas.height !== height) {
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    }
    
    window.addEventListener('resize', debounce(resizeRenderer, 250));

    const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 16);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x9333ea, 
        metalness: 0.5, 
        roughness: 0.2, 
        emissive: 0x4c1d95, 
        emissiveIntensity: 0.1 
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0xc4b5fd, 0.5);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);
    
    camera.position.z = 4;

    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    
    renderer.domElement.addEventListener('mousedown', e => { 
        isDragging = true; 
        prevMouse = { x: e.clientX, y: e.clientY }; 
    });
    
    document.addEventListener('mouseup', () => isDragging = false);
    document.addEventListener('mousemove', e => {
        if (!isDragging) return;
        shape.rotation.y += (e.clientX - prevMouse.x) * 0.008;
        shape.rotation.x += (e.clientY - prevMouse.y) * 0.008;
        prevMouse = { x: e.clientX, y: e.clientY };
    });

    const animate = () => {
        requestAnimationFrame(animate);
        resizeRenderer();
        
        if (!isDragging) {
            shape.rotation.x += 0.0005;
            shape.rotation.y += 0.001;
        }
        
        renderer.render(scene, camera);
    };
    
    animate();
}

// === CONTACT FORM SUBMISSION ===
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    async function handleSubmit(event) {
        event.preventDefault();
        const status = document.getElementById('form-status');
        const data = new FormData(event.target);
        
        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.innerHTML = "Cảm ơn bạn đã gửi tin nhắn!";
                status.className = 'text-green-500';
                form.reset();
            } else {
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    status.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! Đã có lỗi xảy ra.";
                }
                status.className = 'text-red-500';
            }
        } catch (error) {
            status.innerHTML = "Oops! Đã có lỗi xảy ra.";
            status.className = 'text-red-500';
        }
    }
    form.addEventListener("submit", handleSubmit);
}

function setupComingSoonModal() {
    const modal = document.getElementById('coming-soon-modal');
    const closeBtn = document.getElementById('close-coming-soon-modal');
    const voucherLinks = document.querySelectorAll('a[href="voucher.html"]');
   
    if (!modal || !closeBtn || voucherLinks.length === 0) return;

    const openComingSoonModal = (event) => {
        event.preventDefault();
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('visible'), 10);
    };

    const closeComingSoonModal = () => {
        modal.classList.remove('visible');
        setTimeout(() => modal.classList.add('hidden'), 300);
    };

    voucherLinks.forEach(link => {
        link.addEventListener('click', openComingSoonModal);
    });

    closeBtn.addEventListener('click', closeComingSoonModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeComingSoonModal();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('visible')) {
            closeComingSoonModal();
        }
    });
}
// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', async () => {
    const dataLoaded = await loadData();
    if (!dataLoaded) {
        document.body.innerHTML = "<h1>Error: Could not load website data.</h1>";
        return;
    }

    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    updateThemeUI(savedTheme);

    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('theme-toggle-mobile');
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
    
    const initializeLanguageSwitcher = (buttonId, dropdownId) => {
        const button = document.getElementById(buttonId);
        const dropdown = document.getElementById(dropdownId);
        if (!button || !dropdown) return;

        button.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdown.classList.toggle('hidden');
        });

        dropdown.querySelectorAll('[data-lang]').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.currentTarget.getAttribute('data-lang');
                if (lang) setLanguage(lang);
            });
        });
    };
    
    initializeLanguageSwitcher('lang-switcher-button', 'lang-switcher-dropdown');
    initializeLanguageSwitcher('mobile-lang-switcher-button', 'mobile-lang-switcher-dropdown');
    
    document.addEventListener('click', () => {
        document.getElementById('lang-switcher-dropdown')?.classList.add('hidden');
        document.getElementById('mobile-lang-switcher-dropdown')?.classList.add('hidden');
    });

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavClose = document.getElementById('mobile-nav-close');
    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileMenu);
    
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    if (mobileNavMenu) {
        mobileNavMenu.addEventListener('click', (e) => {
            if (e.target === mobileNavMenu) closeMobileMenu();
        });
        mobileNavMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
    
    if (document.getElementById('project-grid')) {
        renderProjectCards();
        const projectFilters = document.getElementById('project-filters');
        if (projectFilters) {
            projectFilters.addEventListener('click', e => {
                if (e.target.tagName === 'BUTTON') {
                    projectFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    const filter = e.target.dataset.filter;
                    document.querySelectorAll('.project-item').forEach(item => {
                        item.style.display = (filter === 'all' || item.dataset.category.includes(filter)) ? 'flex' : 'none';
                    });
                }
            });
        }
        document.getElementById('project-grid').addEventListener('click', e => {
            const btn = e.target.closest('.btn[data-project-id]');
            if (btn) openModal(btn.dataset.projectId);
        });
    }

    if (document.getElementById('product-grid')) {
        renderProducts();
        const productFilters = document.getElementById('product-filters');
        if (productFilters) {
            productFilters.addEventListener('click', e => {
                if (e.target.tagName === 'BUTTON') {
                    productFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    const filter = e.target.dataset.filter;
                    document.querySelectorAll('.product-item').forEach(item => {
                        item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
                    });
                }
            });
        }
    }

    const modalCloseBtn = document.getElementById('modal-close-btn');
    const projectModal = document.getElementById('project-detail-modal');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (projectModal) projectModal.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === "Escape") closeModal(); });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(section);
    });

    const spotlight = document.getElementById('spotlight');
    if (spotlight) {
        document.addEventListener('mousemove', debounce(e => {
            spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }, 16));
        document.body.addEventListener('mouseenter', () => spotlight.style.opacity = 1);
        document.body.addEventListener('mouseleave', () => spotlight.style.opacity = 0);
    }
    
    updateLangSwitcherUI(); 
    updateDOMText();
    startTypewriter();
    initHeroAnimation();
    setupComingSoonModal();
});


