// --- 1. БУРГЕР-МЕНЮ ДЛЯ МОБИЛЬНЫХ ---
// Находим кнопку и меню по их id
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

// При клике на бургер переключаем класс .active у меню
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Закрываем меню при клике на любой пункт меню
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// --- 2. ОБРАБОТКА ОТПРАВКИ ФОРМЫ ---
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    // Предотвращаем перезагрузку страницы (стандартное поведение формы)
    event.preventDefault();
    
    // Простое уведомление-заглушка (в реальном проекте здесь был бы запрос на сервер)
    alert('Спасибо за заявку! 🎉\nМы свяжемся с вами в ближайшее время.');
    
    // Очищаем поля формы
    contactForm.reset();
});