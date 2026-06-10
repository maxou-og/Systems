import { Carte, EnTetePage, PastilleAVenir } from '../components/ui'

const blocs = [
  {
    nom: 'Idéation',
    accroche: 'Ne jamais manquer d’idées',
    colonnes: ['Tendances', 'Hooks', 'Formats', 'Angles'],
  },
  {
    nom: 'Stratégie',
    accroche: 'Planifier avec précision',
    colonnes: ['Piliers', 'Calendrier', 'Funnels', 'Objectifs'],
  },
  {
    nom: 'Tournage',
    accroche: 'Capturer un contenu de qualité',
    colonnes: ['Setup', 'Scripting', 'Capture', 'Workflow'],
  },
  {
    nom: 'Production',
    accroche: 'Monter et peaufiner chaque contenu',
    colonnes: ['Montage', 'Design', 'Copywriting', 'Review'],
  },
  {
    nom: 'Distribution',
    accroche: 'Maximiser chaque contenu',
    colonnes: ['Plateformes', 'Repurposing', 'Planification', 'Analytics'],
  },
]

export default function CarteSysteme() {
  return (
    <>
      <EnTetePage
        titre="Carte système"
        description="Le système de contenu complet en 5 blocs. À terme, chaque sujet s'ouvre dans un panneau latéral avec étapes d'exécution numérotées, framework prêt à remplir et pro tip."
      />
      <div className="mb-6">
        <PastilleAVenir etape={2} />
      </div>

      <section className="grid gap-3">
        {blocs.map(({ nom, accroche, colonnes }) => (
          <Carte key={nom}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {nom}
              </h2>
              <p className="text-sm text-encre-2">{accroche}</p>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {colonnes.map((colonne) => (
                <li
                  key={colonne}
                  className="rounded-lg border border-ligne bg-surface-2/50 px-3 py-2 text-sm text-encre-2"
                >
                  {colonne}
                </li>
              ))}
            </ul>
          </Carte>
        ))}
      </section>
    </>
  )
}
