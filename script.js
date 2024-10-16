// Afficher ou masquer le bouton de retour en haut
window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');
    const isMobile = window.innerWidth <= 768; // Définissez la limite selon vos besoins

    if (window.scrollY > 200 && !isMobile) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});



