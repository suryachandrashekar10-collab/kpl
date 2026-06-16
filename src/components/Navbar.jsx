import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import KPLLion from './KPLLion'
import { cn } from '../lib/utils'

const NAV_LINKS = [
  { to: '/',        label: 'Home'      },
  { to: '/teams',   label: 'Teams'     },
  { to: '/auction', label: 'Auction'   },
  { to: '/match',   label: 'Scorecard' },
  { to: '/stats',   label: 'Stats'     },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-kpl-border bg-kpl-dark/90 backdrop-blur-md">
      <div className="kpl-section">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <KPLLion size={38} className="group-hover:animate-float transition-transform" />
            <div className="leading-tight">
              <div className="font-display text-xl tracking-widest text-kpl-gold">KPL</div>
              <div className="text-[9px] text-kpl-muted tracking-widest uppercase">Kanteerava Premier League</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                    isActive
                      ? 'bg-kpl-gold/10 text-kpl-gold border border-kpl-gold/30'
                      : 'text-kpl-muted hover:text-white hover:bg-kpl-card'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Season badge */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs bg-kpl-gold/10 border border-kpl-gold/30 text-kpl-gold px-3 py-1 rounded-full font-semibold tracking-wide">
              Season 2 · 2026
            </span>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-kpl-muted hover:text-white p-2"
            onClick={() => setOpen(!open)}
          >
            <div className={cn('w-5 h-0.5 bg-current transition-all mb-1', open && 'rotate-45 translate-y-1.5')} />
            <div className={cn('w-5 h-0.5 bg-current transition-all mb-1', open && 'opacity-0')} />
            <div className={cn('w-5 h-0.5 bg-current transition-all', open && '-rotate-45 -translate-y-1.5')} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive ? 'bg-kpl-gold/10 text-kpl-gold' : 'text-kpl-muted hover:text-white hover:bg-kpl-card'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
