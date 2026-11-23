// Toutes les données du CV au même endroit : modifier ce fichier suffit
// pour mettre le site à jour.

export const identity = {
  name: "Théo STROBBE",
  title: "Recherche d’une alternance en développement informatique",
  availability: "à partir de septembre 2027",
  city: "Billy-Berclau",
  email: "strobbetheo@gmail.com",
  linkedin: "https://www.linkedin.com/in/théostrobbe",
  github: "https://github.com/Aanimaa",
  licence: "Permis B · véhiculé",
};

export const languages = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java/Spring",
  "Python/Flask",
  "PHP/Laravel",
  "PostgreSQL",
  "React/Next",
  "Bash",
  "Angular",
  "Go"
];

export const tools = ["JetBrains", "Git", "Vercel"];

export const projects = [
  {
    name: "Portfolio",
    description: "Portfolio personnel réalisé avec React, déployé sur Vercel.",
    url: "https://portfoliostrobbetheo.vercel.app",
    tags: ["React", "Vercel"],
  },
  {
    name: "Bomberman",
    description: "Application de jeu développée avec JavaFX.",
    tags: ["Java", "JavaFX"],
  },
  {
    name: "UniqDay",
    description: "Site d’événementiel créé en équipe en HTML/CSS.",
    tags: ["HTML", "CSS", "Travail d’équipe"],
  },
  {
    name: "Smiler",
    description: "Site de cosmétique réalisé en projet personnel.",
    url: "https://smiler-web.vercel.app/",
    tags: ["Projet personnel"],
  },
  {
    name: "Site de streaming",
    description: "Gestion de films et création d’un site de streaming.",
    tags: ["PHP", "Laravel"],
  },
];

export const experiences = [
  {
    role: "Développement d’une application web",
    org: "Badminton Club Billy-Berclau",
    points: [
      "Recueillir et formaliser les besoins du client.",
      "Proposer la solution technique la plus adaptée (coût et délai).",
      "Réaliser la solution et respecter les engagements.",
      "Fournir le livrable ainsi que la documentation d’utilisation.",
    ],
  },
  {
    role: "Entraîneur bénévole",
    org: "Club de badminton (Billy-Berclau)",
    points: [
      "Transmission des règles, des techniques et des valeurs sportives : respect, esprit d’équipe, persévérance.",
    ],
  },
  {
    role: "Caissier",
    org: "Aldi",
    points: [
      "Accueil des clients, gestion des encaissements et résolution rapide des petits soucis en caisse.",
    ],
  },
];

export const education = [
  {
    period: "2024 – 2026",
    label: "BUT Informatique",
    place: "IUT de Lens",
  },
  {
    period: "2024",
    label: "Baccalauréat général",
    place: "Spécialités maths et numérique et sciences de l’informatique",
  },
  {
    period: "2023",
    label: "Formation de base BAFA",
    place: "",
  },
];

export const spokenLanguages = ["Anglais technique", "Espagnol"];

export const hobbies = [
  "Musculation",
  "Badminton",
  "Jeux vidéo",
  "Intelligence artificielle",
];
