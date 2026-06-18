// ==========================================
// CONFIGURATION COMPTE EMAILJS (À REMPLIR)
// ==========================================
const EMAILJS_PUBLIC_KEY = "dY0WJ9yPACVvpd4K_"; 
const EMAILJS_SERVICE_ID = "service_em5osgp";
const EMAILJS_TEMPLATE_ID = "template_njh1e6s";

// ==========================================
// INITIALISATION EMAILJS
// ==========================================
(function() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// ==========================================
// MENU BURGER (HORS DOMCONTENTLOADED POUR PLUS DE RÉACTIVITÉ)
// ==========================================
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==========================================
// GESTION DU CODE UNE FOIS LE DOM CHARGÉ
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 2. EFFET CARROUSEL POUR LES TÉMOIGNAGES
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

    const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

const data = {
  celine: `
    <h3>Présentation</h3>
    <p>
      Diplômée de l’Université Paris Nanterre (2015) en psychopathologie et psychologie clinique,
      je suis spécialisée en Thérapies Comportementales et Cognitives (TCC) et formée à différentes approches complémentaires :
      ACT, thérapie interpersonnelle, hypnose ericksonienne, nouvelle hypnose et PNL.
    </p>

    <p>
      Mon approche est <strong>intégrative et personnalisée</strong> : j’adapte les outils thérapeutiques à chaque personne,
      en fonction de son histoire, de ses besoins et de ses objectifs.
    </p>

    <p>
      J’accorde une attention particulière aux schémas de fonctionnement et à la compréhension globale de la personnalité.
    </p>

    <h4>Expérience</h4>
    <p>
      Plusieurs années en milieu hospitalier m’ont permis de développer une expertise dans l’accompagnement des troubles psychiatriques,
      notamment les troubles bipolaires, ainsi que dans l’évaluation clinique.
    </p>

    <h4>Activités</h4>
    <ul>
      <li>Psychothérapie individuelle (approche intégrative)</li>
      <li>Bilan de personnalité</li>
      <li>Bilan attentionnel</li>
      <li>Groupes de psychoéducation (gestion des émotions, affirmation de soi, troubles bipolaires)</li>
    </ul>
  `,

  nora: `
    <h3>Dr Nora Hamdani</h3>

    <h4>Articles récents</h4>

    <ul>
      <li>Gay F, Romeo B, Martelli C, Benyamina A, Hamdani N. <em>Cytokines changes associated with electroconvulsive therapy in patients with treatment-resistant depression: a Meta-analysis.</em> Psychiatry Res. 2021 Mar;297:113735.</li>

      <li>Romeo B, Lester V, Martelli C, Benjamin A, Hamdani N. <em>Cannabis Cessation, Inflammatory Markers and Schizophrenia.</em> J Dual Diagn. 2022, 18(1):33-41.</li>

      <li>Lestra V, Romeo B, Martelli C, Benyamina A, Hamdani N. <em>Could CRP be a differential biomarker of illness stages in schizophrenia?</em> 2022, 246:175-186.</li>

      <li>Romeo B, Lestra V, Martelli C, Amirouche A, Benyamina A, Hamdani N. <em>The modulated role of Toxoplasma Gondii on eosinophils in psychiatric disorders after cannabis cessation.</em> Pathogens 2023, 12(11), 1333.</li>

      <li>Romeo B, Lestra V, Martelli C, Amirouche A, Benyamina A, Hamdani N. <em>Increased markers of inflammation after cannabis cessation and their association with psychotic symptoms.</em> Acta Neuropsychiatr. 2024.</li>

      <li>Romeo B, Mazari A, Ali-Diabacte H, Lestra V, Martelli C, Benyamina A, Hamdani N. <em>White blood cells and patients with psychiatric disorders needing seclusion.</em> Encephale. 2024.</li>

      <li><em>Could peripheral immunological markers discriminate schizophrenia and schizoaffective disorders from bipolar disorder?</em> Journal of Psychiatric Research (in press).</li>
    </ul>
  `,

  zeyad: `
    <h3>Dr Zeyad AL SALLOUM</h3>

    <p>
      Le Dr Zeyad AL SALLOUM est médecin psychiatre.
    </p>

    <h4>Parcours et approche clinique</h4>

    <p>
      Il exerce en tant que Praticien Hospitalier au sein d'un établissement public à Paris.
      Fort d'une solide expérience hospitalière (urgences, hospitalisation, CMP) acquise dans plusieurs structures de la région parisienne et en province.
    </p>

    <p>
      Il a également exercé en pédopsychiatrie et possède une expérience pratique en psychiatrie transculturelle.
    </p>

    <p>
      Dans sa pratique, il privilégie une approche globale alliant psychoéducation et réhabilitation psychosociale,
      avec un intérêt particulier pour les troubles anxieux, bipolaires et le psychotrauma.
    </p>

    <h4>Diplômes et formations</h4>

    <ul>
      <li>DIU de Psychiatrie pour assistants généralistes (Université Paris Diderot)</li>
      <li>DU Clinique de l'Adolescent (Institut Mutualiste Montsouris)</li>
      <li>Diplôme de Médecine Générale (Université de Homs, Syrie)</li>
    </ul>

    <h4>Langues</h4>

    <p>Français, Anglais, Arabe levantin.</p>
  `,

  doina: `
    <h3>Doïna Mazière</h3>

    <p>
      Psychologue clinicienne spécialisée dans les troubles du neurodéveloppement (TSA et TDAH).
    </p>

    <h4>Comprendre son fonctionnement</h4>

    <p>
      Un bilan psychologique ou neurodéveloppemental ne vise pas seulement à poser un diagnostic.
      Il permet avant tout de mieux comprendre ses forces, ses particularités, ses difficultés et son mode de fonctionnement.
    </p>

    <p>
      Cette compréhension constitue souvent une première étape essentielle pour retrouver de la sérénité
      et construire un accompagnement adapté.
    </p>

    <h4>Évaluations et bilans</h4>

    <ul>
      <li>Bilans psychométriques (WISC-V, WAIS-IV)</li>
      <li>Évaluations TSA (ADOS-2, ADI-R)</li>
      <li>Bilans TDAH enfant, adolescent et adulte</li>
      <li>Évaluation des troubles des apprentissages</li>
      <li>Analyse des difficultés attentionnelles et exécutives</li>
    </ul>

    <h4>Consultations et accompagnements</h4>

    <ul>
      <li>Thérapies Cognitives et Comportementales (TCC)</li>
      <li>Remédiation cognitive</li>
      <li>Aide aux apprentissages</li>
      <li>Guidance parentale</li>
      <li>Développement des compétences sociales</li>
      <li>Gestion des émotions</li>
      <li>Confiance en soi et relations sociales</li>
    </ul>
  `
};

// ouvrir modal
document.querySelectorAll(".btn-more").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("modal-title").textContent = btn.dataset.name;
    document.getElementById("modal-role").textContent = btn.dataset.role;
    document.getElementById("modal-body").innerHTML = data[btn.dataset.content];

    modal.classList.remove("hidden");
  });
});

// fermer modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
    // ==========================================
    // 3. GESTION DE L'ENVOI DU FORMULAIRE (EMAILJS)
    // ==========================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const btn = document.querySelector('.btn-submit-form');
            const originalText = btn.innerHTML;
            
            // Changement d'état visuel du bouton (Spinner de chargement)
            btn.innerHTML = 'Envoi en cours... <i class="fa-solid fa-spinner fa-spin"></i>';
            btn.disabled = true;

            // Envoi des données du formulaire via les variables configurées en haut
            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
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