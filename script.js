// === PORTFOLIO WEBSITE - ENHANCED VERSION ===
// Author: kimdevhere
// Version: 2.0 - Modern & Mobile Optimized

// === CONFIGURATION ===
const CONFIG = {
    name: "kimdevhere",
    defaultLang: 'vi',
    defaultTheme: 'light',
    animationDuration: 300,
    mobileBreakpoint: 768
};

// === MOBILE NAVIGATION ===
document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.tab-item');
    const sections = document.querySelectorAll('section[id]');

    // Update active tab based on scroll position
    function updateActiveTab() {
        const scrollY = window.scrollY;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                tabItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    // Smooth scroll for mobile navigation
    tabItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Handle theme toggle
    const themeToggle = document.getElementById('theme-toggle-mobile');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', 
                document.documentElement.classList.contains('dark') ? 'dark' : 'light'
            );
        });
    }

    window.addEventListener('scroll', updateActiveTab);
    updateActiveTab();
});

// === PROJECT DATA ===
const projectData = [
    { 
        id: 'proj1', 
        category: 'dev uiux', 
        cardImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', 
        detailImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', 
        tags: ['React', 'Figma', 'E-commerce'], 
        liveLink: '#', 
        repoLink: '#' 
    },
    { 
        id: 'proj2', 
        category: 'uiux graphic', 
        cardImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop', 
        detailImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', 
        tags: ['Branding', 'Logo Design', 'Identity'], 
        liveLink: '#', 
        repoLink: '#' 
    },
    { 
        id: 'proj3', 
        category: 'dev', 
        cardImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', 
        detailImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', 
        tags: ['Vue.js', 'Firebase', 'PWA'], 
        liveLink: '#', 
        repoLink: '#' 
    },
    { 
        id: 'proj4', 
        category: 'graphic', 
        cardImg: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop', 
        detailImg: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop', 
        tags: ['After Effects', 'Motion Graphics', 'Social Media'], 
        liveLink: '#', 
        repoLink: '#' 
    },
    { 
        id: 'proj5', 
        category: 'uiux', 
        cardImg: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop', 
        detailImg: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop', 
        tags: ['UX Research', 'Mobile App', 'Prototyping'], 
        liveLink: '#', 
        repoLink: '#' 
    },
    { 
        id: 'proj6', 
        category: 'dev graphic', 
        cardImg: 'https://images.unsplash.com/photo-1551434678-e076c223a5ab?w=600&h=400&fit=crop', 
        detailImg: 'https://images.unsplash.com/photo-1551434678-e076c223a5ab?w=800&h=600&fit=crop', 
        tags: ['Next.js', 'Landing Page', 'Event Design'], 
        liveLink: '#', 
        repoLink: '#' 
    }
];

