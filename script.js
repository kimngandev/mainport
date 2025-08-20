// Tailwind config đã được định nghĩa trong HTML

// === DATA & DICTIONARY ===
const YOUR_NAME = "kimdevhere";

const projectData = [
    { id: 'proj1', category: 'dev uiux', cardImg: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+1', detailImg: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Project+1+Detail', tags: ['React', 'Figma'], liveLink: '#', repoLink: '#' },
    { id: 'proj2', category: 'uiux graphic', cardImg: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+2', detailImg: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Project+2+Detail', tags: ['Illustrator', 'Photoshop'], liveLink: '#', repoLink: '#' },
    { id: 'proj3', category: 'dev', cardImg: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+3', detailImg: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Project+3+Detail', tags: ['Vue.js', 'Firebase'], liveLink: '#', repoLink: '#' },
    { id: 'proj4', category: 'graphic', cardImg: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+4', detailImg: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Project+4+Detail', tags: ['After Effects', 'Photoshop'], liveLink: '#', repoLink: '#' },
    { id: 'proj5', category: 'uiux', cardImg: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+5', detailImg: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Project+5+Detail', tags: ['Figma', 'UX Research'], liveLink: '#', repoLink: '#' },
    { id: 'proj6', category: 'dev graphic', cardImg: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+6', detailImg: 'https://placehold.co/800x600/e2e8f0/1e293b?text=Project+6+Detail', tags: ['Next.js', 'Illustrator'], liveLink: '#', repoLink: '#' }
];

const translations = {
    vi: {
        pageTitle: "Portfolio | [YOUR_NAME] - Web Developer & Designer",
        logo: "<svg class=\"w-8 h-8 text-violet-500 flex-shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"></path></svg><span id=\"logo-text\" class=\"nav-text\">kimdev<span class=\"text-violet-500 dark:text-violet-400\">here</span></span>",
        metaDescription: "Portfolio của [YOUR_NAME] - Lập trình viên phát triển web, UI/UX & Graphic Designer. Khám phá các dự án về React, Vue, Figma và hơn thế nữa.",
        metaKeywords: "lập trình viên web, thiết kế ui/ux, portfolio, kimdevhere, react developer, front-end developer việt nam",
        heroRoles: ["Lập trình viên Web", "UI/UX Designer", "Graphic Designer"],
        navHome: "Trang chủ", navSkills: "Kỹ năng", navProjects: "Dự án", navServices: "Dịch vụ", navStore: "Cửa hàng", navAbout: "Giới thiệu", navContact: "Liên hệ",
        navHomeMobile: "Trang chủ", navSkillsMobile: "Kỹ năng", navProjectsMobile: "Dự án", navServicesMobile: "Dịch vụ", navStoreMobile: "Cửa hàng", navAboutMobile: "Giới thiệu", navContactMobile: "Liên hệ",
        heroTitle: "Biến ý tưởng thành giải pháp số.",
        heroDescription: "Chuyên gia phát triển web và thiết kế UI/UX, tập trung vào việc tạo ra các sản phẩm trực quan, hiệu quả và có tính thẩm mỹ cao.",
        heroBtnProjects: "Xem dự án", heroBtnContact: "Liên hệ",
        skillsTitle: "Bộ công cụ của tôi",
        skillsSubtitle: "Các công nghệ và công cụ tôi sử dụng để biến ý tưởng thành hiện thực.",
        projectsTitle: "Dự án nổi bật", projectsSubtitle: "Một vài sản phẩm mà tôi tâm đắc.",
        filterAll: "Tất cả", filterDev: "Lập trình", filterUIUX: "UI/UX Design", filterGraphic: "Thiết kế đồ họa",
        projectBtnDetails: "Xem chi tiết &rarr;",
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
        serviceUiuxFeat1: "Nghiên cứu người dùng & Wireframing",
        serviceUiuxFeat2: "Thiết kế giao diện (UI) cho Web & App",
        serviceUiuxFeat3: "Xây dựng hệ thống thiết kế",
        serviceUiuxFeat4: "Tạo mẫu tương tác (Prototyping)",
        serviceGraphicTitle: "Thiết kế Đồ họa",
        serviceGraphicDesc: "Cung cấp các giải pháp sáng tạo về hình ảnh để xây dựng và nâng tầm thương hiệu của bạn.",
        serviceGraphicFeat1: "Thiết kế Logo & Bộ nhận diện",
        serviceGraphicFeat2: "Ấn phẩm Marketing (Banner, Poster)",
        serviceGraphicFeat3: "Đồ họa cho Social Media",
        serviceGraphicFeat4: "Chỉnh sửa ảnh & video ngắn",
        serviceBtnQuote: "Yêu cầu báo giá",
        storeTitle: "Cửa hàng sản phẩm số",
        storeSubtitle: "Các tài nguyên, mẫu và bộ công cụ được tạo sẵn để đẩy nhanh tiến độ công việc của bạn.",
        product1Title: "Bộ UI Kit cho Figma",
        product1Desc: "Một bộ giao diện người dùng toàn diện giúp bạn thiết kế ứng dụng di động nhanh hơn.",
        product1Price: "$49",
        product2Title: "Mẫu Web Portfolio",
        product2Desc: "Mẫu website portfolio cá nhân được xây dựng bằng Next.js và Tailwind CSS, dễ dàng tùy chỉnh.",
        product2Price: "$29",
        product3Title: "Bộ Icon Đồ họa",
        product3Desc: "Hơn 100 icon vector được thiết kế thủ công cho các dự án thiết kế và phát triển web.",
        product3Price: "$19",
        productBtnBuy: "Mua ngay",
        aboutTitle: "Về tôi",
        aboutPara1: "Xin chào! Tôi là [YOUR_NAME], một người đam mê xây dựng những thứ hữu ích cho internet. Hành trình của tôi bắt đầu từ thiết kế đồ họa, nơi tôi học được về bố cục, màu sắc và câu chuyện hình ảnh.",
        aboutPara2: "Sự tò mò đã dẫn tôi đến với UI/UX, nơi tôi có thể áp dụng tư duy thiết kế để giải quyết các vấn đề thực tế của người dùng. Không dừng lại ở đó, tôi muốn tự tay biến những thiết kế đó thành sản phẩm sống, và đó là lúc tôi dấn thân vào thế giới lập trình web.",
        aboutPhilosophyTitle: "Triết lý làm việc",
        aboutPhilosophyText: "Tôi tin rằng sản phẩm tốt nhất được tạo ra từ sự giao thoa giữa thiết kế lấy người dùng làm trung tâm và công nghệ vững chắc. Mọi pixel, mọi dòng code đều phải có mục đích.",
        aboutBtnCV: "Tải CV của tôi",
        contactTitle: "Cùng xây dựng điều gì đó tuyệt vời?",
        contactSubtitle: "Tôi luôn sẵn sàng lắng nghe về các dự án mới, các cơ hội hợp tác hoặc đơn giản là để trò chuyện. Hãy liên hệ với tôi!",
        contactEmailLabel: "Gửi email cho tôi",
        contactSocialLabel: "Theo dõi tôi",
        formName: "Họ tên", formNamePlaceholder: "Nhập họ tên của bạn",
        formEmail: "Email", formEmailPlaceholder: "Nhập email của bạn",
        formMessage: "Lời nhắn", formMessagePlaceholder: "Nội dung lời nhắn...",
        formSubmitBtn: "Gửi Lời Nhắn",
        footerText: "&copy; 2025 [YOUR_NAME]. Mọi quyền được bảo lưu.",
        modalBtnLive: "Xem Live", modalBtnRepo: "Mã nguồn",
        proj1: { title: "Website Thương mại điện tử", cardDesc: "Xây dựng và thiết kế giao diện cho một trang web E-commerce hiện đại.", detailDesc: "Đây là mô tả chi tiết cho dự án Website Thương mại điện tử. Dự án bao gồm việc nghiên cứu hành vi người dùng, xây dựng wireframe, thiết kế UI trên Figma và phát triển front-end bằng React. Mục tiêu là tạo ra một luồng mua sắm mượt mà và trực quan." },
        proj2: { title: "Bộ nhận diện thương hiệu", cardDesc: "Thiết kế logo, palette màu và các ấn phẩm đồ họa cho một startup.", detailDesc: "Mô tả chi tiết cho dự án Bộ nhận diện thương hiệu. Quá trình bắt đầu từ việc phân tích giá trị cốt lõi của công ty, phác thảo ý tưởng logo, và hoàn thiện bộ hướng dẫn thương hiệu toàn diện." },
        proj3: { title: "Ứng dụng quản lý công việc", cardDesc: "Phát triển một ứng dụng PWA giúp quản lý công việc cá nhân.", detailDesc: "Mô tả chi tiết cho dự án Ứng dụng quản lý công việc. Ứng dụng được xây dựng bằng Vue.js và Firebase, cho phép người dùng tạo, theo dõi và hoàn thành công việc trên mọi thiết bị." },
        proj4: { title: "Chiến dịch quảng cáo social", cardDesc: "Thiết kế bộ ấn phẩm hình ảnh và video ngắn cho chiến dịch marketing.", detailDesc: "Mô tả chi tiết cho dự án Chiến dịch quảng cáo social. Chịu trách nhiệm lên ý tưởng và thực hiện các sản phẩm visual cho Facebook và Instagram, sử dụng After Effects và Photoshop." },
        proj5: { title: "Thiết kế lại ứng dụng di động", cardDesc: "Nghiên cứu và thiết kế lại giao diện cho một ứng dụng đặt đồ ăn.", detailDesc: "Mô tả chi tiết cho dự án Thiết kế lại ứng dụng di động. Phân tích các điểm yếu của phiên bản cũ, thực hiện phỏng vấn người dùng và thiết kế lại toàn bộ UI/UX trên Figma để cải thiện trải nghiệm." },
        proj6: { title: "Landing Page sự kiện", cardDesc: "Thiết kế và lập trình landing page cho một sự kiện công nghệ.", detailDesc: "Mô tả chi tiết cho dự án Landing Page sự kiện. Kết hợp giữa kỹ năng thiết kế đồ họa bằng Illustrator và lập trình front-end với Next.js để tạo ra một trang landing page ấn tượng và hiệu quả." },
    },
    en: {
        pageTitle: "Portfolio | [YOUR_NAME] - Web Developer & Designer",
        logo: "<svg class=\"w-8 h-8 text-violet-500 flex-shrink-0\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"></path></svg><span id=\"logo-text\" class=\"nav-text\">kimdev<span class=\"text-violet-500 dark:text-violet-400\">here</span></span>",
        metaDescription: "[YOUR_NAME]'s Portfolio - Web Developer, UI/UX & Graphic Designer. Explore projects in React, Vue, Figma, and more.",
        metaKeywords: "web developer, ui/ux designer, portfolio, kimdevhere, react developer, front-end developer",
        heroRoles: ["Web Developer", "UI/UX Designer", "Graphic Designer"],
        navHome: "Home", navSkills: "Skills", navProjects: "Projects", navServices: "Services", navStore: "Store", navAbout: "About", navContact: "Contact",
        navHomeMobile: "Home", navSkillsMobile: "Skills", navProjectsMobile: "Projects", navServicesMobile: "Services", navStoreMobile: "Store", navAboutMobile: "About", navContactMobile: "Contact",
        heroTitle: "Turning ideas into digital solutions.",
        heroDescription: "Web development and UI/UX design specialist, focused on creating intuitive, effective, and highly aesthetic products.",
        heroBtnProjects: "View Projects", heroBtnContact: "Contact Me",
        skillsTitle: "My Toolkit",
        skillsSubtitle: "The technologies and tools I use to bring ideas to life.",
        projectsTitle: "Featured Projects", projectsSubtitle: "A few products I'm proud of.",
        filterAll: "All", filterDev: "Development", filterUIUX: "UI/UX Design", filterGraphic: "Graphic Design",
        projectBtnDetails: "View Details &rarr;",
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
        serviceGraphicFeat2: "Marketing Materials (Banners, Posters)",
        serviceGraphicFeat3: "Social Media Graphics",
        serviceGraphicFeat4: "Photo & Short Video Editing",
        serviceBtnQuote: "Get a Quote",
        storeTitle: "Digital Product Store",
        storeSubtitle: "Ready-made resources, templates, and toolkits to accelerate your workflow.",
        product1Title: "UI Kit for Figma",
        product1Desc: "A comprehensive user interface kit to help you design mobile apps faster.",
        product1Price: "$49",
        product2Title: "Web Portfolio Template",
        product2Desc: "A personal portfolio website template built with Next.js and Tailwind CSS, easy to customize.",
        product2Price: "$29",
        product3Title: "Graphic Icon Set",
        product3Desc: "Over 100 handcrafted vector icons for your design and web development projects.",
        product3Price: "$19",
        productBtnBuy: "Buy Now",
        aboutTitle: "About Me",
        aboutPara1: "Hello! I'm [YOUR_NAME], passionate about building useful things for the internet. My journey began with graphic design, where I learned about layout, color, and visual storytelling.",
        aboutPara2: "Curiosity led me to UI/UX, where I could apply design thinking to solve real user problems. Not stopping there, I wanted to bring those designs to life myself, which led me into the world of web development.",
        aboutPhilosophyTitle: "Working Philosophy",
        aboutPhilosophyText: "I believe the best products are born from the intersection of user-centric design and robust technology. Every pixel, every line of code must have a purpose.",
        aboutBtnCV: "Download My CV",
        contactTitle: "Let's build something amazing?",
        contactSubtitle: "I'm always open to discussing new projects, collaboration opportunities, or just to have a chat. Feel free to reach out!",
        contactEmailLabel: "Email me at",
        contactSocialLabel: "Follow me",
        formName: "Full Name", formNamePlaceholder: "Enter your full name",
        formEmail: "Email", formEmailPlaceholder: "Enter your email address",
        formMessage: "Message", formMessagePlaceholder: "Your message content...",
        formSubmitBtn: "Send Message",
        footerText: "&copy; 2025 [YOUR_NAME]. All Rights Reserved.",
        modalBtnLive: "Live Site", modalBtnRepo: "Source Code",
        proj1: { title: "E-commerce Website", cardDesc: "Built and designed the UI for a modern E-commerce site.", detailDesc: "This is the detailed description for the E-commerce Website project. The project involved user behavior research, wireframing, UI design in Figma, and front-end development using React. The goal was to create a smooth and intuitive shopping flow." },
        proj2: { title: "Brand Identity Suite", cardDesc: "Designed the logo, color palette, and graphic assets for a startup.", detailDesc: "Detailed description for the Brand Identity Suite project. The process started with analyzing the company's core values, sketching logo concepts, and finalizing a comprehensive brand guide." },
        proj3: { title: "Task Management App", cardDesc: "Developed a PWA to help manage personal tasks efficiently.", detailDesc: "Detailed description for the Task Management App project. The application was built with Vue.js and Firebase, allowing users to create, track, and complete tasks on any device." },
        proj4: { title: "Social Media Ad Campaign", cardDesc: "Designed visual assets and short videos for a marketing campaign.", detailDesc: "Detailed description for the Social Media Ad Campaign project. Responsible for conceptualizing and executing visual products for Facebook and Instagram using After Effects and Photoshop." },
        proj5: { title: "Mobile App Redesign", cardDesc: "Researched and redesigned the UI for a food delivery app.", detailDesc: "Detailed description for the Mobile App Redesign project. Analyzed the weaknesses of the old version, conducted user interviews, and redesigned the entire UI/UX in Figma to improve the experience." },
        proj6: { title: "Event Landing Page", cardDesc: "Designed and coded a landing page for a tech event.", detailDesc: "Detailed description for the Event Landing Page project. Combined graphic design skills using Illustrator and front-end programming with Next.js to create an impressive and effective landing page." },
    },
    ja: {
        pageTitle: "ポートフォリオ | [YOUR_NAME] - ウェブ開発者＆デザイナー",
        logo: "<svg class=\"w-8 h-8 text-violet-500\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"></path></svg><span id=\"logo-text\" class=\"nav-text\">kimdev<span class=\"text-violet-500 dark:text-violet-400\">here</span></span>",
        metaDescription: "[YOUR_NAME]のポートフォリオ - ウェブ開発者、UI/UX＆グラフィックデザイナー。React、Vue、Figmaなどのプロジェクトをご覧ください。",
        metaKeywords: "ウェブ開発者, ui/uxデザイナー, ポートフォリオ, kimdevhere, react開発者, フロントエンドエンジニア",
        heroRoles: ["ウェブ開発者", "UI/UXデザイナー", "グラフィックデザイナー"],
        navHome: "ホーム", navSkills: "スキル", navProjects: "プロジェクト", navServices: "サービス", navStore: "ストア", navAbout: "私について", navContact: "連絡先",
        navHomeMobile: "ホーム", navSkillsMobile: "スキル", navProjectsMobile: "プロジェクト", navServicesMobile: "サービス", navStoreMobile: "ストア", navAboutMobile: "私について", navContactMobile: "連絡先",
        heroTitle: "アイデアをデジタルソリューションに。",
        heroDescription: "ウェブ開発とUI/UXデザインの専門家として、直感的で効果的、そして美的価値の高い製品の創造に注力しています。",
        heroBtnProjects: "プロジェクトを見る", heroBtnContact: "お問い合わせ",
        skillsTitle: "私のツールキット",
        skillsSubtitle: "アイデアを形にするために使用する技術とツール。",
        projectsTitle: "注目のプロジェクト", projectsSubtitle: "私が誇りに思ういくつかの製品。",
        filterAll: "すべて", filterDev: "開発", filterUIUX: "UI/UXデザイン", filterGraphic: "グラフィックデザイン",
        projectBtnDetails: "詳細を見る &rarr;",
        servicesTitle: "私のサービス",
        servicesSubtitle: "あなたのアイデアを実現するための専門的なソリューションを提供します。",
        serviceWebTitle: "ウェブ開発",
        serviceWebDesc: "モダンで高速、そして使いやすいウェブサイトとウェブアプリケーションを構築します。",
        serviceWebFeat1: "静的サイトとランディングページ",
        serviceWebFeat2: "企業サイトとブログ",
        serviceWebFeat3: "複雑なウェブアプリ（SPA）",
        serviceWebFeat4: "APIとバックエンドの統合",
        serviceUiuxTitle: "UI/UXデザイン",
        serviceUiuxDesc: "美しいインターフェースとスムーズで直感的なユーザーエクスペリエンスを作成します。",
        serviceUiuxFeat1: "ユーザーリサーチとワイヤーフレーム",
        serviceUiuxFeat2: "ウェブとアプリのUIデザイン",
        serviceUiuxFeat3: "デザインシステムの構築",
        serviceUiuxFeat4: "インタラクティブなプロトタイピング",
        serviceGraphicTitle: "グラフィックデザイン",
        serviceGraphicDesc: "あなたのブランドを構築し、向上させるための創造的なビジュアルソリューションを提供します。",
        serviceGraphicFeat1: "ロゴデザインとブランドアイデンティティ",
        serviceGraphicFeat2: "マーケティング資料（バナー、ポスター）",
        serviceGraphicFeat3: "ソーシャルメディア用グラフィック",
        serviceGraphicFeat4: "写真と短い動画の編集",
        serviceBtnQuote: "見積もりを依頼",
        storeTitle: "デジタル製品ストア",
        storeSubtitle: "ワークフローを加速させるための既製のリソース、テンプレート、ツールキット。",
        product1Title: "Figma用UIキット",
        product1Desc: "モバイルアプリの設計を高速化するための包括的なユーザーインターフェースキット。",
        product1Price: "¥4900",
        product2Title: "ウェブポートフォリオテンプレート",
        product2Desc: "Next.jsとTailwind CSSで構築された、カスタマイズが簡単な個人ポートフォリオウェブサイトテンプレート。",
        product2Price: "¥2900",
        product3Title: "グラフィックアイコンセット",
        product3Desc: "デザインおよびウェブ開発プロジェクト用の100以上の手作りベクターアイコン。",
        product3Price: "¥1900",
        productBtnBuy: "今すぐ購入",
        aboutTitle: "私について",
        aboutPara1: "こんにちは！[YOUR_NAME]です。インターネットのために役立つものを作ることに情熱を注いでいます。私の旅はグラフィックデザインから始まり、レイアウト、色彩、視覚的な物語について学びました。",
        aboutPara2: "好奇心からUI/UXに導かれ、デザイン思考を応用して実際のユーザー問題を解決できるようになりました。それだけにとどまらず、そのデザインを自分の手で実現したいと思い、ウェブ開発の世界に足を踏み入れました。",
        aboutPhilosophyTitle: "仕事の哲学",
        aboutPhilosophyText: "最高の製品は、ユーザー中心のデザインと堅牢なテクノロジーの交差点から生まれると信じています。すべてのピクセル、すべてのコード行には目的があるべきです。",
        aboutBtnCV: "履歴書をダウンロード",
        contactTitle: "何か素晴らしいものを一緒に作りませんか？",
        contactSubtitle: "新しいプロジェクト、協力の機会、または単におしゃべりするためでも、いつでも歓迎します。お気軽にご連絡ください！",
        contactEmailLabel: "メールはこちら",
        contactSocialLabel: "フォローミー",
        formName: "氏名", formNamePlaceholder: "氏名を入力してください",
        formEmail: "メールアドレス", formEmailPlaceholder: "メールアドレスを入力してください",
        formMessage: "メッセージ", formMessagePlaceholder: "メッセージ内容...",
        formSubmitBtn: "メッセージを送信",
        footerText: "&copy; 2025 [YOUR_NAME]. 全著作権所有.",
        modalBtnLive: "ライブサイト", modalBtnRepo: "ソースコード",
        proj1: { title: "Eコマースウェブサイト", cardDesc: "モダンなEコマースサイトのUIを構築・設計しました。", detailDesc: "Eコマースウェブサイトプロジェクトの詳細説明です。このプロジェクトには、ユーザー行動調査、ワイヤーフレーム作成、FigmaでのUIデザイン、Reactを使用したフロントエンド開発が含まれていました。目標は、スムーズで直感的なショッピングフローを作成することでした。" },
        proj2: { title: "ブランドアイデンティティ", cardDesc: "スタートアップのロゴ、カラーパレット、グラフィックアセットをデザインしました。", detailDesc: "ブランドアイデンティティプロジェクトの詳細説明です。プロセスは、会社のコアバリューの分析、ロゴコンセプトのスケッチ、そして包括的なブランドガイドの完成から始まりました。" },
        proj3: { title: "タスク管理アプリ", cardDesc: "個人のタスクを効率的に管理するためのPWAを開発しました。", detailDesc: "タスク管理アプリプロジェクトの詳細説明です。このアプリケーションはVue.jsとFirebaseで構築され、ユーザーはどのデバイスでもタスクを作成、追跡、完了することができます。" },
        proj4: { title: "SNS広告キャンペーン", cardDesc: "マーケティングキャンペーン用のビジュアルアセットと短い動画をデザインしました。", detailDesc: "SNS広告キャンペーンプロジェクトの詳細説明です。After EffectsとPhotoshopを使用して、FacebookとInstagram向けのビジュアル製品の構想と実行を担当しました。" },
        proj5: { title: "モバイルアプリの再設計", cardDesc: "フードデリバリーアプリのUIを調査し、再設計しました。", detailDesc: "モバイルアプリの再設計プロジェクトの詳細説明です。旧バージョンの弱点を分析し、ユーザーインタビューを実施し、エクスペリエンスを向上させるためにFigmaでUI/UX全体を再設計しました。" },
        proj6: { title: "イベントランディングページ", cardDesc: "技術イベントのランディングページをデザイン・コーディングしました。", detailDesc: "イベントランディングページプロジェクトの詳細説明です。Illustratorを使用したグラフィックデザインスキルとNext.jsを使用したフロントエンドプログラミングを組み合わせて、印象的で効果的なランディングページを作成しました。" },
    }
};

// === GLOBAL VARIABLES ===
let currentLanguage = 'vi';
let currentOpenProjectId = null;
let typewriterTimeout;

// === DOM ELEMENTS ===
const projectGrid = document.getElementById('project-grid');
const modal = document.getElementById('project-detail-modal');
const modalContent = document.getElementById('modal-content');
const modalCloseBtn = document.getElementById('modal-close-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarNav = document.getElementById('sidebar-nav');
const sidebarToggle = document.getElementById('sidebar-toggle');


// === FUNCTIONS ===
function getText(key, lang = currentLanguage) {
    const keys = key.split('.');
    let text = translations[lang];
    for (const k of keys) {
        if (text && typeof text === 'object' && k in text) { text = text[k]; } 
        else { return ''; }
    }
    return typeof text === 'string' ? text.replace(/\[YOUR_NAME\]/g, YOUR_NAME) : text;
}

function startTypewriter(lang) {
    const subtitleElement = document.querySelector('[data-key="heroSubtitle"]');
    if (!subtitleElement) return;
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    let roles = getText('heroRoles', lang);
    if (!roles || roles.length === 0) return;
    let roleIndex = 0, charIndex = 0, isDeleting = false;
    function type() {
        const currentRole = roles[roleIndex];
        let displayText = isDeleting ? currentRole.substring(0, charIndex - 1) : currentRole.substring(0, charIndex + 1);
        subtitleElement.textContent = displayText;
        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
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

function renderProjectCards() {
    projectGrid.innerHTML = '';
    projectData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-item bg-white dark:bg-slate-900/50 rounded-lg overflow-hidden group border border-slate-200 dark:border-slate-800 hover:border-violet-500 dark:hover:border-violet-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-500/10';
        card.setAttribute('data-category', p.category);
        card.setAttribute('data-id', p.id);

        card.innerHTML = `
            <div class="overflow-hidden"><img src="${p.cardImg}" alt="${getText(p.id + '.title')}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null;this.src='https://placehold.co/600x400/e2e8f0/1e293b?text=Image+Error';"></div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${getText(p.id + '.title')}</h3>
                <p class="text-slate-600 dark:text-slate-400 mb-4 h-10">${getText(p.id + '.cardDesc')}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${p.tags.map(tag => `<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">${tag}</span>`).join('')}
                </div>
                <button class="view-detail-btn text-violet-500 dark:text-violet-400 hover:text-violet-600 dark:hover:text-violet-300 font-semibold" data-project-id="${p.id}">${getText('projectBtnDetails')}</button>
            </div>
        `;
        projectGrid.appendChild(card);
    });
}

function openModal(projectId) {
    currentOpenProjectId = projectId;
    const project = projectData.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-img').src = project.detailImg;
    document.getElementById('modal-img').alt = getText(projectId + '.title');
    document.getElementById('modal-img').onerror = function () { this.onerror = null; this.src = 'https://placehold.co/800x600/e2e8f0/1e293b?text=Image+Error'; };
    document.getElementById('modal-title').innerText = getText(projectId + '.title');
    document.getElementById('modal-desc').innerText = getText(projectId + '.detailDesc');

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = project.tags.map(tag => `<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">${tag}</span>`).join('');

    document.getElementById('modal-live-link').href = project.liveLink;
    document.getElementById('modal-repo-link').href = project.repoLink;

    document.querySelector('[data-key="modalBtnLive"] span').innerText = getText('modalBtnLive');
    document.querySelector('[data-key="modalBtnRepo"] span').innerText = getText('modalBtnRepo');

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
        modal.classList.add('opacity-100');
        modalContent.classList.add('scale-100');
    }, 10);
}

function closeModal() {
    modal.classList.remove('opacity-100');
    modalContent.classList.remove('scale-100');
    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95');
    document.body.style.overflow = ''; // Restore scrolling
    setTimeout(() => {
        modal.classList.add('hidden');
        currentOpenProjectId = null;
    }, 300);
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (key === 'heroSubtitle') return;
        el.innerHTML = getText(key);
    });

    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-key-placeholder');
        el.placeholder = getText(key);
    });

    document.documentElement.lang = lang;
    document.title = getText('pageTitle');
    localStorage.setItem('language', lang);

    // Update Meta Tags for SEO
    document.getElementById('meta-description').setAttribute('content', getText('metaDescription'));
    document.getElementById('meta-keywords').setAttribute('content', getText('metaKeywords'));
    document.getElementById('og-title').setAttribute('content', getText('pageTitle'));
    document.getElementById('og-description').setAttribute('content', getText('metaDescription'));
    document.getElementById('twitter-title').setAttribute('content', getText('pageTitle'));
    document.getElementById('twitter-description').setAttribute('content', getText('metaDescription'));

    const langSwitcherFlag = document.getElementById('lang-switcher-flag');
    const langSwitcherText = document.getElementById('lang-switcher-text');
    const flagMap = { vi: 'VI', en: 'EN', ja: 'JA' };
    const textMap = { vi: 'Vietnamese', en: 'English', ja: '日本語' };

    langSwitcherFlag.innerText = flagMap[lang];
    langSwitcherText.innerText = textMap[lang];

    document.getElementById('lang-switcher-dropdown').classList.add('hidden');

    renderProjectCards();
    startTypewriter(lang);

    if (currentOpenProjectId) {
        openModal(currentOpenProjectId);
    }
}



