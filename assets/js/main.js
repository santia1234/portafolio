var imageDOM = document.querySelectorAll('.home__layer');
var homeDOM = document.getElementById('home');

function parallax(e) {
    if (e) {
        imageDOM.forEach(function (img) {
            var speed = img.getAttribute('data-speed');
            var x = (window.innerWidth - e.pageX * speed) / 100;
            var y = (window.innerHeight - e.pageY * speed) / 100;
            img.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
        });
    }
}

homeDOM.addEventListener('mousemove', parallax);

function viewDemo(){

}function viewCode(){
        
}
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



function updateCopyrightYear() {
    var currentYear = new Date().getFullYear(); // 2024
    var copyrightElement = document.querySelector('.footer__copy');
  
    if (copyrightElement) {
        copyrightElement.textContent = "© " + currentYear + ", Todos los derechos reservados.";
    }
  }
  
  // No export statement for a non-module script
  
  // Call the function if needed
  updateCopyrightYear();
  

  function resetToHome() {
    window.location.hash = '#home';
  }
  
  // No export statement for a non-module script
  
  // Call the function if needed
  resetToHome();
  

  