// Header scroll behavior
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll Down
        header.style.top = "-100px";
    } else {
        // Scroll Up
        header.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

// Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Privacy Modal
const openPrivacyBtn = document.getElementById('open-privacy');
const closePrivacyBtn = document.getElementById('close-privacy');
const closePrivacyBtnBottom = document.getElementById('close-privacy-btn');
const privacyModal = document.getElementById('privacy-modal');

function openModal() {
    privacyModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    privacyModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

openPrivacyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

closePrivacyBtn.addEventListener('click', closeModal);
closePrivacyBtnBottom.addEventListener('click', closeModal);

privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
        closeModal();
    }
});