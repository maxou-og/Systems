import type { ReactNode } from 'react'

export function EnTetePage({
  titre,
  description,
}: {
  titre: string
  description: string
}) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{titre}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-encre-2">
        {description}
      </p>
    </header>
  )
}

export function PastilleAVenir({ etape }: { etape: number }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
      À venir — étape {etape}
    </span>
  )
}

export function Carte({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-xl border border-ligne bg-surface-1 p-5 ${className}`}>
      {children}
    </div>
  )
}
