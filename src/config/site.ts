// Contenus et réglages centralisés du site.
// Nom et logo provisoires tant que la recherche juridique et le lettrage final ne sont pas faits.

export const brand = {
  name: 'SAGE',
  mark: '.',
  descriptor: 'Creative Studio',
  signature: 'Creative thinking. Digital impact.',
  manifesto: ['Think.', 'Create.', 'Grow.', 'Evolve.'],
  email: 'hello@example.com', // à remplacer par l'adresse pro
  location: 'Belgique',
  founder: 'Julie',
};

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'Mindset', href: '/#mindset' },
  { label: 'Projets', href: '/#projets' },
  { label: 'Studio', href: '/studio' },
];

export type Service = {
  slug: string;
  num: string;
  title: string;
  short: string;
  promise: string;
  intro: string;
  items: string[];
  highlights: string[];
  pillars: string[];
  tone: 'forest' | 'ivory' | 'ochre' | 'soft' | 'rust' | 'taupe';
  img: string;
  note?: string;
};

export const services: Service[] = [
  {
    slug: 'community-management',
    num: '01',
    title: 'Community Management',
    short: 'Vos réseaux, tenus avec régularité et intention.',
    promise: 'Des comptes vivants, cohérents et suivis, sans que vous ayez à y penser tous les jours.',
    intro:
      "La gestion quotidienne de vos réseaux sociaux : planifier, publier, répondre, animer et mesurer. L'objectif : une présence régulière qui ressemble à votre marque et qui sert vos objectifs.",
    items: [
      'Gestion des réseaux sociaux',
      'Modération des commentaires et messages',
      'Animation de communautés',
      'Veille concurrentielle et social media',
      'Création de calendriers éditoriaux',
      'Programmation des publications',
      'Analyse des performances et reporting',
    ],
    highlights: ['Calendrier éditorial', 'Modération', 'Reporting'],
    pillars: ['G', 'S'],
    tone: 'forest',
    img: 'social-apps',
  },
  {
    slug: 'content-creation',
    num: '02',
    title: 'Content Creation',
    short: 'Photo, graphisme, vidéo : du contenu qui arrête le scroll.',
    promise: 'Des contenus beaux, utiles et adaptés à chaque plateforme.',
    intro:
      "La production de vos contenus, de l'idée à la diffusion : photo, graphisme, vidéo courte ou longue, UGC. Pour les tournages et shootings, je m'entoure de partenaires de confiance (vidéastes, studios photo, graphistes) et je garde la direction créative.",
    items: [
      'Photographie',
      'Création graphique',
      'Vidéo courte : Reels, TikTok, Shorts',
      'Vidéo longue',
      'Formats verticaux et horizontaux',
      'UGC',
      'Création de contenus pour les réseaux sociaux',
      'Couverture de campagnes et événements',
    ],
    highlights: ['Reels & TikTok', 'Photo', 'UGC'],
    pillars: ['A', 'G'],
    tone: 'ochre',
    img: 'julie-filming',
  },
  {
    slug: 'strategy-consulting',
    num: '03',
    title: 'Strategy & Consulting',
    short: 'Savoir où aller avant de produire quoi que ce soit.',
    promise: 'Une direction claire, des priorités et un plan que votre équipe peut suivre.',
    intro:
      "Prendre du recul sur votre communication : comprendre ce qui fonctionne, ce qui freine, et définir où concentrer vos efforts. Ponctuellement (audit) ou dans la durée (accompagnement).",
    items: [
      'Audit marketing et communication',
      'Positionnement de marque',
      'Stratégie social media',
      'Stratégie digitale',
      'Ligne éditoriale',
      'Storytelling',
      'Conseil marketing et accompagnement stratégique',
    ],
    highlights: ['Audit', 'Positionnement', 'Ligne éditoriale'],
    pillars: ['S'],
    tone: 'ivory',
    img: 'duo-work',
  },
  {
    slug: 'branding-art-direction',
    num: '04',
    title: 'Branding & Art Direction',
    short: 'Une image qui se reconnaît au premier coup d’œil.',
    promise: 'Un univers visuel cohérent, du logo au dernier post.',
    intro:
      "Construire ou faire évoluer l'image de votre marque : identité, univers graphique, direction artistique et outils pour rester cohérent au quotidien. Le dessin d'identité est réalisé avec des graphistes partenaires, sous ma direction artistique.",
    items: [
      'Identité visuelle',
      'Direction artistique',
      'Univers graphique',
      'Supports de communication',
      'Templates',
      'Concepts créatifs',
      'Cohérence visuelle et éditoriale',
    ],
    highlights: ['Identité', 'DA', 'Templates'],
    pillars: ['A', 'S'],
    tone: 'soft',
    img: 'swatches',
  },
  {
    slug: 'influence-campaigns',
    num: '05',
    title: 'Influence & Campaigns',
    short: 'Les bons créateurs, le bon brief, une campagne suivie.',
    promise: 'Des collaborations crédibles, bien cadrées et mesurées.',
    intro:
      "De la stratégie d'influence au bilan : choisir les bons profils, écrire des briefs qui laissent de la place à la créativité, coordonner les collaborations et analyser ce qu'elles ont vraiment apporté.",
    items: [
      "Stratégie d'influence",
      'Recherche et sélection de créateurs',
      'Briefs créatifs',
      'Coordination des collaborations',
      'Campagnes UGC',
      'Gestion et suivi de campagnes',
      'Analyse des résultats',
    ],
    highlights: ['Créateurs', 'Briefs', 'UGC'],
    pillars: ['G', 'S'],
    tone: 'rust',
    img: 'creator-red',
  },
  {
    slug: 'ai-training-optimization',
    num: '06',
    title: 'AI Training & Optimization',
    short: "L'IA utile au quotidien, pour vos équipes.",
    promise: 'Des équipes plus autonomes avec les outils d’IA, et du temps gagné sur ce qui se répète.',
    intro:
      "Former et accompagner les professionnels pour utiliser l'intelligence artificielle efficacement dans leur travail. J'interviens notamment auprès des équipes marketing, commerciales, RH et administratives, avec des ateliers adaptés à leur métier.",
    items: [
      "Formation à l'utilisation de l'intelligence artificielle",
      "Initiation aux outils d'IA générative",
      'Formation au prompting',
      'Ateliers adaptés aux métiers et départements',
      'Optimisation des processus de travail',
      'Identification des tâches pouvant être automatisées',
      "Accompagnement des équipes dans l'adoption de l'IA",
    ],
    highlights: ['Ateliers', 'Prompting', 'Process'],
    pillars: ['E'],
    tone: 'taupe',
    img: 'design-system',
    note: 'Formation et conseil uniquement : je ne développe pas de sites ni de logiciels pour mes clients.',
  },
];