projectGrid.addEventListener('click', (e) => {
    const detailButton = e.target.closest('.view-detail-btn');
    if (detailButton) {
        const projectId = detailButton.dataset.projectId;
        openModal(projectId);
    }
});
modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const filterContainer = document.getElementById('project-filters');
filterContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        const filterValue = e.target.getAttribute('data-filter');

        document.querySelectorAll('.project-item').forEach(item => {
            const categories = item.getAttribute('data-category');
            if (filterValue === 'all' || categories.includes(filterValue)) {
                item.classList.remove('hidden-by-filter');
            } else {
                item.classList.add('hidden-by-filter');
            }
        });
    }
});

const langSwitcherButton = document.getElementById('lang-switcher-button');
const langSwitcherDropdown = document.getElementById('lang-switcher-dropdown');
langSwitcherButton.addEventListener('click', (e) => { e.stopPropagation(); langSwitcherDropdown.classList.toggle('hidden'); });
document.addEventListener('click', () => { langSwitcherDropdown.classList.add('hidden'); });
document.querySelectorAll('#lang-switcher-dropdown a').forEach(link => {
    link.addEventListener('click', (e) => { e.preventDefault(); setLanguage(e.currentTarget.getAttribute('data-lang')); });
});

const themeToggleButton = document.getElementById('theme-toggle');
function updateThemeUI() {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleDarkIcon.classList.remove('hidden');
        themeToggleLightIcon.classList.add('hidden');
    }
}
themeToggleButton.addEventListener('click', function () {
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    updateThemeUI();
});

