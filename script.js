

const experiences = [
    {
        lieu: "Centre Hospitalier Alpes Isère (CHAI)",
        periode: "2025 - 2026",
        titre: "Stagiaire Développeur",
        missions: "Conception d'un script Python d'alerte réseau (SMTP) et maintenance de parc applicatif.",
        blocs: "Bloc 1 & 3"
    }
];

const projets = [
    {
        titre: "Suivi Scolaire (Pronote Style)",
        stack: "React / Node.js",
        description: "Dashboard complet pour la gestion pédagogique des élèves et des notes.",
        ref: "Bloc 2 : Conception Applicative"
    },
    {
        titre: "Gestion Hôtelière",
        stack: "Node.js / Semantic-UI",
        description: "Application d'équipe pour le suivi des réservations et du personnel.",
        ref: "Bloc 2 : Travail d'équipe"
    },
    {
        titre: "Gestion Client CRUD",
        stack: "React.js",
        description: "Application dynamique de gestion de base de données clients.",
        ref: "Bloc 2 : Développement"
    },
    {
        titre: "Todo List Java",
        stack: "Java (POO)",
        description: "Application bureau développée en autonomie.",
        ref: "Bloc 2 : POO"
    }
];

function init() {
    const stageGrid = document.getElementById('stages-grid');
    const projetGrid = document.getElementById('projets-grid');

    stageGrid.innerHTML = experiences.map(exp => `
        <div class="card">
            <span class="card-badge">${exp.periode}</span>
            <h3>${exp.lieu}</h3>
            <p>${exp.missions}</p>
            <div class="card-footer">${exp.blocs}</div>
        </div>
    `).join('');

    projetGrid.innerHTML = projets.map(p => `
        <div class="card">
            <span class="card-badge">${p.stack}</span>
            <h3>${p.titre}</h3>
            <p>${p.description}</p>
            <div class="card-footer">${p.ref}</div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', init);