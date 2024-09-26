document.addEventListener('DOMContentLoaded', () => {
    // Calcul du temps de chargement
    const startTime = performance.now();
    const loaderWrapper = document.getElementById('loader-wrapper');
    const loaderTime = document.getElementById('loader-time');
    const body = document.body;

    // Fonction pour gérer le chargement de la page
    window.addEventListener('load', () => {
        const endTime = performance.now();
        const loadTime = ((endTime - startTime) / 1000).toFixed(2);

        loaderTime.textContent = `Temps de chargement : ${loadTime} secondes`;

        setTimeout(() => {
            loaderWrapper.style.opacity = '0';
            body.classList.add('loaded');

            setTimeout(() => {
                loaderWrapper.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Défilement fluide pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation au défilement pour les sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Animation de la barre de compétences
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = percentage;
        }, 1000);
    });

    // Validation du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
            alert('Merci pour votre message ! Nous vous contacterons bientôt.');
            contactForm.reset();
        });
    }

    // Bouton "Retour en haut"
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '&uarr;';
    scrollTopBtn.setAttribute('id', 'scrollTopBtn');
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Ajout du style CSS pour le bouton "Retour en haut"
    const style = document.createElement('style');
    style.innerHTML = `
        #scrollTopBtn {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99;
            border: none;
            outline: none;
            background-color: var(--primary-color);
            color: white;
            cursor: pointer;
            padding: 15px;
            border-radius: 50%;
            font-size: 18px;
            transition: background-color 0.3s;
        }
        #scrollTopBtn:hover {
            background-color: var(--secondary-color);
        }
    `;
    document.head.appendChild(style);

    // Animation du texte de la section héro
    const heroText = document.querySelector('.hero p');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        setTimeout(typeWriter, 1500); // Commence après l'animation de chargement
    }
});