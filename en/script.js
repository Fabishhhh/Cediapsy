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
            <h4>Biography &amp; Course</h4>
            <p>Céline Hebbache is a clinical psychologist. She holds a degree from Nanterre Paris X University (2015) specializing in psychopathology, clinical and empirical psychology, and CBT (Cognitive Behavioral Therapy); she is also trained in interpersonal therapy and hypnotherapy.
Active in research for several years, her work focuses on postpartum depression, depression, immunopsychiatry, and the development of a predictive algorithm for suicide risk. She works with a diverse range of conditions, including anxiety disorders, mood disorders (unipolar or bipolar), psychotic disorders, and personality disorders.
For several years, she has worked at the Bipolar Disorder Expert Center at Chenevier Hospital, developing expertise in the diagnostic and therapeutic assessment of patients with bipolar disorder. Her years of practice have also enabled her to develop skills in facilitating psychoeducation groups for bipolar disorder, as well as groups focused on emotion management and assertiveness training.</p>
        `,

        nora: `
            <h4>Biography &amp; Course</h4>
            <p>Dr. Nora HAMDANI is a psychiatrist.

She obtained the medical school entrance exam at Paris VII Faculty then the residency exam in psychiatry in Paris.

Resident in Paris hospitals, she obtained a Master II (Psychopathology and Neurobiology of Development and Behavior, Pierre and Marie Curie University on the « RRole of the gene coding for the 5-HT2A receptor in the therapeutic response to antipsychotics in 90 schizophrenic patients ».

A silver medalist and award recipient from Paris Diderot University for her medical thesis titled "Secondary prevention for suicide attempters: interventions and their limitations," she subsequently qualified as a psychiatrist with honors, specializing in "Factors of resistance to antipsychotics in schizophrenia."
After qualifying as a psychiatrist, she was recruited by INSERM for a two-year position as a physician-researcher, enabling her to defend a doctoral thesis in science titled "Pharmacogenetics of Schizophrenia," which she passed with high honors. She went on to conduct research on "Infection, Immunity, and Psychosis," earning her the *Habilitation à Diriger des Recherches* (HDR)—the highest academic qualification in France. She continues her work in collaboration with a Parisian university department, investigating infectious, inflammatory, and digestive factors associated with schizophrenia, bipolar disorder, and trauma. She has published numerous articles in international journals (https://www.ncbi.nlm.nih.gov/pubmed/?term=nora+hamdani).
A former hospital specialist (*chef de clinique*) in Paris and subsequently the medical head of inpatient units, she practiced for over fifteen years in university psychiatric hospitals, where she evaluated thousands of patients suffering from various conditions, notably bipolar disorder and schizophrenia.
Drawing on both clinical and scientific experience, they will work with you to explore unexamined factors underlying your difficulties, offering targeted treatment approaches and a detailed, precise clinical assessment facilitated by the extended duration of the consultations.
​

https://expertscape.com/au/bipolar+and+related+disorders/Hamdani%2C+N

​

https://expertscape.com/ex/bipolar+and+related+disorders/c/fr</p>
<h4>Recent articles</h4>
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
            <h4>Biography &amp; Career</h4>
            <p>Dr. Isabelle SCHEID is a psychiatrist. She obtained the medical school competition at Paris V Faculty and then the residency competition in psychiatry in Paris.
Former head of clinic at Paris hospitals within the psychiatry department of Hotel Dieu Hospital, Dr. Isabelle SCHEID is also holder of a Master 2 in neuroscience, where she worked on the genetic factors involved in ASD.
As an adult psychiatrist, Dr. Isabelle SCHEID has worked for 6 years at the Expert Center for ASD SDI adults at Hôpital Chenevier, including 2 years of shared time with the Expert Center for ASD SDI children and adolescents at Hôpital Robert Debré. She was coordinator for 2 years of the network of Expert Centers for ASD SDI France. Dr. SCHEID has contributed to several articles on ASD. Dr. SCHEID has also worked for 2 years at the Shared Care Facility 94. These various positions have allowed Dr. SCHEID to acquire experience in adult psychopathology, particularly in ASD but also in anxiety and post-traumatic disorders.
Dr. SCHEID uses her experience and knowledge about ASD to offer evaluations for all adults (starting from 18 years old) who are questioning this diagnosis for themselves.


</p>
                    `,
        zeyad: `
<h4>Biography &amp; Career</h4>
    <p>
        Dr. Zeyad AL SALLOUM is a psychiatrist. He practices as a Hospital Practitioner at a public institution in Paris. With a solid experience in hospital settings acquired at psychiatric emergencies, in hospitalization, and at the Medical-Psychological Center (CMP), he has also worked in child psychiatry and holds practical experience in transcultural psychiatry.
    </p>

    <p>
        In his practice, he favors a global approach combining psychoeducation and psychosocial rehabilitation, with a particular interest in the management of anxiety disorders, bipolar disorders, and psychotrauma.
    </p>

    <h4>Qualifications &amp; Trainings</h4>
    <ul>
        <li>DIU of Psychiatry for General Practitioners – Paris Diderot University</li>
        <li>DU of Adolescent Psychiatry – Mutualist Institute Montsouris</li>
        <li>Medical Degree – University of Homs (Syria)</li>
    </ul>

    <h4>Consultation Languages</h4>
    <ul>
        <li>French</li>
        <li>English</li>
        <li>Lebanese Arabic</li>
    </ul>
`,

        laura: `
            <h4>Biography &amp; Career</h4>
            <p>Laura GUEDJ is a clinical psychologist. Holder of a Master's degree in Clinical and Empirical Psychology from Paris Ouest Nanterre la Défense University in 2016, she has subsequently completed a specialization training in CBT (Cognitive Behavioral Therapy) at the AFTCC (French Association of CBT). She is also trained in ACT (Acceptance and Commitment Therapy).

During two years, she worked in the field of Research at the Hospital-University Service at Sainte-Anne Hospital and wrote several articles on motor control in schizophrenia.
In parallel, she worked in an early intervention medical-social service addressing young adults with psychotic disorders or she practices CBT and co-facilitates a social cognition group for young adults suffering from psychotic disorders. She offers support and psychoeducation to the families of patients.
She also works in a private practice where she practices CBT and ACT therapy for all clients.
These various positions have allowed Laura GUEDJ to acquire experience in the psychopathology of adults, particularly in psychotic disorders but also in anxiety-depressive disorders and emotion management.</p>
        `,

        doina: `
<h4>Biography &amp; Career</h4>
<p>
As a clinical psychologist specializing in neurodevelopmental disorders (ASD and ADHD), Ms. Doïna Mazière supports children, adolescents, adults, and their families throughout their journey. Having begun her career at the Espas Iddees practice—which specializes in supporting individuals with autism—she now divides her time between her private practice and a specialized educational institute (IME) for children and adolescents with ASD. She conducts psychometric testing and diagnostic evaluations (for ASD, ADHD, and learning disabilities), as well as providing psychological consultations, cognitive-behavioral therapy (CBT), cognitive remediation, parental guidance, and support aimed at developing social skills, communication, and autonomy. Her approach focuses primarily on understanding each individual's unique functioning in order to offer personalized support tailored to their specific needs.
</p>
        `,

rolland: `
    <h4>Biography &amp; Career</h4>
    <p>
        Dr. Franck Rolland is a specialist in psychiatry. He has been practicing for several years at the hospital, contributing to the public service. He has the particularity of having completed a university training in clinical psychology, which also grants him the title of clinical psychologist. This dual training allows him to articulate a rigorous medical approach, with or without pharmacological prescription, with an in-depth understanding of psychological processes and psychotherapies. He is also trained in cognitive and behavioral therapies (CBT), medical hypnosis, and motivational interviewing. <strong>Available on Saturdays.</strong>
    </p>

    <h4>Proposed Consultations</h4>
<ul>
    <li>General psychiatry (diagnosis, monitoring, and treatment of psychiatric disorders)</li>
    <li>Diagnostic assessment of adult ADHD</li>
    <li>Smoking cessation and support for quitting</li>
    <li>Support for loved ones of individuals with psychiatric disorders or addictions</li>
    <li>Professional burnout</li>
    <li>Psychotherapy (CBT, hypnosis, motivational interviewing, supportive therapy)</li>
    <li>Support through life transitions (life events, career choices, addiction, etc.)</li>
</ul>

    <h4>Formation</h4>
    <ul>
        <li>Psychiatrist</li>
        <li>Clinical psychologist</li>
        <li>Cognitive Behavioral Therapist (AFTCC)</li>
        <li>Trained in medical hypnosis</li>
        <li>Motivational Interviewing – Level 2 (AFDEM)</li>
    </ul>

    <p>
Dr. Franck Rolland offers a consultation space that is respectful of and attentive to the specific needs of LGBTQIA+ individuals.    </p>
`,
        claire: `
            <h4>Biography &amp; Course</h4>
            <p>As a neuropsychologist holding a Master’s degree in Cognitive Psychology and Neuropsychology (University of Franche-Comté, Besançon), I work with children, adolescents, and adults.

I conduct comprehensive neuropsychological assessments for children and adolescents to gain a better understanding of their cognitive and emotional profiles. These assessments cover areas such as intellectual ability (IQ), attention, memory, and executive functions, and are part of a diagnostic evaluation process (e.g., for ADHD, learning disabilities, or high intellectual potential). I also offer support tailored to the child's or adolescent's specific needs, as well as parental guidance and support for parents.

With adults, I conduct a variety of neuropsychological assessments:
comprehensive assessment, memory and attention evaluation, post-assessment follow-up

Memory: assessment/support

Bipolar disorder

Multiple sclerosis,

Stroke, Parkinson’s disease, traumatic brain injury...

...resulting from a lesion (stroke, traumatic brain injury, etc.) or associated with multiple sclerosis. Individualized support may be offered following the assessment, as well as parenting support for parents experiencing difficulties with their child.</p>
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
            title: "Book an appointment with our specialists",
            cards: [
                {
                    nom: "Dr. Isabelle Scheid",
                    specialite: " Psychiatrist • ASD",
                    lien: "https://www.doctolib.fr/psychiatre/paris/isabelle-scheid-paris"
                },
                {
                    nom: "Dr. Franck Rolland",
                    specialite: " Psychiatrist • ADHD",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                },
                {
                    nom: "Ms. Doïna Mazière",
                    specialite: "Psychologist",
                    lien: "https://www.doctolib.fr/psychologue/paris/doina-maziere"
                },
            ]
        },

        avis: {
            title: "Book an appointment with our specialist",
            cards: [
                {
                    nom: "Dr. Nora Hamdani",
                    specialite: " Psychiatrist",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                }
            ]
        },

        suivi: {
            title: "Book an appointment with our specialists",
            cards: [
                {
                    nom: "Dr. Zeyad Al Salloum",
                    specialite: " Psychiatrist",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                },
                {
                    nom: "Dr. Franck Rolland",
                    specialite: " Psychiatrist",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                },

                {
                    nom: "Dr. Nora Hamdani",
                    specialite: " Psychiatrist",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                }
            ]
        },

        therapie: {
            title: "Book an appointment with our specialists",
            cards: [
                {
                    nom: "Dr. Franck Rolland",
                    specialite: " Psychiatrist • CBT / Hypnosis",
                    lien: "https://www.doctolib.fr/psychiatre/paris/nora-hamdani"
                },
                {
                    nom: "Ms. Doïna Mazière",
                    specialite: "Psychologist • CBT",
                    lien: "https://www.doctolib.fr/psychologue/paris/doina-maziere"
                },
                {
                    nom: "Ms. Céline Hebbache",
                    specialite: "Psychologist • CBT",
                    lien: "https://www.doctolib.fr/psychologue/paris/celine-hebbache"
                },
                {
                    nom: "Ms. Laura Guedj",
                    specialite: "Psychologist • CBT",
                    lien: "https://www.doctolib.fr/psychologue/paris/laura-guedj"
                }
            ]
        },

        groupes: {
    title: "Book an appointment",
    cards: [
        {
            nom: "Ms. Doïna Mazière",
            specialite: "Neuropsychologist • Memory Consultations",
            lien: "https://www.doctolib.fr/psychologue/paris/doina-maziere"
        }
    ]
},

        memoire: {
    title: "Book an appointment",
    cards: [
        {
            nom: "Ms. Claire Saget",
            specialite: "Neuropsychologist • Memory Consultations",
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
                                View Schedule
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        `
                        : `
                            <span class="btn btn-doctolib-sub disabled">
                                Schedule coming soon
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