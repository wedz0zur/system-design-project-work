document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('theme-light')) {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
    } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
    }
});


const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑ Наверх';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});


const fontToggle = document.createElement('button');
fontToggle.textContent = 'Сменить шрифт';
fontToggle.classList.add('font-toggle');
document.querySelector('.header').appendChild(fontToggle);

const fonts = ['font-arial', 'font-times', 'font-courier'];
let currentFontIndex = 0;

fontToggle.addEventListener('click', () => {
    const body = document.body;
    body.classList.remove(fonts[currentFontIndex]);
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    body.classList.add(fonts[currentFontIndex]);
});