// Mobile sidebar toggle
function toggleSidebar() {
    const isOpen = sidebar.classList.contains('mobile-open');
    
    if (isOpen) {
        // Đóng sidebar
        sidebar.classList.remove('mobile-open');
        sidebarOverlay.classList.add('hidden');
    } else {
        // Mở sidebar
        sidebar.classList.add('mobile-open');
        sidebarOverlay.classList.remove('hidden');
    }
    
    // Thêm animation cho mobile menu button
    const menuButton = document.getElementById('mobile-menu-button');
    if (menuButton) {
        menuButton.classList.toggle('active', !isOpen);
    }
}

// Đảm bảo mobile menu button và overlay tồn tại trước khi thêm event listeners
if (mobileMenuButton && sidebarOverlay) {
    mobileMenuButton.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);
}

if (sidebarNav) {
    sidebarNav.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            if (window.innerWidth < 1024) { // Only close on mobile
                toggleSidebar();
            }
        }
    });
}

// Thêm touch gestures cho mobile
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && window.innerWidth < 1024) {
            // Swipe left - open sidebar
            if (!sidebar.classList.contains('mobile-open')) {
                toggleSidebar();
            }
        } else if (diff < 0 && window.innerWidth < 1024) {
            // Swipe right - close sidebar
            if (sidebar.classList.contains('mobile-open')) {
                toggleSidebar();
            }
        }
    }
}