export const pillars = [
  {
    letter: 'S',
    name: 'Strategy',
    verbs: 'Penser, analyser, structurer et positionner.',
    text: "Chaque projet commence par comprendre : votre marché, votre public, ce qui vous rend différent. On ne produit rien sans savoir pourquoi.",
    shape: 'leaf',
    color: 'var(--sage-soft)',
  },
  {
    letter: 'A',
    name: 'Art Direction',
    verbs: 'Imaginer, créer et donner une identité forte.',
    text: "Une marque se reconnaît avant même d'être lue. La direction artistique donne une forme cohérente et singulière à tout ce que vous montrez.",
    shape: 'half',
    color: 'var(--sage-ochre)',
  },
  {
    letter: 'G',
    name: 'Growth',
    verbs: "Développer la visibilité, l'engagement et la croissance.",
    text: 'Être vu ne suffit pas : il faut être choisi. Contenus, communauté et collaborations servent des objectifs concrets.',
    shape: 'arch',
    color: 'var(--sage-rust)',
  },
  {
    letter: 'E',
    name: 'Evolution',
    verbs: 'Innover, optimiser et accompagner la transformation des méthodes de travail.',
    text: "Les outils changent vite. L'IA et l'optimisation des process permettent de gagner du temps sur ce qui se répète, pour en garder sur ce qui compte.",
    shape: 'dot',
    color: 'var(--sage-taupe)',
  },
];

export const steps = [
  { num: '01', title: 'On se parle', text: 'Un premier échange gratuit pour comprendre votre projet, vos objectifs et vos contraintes.' },
  { num: '02', title: 'Je vous propose', text: 'Une proposition claire : ce qu’on fait, pourquoi, dans quels délais et pour quel budget.' },
  { num: '03', title: 'On crée', text: 'Production avec des points de validation courts. Un seul interlocuteur : moi.' },
  { num: '04', title: 'On ajuste', text: 'On mesure, on apprend, on améliore. La marque continue d’avancer.' },
];

export const partners = [
  { label: 'Graphic designers', sticker: 'ochre' },
  { label: 'Vidéastes & monteurs', sticker: 'rust' },
  { label: 'Studios photo', sticker: 'soft' },
  { label: 'Créateurs de contenu & UGC', sticker: 'ivory' },
];

// Parcours — à valider par Julie avant mise en ligne
export const journey = [
  { when: '2020 — 2024', what: 'Bachelier Marketing – International Business', where: 'EPHEC' },
  { when: 'Expériences', what: 'Social media, influence, contenu, business development et marketing digital', where: 'YourStory · ENEON/Idweaver · Socialsky · Kontnu' },
  { when: '2027', what: 'Lancement de SAGE Creative Studio', where: 'Belgique' },
];
