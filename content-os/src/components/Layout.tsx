import { NavLink, Outlet } from 'react-router-dom'
import { BookOpen, LayoutDashboard, Network, TrendingUp } from 'lucide-react'

const espaces = [
  { chemin: '/', libelle: 'Tableau de bord', court: 'Tableau', icone: LayoutDashboard },
  { chemin: '/carte-systeme', libelle: 'Carte système', court: 'Carte', icone: Network },
  { chemin: '/fondamentaux', libelle: 'Fondamentaux', court: 'Fondamentaux', icone: BookOpen },
  { chemin: '/recherche', libelle: 'Recherche', court: 'Recherche', icone: TrendingUp },
]

function classesLienLateral({ isActive }: { isActive: boolean }) {
  return [
    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-surface-2 text-encre'
      : 'text-encre-2 hover:bg-surface-1 hover:text-encre',
  ].join(' ')
}

export default function Layout() {
  return (
    <div className="min-h-dvh">
      {/* Barre latérale — bureau */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-ligne bg-surface-1/60 md:flex">
        <div className="flex items-center gap-2.5 px-6 py-6">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="text-lg font-semibold tracking-tight">Content OS</span>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3">
          {espaces.map(({ chemin, libelle, icone: Icone }) => (
            <NavLink
              key={chemin}
              to={chemin}
              end={chemin === '/'}
              className={classesLienLateral}
            >
              <Icone className="h-4 w-4" />
              {libelle}
            </NavLink>
          ))}
        </nav>
        <p className="px-6 py-5 text-xs text-encre-3">Laboratoire Systems — v0.1</p>
      </aside>

      {/* En-tête — mobile */}
      <header className="sticky top-0 z-20 flex items-center gap-2 border-b border-ligne bg-surface-0/90 px-5 py-4 backdrop-blur md:hidden">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="font-semibold tracking-tight">Content OS</span>
      </header>

      <main className="px-5 py-8 pb-28 md:ml-64 md:px-10 md:py-10 md:pb-10">
        <div className="mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>

      {/* Navigation basse — mobile */}
      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-4 border-t border-ligne bg-surface-1/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        {espaces.map(({ chemin, court, icone: Icone }) => (
          <NavLink
            key={chemin}
            to={chemin}
            end={chemin === '/'}
            className={({ isActive }) =>
              [
                'flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium',
                isActive ? 'text-accent' : 'text-encre-3',
              ].join(' ')
            }
          >
            <Icone className="h-5 w-5" />
            {court}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
