(function() {

    if (window.location.pathname !== '/') {
        return;
    }

       const savedLang = localStorage.getItem('language');
    if (savedLang) {
        window.location.pathname = `/${savedLang}/`;
        return;
    }


    const userLang = navigator.language || navigator.userLanguage;

    let redirectPath = '/en/'; 
    if (userLang.startsWith('vi')) {
        redirectPath = '/vi/';
    } else if (userLang.startsWith('ja')) {
        redirectPath = '/ja/';
    }
    
    window.location.pathname = redirectPath;
})();