// === TRANSLATIONS ===
const translations = {
    vi: {
        // Meta Tags (THÊM MỚI)
        pageTitle: "Portfolio | kimdevhere - Web Developer & Designer",
        metaDescription: "Portfolio của kimdevhere - Lập trình viên phát triển web, UI/UX & Graphic Designer. Khám phá các dự án về React, Vue, Figma và hơn thế nữa.",
        metaKeywords: "lập trình viên web, thiết kế ui/ux, portfolio, kimdevhere, react developer, front-end developer việt nam",
        // Navigation
        navHome: "Trang chủ", navSkills: "Kỹ năng", navProjects: "Dự án", 
        navServices: "Dịch vụ", navStore: "Cửa hàng", navAbout: "Giới thiệu", navContact: "Liên hệ",
        navHomeMobile: "Trang chủ", navSkillsMobile: "Kỹ năng", navProjectsMobile: "Dự án", 
        navServicesMobile: "Dịch vụ", navContactMobile: "Liên hệ",
        
                 // Hero Section
         heroSubtitle: "Lập trình viên Web & UI/UX Designer",
        heroRoles: ["Lập trình viên Web", "UI/UX Designer", "Graphic Designer"],
        heroTitle: "Biến ý tưởng thành giải pháp số.",
        heroDescription: "Chuyên gia phát triển web và thiết kế UI/UX, tập trung vào việc tạo ra các sản phẩm trực quan, hiệu quả và có tính thẩm mỹ cao.",
        heroBtnProjects: "Xem dự án", heroBtnContact: "Liên hệ ngay",
        
        // Skills Section
        skillsTitle: "Bộ công cụ của tôi",
        skillsSubtitle: "Các công nghệ và công cụ tôi sử dụng để biến ý tưởng thành hiện thực.",
        
        // Projects Section
        projectsTitle: "Dự án nổi bật", 
        projectsSubtitle: "Một vài sản phẩm mà tôi tâm đắc.",
        filterAll: "Tất cả", filterDev: "Lập trình", filterUIUX: "UI/UX", filterGraphic: "Đồ họa",
        projectBtnDetails: "Xem chi tiết →",
        
        // Services Section
        servicesTitle: "Dịch vụ của tôi",
        servicesSubtitle: "Cung cấp các giải pháp chuyên biệt để hiện thực hóa ý tưởng của bạn.",
        serviceWebTitle: "Phát triển Web",
        serviceWebDesc: "Xây dựng các trang web và ứng dụng web hiện đại, tốc độ cao và thân thiện với người dùng.",
        serviceWebFeat1: "Website tĩnh & Landing Page", 
        serviceWebFeat2: "Website doanh nghiệp & Blog", 
        serviceWebFeat3: "Ứng dụng web phức tạp (SPA)", 
        serviceWebFeat4: "Tích hợp API & Backend",
        serviceUiuxTitle: "Thiết kế UI/UX",
        serviceUiuxDesc: "Tạo ra những giao diện đẹp mắt và trải nghiệm người dùng mượt mà, trực quan.",
        serviceUiuxFeat1: "Nghiên cứu & Wireframing", 
        serviceUiuxFeat2: "Thiết kế giao diện (UI)", 
        serviceUiuxFeat3: "Xây dựng hệ thống thiết kế", 
        serviceUiuxFeat4: "Tạo mẫu tương tác (Prototype)",
        serviceGraphicTitle: "Thiết kế Đồ họa",
        serviceGraphicDesc: "Cung cấp các giải pháp sáng tạo về hình ảnh để xây dựng và nâng tầm thương hiệu của bạn.",
        serviceGraphicFeat1: "Thiết kế Logo & Bộ nhận diện", 
        serviceGraphicFeat2: "Ấn phẩm Marketing", 
        serviceGraphicFeat3: "Đồ họa Social Media", 
        serviceGraphicFeat4: "Chỉnh sửa ảnh & video",
        serviceBtnQuote: "Yêu cầu báo giá",
        
        // Store Section
        storeTitle: "Cửa hàng sản phẩm số",
        storeSubtitle: "Các tài nguyên, mẫu và bộ công cụ được tạo sẵn để đẩy nhanh tiến độ công việc của bạn.",
        product1Title: "Bộ UI Kit cho Figma", 
        product1Desc: "Bộ giao diện người dùng toàn diện giúp bạn thiết kế ứng dụng nhanh hơn.", 
        product1Price: "499K VND",
        product2Title: "Mẫu Web Portfolio", 
        product2Desc: "Mẫu website portfolio cá nhân được xây dựng bằng Next.js và Tailwind CSS.", 
        product2Price: "299K VND",
        product3Title: "Bộ Icon Đồ họa", 
        product3Desc: "Hơn 100 icon vector được thiết kế thủ công cho các dự án đa dạng.", 
        product3Price: "199K VND",
        productBtnBuy: "Mua ngay",
        
        // About Section
        aboutTitle: "Về tôi", 
        aboutPara1: `Xin chào! Tôi là ${CONFIG.name}, một người đam mê xây dựng những thứ hữu ích cho internet. Hành trình của tôi bắt đầu từ thiết kế đồ họa, nơi tôi học được về bố cục, màu sắc và câu chuyện hình ảnh.`, 
        aboutPara2: "Sự tò mò đã dẫn tôi đến với UI/UX, để giải quyết các vấn đề thực tế của người dùng. Không dừng lại ở đó, tôi muốn tự tay biến những thiết kế đó thành sản phẩm sống, và đó là lúc tôi dấn thân vào thế giới lập trình.", 
        aboutPhilosophyTitle: "Triết lý làm việc", 
        aboutPhilosophyText: "Tôi tin rằng sản phẩm tốt nhất được tạo ra từ sự giao thoa giữa thiết kế lấy người dùng làm trung tâm và công nghệ vững chắc. Mọi pixel, mọi dòng code đều phải có mục đích.", 
        aboutBtnCV: "Tải CV của tôi",
        
        // Contact Section
        contactTitle: "Cùng xây dựng điều gì đó tuyệt vời?", 
        contactSubtitle: "Tôi luôn sẵn sàng lắng nghe về các dự án mới, cơ hội hợp tác hoặc đơn giản là để trò chuyện. Hãy liên hệ với tôi!", 
        contactEmailLabel: "Gửi email cho tôi", 
        contactSocialLabel: "Theo dõi tôi",
        formName: "Họ tên", 
        formNamePlaceholder: "Nhập họ tên của bạn", 
        formEmail: "Email", 
        formEmailPlaceholder: "Nhập email của bạn", 
        formMessage: "Lời nhắn", 
        formMessagePlaceholder: "Nội dung lời nhắn...", 
        formSubmitBtn: "Gửi Lời Nhắn",
        
        // Footer
        footerText: `© ${new Date().getFullYear()} ${CONFIG.name}. Mọi quyền được bảo lưu.`,
        
        // Modal
        modalBtnLive: "Xem Live", 
        modalBtnRepo: "Mã nguồn",
        
        // Project Details
        proj1: { 
            title: "Website Thương mại điện tử", 
            cardDesc: "Xây dựng và thiết kế giao diện cho một trang web E-commerce hiện đại.", 
            detailDesc: "Đây là mô tả chi tiết cho dự án Website Thương mại điện tử. Dự án bao gồm việc nghiên cứu hành vi người dùng, xây dựng wireframe, thiết kế UI trên Figma và phát triển front-end bằng React. Mục tiêu là tạo ra một luồng mua sắm mượt mà và trực quan." 
        },
        proj2: { 
            title: "Bộ nhận diện thương hiệu", 
            cardDesc: "Thiết kế logo, palette màu và các ấn phẩm đồ họa cho một startup.", 
            detailDesc: "Mô tả chi tiết cho dự án Bộ nhận diện thương hiệu. Quá trình bắt đầu từ việc phân tích giá trị cốt lõi của công ty, phác thảo ý tưởng logo, và hoàn thiện bộ hướng dẫn thương hiệu toàn diện." 
        },
        proj3: { 
            title: "Ứng dụng quản lý công việc", 
            cardDesc: "Phát triển một ứng dụng PWA giúp quản lý công việc cá nhân.", 
            detailDesc: "Mô tả chi tiết cho dự án Ứng dụng quản lý công việc. Ứng dụng được xây dựng bằng Vue.js và Firebase, cho phép người dùng tạo, theo dõi và hoàn thành công việc trên mọi thiết bị." 
        },
        proj4: { 
            title: "Chiến dịch quảng cáo social", 
            cardDesc: "Thiết kế bộ ấn phẩm hình ảnh và video ngắn cho chiến dịch marketing.", 
            detailDesc: "Mô tả chi tiết cho dự án Chiến dịch quảng cáo social. Chịu trách nhiệm lên ý tưởng và thực hiện các sản phẩm visual cho Facebook và Instagram, sử dụng After Effects và Photoshop." 
        },
        proj5: { 
            title: "Thiết kế lại ứng dụng di động", 
            cardDesc: "Nghiên cứu và thiết kế lại giao diện cho một ứng dụng đặt đồ ăn.", 
            detailDesc: "Mô tả chi tiết cho dự án Thiết kế lại ứng dụng di động. Phân tích các điểm yếu của phiên bản cũ, thực hiện phỏng vấn người dùng và thiết kế lại toàn bộ UI/UX trên Figma để cải thiện trải nghiệm." 
        },
        proj6: { 
            title: "Landing Page sự kiện", 
            cardDesc: "Thiết kế và lập trình landing page cho một sự kiện công nghệ.", 
            detailDesc: "Mô tả chi tiết cho dự án Landing Page sự kiện. Kết hợp giữa kỹ năng thiết kế đồ họa bằng Illustrator và lập trình front-end với Next.js để tạo ra một trang landing page ấn tượng và hiệu quả." 
        },

        //tabbar mobile 
        navHomeMobile: "Trang chủ",
    navProjectsMobile: "Dự án",
    navAboutMobile: "Giới thiệu",
    navContactMobile: "Liên hệ",
    navThemeMobile: "Giao diện",
    },
    en: {
         
        // Meta Tags (THÊM MỚI)
        pageTitle: "Portfolio | kimdevhere - Web Developer & Designer",
        metaDescription: "Portfolio of kimdevhere - Web Developer, UI/UX & Graphic Designer. Discover projects on React, Vue, Figma and more.",
        metaKeywords: "web developer, ui/ux designer, portfolio, kimdevhere, react developer, front-end developer vietnam",
        // Navigation
        navHome: "Home", navSkills: "Skills", navProjects: "Projects", 
        navServices: "Services", navStore: "Store", navAbout: "About", navContact: "Contact",
        navHomeMobile: "Home", navSkillsMobile: "Skills", navProjectsMobile: "Projects", 
        navServicesMobile: "Services", navContactMobile: "Contact",
        
                 // Hero Section
         heroSubtitle: "Web Developer & UI/UX Designer",
        heroRoles: ["Web Developer", "UI/UX Designer", "Graphic Designer"],
        heroTitle: "Turning ideas into digital solutions.",
        heroDescription: "Web development and UI/UX design specialist, focused on creating intuitive, effective, and highly aesthetic products.",
        heroBtnProjects: "View Projects", heroBtnContact: "Contact Me",
        
        // Skills Section
        skillsTitle: "My Toolkit",
        skillsSubtitle: "The technologies and tools I use to bring ideas to life.",
        
        // Projects Section
        projectsTitle: "Featured Projects", 
        projectsSubtitle: "A few products I'm proud of.",
        filterAll: "All", filterDev: "Development", filterUIUX: "UI/UX", filterGraphic: "Graphic",
        projectBtnDetails: "View Details →",
        
        // Services Section
        servicesTitle: "My Services",
        servicesSubtitle: "Providing specialized solutions to bring your ideas to life.",
        serviceWebTitle: "Web Development",
        serviceWebDesc: "Building modern, high-speed, and user-friendly websites and web applications.",
        serviceWebFeat1: "Static Websites & Landing Pages", 
        serviceWebFeat2: "Corporate Websites & Blogs", 
        serviceWebFeat3: "Complex Web Apps (SPAs)", 
        serviceWebFeat4: "API & Backend Integration",
        serviceUiuxTitle: "UI/UX Design",
        serviceUiuxDesc: "Creating beautiful interfaces and smooth, intuitive user experiences.",
        serviceUiuxFeat1: "User Research & Wireframing", 
        serviceUiuxFeat2: "UI Design for Web & Apps", 
        serviceUiuxFeat3: "Design System Development", 
        serviceUiuxFeat4: "Interactive Prototyping",
        serviceGraphicTitle: "Graphic Design",
        serviceGraphicDesc: "Delivering creative visual solutions to build and elevate your brand.",
        serviceGraphicFeat1: "Logo Design & Brand Identity", 
        serviceGraphicFeat2: "Marketing Materials", 
        serviceGraphicFeat3: "Social Media Graphics", 
        serviceGraphicFeat4: "Photo & Video Editing",
        serviceBtnQuote: "Get a Quote",
        
        // Store Section
        storeTitle: "Digital Product Store",
        storeSubtitle: "Ready-made resources, templates, and toolkits to accelerate your workflow.",
        product1Title: "UI Kit for Figma", 
        product1Desc: "A comprehensive user interface kit to help you design mobile apps faster.", 
        product1Price: "$49",
        product2Title: "Web Portfolio Template", 
        product2Desc: "A personal portfolio website template built with Next.js and Tailwind CSS.", 
        product2Price: "$29",
        product3Title: "Graphic Icon Set", 
        product3Desc: "Over 100 handcrafted vector icons for your diverse projects.", 
        product3Price: "$19",
        productBtnBuy: "Buy Now",
        
        // About Section
        aboutTitle: "About Me", 
        aboutPara1: `Hello! I'm ${CONFIG.name}, passionate about building useful things for the internet. My journey began with graphic design, where I learned about layout, color, and visual storytelling.`, 
        aboutPara2: "Curiosity led me to UI/UX to solve real user problems. Not stopping there, I wanted to bring those designs to life myself, which led me into the world of web development.", 
        aboutPhilosophyTitle: "Working Philosophy", 
        aboutPhilosophyText: "I believe the best products are born from the intersection of user-centric design and robust technology. Every pixel, every line of code must have a purpose.", 
        aboutBtnCV: "Download My CV",
        
        // Contact Section
        contactTitle: "Let's build something amazing?", 
        contactSubtitle: "I'm always open to discussing new projects, collaboration opportunities, or just to have a chat. Feel free to reach out!", 
        contactEmailLabel: "Email me at", 
        contactSocialLabel: "Follow me",
        formName: "Full Name", 
        formNamePlaceholder: "Enter your full name", 
        formEmail: "Email", 
        formEmailPlaceholder: "Enter your email address", 
        formMessage: "Message", 
        formMessagePlaceholder: "Your message content...", 
        formSubmitBtn: "Send Message",
        
        // Footer
        footerText: `© ${new Date().getFullYear()} ${CONFIG.name}. All Rights Reserved.`,
        
        // Modal
        modalBtnLive: "Live Site", 
        modalBtnRepo: "Source Code",
        
        // Project Details
        proj1: { 
            title: "E-commerce Website", 
            cardDesc: "Built and designed the UI for a modern E-commerce site.", 
            detailDesc: "This is the detailed description for the E-commerce Website project. The project involved user behavior research, wireframing, UI design in Figma, and front-end development using React. The goal was to create a smooth and intuitive shopping flow." 
        },
        proj2: { 
            title: "Brand Identity Suite", 
            cardDesc: "Designed the logo, color palette, and graphic assets for a startup.", 
            detailDesc: "Detailed description for the Brand Identity Suite project. The process started with analyzing the company's core values, sketching logo concepts, and finalizing a comprehensive brand guide." 
        },
        proj3: { 
            title: "Task Management App", 
            cardDesc: "Developed a PWA to help manage personal tasks efficiently.", 
            detailDesc: "Detailed description for the Task Management App project. The application was built with Vue.js and Firebase, allowing users to create, track, and complete tasks on any device." 
        },
        proj4: { 
            title: "Social Media Ad Campaign", 
            cardDesc: "Designed visual assets and short videos for a marketing campaign.", 
            detailDesc: "Detailed description for the Social Media Ad Campaign project. Responsible for conceptualizing and executing visual products for Facebook and Instagram using After Effects and Photoshop." 
        },
        proj5: { 
            title: "Mobile App Redesign", 
            cardDesc: "Researched and redesigned the UI for a food delivery app.", 
            detailDesc: "Detailed description for the Mobile App Redesign project. Analyzed the weaknesses of the old version, conducted user interviews, and redesigned the entire UI/UX in Figma to improve the experience." 
        },
        proj6: { 
            title: "Event Landing Page", 
            cardDesc: "Designed and coded a landing page for a tech event.", 
            detailDesc: "Detailed description for the Event Landing Page project. Combined graphic design skills using Illustrator and front-end programming with Next.js to create an impressive and effective landing page." 
        },

        //tabbar mobile

         navHomeMobile: "Home",
    navProjectsMobile: "Projects",
    navAboutMobile: "About",
    navContactMobile: "Contact",
    navThemeMobile: "Theme",
    },
    ja: {
        pageTitle: "ポートフォリオ | kimdevhere - ウェブ開発者 & デザイナー",
        metaDescription: "kimdevhereのポートフォリオ - ウェブ開発者、UI/UX & グラフィックデザイナー。React、Vue、Figmaなどのプロジェクトをご覧ください。",
        metaKeywords: "ウェブ開発者, UI/UXデザイナー, ポートフォリオ, kimdevhere, React開発者, フロントエンド開発者 ベトナム",

        // Navigation
        navHome: "ホーム", navSkills: "スキル", navProjects: "プロジェクト", 
        navServices: "サービス", navStore: "ストア", navAbout: "私について", navContact: "お問い合わせ",
        navHomeMobile: "ホーム", navSkillsMobile: "スキル", navProjectsMobile: "プロジェクト", 
        navServicesMobile: "サービス", navContactMobile: "お問い合わせ",
        
        // Hero Section
        heroSubtitle: "Web開発者 & UI/UXデザイナー",
        heroRoles: ["Web開発者", "UI/UXデザイナー", "グラフィックデザイナー"],
        heroTitle: "アイデアをデジタルソリューションに変える。",
        heroDescription: "Web開発とUI/UXデザインの専門家。直感的で効果的で美しい製品の作成に焦点を当てています。",
        heroBtnProjects: "プロジェクトを見る", heroBtnContact: "お問い合わせ",
        
        // Skills Section
        skillsTitle: "私のツールキット",
        skillsSubtitle: "アイデアを実現するために使用する技術とツール。",
        
        // Projects Section
        projectsTitle: "注目のプロジェクト", 
        projectsSubtitle: "誇りに思う製品の数々。",
        filterAll: "すべて", filterDev: "開発", filterUIUX: "UI/UX", filterGraphic: "グラフィック",
        projectBtnDetails: "詳細を見る →",
        
        // Services Section
        servicesTitle: "私のサービス",
        servicesSubtitle: "アイデアを実現するための専門的なソリューションを提供。",
        serviceWebTitle: "Web開発",
        serviceWebDesc: "モダンで高速でユーザーフレンドリーなWebサイトとWebアプリケーションの構築。",
        serviceWebFeat1: "静的Webサイト & ランディングページ", 
        serviceWebFeat2: "企業Webサイト & ブログ", 
        serviceWebFeat3: "複雑なWebアプリ（SPA）", 
        serviceWebFeat4: "API & バックエンド統合",
        serviceUiuxTitle: "UI/UXデザイン",
        serviceUiuxDesc: "美しいインターフェースと滑らかで直感的なユーザー体験の作成。",
        serviceUiuxFeat1: "ユーザーリサーチ & ワイヤーフレーム", 
        serviceUiuxFeat2: "Web & アプリのUIデザイン", 
        serviceUiuxFeat3: "デザインシステム開発", 
        serviceUiuxFeat4: "インタラクティブプロトタイピング",
        serviceGraphicTitle: "グラフィックデザイン",
        serviceGraphicDesc: "ブランドの構築と向上のための創造的なビジュアルソリューションの提供。",
        serviceGraphicFeat1: "ロゴデザイン & ブランドアイデンティティ", 
        serviceGraphicFeat2: "マーケティング素材", 
        serviceGraphicFeat3: "ソーシャルメディアグラフィック", 
        serviceGraphicFeat4: "写真 & 動画編集",
        serviceBtnQuote: "見積もりを取得",
        
        // Store Section
        storeTitle: "デジタル製品ストア",
        storeSubtitle: "ワークフローを加速する既製のリソース、テンプレート、ツールキット。",
        product1Title: "Figma用UIキット", 
        product1Desc: "モバイルアプリのデザインを高速化する包括的なユーザーインターフェースキット。", 
        product1Price: "¥4,900",
        product2Title: "Webポートフォリオテンプレート", 
        product2Desc: "Next.jsとTailwind CSSで構築された個人ポートフォリオWebサイトテンプレート。", 
        product2Price: "¥2,900",
        product3Title: "グラフィックアイコンセット", 
        product3Desc: "多様なプロジェクト用の100以上の手作りベクターアイコン。", 
        product3Price: "¥1,900",
        productBtnBuy: "今すぐ購入",
        
        // About Section
        aboutTitle: "私について", 
        aboutPara1: `こんにちは！私は${CONFIG.name}です。インターネットのための有用なものを作ることに情熱を持っています。私の旅は、レイアウト、色、視覚的ストーリーテリングを学んだグラフィックデザインから始まりました。`, 
        aboutPara2: "好奇心が私をUI/UXに導き、実際のユーザーの問題を解決しました。そこで止まることなく、それらのデザインを自分で実現したいと思い、Web開発の世界に足を踏み入れました。", 
        aboutPhilosophyTitle: "仕事の哲学", 
        aboutPhilosophyText: "最高の製品は、ユーザー中心のデザインと堅牢な技術の交差点から生まれると信じています。すべてのピクセル、すべてのコード行に目的が必要です。", 
        aboutBtnCV: "私のCVをダウンロード",
        
        // Contact Section
        contactTitle: "素晴らしい何かを一緒に作りませんか？", 
        contactSubtitle: "新しいプロジェクト、コラボレーションの機会、または単にチャットについて話し合うことに常にオープンです。お気軽にお問い合わせください！", 
        contactEmailLabel: "メールを送信", 
        contactSocialLabel: "フォローする",
        formName: "氏名", 
        formNamePlaceholder: "氏名を入力してください", 
        formEmail: "メールアドレス", 
        formEmailPlaceholder: "メールアドレスを入力してください", 
        formMessage: "メッセージ", 
        formMessagePlaceholder: "メッセージの内容...", 
        formSubmitBtn: "メッセージを送信",
        
        // Footer
        footerText: `© ${new Date().getFullYear()} ${CONFIG.name}. 全著作権所有。`,
        
        // Modal
        modalBtnLive: "ライブサイト", 
        modalBtnRepo: "ソースコード",
        
        // Project Details
        proj1: { 
            title: "EコマースWebサイト", 
            cardDesc: "モダンなEコマースサイトのUIを構築・デザイン。", 
            detailDesc: "これはEコマースWebサイトプロジェクトの詳細な説明です。プロジェクトには、ユーザー行動調査、ワイヤーフレーム作成、FigmaでのUIデザイン、Reactを使用したフロントエンド開発が含まれました。目標は、滑らかで直感的なショッピングフローを作成することでした。" 
        },
        proj2: { 
            title: "ブランドアイデンティティスイート", 
            cardDesc: "スタートアップのロゴ、カラーパレット、グラフィックアセットをデザイン。", 
            detailDesc: "ブランドアイデンティティスイートプロジェクトの詳細な説明。プロセスは、会社のコアバリューの分析、ロゴコンセプトのスケッチ、包括的なブランドガイドの完成から始まりました。" 
        },
        proj3: { 
            title: "タスク管理アプリ", 
            cardDesc: "個人タスクを効率的に管理するPWAを開発。", 
        detailDesc: "タスク管理アプリプロジェクトの詳細な説明。アプリケーションはVue.jsとFirebaseで構築され、ユーザーが任意のデバイスでタスクの作成、追跡、完了を可能にします。" 
        },
        proj4: { 
            title: "ソーシャルメディア広告キャンペーン", 
            cardDesc: "マーケティングキャンペーン用のビジュアルアセットとショート動画をデザイン。", 
            detailDesc: "ソーシャルメディア広告キャンペーンプロジェクトの詳細な説明。FacebookとInstagram用のビジュアル製品の概念化と実行を担当し、After EffectsとPhotoshopを使用しました。" 
        },
        proj5: { 
            title: "モバイルアプリリデザイン", 
            cardDesc: "フードデリバリーアプリのUIをリサーチ・リデザイン。", 
            detailDesc: "モバイルアプリリデザインプロジェクトの詳細な説明。古いバージョンの弱点を分析し、ユーザーインタビューを実施し、FigmaでUI/UX全体をリデザインして体験を改善しました。" 
        },
        proj6: { 
            title: "イベントランディングページ", 
            cardDesc: "テックイベント用のランディングページをデザイン・コーディング。", 
            detailDesc: "イベントランディングページプロジェクトの詳細な説明。Illustratorを使用したグラフィックデザインスキルとNext.jsを使用したフロントエンドプログラミングを組み合わせて、印象的で効果的なランディングページを作成しました。" 
        },

        //tabbar mobile
         navHomeMobile: "ホーム",
    navProjectsMobile: "プロジェクト",
    navAboutMobile: "紹介",
    navContactMobile: "連絡先",
    navThemeMobile: "テーマ"
    }
};

