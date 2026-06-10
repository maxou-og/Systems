# Content OS

Système d'intelligence contenu (YouTube + Instagram) : comprendre les
fondamentaux, suivre ses stats, planifier et produire du contenu avec l'aide
de Claude. Premier utilisateur : Enzo.

## Les 4 espaces

1. **Tableau de bord** — KPIs Instagram/YouTube (followers, vues, reach,
   interactions…), courbes de croissance, performance par format, top reels,
   objectifs trimestriels, audience par pays.
2. **Carte système** — le système de contenu complet en 5 blocs (Idéation,
   Stratégie, Tournage, Production, Distribution) ; chaque sujet ouvre un
   panneau latéral avec étapes d'exécution, framework et pro tip.
3. **Fondamentaux** — une fiche par concept (hook, rétention, piliers,
   TOFU/MOFU/BOFU, brand voice…) : définition, pourquoi ça compte, application
   à mon cas.
4. **Recherche** — historique daté de toutes les recherches de tendances
   faites via vidIQ (reels outliers, mots-clés YouTube, analyses de
   concurrents, critiques de reels).

## Stack

- Vite + React + TypeScript + Tailwind CSS
- Données : Supabase, projet « Systems by josh » (tables préfixées `content_os_`)
- Stats Instagram privées : route serverless Vercel + API Meta Graph (token en
  variable d'environnement, jamais dans le code)
- Hébergement : Vercel — *Root Directory* = `content-os`

## Développement

```bash
npm install     # installer les dépendances
npm run dev     # serveur de développement
npm run lint    # vérification du code
npm run build   # build de production
```

## Avancement

- [x] Étape 0 — Mise en place du laboratoire
- [x] Étape 1 — Squelette de l'app : navigation 4 espaces, design sombre
- [ ] Étape 2 — Carte système interactive
- [ ] Étape 3 — Fondamentaux
- [ ] Étape 4 — Dashboard analytics + route serverless Meta
- [ ] Étape 5 — Espace recherche + skills Claude vidIQ
