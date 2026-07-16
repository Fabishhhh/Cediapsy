// ==========================================
// BARRIÈRE DE SÉCURITÉ
// ==========================================
/*(function () {
    const codeSecret = "cedia2026";

    if (sessionStorage.getItem("site_access") !== "true") {
        const saisie = prompt("Ce site est en cours de développement.\nVeuillez entrer le code d'accès :");

        if (saisie === codeSecret) {
            sessionStorage.setItem("site_access", "true");
        } else {
            alert("Code incorrect ! Accès refusé.");
            window.location.href = "https://www.google.com";
        }
    }
})();*/


// ==========================================
// TOUT LE CODE APRÈS CHARGEMENT DU DOM
// ==========================================
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // MENU BURGER
    // ==========================================
    const burgerBtn = document.getElementById("burgerBtn");
    const navMenu = document.getElementById("navMenu");

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener("click", function () {
            burgerBtn.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(function (link) {
            link.addEventListener("click", function () {
                burgerBtn.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }


    // ==========================================
    // CARROUSEL TÉMOIGNAGES
    // ==========================================
    const dots = document.querySelectorAll(".slider-dots .dot");
    const testimonialQuote = document.querySelector(".testimonial-slide blockquote");
    const testimonialAuthor = document.querySelector(".testimonial-slide .author");

    if (dots.length > 0 && testimonialQuote && testimonialAuthor) {
        testimonialQuote.style.transition = "opacity 0.2s ease";
        testimonialAuthor.style.transition = "opacity 0.2s ease";

        dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
                dots.forEach(function (d) {
                    d.classList.remove("active");
                });

                dot.classList.add("active");

                testimonialQuote.style.opacity = 0;
                testimonialAuthor.style.opacity = 0;

                setTimeout(function () {
                    testimonialQuote.textContent = fakeData[index].quote;
                    testimonialAuthor.textContent = fakeData[index].author;
                    testimonialQuote.style.opacity = 1;
                    testimonialAuthor.style.opacity = 1;
                }, 200);
            });
        });
    }


    // ==========================================
    // MODAL ÉQUIPE
    // ==========================================
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");

    const data = {
        celine: `
    <h4>Biographie &amp; Parcours</h4>
    <p>
        Diplômée de l’université Nanterre Paris 10 en 2015 en psychopathologie et psychologique clinique, empirique et TCC (Thérapies Comportementales et Cognitives), je suis également formée en thérapie interpersonnelle, en thérapie ACT (acceptation et engagement), en Hypnose Ericksonienne, nouvelle hypnose et PNL.

Particulièrement intéressée par le concept de personnalité et de schémas de fonctionnement, j'utilise également l'approche thérapeutique des schémas développée notamment par Jeffrey E. Young. L'approche de l'ACT (Thérapie d'Acceptation et d'Engagement), dont l'efficacité a été démontrée dans le traitement de nombreux troubles psychologiques, vient compléter ma pratique qui se veut donc éclectique. En utilisant différentes thérapies, cela constitue une démarche multi-référentielle : en fonction des objectifs thérapeutiques, il est possible de sélectionner des outils dans une approche ou une autre - la thérapie s'adapte au patient.

Ayant travaillé plusieurs années à l'hôpital, j'ai pu développer une expertise dans l’évaluation diagnostique et thérapeutique de patients souffrant de troubles bipolaires ainsi que d'autres pathologies psychiatriques.

L’animation de groupes de psychoéducation, de gestion des émotions et d’affirmation de soi fait également partie des compétences acquises au cours des années de pratique.

Chaque individu est le résultat des interactions entre son patrimoine génétique, ce qu'il a vécu dans son enfance, son tempérament, sa personnalité, son histoire de vie, etc. Il est intéressant de tenter de se comprendre en tenant compte de sa globalité.

J'ai développé en juillet 2020 une activité libérale afin de proposer de l'accompagnement psychothérapeutique - le travail psychothérapeutique permet de faire émerger, découvrir ou redécouvrir les ressources présentes chez la personne qui vient consulter au moyen d'une collaboration active entre celle-ci et le psychologue.
    </p>

    <h4>Prises en charge proposées</h4>
    <ul>
        <li>Prise en charge psychothérapeutique - le travail psychothérapeutique permet de faire émerger, découvrir ou redécouvrir les ressources présentes chez la personne qui vient consulter au moyen d'une collaboration active entre celle-ci et le psychologue</li>
        <li>Bilans de personnalité</li>
        <li>Bilans attentionnels</li>
        <li>Groupes de psychoéducation des troubles bipolaires</li>
        <li>Gestion des émotions</li>
        <li>Affirmation de soi</li>
    </ul>
`,

        nora: `
            <h4>Biographie &amp; Parcours</h4>
            <p>Le docteur Nora HAMDANI est médecin psychiatre.

Elle a obtenu le concours de médecine à la Faculté Paris VII puis le concours de l’internat en psychiatrie à Paris.

Interne dans les hôpitaux de Paris, elle a obtenu un Master II (Psychopathologie et Neurobiologie du développement et des comportements, Université Pierre et Marie Curie sur le « Rôle du gène codant pour le récepteur 5-HT2A dans la réponse thérapeutique aux antipsychotiques chez 90 patients schizophrènes ».

Médaillée d’argent et Lauréate de l’université Paris Diderot pour sa thèse de médecine intitulée «La prévention secondaire des suicidants : les interventions et leurs limites», elle obtient par la suite sa spécialité en psychiatrie avec une mention très bien sur  « Les facteurs de résistance aux antipsychotiques dans la schizophrénie ».

Titulaire de son diplôme de psychiatre, elle est recrutée deux ans par l’INSERM en tant que médecin chercheur ce qui lui permet de soutenir une thèse de sciences « Pharmacogénétique de la schizophrénie » avec une mention très honorable. Elle poursuivra ses travaux de recherche sur « Infection, Immunité et psychoses », ce qui lui vaudra d’obtenir l’habilitation à diriger les recherches (HDR). Elle poursuit ses travaux en lien avec un service universitaire parisien sur la piste infectieuse, inflammatoire et digestive de la schizophrénie, du trouble bipolaire ou des traumatismes. Elle a publié de nombreux articles dans des revues internationales (https://www.ncbi.nlm.nih.gov/pubmed/?term=nora+hamdani).

Ancienne chef de clinique des hôpitaux de Paris puis responsable médical d’unités d’hospitalisation, elle a exercé plus de quinze ans dans les hôpitaux psychiatriques universitaires et a pu ainsi évaluer des milliers de patients souffrant de pathologies diverses notamment les troubles bipolaires et la schizophrénie.

Son expérience double clinique et scientifique permettra de réfléchir avec vous sur les pistes non explorées à l’origine de vos troubles afin de vous proposer des prises en charge ciblées ainsi qu’une évaluation clinique fine et précise grâce à la durée des entretiens.

​

https://expertscape.com/au/bipolar+and+related+disorders/Hamdani%2C+N

​

https://expertscape.com/ex/bipolar+and+related+disorders/c/fr</p>
<h4>Articles récents</h4>
<ul>
    <li>
        Gay F, Romeo B, Martelli C, Benyamina A, Hamdani N.
        <em>Cytokines changes associated with electroconvulsive therapy in patients with treatment-resistant depression: a Meta-analysis.</em>
        Psychiatry Res. 2021 Mar;297:113735.
    </li>

    <li>
        Romeo B, Lester V, Martelli C, Benyamina A, Hamdani N.
        <em>Cannabis Cessation, Inflammatory Markers and Schizophrenia.</em>
        J Dual Diagn. 2022;18(1):33-41.
    </li>

    <li>
        Lestra V, Romeo B, Martelli C, Benyamina A, Hamdani N.
        <em>Could CRP be a differential biomarker of illness stages in schizophrenia? A systematic review and meta-analysis.</em>
        2022;246:175-186.
    </li>

    <li>
        Romeo B, Lestra V, Martelli C, Amirouche A, Benyamina A, Hamdani N.
        <em>The modulated role of Toxoplasma Gondii on eosinophils in psychiatric disorders after cannabis cessation.</em>
        Pathogens. 2023;12(11):1333.
    </li>

    <li>
        Romeo B, Lestra V, Martelli C, Amirouche A, Benyamina A, Hamdani N.
        <em>Increased markers of inflammation after cannabis cessation and their association with psychotic symptoms.</em>
        Acta Neuropsychiatr. 2024 Apr 28;1-10. doi:10.1017/neu.2023.24.
    </li>

    <li>
        Romeo B, Mazari A, Ali-Diabacte H, Lestra V, Martelli C, Benyamina A, Hamdani N.
        <em>White blood cells and patients with psychiatric disorders needing seclusion: A retrospective non-interventional study.</em>
        Encephale. 2024 Apr 21:S0013-7006.
    </li>

    <li>
        <em>Could peripheral immunological markers discriminate schizophrenia and schizoaffective disorders from bipolar disorder?</em>
        In press, Journal of Psychiatric Research.
    </li>
</ul>
        `,

        isabelle: `
            <h4>Biographie &amp; Parcours</h4>
            <p>La docteure Isabelle SCHEID est psychiatre. Elle a obtenu le concours de médecine à la Faculté Paris V puis le concours de l’internat en psychiatrie à Paris.
Ancienne Cheffe de Clinique des hôpitaux de Paris dans le service de psychiatrie de l’hôpital Hôtel Dieu, la Dre Isabelle SCHEID est également titulaire d’un Master 2 en neurosciences, au cours duquel elle a travaillé sur les facteurs génétiques impliqués dans les TSA.
Psychiatre d’adultes, la Dre Isabelle SCHEID a travaillé 6 années au Centre Expert TSA SDI adultes à l’hôpital Chenevier, dont 2 années  de temps partagé avec le Centre Expert TSA SDI enfants et adolescents à l’hôpital Robert Debré. Elle a été 2 ans coordinatrice du réseau des Centres Experts TSA SDI France. La Dre SCHEID a contribué à plusieurs article au sujet des TSA. La Dre SCHEID a également travaillé 2 ans au Dispositif de Soins Partagés 94. Ces différents postes ont permis au Dr SCHEID d’acquérir une expérience de la psychopathologie de l’adulte, particulièrement des TSA mais également des troubles anxieux et post-traumatiques.
Le Dr SCHEID utilise son expérience et ses connaissances au sujet des TSA pour proposer une évaluation pour tous les adultes (à partir de 18 ans) se posant la question de ce diagnostic à leur sujet.


</p>
                    `,
        zeyad: `
<h4>Biographie &amp; Parcours</h4>
    <p>
        Le docteur Zeyad AL SALLOUM est médecin psychiatre. Il exerce en tant que Praticien Hospitalier au sein d'un établissement public à Paris. Fort d'une solide expérience hospitalière acquise aux urgences psychiatriques, en hospitalisation et en Centre Médico-Psychologique (CMP), dans plusieurs établissements de la région parisienne et en province, il a également exercé en pédopsychiatrie et possède une expérience pratique en psychiatrie transculturelle.
    </p>

    <p>
        Dans sa pratique, il privilégie une approche globale associant psychoéducation et réhabilitation psychosociale, avec un intérêt particulier pour la prise en charge des troubles anxieux, des troubles bipolaires et du psychotraumatisme.
    </p>

    <h4>Diplômes &amp; Formations</h4>
    <ul>
        <li>DIU de Psychiatrie pour assistants généralistes – Université Paris Diderot</li>
        <li>DU Clinique de l'Adolescent – Institut Mutualiste Montsouris</li>
        <li>Diplôme de Médecine Générale – Université de Homs (Syrie)</li>
    </ul>

    <h4>Langues de consultation</h4>
    <ul>
        <li>Français</li>
        <li>Anglais</li>
        <li>Arabe levantin</li>
    </ul>
`,

        laura: `
            <h4>Biographie &amp; Parcours</h4>
            <p>Laura GUEDJ est psychologue clinicienne. Titulaire d’un Master de Psychologie Clinique et Empirique de l’Université Paris Ouest Nanterre la Défense en 2016, elle a, par la suite, validée une formation de spécialisation en TCC (Thérapie Comportementale et Cognitive) à l’AFTCC (Association Française des TCC). Elle est également formée à la Thérapie ACT (Thérapie d’Acceptation et d’Engagement).
Durant deux ans, elle a travaillé dans le domaine de la Recherche au Service Hospitalo-Universitaire au Centre Hospitalier Sainte-Anne et a écrit plusieurs articles sur le contrôle moteur dans la schizophrénie.
En parallèle, elle a travaillé dans un Service d’intervention précoce médico-social s’adressant à des jeunes adultes atteints de troubles psychotiques ou elle pratique les TCC et ou elle co-anime un groupe de cognition sociale chez les jeunes adultes souffrant de troubles psychotiques. Elle propose des accompagnements et de la psychoéducation des familles des patients.
Elle travaille également dans un cabinet libéral ou elle pratique les TCC et la Thérapie ACT chez le tout-venant.
Ces différents postes ont permis à Laura GUEDJ d’acquérir une expérience de la psychopathologie de l’adulte, particulièrement des les troubles psychotiques mais également des troubles anxio-dépressifs et la gestion des émotions.</p>
        `,

        doina: `
<h4>Biographie &amp; Parcours</h4>
<p>
Psychologue clinicienne spécialisée dans les troubles du 
neurodéveloppement (TSA et TDAH), Madame Doïna Mazière accompagne 
les enfants, les adolescents, les adultes et leurs familles tout au 
long de leur parcours. Après avoir débuté sa carrière au sein du 
cabinet Espas Iddees, spécialisé dans l'accompagnement des personnes 
autistes, elle partage aujourd'hui son activité entre son cabinet 
libéral et un Institut Médico-Éducatif (IME) accueillant des enfants 
et adolescents présentant un TSA. Elle réalise des bilans 
psychométriques, des évaluations diagnostiques (TSA, TDAH et 
troubles des apprentissages) ainsi que des consultations 
psychologiques, des thérapies cognitives et comportementales (TCC), 
de la remédiation cognitive, de la guidance parentale et des 
accompagnements visant à développer les compétences sociales, la 
communication et l'autonomie. Sa démarche vise avant tout à mieux 
comprendre le fonctionnement de chaque personne afin de proposer un 
accompagnement personnalisé et adapté à ses besoins.
</p>
        `,

rolland: `
    <h4>Biographie &amp; Parcours</h4>
    <p>
        Le docteur Franck Rolland est médecin spécialiste en psychiatrie. Il exerce depuis plusieurs années à l'hôpital en contribuant au service public. Il a la particularité d'avoir suivi une formation universitaire en psychologie clinique, lui conférant également le titre de psychologue clinicien. Cette double formation lui permet d'articuler une approche médicale rigoureuse, avec ou sans prescription médicamenteuse, à une compréhension approfondie des processus psychiques et des psychothérapies. Il est également formé aux thérapies cognitives et comportementales (TCC), à l'hypnose médicale ainsi qu'à l'entretien motivationnel. <strong>Disponible le samedi.</strong>
    </p>

    <h4>Consultations proposées</h4>
    <ul>
        <li>Psychiatrie générale (diagnostic, suivi et traitement des troubles psychiatriques)</li>
        <li>Évaluation diagnostique du TDAH de l'adulte</li>
        <li>Sevrage tabagique et accompagnement à l'arrêt du tabac</li>
        <li>Soutien aux proches de personnes concernées par un trouble psychiatrique ou une addiction</li>
        <li>Syndrome d'épuisement professionnel (burnout)</li>
        <li>Psychothérapies (TCC, hypnose, entretien motivationnel, thérapie de soutien)</li>
        <li>Accompagnement au changement (événement de vie, choix professionnel, addiction...)</li>
    </ul>

    <h4>Formation</h4>
    <ul>
        <li>Médecin spécialiste en psychiatrie</li>
        <li>Psychologue clinicien</li>
        <li>Thérapeute en Thérapies Cognitives et Comportementales (AFTCC)</li>
        <li>Formé à l'hypnose médicale</li>
        <li>Entretien motivationnel – Niveau 2 (AFDEM)</li>
    </ul>

    <p>
        Le docteur Franck Rolland propose un espace de consultation respectueux et attentif aux spécificités des personnes LGBTQIA+.
    </p>
`,
        claire: `
            <h4>Biographie &amp; Parcours</h4>
            <p>Neuropsychologue diplômée d'un Master en Psychologie Cognitive et
Neuropsychologie (Université de Franche-Comté, Besançon), j'exerce
auprès d'enfants, d'adolescents et d'adultes.

Auprès des enfants et des adolescents, je réalise des évaluations
neuropsychologiques complètes permettant de mieux comprendre le
profil cognitif et émotionnel de l'enfant : bilan intellectuel (QI), de
l'attention, de la mémoire ou des fonctions exécutives, dans le cadre d'un
bilan d'orientation diagnostique (TDAH, troubles des apprentissages, haut
potentiel...). Je propose également un accompagnement adapté aux
besoins de l'enfant ou de l'adolescent, ainsi qu'un soutien aux parents
sous forme de guidance parentale.

Auprès des adultes, je réalise des bilans neuropsychologiques variés :
bilan global, évaluation mnésique et attentionnelle, bilan suivi post-

Mémoire : bilan/accompagnement

Bipolaires

Sclérose en plaques,

AVC, Parkinson, trauma crânien…

lésionnel (AVC, traumatisme crânien...) ou dans le cadre d’une sclérose en
plaque. Un accompagnement individualisé peut être proposé à la suite du
bilan, ainsi qu'un soutien à la parentalité pour les parents en difficulté
avec leur enfant.</p>
        `
    };

    if (modal && closeBtn) {
        document.querySelectorAll(".btn-more").forEach(function (btn) {
            btn.addEventListener("click", function () {
                const modalTitle = document.getElementById("modal-title");
                const modalRole = document.getElementById("modal-role");
                const modalBody = document.getElementById("modal-body");

                if (modalTitle) modalTitle.textContent = btn.dataset.name;
                if (modalRole) modalRole.textContent = btn.dataset.role;
                if (modalBody) modalBody.innerHTML = data[btn.dataset.content] || "";

                modal.classList.remove("hidden");
            });
        });

        closeBtn.addEventListener("click", function () {
            modal.classList.add("hidden");
        });

        window.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.classList.add("hidden");
            }
        });
    }


    // ==========================================
    // POP-UP PRISE EN CHARGE / RENDEZ-VOUS
    // ==========================================
    const rendezVousData = {
        tnd: {
            title: "Prendre rendez-vous avec nos spécialistes",
            cards: [
                {
                    nom: "Docteur Isabelle Scheid",
                    specialite: "Psychiatre • TSA",
                    lien: "https://www.doctolib.fr/psychiatre/paris/isabelle-scheid-paris"
                },
                {
                    nom: "Docteur Franck Rolland",
                    specialite: "Psychiatre • TDAH",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                },
                {
                    nom: "Madame Doïna Mazière",
                    specialite: "Psychologue",
                    lien: "https://www.doctolib.fr/psychologue/paris/doina-maziere"
                },
            ]
        },

        avis: {
            title: "Prendre rendez-vous avec notre spécialiste",
            cards: [
                {
                    nom: "Docteur Nora Hamdani",
                    specialite: "Psychiatre",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                }
            ]
        },

        suivi: {
            title: "Prendre rendez-vous avec nos spécialistes",
            cards: [
                {
                    nom: "Docteur Zeyad Al Salloum",
                    specialite: "Psychiatre",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                },
                {
                    nom: "Docteur Franck Rolland",
                    specialite: "Psychiatre",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                },

                {
                    nom: "Docteur Nora Hamdani",
                    specialite: "Psychiatre",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                }
            ]
        },

        therapie: {
            title: "Prendre rendez-vous avec nos spécialistes",
            cards: [
                {
                    nom: "Docteur Franck Rolland",
                    specialite: "Psychiatre • TCC / Hypnose",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                },
                {
                    nom: "Madame Doïna Mazière",
                    specialite: "Psychologue • TCC",
                    lien: "https://www.doctolib.fr/psychologue/paris/doina-maziere"
                },
                {
                    nom: "Madame Céline Hebbache",
                    specialite: "Psychologue • TCC",
                    lien: "https://www.doctolib.fr/psychologue/paris/celine-hebbache"
                },
                {
                    nom: "Madame Laura Guedj",
                    specialite: "Psychologue • TCC",
                    lien: "https://www.doctolib.fr/psychologue/paris/laura-guedj"
                }
            ]
        },

        groupes: {
    title: "Prendre rendez-vous",
    cards: [
        {
            nom: "Madame Doïna Mazière",
            specialite: "Neuropsychologue • Consultations mémoire",
            lien: "https://www.doctolib.fr/psychologue/paris/doina-maziere"
        }
    ]
},

        memoire: {
    title: "Prendre rendez-vous",
    cards: [
        {
            nom: "Madame Claire Saget",
            specialite: "Neuropsychologue • Consultations mémoire",
            lien: ""   // À remplacer par le lien Doctolib si elle en possède un
        }
    ]
}
    };

    const rdvModal = document.getElementById("modal-rdv");
    const rdvModalTitle = document.querySelector("#modal-rdv #modal-title");
    const rdvModalContent = document.querySelector("#modal-rdv #modal-content");
    const rdvCloseBtn = document.querySelector("#modal-rdv .modal-close");

    if (rdvModal && rdvModalTitle && rdvModalContent) {
        document.querySelectorAll(".open-modal").forEach(function (btn) {
            btn.addEventListener("click", function (e) {
                e.preventDefault();

                const type = this.getAttribute("data-modal");
                const selectedData = rendezVousData[type];

                if (!selectedData) {
                    console.error("Type de modal introuvable :", type);
                    return;
                }

                rdvModalTitle.textContent = selectedData.title;
                rdvModalContent.innerHTML = "";

                selectedData.cards.forEach(function (praticien) {
                    const card = document.createElement("div");
                    card.className = "praticien-mini-card";

                    const boutonAgenda = praticien.lien
                        ? `
                            <a href="${praticien.lien}" target="_blank" class="btn btn-doctolib-sub">
                                Voir l'agenda
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        `
                        : `
                            <span class="btn btn-doctolib-sub disabled">
                                Agenda bientôt disponible
                            </span>
                        `;

                    card.innerHTML = `
                        <div>
                            <h4>${praticien.nom}</h4>
                            <span class="praticien-specialty">${praticien.specialite}</span>
                        </div>
                        ${boutonAgenda}
                    `;

                    rdvModalContent.appendChild(card);
                });

                rdvModal.classList.add("active");
            });
        });

        if (rdvCloseBtn) {
            rdvCloseBtn.addEventListener("click", function () {
                rdvModal.classList.remove("active");
            });
        }

        rdvModal.addEventListener("click", function (e) {
            if (e.target === rdvModal) {
                rdvModal.classList.remove("active");
            }
        });

        const urlParams = new URLSearchParams(window.location.search);
        const modalToOpen = urlParams.get("open");

        if (modalToOpen) {
            const targetButton = document.querySelector('.open-modal[data-modal="' + modalToOpen + '"]');

            if (targetButton) {
                setTimeout(function () {
                    targetButton.click();
                }, 300);
            }
        }
    }

});