// === GLOBAL STATE ===
let currentLanguage = CONFIG.defaultLang;
let currentOpenProjectId = null;
let typewriterTimeout;
let isMobile = window.innerWidth < CONFIG.mobileBreakpoint;

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

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// === CORE FUNCTIONS ===
function getText(key, lang = currentLanguage) {
    const value = key.split('.').reduce((obj, k) => (obj || {})[k], translations[lang]);
    return typeof value === 'string' ? value.replace(/\[YOUR_NAME\]/g, CONFIG.name) : (value || '');
}

function updateDOMText() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (key) {
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
    
    // Update meta tags
    document.title = getText('pageTitle');
    const metaDesc = document.getElementById('meta-description');
    const metaKeywords = document.getElementById('meta-keywords');
    if (metaDesc) metaDesc.setAttribute('content', getText('metaDescription'));
    if (metaKeywords) metaKeywords.setAttribute('content', getText('metaKeywords'));
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    updateDOMText();
    renderProjectCards();
    startTypewriter();
    
    // Update language switcher UI
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
    // Close dropdown
    const dropdown = document.getElementById('lang-switcher-dropdown');
    if (dropdown) dropdown.classList.add('hidden');

    // Update modal if open
    if (currentOpenProjectId) {
        openModal(currentOpenProjectId);
    }
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

function toggleSidebarCollapse() {
    const isCollapsed = document.body.classList.toggle('sidebar-collapsed');
    localStorage.setItem('sidebarCollapsed', isCollapsed);
}

// === ANIMATIONS ===
function startTypewriter() {
    const el = document.querySelector('[data-key="heroSubtitle"]');
    if (!el) return;
    
    clearTimeout(typewriterTimeout);
    
    const roles = getText('heroRoles', currentLanguage);
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

    // Update modal content
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
    
    // Show modal with animation
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

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
    // Check for essential elements
    if (!document.getElementById('main-content')) {
        console.error("Core component missing. Halting script.");
        return;
    }

    // Performance optimization
    const scheduleIdleTask = (callback) => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(callback, { timeout: 1000 });
        } else {
            setTimeout(callback, 1);
        }
    };

    // Setup Theme
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    updateThemeUI(savedTheme);
    
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }

    // Setup Language
    const savedLang = localStorage.getItem('language') || CONFIG.defaultLang;
    setLanguage(savedLang);
    
    // Language switcher events
    // === LANGUAGE SWITCHER EVENTS (cho cả Desktop và Mobile) ===

    // Hàm helper để khởi tạo một bộ chuyển ngôn ngữ
    const initializeLanguageSwitcher = (buttonId, dropdownId) => {
        const button = document.getElementById(buttonId);
        const dropdown = document.getElementById(dropdownId);

        if (!button || !dropdown) return;

        // Toggle dropdown when button is clicked
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdown.classList.toggle('hidden');
        });

        // Add click events to language options
        dropdown.querySelectorAll('[data-lang]').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.currentTarget.getAttribute('data-lang');
                if (lang) {
                    setLanguage(lang);
                    dropdown.classList.add('hidden');
                }
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!button.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });
    };

    
    initializeLanguageSwitcher('lang-switcher-button', 'lang-switcher-dropdown'); // Desktop
    initializeLanguageSwitcher('mobile-lang-switcher-button', 'mobile-lang-switcher-dropdown'); // Mobile

    // Sự kiện click để chọn ngôn ngữ (áp dụng cho tất cả các link ngôn ngữ)
    document.querySelectorAll('[data-lang]').forEach(link => {
        link.addEventListener('click', (e) => { 
            e.preventDefault(); 
            const lang = e.currentTarget.getAttribute('data-lang');
            if (lang) {
                setLanguage(lang);
            }
        });
    });

    // Sự kiện click ra ngoài để đóng tất cả dropdown
    document.addEventListener('click', () => {
        document.getElementById('lang-switcher-dropdown')?.classList.add('hidden');
        document.getElementById('mobile-lang-switcher-dropdown')?.classList.add('hidden');
    });

    // Setup Mobile Navigation
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavClose = document.getElementById('mobile-nav-close');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileNavMenu) {
        mobileNavMenu.addEventListener('click', (e) => {
            if (e.target === mobileNavMenu) {
                closeMobileMenu();
            }
        });
    }
    
    // Close mobile menu when clicking on navigation links
    document.querySelectorAll('#mobile-nav-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Setup Sidebar
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebarCollapse);
    
    if (localStorage.getItem('sidebarCollapsed') === 'true' && window.innerWidth >= 1024) {
        document.body.classList.add('sidebar-collapsed');
    }
    
   
    // Setup Project Filtering & Modals
    const projectFilters = document.getElementById('project-filters');
    if (projectFilters) {
        projectFilters.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
                projectFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
                
            const filter = e.target.dataset.filter;
            document.querySelectorAll('.project-item').forEach(item => {
                const shouldShow = filter === 'all' || item.dataset.category.includes(filter);
                if (shouldShow) {
                    item.style.display = 'block';
                    item.classList.remove('hidden');
                } else {
                    item.style.display = 'none';
                    item.classList.add('hidden');
                }
            });
        }
    });
    }
    
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid) {
        projectGrid.addEventListener('click', e => {
            const btn = e.target.closest('.btn');
            if (btn && btn.dataset.projectId) openModal(btn.dataset.projectId);
        });
    }
    
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const projectModal = document.getElementById('project-detail-modal');
    
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (projectModal) {
        projectModal.addEventListener('click', e => { 
            if (e.target === e.currentTarget) closeModal(); 
        });
    }
    
    document.addEventListener('keydown', e => { 
        if (e.key === "Escape") closeModal(); 
    });

    // Setup Animations with performance optimization
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(section);
    });

    // Setup Spotlight effect
    const spotlight = document.getElementById('spotlight');
    if (spotlight) {
        const handleMouseMove = debounce((e) => {
            spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }, 16);
        
        document.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', () => spotlight.style.opacity = 1);
        document.body.addEventListener('mouseleave', () => spotlight.style.opacity = 0);
    }

    // Initialize hero animation
    initHeroAnimation();

    // Mobile Tabbar active state
        const tabbar = document.getElementById('mobile-tabbar');
    if (tabbar) {
        const items = [...tabbar.querySelectorAll('.tab-item')];
        const targets = items.map(i => document.getElementById(i.dataset.tab)).filter(Boolean);
        
        const tabObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    items.forEach(i => i.classList.toggle('active', i.dataset.tab === id));
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
        
        targets.forEach(t => tabObserver.observe(t));
    }

    // Handle window resize
    const handleResize = debounce(() => {
        isMobile = window.innerWidth < CONFIG.mobileBreakpoint;
    }, 250);
    
    window.addEventListener('resize', handleResize);
    
    // Start typewriter effect
    startTypewriter();
    
    // Render initial project cards
    renderProjectCards();
    
    console.log('Portfolio website initialized successfully! 🚀');
});

// === EXPORT FOR GLOBAL ACCESS ===
window.PortfolioApp = {
    setLanguage,
    toggleTheme,
    openModal,
    closeModal
};