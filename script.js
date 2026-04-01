// Появление элементов при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .download-card, .discord-card, .stats').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Плавная подсветка активного пункта навигации
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100)
            current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${current}`
            ? '#E0E0FF'
            : '';
    });
});