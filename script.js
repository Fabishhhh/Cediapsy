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
    <h4>Biographie &amp; Parcours</h4>
    <p>Diplômée de l’université Nanterre Paris 10 en 2015 en psychopathologie et psychologie clinique, empirique et TCC (Thérapies Comportementales et Cognitives), Céline Hebbache s'inscrit dans une démarche thérapeutique multi-référentielle et éclectique. Elle est également formée en thérapie interpersonnelle, en thérapie ACT (Acceptation et Engagement), en Hypnose Ericksonienne, nouvelle hypnose et PNL.</p>
    
    <p>Particulièrement intéressée par le concept de personnalité et de schémas de fonctionnement, elle utilise l'approche thérapeutique développée par Jeffrey E. Young ainsi que la thérapie ACT, dont l'efficacité est cliniquement démontrée. Sa pratique lui permet de sélectionner des outils sur mesure afin de s'adapter à la globalité et à l'histoire de vie unique de chaque patient.</p>

    <p>Ayant travaillé plusieurs années en milieu hospitalier, elle a développé une solide expertise dans l’évaluation diagnostique et thérapeutique de patients souffrant de troubles bipolaires ainsi que d'autres pathologies psychiatriques complexes. Elle possède également une longue expérience dans l’animation de groupes de psychoéducation, de gestion des émotions et d’affirmation de soi.</p>

    <h4>Services &amp; Prises en charge</h4>
    <ul>
      <li><strong>Prise en charge psychothérapeutique :</strong> Un travail collaboratif et actif visant à faire émerger et redécouvrir les ressources propres de la personne.</li>
      <li><strong>Bilan de personnalité</strong></li>
      <li><strong>Bilan attentionnel</strong></li>
      <li><strong>Groupes thérapeutiques :</strong> Psychoéducation des troubles bipolaires, gestion des émotions et affirmation de soi.</li>
    </ul>
`,

nora: `
   
    <h4>Biographie &amp; Parcours</h4>
    <p>Le docteur Nora HAMDANI est médecin psychiatre, ancienne chef de clinique des hôpitaux de Paris et responsable médical d’unités d’hospitalisation. Elle a exercé plus de quinze ans dans les hôpitaux psychiatriques universitaires, évaluant des milliers de patients souffrant de pathologies diverses, notamment les troubles bipolaires et la schizophrénie.</p>
    
    <p>Titulaire d'un Master II et d'une Thèse de Sciences (PhD) en pharmacogénétique avec la mention très honorable, elle a également obtenu l’Habilitation à Diriger les Recherches (HDR) pour ses travaux menés en lien avec l'INSERM sur l'immunopsychiatrie (pistes infectieuses, inflammatoires et digestives de la schizophrénie, du trouble bipolaire ou des traumatismes). Son expérience double, à la fois clinique et scientifique, lui permet de proposer une évaluation clinique fine et des prises en charge ciblées.</p>

    <h4>Articles récents</h4>
    <ul>
      <li>Gay F, Romeo B, Martelli C, Benyamina A, Hamdani N. <em>Cytokines changes associated with electroconvulsive therapy in patients with treatment-resistant depression: a Meta-analysis.</em> Psychiatry Res. 2021 Mar;297:113735.</li>

      <li>Romeo B, Lester V, Martelli C, Benyamina A, Hamdani N. <em>Cannabis Cessation, Inflammatory Markers and Schizophrenia.</em> J Dual Diagn. 2022, 18(1):33-41.</li>

      <li>Lestra V, Romeo B, Martelli C, Benyamina A, Hamdani N. <em>Could CRP be a differential biomarker of illness stages in schizophrenia?</em> 2022, 246:175-186.</li>

      <li>Romeo B, Lestra V, Martelli C, Amirouche A, Benyamina A, Hamdani N. <em>The modulated role of Toxoplasma Gondii on eosinophils in psychiatric disorders after cannabis cessation.</em> Pathogens 2023, 12(11), 1333.</li>

      <li>Romeo B, Lestra V, Martelli C, Amirouche A, Benyamina A, Hamdani N. <em>Increased markers of inflammation after cannabis cessation and their association with psychotic symptoms.</em> Acta Neuropsychiatr. 2024.</li>

      <li>Romeo B, Mazari A, Ali-Diabacte H, Lestra V, Martelli C, Benyamina A, Hamdani N. <em>White blood cells and patients with psychiatric disorders needing seclusion.</em> Encephale. 2024.</li>

      <li><em>Could peripheral immunological markers discriminate schizophrenia and schizoaffective disorders from bipolar disorder?</em> Journal of Psychiatric Research (in press).</li>
    </ul>