// Thêm touch event listeners
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchend', handleTouchEnd, false);

// Cải thiện mobile performance
function optimizeMobilePerformance() {
    if (window.innerWidth < 1024) {
        // Giảm animation complexity trên mobile
        document.body.style.setProperty('--animation-duration', '0.2s');
        
        // Tối ưu hóa scroll performance
        document.body.style.setProperty('scroll-behavior', 'auto');
        
        // Giảm shadow complexity trên mobile
        const elementsWithShadows = document.querySelectorAll('.shadow-lg, .shadow-xl');
        elementsWithShadows.forEach(el => {
            el.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    }
}

// Gọi function khi resize
window.addEventListener('resize', optimizeMobilePerformance);

// Khởi tạo mobile performance khi load
document.addEventListener('DOMContentLoaded', optimizeMobilePerformance);

// Desktop Sidebar Collapse
function toggleSidebarCollapse() {
    document.body.classList.toggle('sidebar-collapsed');
    const isCollapsed = document.body.classList.contains('sidebar-collapsed');
    localStorage.setItem('sidebarCollapsed', isCollapsed);
}

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebarCollapse);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-in-out');
    observer.observe(section);
});

// Spotlight effect logic
const spotlight = document.getElementById('spotlight');
if (spotlight) {
    document.addEventListener('mousemove', (e) => {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
    });
    document.body.addEventListener('mouseenter', () => {
        spotlight.style.opacity = 1;
    });
    document.body.addEventListener('mouseleave', () => {
        spotlight.style.opacity = 0;
    });
}



