import { useEffect, useState } from 'react'
import { Lightbulb, X } from 'lucide-react'
import { Carte, EnTetePage } from '../components/ui'
import { blocs, type Sujet } from '../data/sujets'

type SujetActif = { bloc: string; sujet: Sujet }

export default function CarteSysteme() {
  const [actif, setActif] = useState<SujetActif | null>(null)
  const [ouvert, setOuvert] = useState(false)

  function ouvrir(bloc: string, sujet: Sujet) {
    setActif({ bloc, sujet })
    setOuvert(true)
  }

  useEffect(() => {
    function surTouche(e: KeyboardEvent) {
      if (e.key === 'Escape') setOuvert(false)
    }
    window.addEventListener('keydown', surTouche)
    return () => window.removeEventListener('keydown', surTouche)
  }, [])

  return (
    <>
      <EnTetePage
        titre="Carte système"
        description="Le système de contenu complet en 5 blocs. Clique sur un sujet pour ouvrir sa fiche : étapes d'exécution, framework prêt à remplir et pro tip."
      />

      <section className="grid gap-3">
        {blocs.map((bloc) => (
          <Carte key={bloc.nom}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {bloc.nom}
              </h2>
              <p className="text-sm text-encre-2">{bloc.accroche}</p>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {bloc.sujets.map((sujet) => (
                <li key={sujet.nom}>
                  <button
                    type="button"
                    onClick={() => ouvrir(bloc.nom, sujet)}
                    className="w-full rounded-lg border border-ligne bg-surface-2/50 px-3 py-2 text-left text-sm text-encre-2 transition-colors hover:border-accent/40 hover:bg-surface-2 hover:text-encre"
                  >
                    {sujet.nom}
                  </button>
                </li>
              ))}
            </ul>
          </Carte>
        ))}
      </section>

      {/* Voile */}
      <div
        onClick={() => setOuvert(false)}
        aria-hidden
        className={[
          'fixed inset-0 z-30 bg-black/60 transition-opacity duration-200',
          ouvert ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      />

      {/* Panneau latéral */}
      <aside
        role="dialog"
        aria-modal="true"
        onTransitionEnd={() => {
          if (!ouvert) setActif(null)
        }}
        className={[
          'fixed inset-x-0 bottom-0 z-40 max-h-[88dvh] overflow-y-auto rounded-t-2xl border-t border-ligne bg-surface-1 transition-transform duration-300 ease-out',
          'sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-[26rem] sm:rounded-none sm:border-t-0 sm:border-l',
          ouvert
            ? 'translate-y-0 sm:translate-x-0'
            : 'translate-y-full sm:translate-y-0 sm:translate-x-full',
        ].join(' ')}
      >
        {actif && (
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {actif.bloc}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight">
                  {actif.sujet.nom}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOuvert(false)}
                aria-label="Fermer"
                className="rounded-lg p-1.5 text-encre-3 transition-colors hover:bg-surface-2 hover:text-encre"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-encre-2">
              {actif.sujet.resume}
            </p>

            <section className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-encre-3">
                Étapes d'exécution
              </h3>
              <ol className="mt-3 space-y-2.5">
                {actif.sujet.etapes.map((etape, i) => (
                  <li key={i} className="flex gap-3 text-sm text-encre">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-semibold text-accent">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{etape}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-encre-3">
                Framework
              </h3>
              <div className="mt-3 rounded-xl border border-ligne bg-surface-2/40 p-4">
                <p className="text-sm font-medium text-encre">
                  {actif.sujet.framework.titre}
                </p>
                <ul className="mt-3 space-y-3">
                  {actif.sujet.framework.champs.map((champ, i) => (
                    <li key={i}>
                      <span className="text-sm text-encre-2">{champ}</span>
                      <span className="mt-1.5 block h-px bg-ligne" />
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-6">
              <div className="flex gap-3 rounded-xl border border-accent/25 bg-accent/10 p-4">
                <Lightbulb className="h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Pro tip
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-encre">
                    {actif.sujet.proTip}
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}
      </aside>
    </>
  )
}
