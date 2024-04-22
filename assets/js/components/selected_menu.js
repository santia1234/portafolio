var navbarListDOM = document.querySelector('.navbar__list');
var navbarLinksDOM = document.querySelectorAll('.navbar__link');
var sectionsDOM = document.querySelectorAll('section');

function activeMenu(e) {
    if (e && e.type === 'click') {
        var clickedLink = e.target.closest('.navbar__link');
        var activeLink = navbarListDOM.querySelector('.navbar__link.active');

        if (activeLink) {
            activeLink.classList.remove('active');
        }

        if (clickedLink) {
            clickedLink.classList.add('active');
        }

    } else if (e && e.type === 'scroll') {
        var scrollPosition = window.scrollY + 50;

        for (var i = sectionsDOM.length - 1; i >= 0; i--) {
            if (scrollPosition >= sectionsDOM[i].offsetTop) {
                var _activeLink = navbarListDOM.querySelector('.navbar__link.active');

                if (_activeLink) {
                    _activeLink.classList.remove('active');
                }

                navbarLinksDOM[i].classList.add('active');
                break;
            }
        }
    }
}

navbarListDOM.addEventListener('click', activeMenu);
window.addEventListener('scroll', activeMenu);
