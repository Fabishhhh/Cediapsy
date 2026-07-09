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
            <p>Diplômée de l’université Nanterre Paris 10 en 2015 en psychopathologie et psychologie clinique, empirique et TCC, Céline Hebbache s'inscrit dans une démarche thérapeutique multi-référentielle et éclectique. Elle est également formée en thérapie interpersonnelle, en thérapie ACT, en Hypnose Ericksonienne, nouvelle hypnose et PNL.</p>
            <p>Particulièrement intéressée par le concept de personnalité et de schémas de fonctionnement, elle utilise l'approche thérapeutique développée par Jeffrey E. Young ainsi que la thérapie ACT.</p>
            <h4>Services &amp; Prises en charge</h4>
            <ul>
                <li>Prise en charge psychothérapeutique</li>
                <li>Bilan de personnalité</li>
                <li>Bilan attentionnel</li>
                <li>Groupes thérapeutiques</li>
            </ul>
        `,

        nora: `
            <h4>Biographie &amp; Parcours</h4>
            <p>Le docteur Nora HAMDANI est médecin psychiatre, ancienne chef de clinique des hôpitaux de Paris et responsable médical d’unités d’hospitalisation.</p>
            <p>Titulaire d'un Master II et d'une Thèse de Sciences en pharmacogénétique, elle a également obtenu l’Habilitation à Diriger les Recherches pour ses travaux en immunopsychiatrie.</p>
            <h4>Articles récents</h4>
            <ul>
                <li>Gay F, Romeo B, Martelli C, Benyamina A, Hamdani N. <em>Cytokines changes associated with electroconvulsive therapy...</em></li>
                <li>Romeo B, Lester V, Martelli C, Benyamina A, Hamdani N. <em>Cannabis Cessation, Inflammatory Markers and Schizophrenia.</em></li>
                <li>Romeo B, Mazari A, Ali-Diabacte H, Lestra V, Martelli C, Benyamina A, Hamdani N. <em>White blood cells and patients with psychiatric disorders needing seclusion.</em></li>
            </ul>
        `,

        isabelle: `
            <h4>Biographie &amp; Parcours</h4>
            <p>La docteure Isabelle SCHEID est psychiatre, ancienne Cheffe de Clinique des hôpitaux de Paris. Elle est spécialisée dans la psychopathologie de l’adulte et les TSA.</p>
            <p>Elle a exercé au Centre Expert TSA pour adultes à l’hôpital Chenevier et au Centre Expert enfants et adolescents de l’hôpital Robert Debré.</p>
        `,

        zeyad: `
            <h4>Biographie &amp; Parcours</h4>
            <p>Le docteur Zeyad AL SALLOUM est médecin psychiatre et exerce en tant que Praticien Hospitalier au sein d'un établissement public à Paris.</p>
            <h4>Champs d'expertise &amp; Prises en charge</h4>
            <ul>
                <li>Troubles anxieux</li>
                <li>Troubles bipolaires</li>
                <li>Psychotraumatismes</li>
                <li>Clinique de l'adolescent et du jeune adulte</li>
            </ul>
        `,

        laura: `
            <h4>Biographie &amp; Parcours</h4>
            <p>Diplômée d’un Master en psychologie clinique, Laura Guedj s'inscrit dans une démarche thérapeutique moderne, bienveillante et intégrative.</p>
            <h4>Services &amp; Prises en charge</h4>
            <ul>
                <li>Prise en charge psychothérapeutique</li>
                <li>Bilan psychologique</li>
                <li>Soutien psychologique</li>
                <li>Gestion du stress et des émotions</li>
            </ul>
        `,

        doina: `
            <h4>Biographie &amp; Parcours</h4>
            <p>Psychologue clinicienne, Doïna Mazière accompagne les enfants, les adolescents, les adultes et leurs familles.</p>
            <h4>Évaluations &amp; Bilans</h4>
            <ul>
                <li>Bilans psychométriques</li>
                <li>Évaluations TSA</li>
                <li>Bilans TDAH</li>
                <li>Troubles des apprentissages</li>
            </ul>
        `,

rolland: `
            <h4>Biographie &amp; Parcours</h4>
            <p>Médecin spécialiste en psychiatrie, le docteur Franck Rolland exerce depuis plusieurs années à l'hôpital au sein du service public. Également diplômé en psychologie clinique, il associe une approche médicale rigoureuse à une compréhension approfondie des psychothérapies. Consultations en psychiatrie générale, TDAH adulte et psychothérapies. <strong>Disponible le samedi.</strong></p>
            <h4>Champs d'expertise &amp; Prises en charge</h4>
            <ul>
              <li>Psychiatrie générale</li>
              <li>Évaluation diagnostique du TDAH de l'adulte</li>
              <li>Psychothérapies (TCC, hypnose, entretien motivationnel)</li>
              <li>Accompagnement au changement</li>
              <li>Sevrage tabagique et soutien aux proches</li>
            </ul>
            <h4>Formation</h4>
            <ul>
              <li>Médecin spécialiste en psychiatrie</li>
              <li>Psychologue clinicien</li>
              <li>Thérapeute TCC (AFTCC)</li>
              <li>Formé à l'hypnose médicale</li>
              <li>Entretien motivationnel – Niveau 2 (AFDEM)</li>
            </ul>
        `,
        claire: `
            <h4>Biographie &amp; Parcours</h4>
            <p>Neuropsychologue diplômée, Claire Saget exerce auprès d'enfants, d'adolescents et d'adultes. Elle réalise des évaluations neuropsychologiques complètes permettant de mieux comprendre le profil cognitif et émotionnel de chacun. Elle propose également des bilans mémoire et des accompagnements individualisés adaptés aux pathologies neurologiques, chroniques et au suivi post-lésionnel.</p>
            <h4>Champs d'expertise &amp; Prises en charge</h4>
            <ul>
              <li>Bilans neuropsychologiques complets (QI, attention, mémoire, fonctions exécutives)</li>
              <li>Orientation diagnostique (TDAH, troubles des apprentissages, HPI)</li>
              <li>Pôle Mémoire adultes (Bilans globaux, évaluations mnésiques et attentionnelles)</li>
              <li>Suivi post-lésionnel (AVC, traumatisme crânien) et pathologies chroniques (SEP, Parkinson...)</li>
              <li>Accompagnement individualisé et guidance parentale</li>
            </ul>
            <h4>Formation</h4>
            <ul>
              <li>Master en Psychologie Cognitive et Neuropsychologie (Université de Franche-Comté, Besançon)</li>
              <li>Spécialisée en bilans et accompagnement neuropsychologique de l'enfant et de l'adulte</li>
            </ul>
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