document.addEventListener('DOMContentLoaded', function() {
    let catalog = document.querySelector('.parent');
    let submenu = catalog.querySelector('.submenu');

    catalog.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
    });
    catalog.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.querySelector('.burger-menu');
    let navList = document.querySelector('.nav__list');

    burgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    let catalog = document.querySelector('.parent');
    let submenu = catalog.querySelector('.submenu');

    catalog.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
    });
    catalog.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
    });

    let submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            let innerSubmenu = item.querySelector('.inner-submenu');
            if (innerSubmenu) {
                innerSubmenu.style.display = 'block';
            }
        });
        item.addEventListener('mouseleave', () => {
            let innerSubmenu = item.querySelector('.inner-submenu');
            if (innerSubmenu) {
                innerSubmenu.style.display = 'none';
            }
        });
    });
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    width: 640,
    autoplay: true,
    speed: 300,
    slidesPerGroup: 3,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          width: 300,
          slidesPerGroup: 1,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 20,
            width: 400,
            slidesPerGroup: 2,
        }},

        1200: {
            slidesPerGroup: 3,
        },

        1600: {
            slidesPerGroup: 3,
        },

        1920: {
            slidesPerGroup: 3,
        }
        
    

  });
  