// Three.js Hero Animation
function initHeroAnimation() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    const clock = new THREE.Clock();

    function resizeRenderer() {
        const container = canvas.parentElement;
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (canvas.width !== width || canvas.height !== height) {
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    }
    window.addEventListener('resize', resizeRenderer);

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

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);
    const directionalLight2 = new THREE.DirectionalLight(0xc4b5fd, 0.5);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    camera.position.z = 4;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (event) => {
        isDragging = true;
        previousMousePosition.x = event.clientX;
        previousMousePosition.y = event.clientY;
    };

    const onMouseMove = (event) => {
        if (!isDragging) return;
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };

        shape.rotation.y += deltaMove.x * 0.008;
        shape.rotation.x += deltaMove.y * 0.008;

        previousMousePosition.x = event.clientX;
        previousMousePosition.y = event.clientY;
    };

    const onMouseUp = () => {
        isDragging = false;
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown, false);
    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mouseup', onMouseUp, false);

    function animate() {
        requestAnimationFrame(animate);
        resizeRenderer();
        const elapsedTime = clock.getElapsedTime();

        shape.position.y = Math.sin(elapsedTime * 0.7) * 0.1;

        if (!isDragging) {
            shape.rotation.x += 0.0005;
            shape.rotation.y += 0.001;
        }

        renderer.render(scene, camera);
    }
    animate();
}

