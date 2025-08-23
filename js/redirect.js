(function() {
    // Chỉ thực hiện chuyển hướng nếu đây là trang gốc (ví dụ: yourdomain.com/)
    // và không phải là một trang con (ví dụ: yourdomain.com/vi/)
    if (window.location.pathname !== '/') {
        return;
    }

       const savedLang = localStorage.getItem('language');
    if (savedLang) {
        window.location.pathname = `/${savedLang}/`;
        return;
    }

    // Tự động nhận diện ngôn ngữ trình duyệt
    const userLang = navigator.language || navigator.userLanguage;

    let redirectPath = '/en/'; // Mặc định english
    if (userLang.startsWith('vi')) {
        redirectPath = '/vi/';
    } else if (userLang.startsWith('ja')) {
        redirectPath = '/ja/';
    }
    
    window.location.pathname = redirectPath;
})();