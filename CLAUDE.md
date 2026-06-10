# Systems — Laboratoire personnel d'Enzo

Ce repo est un laboratoire personnel : chaque système ou outil créé avec Claude
vit dans son propre dossier à la racine. Content OS (`content-os/`) est le
premier système. Ce laboratoire est TOTALEMENT séparé de Flyxion : ne jamais
toucher au code, aux données ou à l'infra de Flyxion depuis ici.

## Règles du laboratoire

- Un dossier par système, totalement autonome : son propre `package.json`, son
  propre README, ses propres dépendances. AUCUN code partagé entre les dossiers,
  pour pouvoir extraire un système dans son propre repo le jour où il prouve sa
  valeur.
- Aucun secret dans le repo : `.env*` est ignoré par git. Les secrets vivent
  dans les variables d'environnement Vercel (ou un `.env.local` jamais commité
  pour les tests locaux).
- Pas de scraping Instagram, jamais. Les tendances passent par le connecteur
  vidIQ, les stats privées par l'API Meta Graph.

## Stockage des données

Décision validée le 2026-06-10 : TOUTES les données des systèmes vivent dans
Supabase, projet « Systems by josh » (id `dlkzxpaiwkrtbeycbmqb`, région
eu-west-3). Pas de fichiers de données dans le repo.

- Claude lit et écrit via le connecteur MCP Supabase pendant les sessions.
- Les apps lisent via `@supabase/supabase-js` avec l'URL du projet et la clé
  publishable fournies en variables d'environnement (jamais en dur).
- Convention : préfixer les tables par système (ex. `content_os_goals`) pour
  que plusieurs systèmes cohabitent dans le même projet Supabase.

## Préférences de travail d'Enzo (chaque session doit les respecter)

- Toujours proposer un plan en bullets et ATTENDRE son OK avant de coder.
- Poser des questions de clarification avant d'agir ; présenter les options
  avec avantages/inconvénients, ne pas décider à sa place.
- Explications détaillées, étape par étape, en langage naturel : dire ce que
  chaque changement fait concrètement.
- Toujours donner un niveau de confiance sur les réponses.
- Gros commits groupés, pas de micro-commits.
- Toute l'UI en français, avec tous les accents.
- Workflow de chaque étape : plan → OK d'Enzo → code → `npm run lint` →
  `npm run build` → push → validation d'Enzo sur l'URL avant l'étape suivante.

## Déploiement

- Hébergement : Vercel (plan gratuit), connecté au repo GitHub, redéploiement
  automatique à chaque push.
- Un projet Vercel par système, avec *Root Directory* pointant sur le dossier
  du système (ex. `content-os`).

## Systèmes

| Dossier | Système | Description |
| --- | --- | --- |
| `content-os/` | Content OS | Intelligence contenu YouTube + Instagram (voir son README) |