// === INITIALIZATION ===
// === INITIALIZATION (ĐÃ SỬA LỖI) ===
function initializePage() {
    // Kiểm tra các phần tử quan trọng trước khi chạy
    const mainContent = document.getElementById('main-content');
    const projectGrid = document.getElementById('project-grid');

    if (!mainContent || !projectGrid) {
        console.error("Lỗi nghiêm trọng: Không tìm thấy các thành phần cốt lõi của trang. Script sẽ không được thực thi.");
        document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-family: sans-serif;"><h1>Trang web đang gặp lỗi nghiêm trọng. Vui lòng thử lại sau.</h1></div>';
        return; // Dừng thực thi nếu thiếu thành phần
    }

    updateThemeUI();
    
    const savedLang = localStorage.getItem('language') || 'vi';
    setLanguage(savedLang);
    
    initHeroAnimation();

    if (localStorage.getItem('sidebarCollapsed') === 'true' && window.innerWidth >= 1024) {
        document.body.classList.add('sidebar-collapsed');
    }
}

document.addEventListener('DOMContentLoaded', initializePage);

// ===== MOBILE TABBAR: highlight section đang xem =====
(function () {
  const tabbar = document.getElementById('mobile-tabbar');
  if (!tabbar) return;
  
  const items = [...tabbar.querySelectorAll('.tab-item')];
  const targets = ['home','skills','projects','services','contact']
    .map(id => document.getElementById(id)).filter(Boolean);

  // Smooth scrolling cho mobile tabbar
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('data-tab');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Tính toán vị trí scroll với offset cho mobile tabbar
        const offset = 80; // Offset cho mobile tabbar
        const targetPosition = targetElement.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        items.forEach(i => i.classList.toggle('active', i.dataset.tab === id));
      }
    });
  }, { 
    rootMargin: '-40% 0px -55% 0px', 
    threshold: 0.01 
  });

  targets.forEach(t => obs.observe(t));
})();