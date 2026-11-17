// Articles « The SAGE Mindset » : un point de vue par lettre, écrit à la première personne.
// Brouillons rédigés pour Julie, à relire et ajuster avant mise en ligne.

export type Article = {
  letter: 'S' | 'A' | 'G' | 'E';
  slug: string;
  pillar: string;
  title: string;
  em: string;
  intro: string;
  sections: { h: string; p: string[] }[];
  takeaway: string;
  services: string[];
};

export const articles: Article[] = [
  {
    letter: 'S',
    slug: 's',
    pillar: 'Strategy',
    title: 'En 2027, la stratégie',
    em: "n'est plus un document. C'est une boussole.",
    intro:
      "On n'a jamais pu publier aussi vite et aussi facilement. Une idée le matin, un Reel le soir, une campagne en une semaine. Et c'est justement pour ça que la stratégie compte plus que jamais : quand produire ne coûte presque plus rien, ce qui fait la différence, c'est de savoir quoi produire, et pourquoi.",
    sections: [
      {
        h: 'Le vrai luxe, c’est la clarté',
        p: [
          "Je rencontre beaucoup de marques qui font « un peu de tout » : un post par-ci, une story par-là, un nouveau réseau parce que tout le monde en parle. Elles s'épuisent sans avancer. Le problème n'est presque jamais le manque d'idées, c'est le manque de direction.",
          "Pour moi, une bonne stratégie tient en quelques phrases : à qui on parle, ce qu'on veut qu'il pense de nous, et ce qu'on refuse de faire. Si l'équipe peut la répéter sans la relire, elle fonctionne.",
        ],
      },
      {
        h: 'Moins de canaux, mieux tenus',
        p: [
          "En 2027, être partout ne veut plus rien dire. Je préfère accompagner une marque sur deux plateformes où elle est vraiment à sa place plutôt que sur cinq où elle survit. La régularité et la cohérence battent toujours le volume.",
        ],
      },
      {
        h: 'Mesurer ce qui compte vraiment',
        p: [
          "Les likes rassurent, mais ils ne paient pas les factures. Je préfère regarder les messages reçus, les demandes de devis, les candidatures, les clients qui reviennent. Une stratégie se juge à ce qu'elle change dans votre activité, pas à la taille de vos statistiques.",
        ],
      },
    ],
    takeaway: 'Avant de produire, décider. Le reste devient beaucoup plus simple.',
    services: ['strategy-consulting', 'community-management'],
  },
  {
    letter: 'A',
    slug: 'a',
    pillar: 'Art Direction',
    title: 'Quand tout le monde peut faire de jolies images,',
    em: 'le goût devient rare.',
    intro:
      "Aujourd'hui, n'importe qui peut générer un visuel propre en quelques secondes. C'est une excellente nouvelle pour la créativité, et un vrai piège pour les marques : à force d'utiliser les mêmes outils, les mêmes tendances et les mêmes filtres, tout finit par se ressembler.",
    sections: [
      {
        h: 'Le beau ne suffit plus',
        p: [
          "Une image peut être parfaite et ne rien raconter. La direction artistique, ce n'est pas faire joli : c'est faire des choix. Une couleur qu'on assume, une façon de cadrer, un ton, une matière. Ce sont ces choix répétés qui font qu'on reconnaît une marque avant même de lire son nom.",
        ],
      },
      {
        h: 'Le retour du vrai',
        p: [
          "Plus les images deviennent lisses, plus le public cherche du réel. De vraies personnes, de vrais lieux, de vrais gestes, des coulisses. Je crois beaucoup à une esthétique soignée mais sincère, où l'on sent qu'il y a des humains derrière.",
          "L'IA a sa place dans le processus : pour tester des pistes, construire un moodboard, aller plus vite. Mais je ne présenterai jamais un visuel généré comme une photo de votre équipe ou de votre produit.",
        ],
      },
      {
        h: 'La cohérence, c’est ce qui rassure',
        p: [
          "Une identité forte, ce n'est pas un logo. C'est un ensemble de règles simples que tout le monde peut appliquer au quotidien : des templates, une palette, une manière d'écrire. C'est ce qui permet à une petite structure de paraître aussi solide qu'une grande.",
        ],
      },
    ],
    takeaway: "Faire des choix, et s'y tenir. C'est ça, une identité.",
    services: ['branding-art-direction', 'content-creation'],
  },
  {
    letter: 'G',
    slug: 'g',
    pillar: 'Growth',
    title: 'La croissance ne s’achète plus,',
    em: 'elle se mérite.',
    intro:
      "Pendant longtemps, grandir en ligne voulait dire payer pour être vu. En 2027, la visibilité coûte cher et l'attention est fragile. Ce qui fait vraiment grandir une marque, c'est la confiance qu'elle construit, contenu après contenu.",
    sections: [
      {
        h: 'Les gens font confiance aux gens',
        p: [
          "C'est pour ça que l'UGC et les créateurs de contenu ont pris autant de place. Une personne qui utilise vraiment votre produit et en parle avec ses mots aura souvent plus d'impact qu'une publicité parfaite.",
          "Je privilégie les créateurs crédibles plutôt que les gros chiffres. Une communauté plus petite mais engagée, qui ressemble à vos clients, vaut mieux qu'une audience énorme qui ne vous concerne pas.",
        ],
      },
      {
        h: 'Le format sert l’objectif',
        p: [
          "Face cam pour créer un lien, micro trottoir pour faire parler le terrain, packshot pour mettre le produit en valeur, aftermovie pour prolonger un événement, vidéo éducative pour installer votre expertise. Il n'y a pas de bon format en soi, seulement des formats adaptés à ce que vous voulez provoquer.",
        ],
      },
      {
        h: 'La patience comme stratégie',
        p: [
          "Une communauté se construit dans la durée, en répondant, en remerciant, en tenant ses promesses. Les marques qui grandissent le mieux sont rarement celles qui font le plus de bruit, ce sont celles qui restent constantes.",
        ],
      },
    ],
    takeaway: 'Être choisi plutôt qu’être vu. Et pour ça, être crédible.',
    services: ['content-creation', 'influence-campaigns', 'community-management'],
  },
  {
    letter: 'E',
    slug: 'e',
    pillar: 'Evolution',
    title: "L'IA ne remplace pas les équipes,",
    em: 'elle leur rend du temps.',
    intro:
      "En 2027, presque toutes les entreprises que je rencontre ont « essayé l'IA ». Peu l'utilisent vraiment au quotidien. Entre la curiosité, la peur de mal faire et le manque de temps pour apprendre, beaucoup d'équipes passent à côté de ce que ces outils peuvent leur apporter.",
    sections: [
      {
        h: 'Commencer par les tâches qui fatiguent',
        p: [
          "Je ne crois pas à l'IA qui fait tout à votre place. Je crois à l'IA qui vous débarrasse de ce qui vous épuise : reformuler un e-mail pour la dixième fois, résumer une réunion, préparer une première version, trier des informations. Le temps gagné, on le remet là où l'humain fait la différence.",
        ],
      },
      {
        h: 'Apprendre à bien demander',
        p: [
          "La qualité d'une réponse dépend énormément de la qualité de la question. C'est souvent là que tout se joue : donner le bon contexte, le bon exemple, le bon niveau d'exigence. Ça s'apprend vite, à condition de partir des vrais cas de votre métier, pas d'exemples théoriques.",
        ],
      },
      {
        h: 'Garder la main',
        p: [
          "Utiliser l'IA, ce n'est pas lui confier son jugement. On relit, on vérifie, on fait attention aux données qu'on partage. Mon rôle, c'est d'aider les équipes marketing, commerciales, RH ou administratives à adopter ces outils sereinement, avec des règles claires et du bon sens.",
        ],
      },
    ],
    takeaway: "Moins de tâches répétitives, plus de temps pour ce qui compte.",
    services: ['ai-training-optimization'],
  },
];
