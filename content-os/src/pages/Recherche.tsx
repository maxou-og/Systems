import { Carte, EnTetePage, PastilleAVenir } from '../components/ui'

const typesDeRecherche = [
  {
    nom: 'Reels outliers Instagram',
    detail: 'Les reels qui surperforment leur compte, sur un sujet donné.',
  },
  {
    nom: 'Mots-clés YouTube',
    detail: 'Volume de recherche et concurrence sur les sujets visés.',
  },
  {
    nom: 'Analyse de concurrents',
    detail: 'Profils et formats qui marchent dans la niche.',
  },
  {
    nom: 'Critique de reels',
    detail: 'Analyse détaillée d’un reel : hook, rythme, structure.',
  },
]

export default function Recherche() {
  return (
    <>
      <EnTetePage
        titre="Recherche"
        description="L'historique daté de toutes les recherches de tendances faites par Claude via vidIQ. Chaque rapport est sauvegardé dans Supabase et consultable ici."
      />
      <div className="mb-6">
        <PastilleAVenir etape={5} />
      </div>

      <section className="grid gap-3 sm:grid-cols-2">
        {typesDeRecherche.map(({ nom, detail }) => (
          <Carte key={nom}>
            <h2 className="text-sm font-semibold">{nom}</h2>
            <p className="mt-1 text-sm text-encre-2">{detail}</p>
            <p className="mt-4 text-xs text-encre-3">
              Premiers rapports à l'étape 5, via les skills vidIQ.
            </p>
          </Carte>
        ))}
      </section>
    </>
  )
}
