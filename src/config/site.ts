// Réglages de marque centralisés.
// Le nom et le logo sont provisoires tant que la recherche juridique (BOIP / TMview / BCE)
// et le dessin vectoriel final ne sont pas faits : tout changer ici suffit.

export const brand = {
  name: 'SAGE',
  mark: '.', // le point final, signe de caractère
  descriptor: 'Creative Studio',
  signature: 'Creative thinking. Digital impact.',
  manifesto: ['Think.', 'Create.', 'Grow.', 'Evolve.'],
  email: 'hello@example.com', // à remplacer par l'adresse pro
  location: 'Belgique',
};

export const nav = [
  { label: 'Studio', href: '#studio' },
  { label: 'Expertises', href: '#expertises' },
  { label: 'Projets', href: '#projets' },
  { label: 'Méthode', href: '#methode' },
];

export const pillars = [
  {
    letter: 'S',
    name: 'Strategy',
    fr: 'Stratégie',
    verbs: 'Penser, cadrer, positionner.',
    text: "Positionnement, audit de communication, stratégie marketing et plan d'action. On décide où aller avant de produire quoi que ce soit.",
    shape: 'leaf',
    color: 'var(--sage-soft)',
  },
  {
    letter: 'A',
    name: 'Art Direction',
    fr: 'Direction artistique',
    verbs: 'Créer, mettre en scène, incarner.',
    text: 'Identité visuelle, branding, storytelling et campagnes. Une image qui vous ressemble et qui se reconnaît au premier coup d’œil.',
    shape: 'half',
    color: 'var(--sage-ochre)',
  },
  {
    letter: 'G',
    name: 'Growth',
    fr: 'Contenu & visibilité',
    verbs: 'Faire rayonner, engager, développer.',
    text: 'Social media, création de contenu, influence et UGC, acquisition. De la visibilité qui sert vos objectifs, pas seulement vos statistiques.',
    shape: 'arch',
    color: 'var(--sage-rust)',
  },
  {
    letter: 'E',
    name: 'Evolution',
    fr: 'Innovation & IA',
    verbs: 'Innover, optimiser, faire évoluer.',
    text: 'IA, automatisation, outils sur mesure et vibe coding. Gagner du temps sur ce qui se répète pour en garder sur ce qui compte.',
    shape: 'dot',
    color: 'var(--sage-taupe)',
  },
];

export const method = [
  {
    step: '01',
    title: 'Comprendre',
    text: 'Un échange, puis un diagnostic : votre marché, votre image actuelle, ce qui freine.',
  },
  {
    step: '02',
    title: 'Décider',
    text: 'Une feuille de route claire, chiffrée et priorisée. Vous savez ce qu’on fait, pourquoi et pour combien.',
  },
  {
    step: '03',
    title: 'Créer',
    text: 'Identité, contenus, campagnes, outils : on produit, avec des points de validation courts.',
  },
  {
    step: '04',
    title: 'Faire grandir',
    text: 'On mesure, on ajuste, on automatise ce qui peut l’être. La marque continue d’avancer.',
  },
];
