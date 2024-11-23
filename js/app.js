const menuIcon = document.getElementById('menuIcon');
const overlay = document.getElementById('overlay');
const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const eli1 = document.getElementById('eli1');
const eli2 = document.getElementById('eli2');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    overlay.classList.toggle('show'); // بلور و نمایش overlay
    sidebar.classList.toggle('show'); // نمایش پاراگراف‌ها
    eli1.classList.toggle('active');
    eli2.classList.toggle('active');

    if (overlay.classList.contains('show')) {
        body.style.overflow = 'hidden'; // جلوگیری از اسکرول عمودی و افقی
    } else {
        body.style.overflow = 'auto'; // بازگردانی اسکرول
    }
});
