// ==========================================
// INITIALISATION EMAILJS
// ==========================================
// Remplace "VOTRE_PUBLIC_KEY_ICI" par ta clé publique trouvée sur ton compte EmailJS

// ==========================================
// MENU BURGER
// ==========================================

const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}
(function() {
    emailjs.init("VOTRE_PUBLIC_KEY_ICI");
})();

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 2. EFFET CARROUSEL FICTIF / SIMULÉ POUR LES TÉMOIGNAGES
    // ==========================================
    const dots = document.querySelectorAll('.slider-dots .dot');
    const testimonialQuote = document.querySelector('.testimonial-slide blockquote');
    const testimonialAuthor = document.querySelector('.testimonial-slide .author');

    const fakeData = [
        {
            quote: `"Madame Hamdani est la psychiatre qui a réalisé mon diagnostique de TSA, à la suite du bilan de Monnet David, un Neuropsy. Elle est très gentille et est apparemment une des expertes en France du sujet.”`,
            author: "Patiente de Mme Hamdani"
        },
        {
            quote: `"Très bon établissement, avec une équipe très compétente et à l'écoute. "`,
            author: "Sophie M."
        },
        {
            quote: `"Une coordination parfaite entre l'école, le médecin de famille et l'équipe de CEDIAPSY. Les bilans d'aide au diagnostic sont d'une clarté exemplaire."`,
            author: "Enseignante Référente"
        }
    ];

    if (dots.length > 0 && testimonialQuote && testimonialAuthor) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');

                testimonialQuote.style.opacity = 0;
                testimonialAuthor.style.opacity = 0;

                setTimeout(() => {
                    testimonialQuote.textContent = fakeData[index].quote;
                    testimonialAuthor.textContent = fakeData[index].author;
                    testimonialQuote.style.opacity = 1;
                    testimonialAuthor.style.opacity = 1;
                }, 200);
            });
        });

        testimonialQuote.style.transition = "opacity 0.2s ease";
        testimonialAuthor.style.transition = "opacity 0.2s ease";
    }

    // ==========================================
    // 3. GESTION DE L'ENVOI DU FORMULAIRE (EMAILJS)
    // ==========================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const btn = document.querySelector('.btn-submit-form');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Envoi en cours... <i class="fa-solid fa-spinner fa-spin"></i>';
            btn.disabled = true;

            // /!\ REMPLACE 'VOTRE_SERVICE_ID' ET 'VOTRE_TEMPLATE_ID' PAR LES TIENS
            emailjs.sendForm('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', this)
                .then(function() {
                    alert('Message envoyé avec succès !');
                    contactForm.reset();
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }, function(error) {
                    alert("Une erreur est survenue lors de l'envoi... Veuillez réessayer.");
                    console.error('Échec de l\'envoi EmailJS:', error);
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                });
        });
    }

}); // Fin du DOMContentLoaded