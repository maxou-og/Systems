// Contenu statique de référence de la Carte système (V1).
// Codé en dur pour livrer la MVP vite — migration Supabase prévue ensuite.

export type Framework = {
  titre: string
  champs: string[]
}

export type Sujet = {
  nom: string
  resume: string
  etapes: string[]
  framework: Framework
  proTip: string
}

export type Bloc = {
  nom: string
  accroche: string
  sujets: Sujet[]
}

export const blocs: Bloc[] = [
  {
    nom: 'Idéation',
    accroche: 'Ne jamais manquer d’idées',
    sujets: [
      {
        nom: 'Tendances',
        resume:
          'Repérer les sujets qui montent avant qu’ils saturent, pour surfer la vague au bon moment.',
        etapes: [
          'Surveille 5 à 10 comptes de référence de ta niche chaque semaine.',
          'Note les formats et sujets qui dépassent x3 leurs vues habituelles (outliers).',
          'Croise avec les recherches vidIQ (mots-clés et reels outliers).',
          'Garde uniquement les tendances compatibles avec tes piliers.',
          'Adapte la tendance à ton angle, ne copie jamais tel quel.',
        ],
        framework: {
          titre: 'Grille de veille hebdo',
          champs: [
            'Tendance repérée',
            'Source / compte',
            'Performance (x vues normales)',
            'Compatible avec quel pilier ?',
            'Mon angle unique',
          ],
        },
        proTip:
          'Une tendance a une fenêtre de 2 à 3 semaines : publie vite ou laisse passer.',
      },
      {
        nom: 'Hooks',
        resume:
          'Capturer l’attention dans les 3 premières secondes, le moment qui décide si on te regarde ou te scrolle.',
        etapes: [
          'Identifie la tension : peur, curiosité, désir ou surprise.',
          'Écris 5 variantes de hook pour chaque vidéo.',
          'Mets la promesse ou le résultat dès la 1re seconde.',
          'Teste un hook visuel ET un hook verbal en même temps.',
        ],
        framework: {
          titre: 'Hook en 3 temps',
          champs: [
            'Tension (le problème / la curiosité)',
            'Promesse (ce que tu vas montrer)',
            'Preuve (pourquoi te croire)',
          ],
        },
        proTip:
          'Si le hook ne marche pas seul, hors contexte, il ne marchera pas dans le feed.',
      },
      {
        nom: 'Formats',
        resume:
          'Choisir le bon contenant (talking head, vlog, tuto, listicle…) pour servir ton message.',
        etapes: [
          'Liste les 3-4 formats que tu sais produire vite et bien.',
          'Associe chaque pilier à 1 ou 2 formats.',
          'Décline un même sujet en plusieurs formats pour tester.',
          'Garde les formats qui combinent plaisir à produire et performance.',
        ],
        framework: {
          titre: 'Matrice format × pilier',
          champs: [
            'Pilier',
            'Format principal',
            'Format secondaire',
            'Durée cible',
            'Effort de production (1-5)',
          ],
        },
        proTip:
          'Un format reproductible bat un format parfait : la régularité gagne.',
      },
      {
        nom: 'Angles',
        resume:
          'Trouver la prise de vue unique sur un sujet déjà vu, pour te démarquer.',
        etapes: [
          'Prends un sujet et liste 10 angles différents.',
          'Cherche l’angle contre-intuitif ou personnel.',
          'Vérifie que l’angle tient en une phrase.',
          'Préfère l’angle qui crée du débat ou de l’émotion.',
        ],
        framework: {
          titre: 'Générateur d’angles',
          champs: [
            'Sujet de base',
            'Angle débutant',
            'Angle expert',
            'Angle contre-intuitif',
            'Angle personnel / vécu',
          ],
        },
        proTip: 'Le même sujet sous 5 angles = 5 vidéos, pas 1.',
      },
    ],
  },
  {
    nom: 'Stratégie',
    accroche: 'Planifier avec précision',
    sujets: [
      {
        nom: 'Piliers',
        resume:
          'Définir 3 à 5 thématiques récurrentes qui structurent tout ton contenu et ton image.',
        etapes: [
          'Croise tes passions, ton expertise et la demande de l’audience.',
          'Limite-toi à 3-5 piliers maximum.',
          'Vérifie que chaque pilier peut nourrir 20+ vidéos.',
          'Répartis ton calendrier entre les piliers.',
        ],
        framework: {
          titre: 'Définition d’un pilier',
          champs: [
            'Nom du pilier',
            'Promesse pour l’audience',
            'Mon expertise / légitimité',
            'Exemples de 5 sujets',
            '% du calendrier',
          ],
        },
        proTip:
          'Si tu ne peux pas tenir un pilier pendant 1 an, ce n’est pas un pilier.',
      },
      {
        nom: 'Calendrier',
        resume:
          'Planifier quoi publier, quand et où, pour tenir un rythme sans s’épuiser.',
        etapes: [
          'Fixe une cadence réaliste (ex. 3 reels + 1 YouTube / semaine).',
          'Planifie 2 semaines d’avance minimum.',
          'Batch la création par lots (idéation, tournage, montage séparés).',
          'Garde des créneaux libres pour réagir aux tendances.',
        ],
        framework: {
          titre: 'Semaine type',
          champs: [
            'Jour',
            'Plateforme',
            'Pilier',
            'Format',
            'Statut (idée / tourné / monté / publié)',
          ],
        },
        proTip:
          'Mieux vaut 3 publications/semaine tenues sur 6 mois que 7 tenues 2 semaines.',
      },
      {
        nom: 'Funnels',
        resume:
          'Penser le parcours de l’inconnu au fan (TOFU → MOFU → BOFU) pour ne pas créer que du contenu de découverte.',
        etapes: [
          'Classe chaque contenu en TOFU (découverte), MOFU (relation) ou BOFU (conversion).',
          'Vise environ 70/20/10 entre les trois.',
          'Place des appels à l’action adaptés à chaque étage.',
          'Crée des passerelles d’un étage à l’autre.',
        ],
        framework: {
          titre: 'Audit de funnel',
          champs: [
            'Contenu',
            'Étage (TOFU / MOFU / BOFU)',
            'Objectif',
            'Appel à l’action',
            'Étape suivante proposée',
          ],
        },
        proTip:
          'Trop de TOFU = audience qui grossit mais ne s’attache pas. Équilibre.',
      },
      {
        nom: 'Objectifs',
        resume:
          'Fixer des cibles claires et mesurables par trimestre pour piloter au lieu de subir.',
        etapes: [
          'Choisis 1 objectif principal par trimestre (ex. +5 000 abonnés).',
          'Décline en métriques hebdomadaires.',
          'Associe chaque objectif à un levier que tu contrôles.',
          'Revois les chiffres chaque semaine.',
        ],
        framework: {
          titre: 'Objectif trimestriel (OKR léger)',
          champs: [
            'Objectif principal',
            '3 résultats mesurables',
            'Levier sous mon contrôle',
            'Point de contrôle hebdo',
          ],
        },
        proTip:
          'Un objectif sans métrique hebdo est un vœu, pas un objectif.',
      },
    ],
  },
  {
    nom: 'Tournage',
    accroche: 'Capturer un contenu de qualité',
    sujets: [
      {
        nom: 'Setup',
        resume:
          'Préparer un environnement de tournage simple et reproductible (lumière, son, cadre).',
        etapes: [
          'Privilégie une lumière douce face à toi (fenêtre ou softbox).',
          'Investis d’abord dans le son (micro-cravate), avant l’image.',
          'Mémorise un cadrage par défaut que tu peux remonter en 5 min.',
          'Vérifie expo, son et arrière-plan avant CHAQUE prise.',
        ],
        framework: {
          titre: 'Checklist avant prise',
          champs: [
            'Lumière OK ?',
            'Son OK (test 10s) ?',
            'Cadre / arrière-plan propre ?',
            'Batterie + stockage ?',
            'Mode / résolution corrects ?',
          ],
        },
        proTip:
          'Un bon son sur une image moyenne passe ; l’inverse, jamais.',
      },
      {
        nom: 'Scripting',
        resume:
          'Structurer ce que tu vas dire pour être clair et rythmé, sans réciter.',
        etapes: [
          'Écris d’abord le hook et la conclusion.',
          'Liste 3 à 5 points clés au milieu.',
          'Note des mots-clés, pas des phrases entières.',
          'Lis à voix haute pour vérifier le rythme.',
        ],
        framework: {
          titre: 'Script minimal',
          champs: [
            'Hook (3s)',
            'Promesse',
            '3 points clés',
            'Transition / relance',
            'Appel à l’action final',
          ],
        },
        proTip:
          'Scripte le squelette, improvise la chair : ça reste vivant.',
      },
      {
        nom: 'Capture',
        resume: 'Filmer proprement pour limiter le travail au montage.',
        etapes: [
          'Tourne chaque séquence 2 fois (sécurité).',
          'Laisse 1s de marge avant et après chaque réplique.',
          'Varie les plans (large, serré) pour le rythme.',
          'Filme des B-rolls pour habiller le montage.',
        ],
        framework: {
          titre: 'Plan de tournage',
          champs: [
            'Séquence',
            'Type de plan',
            'Texte / action',
            'B-roll à capturer',
            'Prise validée ?',
          ],
        },
        proTip:
          'Capture toujours 30s de B-roll en plus : tu remercieras ton toi du montage.',
      },
      {
        nom: 'Workflow',
        resume:
          'Organiser fichiers et étapes pour ne jamais perdre de temps ni de rushes.',
        etapes: [
          'Nomme tes fichiers de façon cohérente (date_sujet_prise).',
          'Sauvegarde les rushes à 2 endroits.',
          'Sépare les phases : tournage en bloc, montage en bloc.',
          'Tiens un suivi du statut de chaque contenu.',
        ],
        framework: {
          titre: 'Convention de nommage',
          champs: [
            'Format de nom',
            'Dossier rushes',
            'Sauvegarde n°2',
            'Statut',
            'Date de publication prévue',
          ],
        },
        proTip:
          'Le batch (tout tourner, puis tout monter) double ta vitesse réelle.',
      },
    ],
  },
  {
    nom: 'Production',
    accroche: 'Monter et peaufiner chaque contenu',
    sujets: [
      {
        nom: 'Montage',
        resume:
          'Donner du rythme et retenir l’attention à chaque seconde au montage.',
        etapes: [
          'Coupe tous les temps morts et hésitations.',
          'Ajoute une coupe ou un mouvement toutes les 2-3s.',
          'Soigne les 3 premières secondes en priorité.',
          'Ajoute sous-titres, sons et zooms pour le rythme.',
        ],
        framework: {
          titre: 'Passes de montage',
          champs: [
            'Passe 1 : structure / coupes',
            'Passe 2 : rythme / B-roll',
            'Passe 3 : sous-titres',
            'Passe 4 : son / musique',
            'Passe 5 : relecture finale',
          ],
        },
        proTip:
          'Monte la première version sans son : si ça tient à l’image, c’est gagné.',
      },
      {
        nom: 'Design',
        resume:
          'Soigner miniatures et éléments visuels qui décident du clic.',
        etapes: [
          'Conçois la miniature AVANT de tourner (elle guide le contenu).',
          'Une miniature = une idée, lisible en 1 seconde.',
          'Teste 2-3 variantes de miniature.',
          'Garde une identité visuelle cohérente (couleurs, police).',
        ],
        framework: {
          titre: 'Brief de miniature',
          champs: [
            'Émotion visée',
            'Texte (3 mots max)',
            'Visage / expression',
            'Couleur dominante',
            'Variante A / B',
          ],
        },
        proTip:
          'Regarde ta miniature en tout petit : si elle n’est pas claire, recommence.',
      },
      {
        nom: 'Copywriting',
        resume:
          'Écrire titres, descriptions et légendes qui donnent envie et aident l’algorithme.',
        etapes: [
          'Écris 10 titres, garde le meilleur.',
          'Place le mot-clé principal dans le titre et la 1re ligne.',
          'Ouvre la légende par une accroche, pas par un résumé.',
          'Termine par un appel à l’action clair.',
        ],
        framework: {
          titre: 'Structure de légende',
          champs: [
            'Accroche (1re ligne)',
            'Valeur / histoire',
            'Preuve ou exemple',
            'Appel à l’action',
            'Hashtags ciblés',
          ],
        },
        proTip:
          'Le titre se juge à froid le lendemain : relis avant de publier.',
      },
      {
        nom: 'Review',
        resume:
          'Relire et valider chaque contenu avec une grille fixe avant publication.',
        etapes: [
          'Vérifie hook, son, sous-titres et appel à l’action.',
          'Regarde le contenu en entier, sans pause.',
          'Compare à ta dernière meilleure publication.',
          'Corrige un seul point majeur, ne sur-optimise pas.',
        ],
        framework: {
          titre: 'Checklist de publication',
          champs: [
            'Hook accroche en 3s ?',
            'Son et sous-titres OK ?',
            'Miniature / 1re image forte ?',
            'Appel à l’action présent ?',
            'Titre + légende relus ?',
          ],
        },
        proTip:
          'Publie à 90 % aujourd’hui plutôt qu’à 100 % jamais.',
      },
    ],
  },
  {
    nom: 'Distribution',
    accroche: 'Maximiser chaque contenu',
    sujets: [
      {
        nom: 'Plateformes',
        resume:
          'Adapter chaque contenu aux codes de la plateforme où il vit.',
        etapes: [
          'Respecte les formats natifs (vertical IG / Shorts, 16:9 YouTube).',
          'Réécris titres et accroches par plateforme.',
          'Évite les watermarks d’autres apps.',
          'Publie en natif, jamais un simple lien.',
        ],
        framework: {
          titre: 'Adaptation par plateforme',
          champs: [
            'Plateforme',
            'Format / ratio',
            'Accroche spécifique',
            'Durée optimale',
            'Appel à l’action adapté',
          ],
        },
        proTip:
          'Le même fichier partout = performance moyenne partout.',
      },
      {
        nom: 'Repurposing',
        resume:
          'Tirer plusieurs contenus d’un seul, pour multiplier la portée sans retourner.',
        etapes: [
          'Repère les moments forts d’une vidéo longue.',
          'Découpe-les en reels / shorts autonomes.',
          'Transforme les idées clés en carrousel ou post texte.',
          'Réutilise les meilleurs contenus 2-3 mois plus tard.',
        ],
        framework: {
          titre: 'Arbre de repurposing',
          champs: [
            'Contenu source',
            'Clip court 1',
            'Clip court 2',
            'Carrousel / post',
            'Republier quand ?',
          ],
        },
        proTip:
          '1 vidéo YouTube = au moins 3 reels. Pense découpage dès l’écriture.',
      },
      {
        nom: 'Planification',
        resume:
          'Programmer les publications aux bons moments pour maximiser la portée initiale.',
        etapes: [
          'Repère tes heures où l’audience est active (stats).',
          'Programme à l’avance via un outil natif.',
          'Sois présent les 30 min suivant la publication.',
          'Espace les publications pour ne pas te cannibaliser.',
        ],
        framework: {
          titre: 'Créneau de publication',
          champs: [
            'Plateforme',
            'Jour',
            'Heure',
            'Type de contenu',
            'Présence post-publi prévue ?',
          ],
        },
        proTip:
          'Les 60 premières minutes décident souvent de la portée : reste dispo.',
      },
      {
        nom: 'Analytics',
        resume:
          'Lire les bonnes métriques pour savoir quoi reproduire et quoi arrêter.',
        etapes: [
          'Concentre-toi sur rétention, partages et reach, pas les likes.',
          'Compare chaque contenu à ta médiane, pas à ton meilleur.',
          'Identifie le point de décrochage (courbe de rétention).',
          'Double ce qui marche, abandonne vite ce qui ne marche pas.',
        ],
        framework: {
          titre: 'Bilan hebdo',
          champs: [
            'Top contenu (et pourquoi)',
            'Flop (et hypothèse)',
            'Rétention moyenne',
            'Partages / reach',
            '1 chose à tester la semaine prochaine',
          ],
        },
        proTip:
          'Le partage est le vrai vote : un contenu partagé vaut mieux qu’un contenu liké.',
      },
    ],
  },
]