`,

isabelle: `
    <h4>Biographie &amp; Parcours</h4>
    <p>La docteure Isabelle SCHEID est psychiatre, ancienne Cheffe de Clinique des hôpitaux de Paris dans le service de psychiatrie de l’hôpital Hôtel Dieu. Également titulaire d’un Master 2 en neurosciences axé sur les facteurs génétiques impliqués dans les TSA, elle s'est spécialisée dans la psychopathologie de l’adulte.</p>
    
    <p>Elle a exercé pendant 6 ans au Centre Expert TSA (Troubles du Spectre de l'Autisme) sans déficience intellectuelle pour adultes à l’hôpital Chenevier, dont 2 ans en temps partagé avec le Centre Expert enfants et adolescents de l’hôpital Robert Debré. Ancienne coordinatrice nationale du réseau des Centres Experts TSA France et praticienne au Dispositif de Soins Partagés 94, elle met aujourd'hui son expertise au service des adultes (à partir de 18 ans) qui s'interrogent sur un potentiel diagnostic de TSA.</p>

    <h4>Articles récents</h4>
    <ul>
      <li>Bennabi M, Tarantino N, Gaman A, Scheid I, et al. <em>Persistence of dysfunctional natural killer cells in adults with high-functioning autism spectrum disorders: stigma/consequence of unresolved early infectious events?</em> Mol Autism. 2019 May 15;10:22.</li>

      <li>Holiga Š, Hipp JF, Chatham CH, Garces P, Spooren W, ... Scheid I, et al. <em>Patients with autism spectrum disorders display reproducible functional connectivity alterations.</em> Sci Transl Med. 2019 Feb 27;11(481).</li>

      <li>Laidi C, Boisgontier J, de Pierrefeu A, Duchesnay E, Hotier S, ... Scheid I, et al. <em>Decreased Cortical Thickness in the Anterior Cingulate Cortex in Adults with Autism.</em> J Autism Dev Disord. 2019 Apr;49(4):1402-1409.</li>

      <li>d'Albis MA, Guevara P, Guevara M, Laidi C, Boisgontier J, ... Scheid I, et al. <em>Local structural connectivity is associated with social cognition in autism spectrum disorder.</em> Brain. 2018 Dec 1;141(12):3472-3481.</li>

      <li>Septier M, Peyre H, Amsellem F, Beggiato A, Maruani A, ... Scheid I, et al. <em>Increased risk of ADHD in families with ASD.</em> Eur Child Adolesc Psychiatry. 2019 Feb;28(2):281-288.</li>

      <li>Bennabi M, Gaman A, Delorme R, Boukouaci W, Manier C, Scheid I, et al. <em>HLA-class II haplotypes and Autism Spectrum Disorders.</em> Sci Rep. 2018 May 16;8(1):7639.</li>
    </ul>
`,

zeyad: `
    <h4>Biographie &amp; Parcours</h4>
    <p>Le Dr Zeyad AL SALLOUM est médecin psychiatre et exerce en tant que Praticien Hospitalier au sein d'un établissement public à Paris. Son parcours lui a permis d'acquérir une solide expérience clinique au travers de diverses structures en région parisienne et en province, couvrant les urgences psychiatriques, les services d'hospitalisation temps plein et le suivi en Centre Medico-Psychologique (CMP).</p>
    
    <p>Au-delà de la psychiatrie générale de l'adulte, il a enrichi sa pratique en exerçant en pédopsychiatrie et dispose d'une expérience concrète en psychiatrie transculturelle, lui permettant de proposer des soins adaptés à la diversité des parcours de vie.</p>

    <h4>Approche Clinique</h4>
    <p>Dans sa pratique quotidienne, le Dr AL SALLOUM privilégie une approche thérapeutique globale et intégrative. Il met un accent particulier sur la psychoéducation (aider le patient et son entourage à comprendre le trouble) et la réhabilitation psychosociale afin de favoriser l'autonomie et le rétablissement durable.</p>
    
    <h4>Champs d'expertise &amp; Prises en charge</h4>
    <ul>
      <li>Troubles anxieux</li>
      <li>Troubles bipolaires</li>
      <li>Psychotraumatismes (Psychotrauma)</li>
      <li>Clinique de l'adolescent et du jeune adulte</li>
    </ul>

    <h4>Langues de consultation</h4>
    <p class="prof-languages"><i class="fa-solid fa-language"></i> Français, Anglais, Arabe levantin.</p>
`,

  laura: `
    <h4>Biographie &amp; Parcours</h4>
    <p>Diplômée d’un Master en psychologie clinique, Laura Guedj s'inscrit dans une démarche thérapeutique moderne, bienveillante et intégrative. Son approche centrée sur le patient lui permet d'adapter ses outils et ses méthodes en fonction de l'histoire unique, du tempérament et des besoins spécifiques de chaque personne qui vient la consulter.</p>
    
    <p>Forte d'une formation continue solide et attentive aux évolutions de la psychologie clinique, elle met un point d'honneur à co-construire un espace de parole sécurisant. À travers une collaboration active, elle accompagne ses patients vers la découverte de leurs propres ressources et le développement de stratégies d'adaptation durables face aux difficultés de la vie.</p>

    <h4>Services &amp; Prises en charge</h4>
    <ul>
      <li><strong>Prise en charge psychothérapeutique :</strong> Un accompagnement sur mesure pour traverser les moments de crise, les doutes ou les difficultés relationnelles et personnelles.</li>
      <li><strong>Bilan psychologique :</strong> Évaluations approfondies pour mieux comprendre son fonctionnement cognitif, émotionnel ou de personnalité.</li>
      <li><strong>Soutien psychologique &amp; Accompagnement :</strong> Des séances de suivi individuelles basées sur l'empathie, l'écoute active et le non-jugement.</li>
      <li><strong>Gestion du stress et des émotions :</strong> Développement d'outils pratiques pour retrouver un équilibre au quotidien.</li>
    </ul>
`,

  doina: `
<h4>Biographie &amp; Parcours</h4>
    <p>Psychologue clinicienne, Doïna Mazière accompagne les enfants, les adolescents, les adultes et leurs familles dans les différentes étapes de leur parcours. Au fil de son expérience, elle s'est hautement spécialisée dans les troubles du neurodéveloppement, notamment le Trouble du Spectre de l'Autisme (TSA) et le Trouble Déficitaire de l'Attention avec ou sans Hyperactivité (TDAH).</p>
    <p>Elle a débuté sa carrière au sein du cabinet <em>Espas Iddees</em>, une structure de référence spécialisée dans l'accompagnement des personnes autistes. Aujourd'hui, elle partage son activité entre son cabinet libéral et un Institut Médico-Éducatif (IME) accueillant des enfants et adolescents présentant un TSA.</p>
    
    <blockquote>
        "Mon rôle n'est pas de vous faire entrer dans une norme, mais de vous aider à mieux comprendre votre fonctionnement afin d'identifier les stratégies qui vous permettront de vous sentir plus à l'aise dans votre quotidien."
    </blockquote>

    <h4>Évaluations &amp; Bilans</h4>
    <p>Le bilan ne vise pas seulement à poser un diagnostic, mais à mettre en lumière les forces, les particularités, les difficultés et le mode de fonctionnement global pour retrouver de la sérénité.</p>
    <ul>
      <li><strong>Bilans psychométriques :</strong> Évaluation du fonctionnement intellectuel (WISC-V pour enfants, WAIS-IV pour adultes).</li>
      <li><strong>Évaluations TSA :</strong> Outils diagnostiques standardisés d'excellence (ADOS-2, ADI-R).</li>
      <li><strong>Bilans TDAH :</strong> Diagnostic et analyse chez l'enfant (à partir de 6 ans), l'adolescent et l'adulte.</li>
      <li><strong>Troubles des apprentissages :</strong> Analyse des difficultés attentionnelles et des fonctions exécutives.</li>
    </ul>

    <h4>Accompagnements &amp; Suivis</h4>
    <ul>
      <li><strong>Consultations &amp; TCC :</strong> Thérapies cognitives et comportementales adaptées.</li>
      <li><strong>Remédiation cognitive :</strong> Aide aux apprentissages et outils pour "apprendre à apprendre".</li>
      <li><strong>Guidance parentale :</strong> Soutien spécifique aux parents d’enfants avec autisme, TDAH ou troubles du comportement.</li>
      <li><strong>Développement des compétences sociales :</strong> Travail concret sur la communication, la compréhension des codes sociaux, la gestion des émotions et les relations (sociales ou professionnelles) à l'aide d'outils du quotidien.</li>
    </ul>
`,
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