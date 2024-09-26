document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const profileContainer = document.getElementById('profile-container');

    if (loadingScreen && profileContainer) {
        setTimeout(function() {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                profileContainer.style.opacity = '1';
            }, 500);
        }, 2000); // Simule un chargement de 2 secondes

        profileContainer.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    window.location.href = 'accueil/accueil.html';
                }, 200);
            }, 200);
        });
    } else {
        console.error('Les éléments nécessaires n\'ont pas été trouvés dans le DOM');
    }
});