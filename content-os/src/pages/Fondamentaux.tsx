import { Carte, EnTetePage, PastilleAVenir } from '../components/ui'

const concepts = [
  { nom: 'Hook', detail: 'Les 1 à 3 premières secondes qui décident de tout.' },
  { nom: 'Rétention', detail: 'Garder l’attention jusqu’au bout de la vidéo.' },
  { nom: 'Piliers de contenu', detail: 'Les 3 à 5 thèmes qui structurent tout le contenu.' },
  { nom: 'TOFU / MOFU / BOFU', detail: 'Le funnel : découverte, considération, conversion.' },
  { nom: 'Brand voice', detail: 'Le ton et la personnalité reconnaissables du compte.' },
  { nom: 'Taux d’engagement', detail: 'Ce que mesurent vraiment likes, saves et partages.' },
]

export default function Fondamentaux() {
  return (
    <>
      <EnTetePage
        titre="Fondamentaux"
        description="Une fiche par concept de contenu : la vraie définition, pourquoi ça compte, et comment ça s'applique à mon cas. Comprendre avant de produire."
      />
      <div className="mb-6">
        <PastilleAVenir etape={3} />
      </div>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {concepts.map(({ nom, detail }) => (
          <Carte key={nom}>
            <h2 className="text-sm font-semibold">{nom}</h2>
            <p className="mt-1 text-sm text-encre-2">{detail}</p>
            <p className="mt-4 text-xs text-encre-3">Fiche complète à l'étape 3.</p>
          </Carte>
        ))}
      </section>
    </>
  )
}
