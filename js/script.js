const projets = [
    {
        titre: "Application GSB",
        description: "Gestion des frais de visite des délégués (PHP/MVC)",
        tags: ["PHP", "MySQL", "Architecture MVC"]
    },
    {
        titre: "Support Tickets",
        description: "Application de gestion d'incidents (C# .NET)",
        tags: ["C#", "SQL Server", "B1"]
    }
];

const container = document.getElementById('project-container');

projets.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${p.titre}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map(t => `<span>#${t}</span>`).join(' ')}</div>
    `;
    container.appendChild(card);
});

// Petit effet de scroll fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const veilles = [
    {
        sujet: "L'Intelligence Artificielle dans le cycle de vie du logiciel",
        description: "Étude de l'impact de GitHub Copilot et des LLM sur la productivité et la qualité du code (Clean Code).",
        lien: "#" // Lien vers ton dossier PDF ou un article
    },
    {
        sujet: "Architecture Micro-services & Serverless",
        description: "Comment le passage du monolithique au micro-service transforme la scalabilité des applications web.",
        lien: "#"
    }
];

const veilleContainer = document.getElementById('veille-container');

veilles.forEach(v => {
    const article = document.createElement('div');
    article.className = 'card';
    article.innerHTML = `
        <span class="tag-sujet">Sujet de Veille</span>
        <h3>${v.sujet}</h3>
        <p>${v.description}</p>
        <a href="${v.lien}" target="_blank" style="color:var(--primary); text-decoration:none; font-weight:bold;">Lire la synthèse →</a>
    `;
    veilleContainer.appendChild(article);
});