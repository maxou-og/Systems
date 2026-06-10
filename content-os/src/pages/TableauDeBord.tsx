import { Carte, EnTetePage, PastilleAVenir } from '../components/ui'

const kpis = [
  'Followers',
  'Nouveaux followers',
  'Vues',
  'Reach',
  'Visites de profil',
  'Interactions',
  'DMs',
  'Clics sur le lien',
  'Posts publiés',
]

const sections = [
  {
    titre: 'Courbe de croissance',
    detail: 'Followers, vues et reach dans le temps.',
  },
  {
    titre: 'Performance par format',
    detail: 'Talking head, text overlay, raw — en barres horizontales.',
  },
  {
    titre: 'Top reels',
    detail: 'Pilier de contenu, vues, saves, partages, commentaires.',
  },
  {
    titre: 'Objectifs trimestriels',
    detail: 'Barres de progression : followers, vues, engagement, output hebdo…',
  },
  {
    titre: 'Répartition par pilier',
    detail: 'Donut de la part de chaque pilier de contenu.',
  },
  {
    titre: 'Audience par pays',
    detail: 'Pays de l’audience et meilleures heures de publication.',
  },
]

export default function TableauDeBord() {
  return (
    <>
      <EnTetePage
        titre="Tableau de bord"
        description="Vue d'ensemble des performances : stats Instagram privées via l'API Meta, données YouTube via vidIQ, objectifs trimestriels saisis à la main."
      />
      <div className="mb-6">
        <PastilleAVenir etape={4} />
      </div>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {kpis.map((libelle) => (
          <Carte key={libelle} className="p-4">
            <p className="text-xs text-encre-3">{libelle}</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-encre-2">—</p>
          </Carte>
        ))}
      </section>

      <section className="mt-6 grid gap-3 md:grid-cols-2">
        {sections.map(({ titre, detail }) => (
          <Carte key={titre}>
            <h2 className="text-sm font-semibold">{titre}</h2>
            <p className="mt-1 text-sm text-encre-2">{detail}</p>
            <p className="mt-4 text-xs text-encre-3">
              En attente des données — branchement à l'étape 4.
            </p>
          </Carte>
        ))}
      </section>
    </>
  )
}
