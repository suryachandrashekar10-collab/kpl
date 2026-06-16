import { useState } from 'react'
import { motion } from 'framer-motion'
import { PLAYERS, TEAMS } from '../data/players'
import { CATEGORY_CONFIG, getRoleIcon } from '../lib/utils'
import { cn } from '../lib/utils'

const CATEGORIES = ['All', 'A+', 'A', 'B', 'C']

function StatBadge({ label, value, color }) {
  return (
    <div className="text-center">
      <div className="font-display text-2xl" style={{ color }}>{value}</div>
      <div className="text-[10px] text-kpl-muted uppercase tracking-wider">{label}</div>
    </div>
  )
}

function TeamSection({ team }) {
  const [filter, setFilter] = useState('All')
  const players = PLAYERS.filter((p) => p.s2_team === team.name)
  const visible  = filter === 'All' ? players : players.filter((p) => p.category === filter)
  const captain  = players.find((p) => p.captain)

  const counts = { 'A+': 0, A: 0, B: 0, C: 0 }
  players.forEach((p) => counts[p.category]++)

  return (
    <motion.section
      id={team.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      {/* Team header */}
      <div
        className="rounded-2xl p-8 mb-6 border relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${team.color}22 0%, ${team.bg} 100%)`, borderColor: team.border }}
      >
        {/* Decorative number */}
        <div className="absolute right-6 top-0 font-display text-[120px] leading-none opacity-5 select-none"
          style={{ color: team.textColor }}>
          {team.shortName}
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <div className="text-xs font-bold tracking-widest mb-2" style={{ color: team.textColor }}>
                KPL SEASON 2 · 2026
              </div>
              <h2 className="font-display text-5xl md:text-6xl tracking-widest mb-2"
                style={{ color: team.textColor }}>
                {team.name.toUpperCase()}
              </h2>
              {captain && (
                <div className="text-sm text-kpl-muted">
                  Captain: <span className="font-semibold text-white">{captain.name}</span>
                  <span className="ml-2 text-xs opacity-60">S1 Captain: {team.s1_captain}</span>
                </div>
              )}
            </div>
            <div className="flex gap-8">
              <StatBadge label="Players" value={players.length} color={team.textColor} />
              <StatBadge label="Elite (A+)" value={counts['A+']} color={team.textColor} />
              <StatBadge label="Core (A)" value={counts['A']} color={team.textColor} />
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150',
                  filter === cat
                    ? 'text-kpl-dark border-transparent'
                    : 'text-kpl-muted border-kpl-border hover:border-kpl-gold/40 hover:text-white'
                )}
                style={filter === cat ? { background: team.color, borderColor: team.color } : {}}
              >
                {cat === 'All' ? `All (${players.length})` : `${cat} (${counts[cat] || 0})`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Player grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {visible.map((player, i) => {
          const cat = CATEGORY_CONFIG[player.category]
          return (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="kpl-card p-4 hover:border-kpl-gold/40 transition-all duration-200 hover:-translate-y-0.5 group"
              style={{ borderTopColor: player.captain ? team.color : undefined }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: team.bg, border: `1px solid ${team.border}` }}>
                  {getRoleIcon(player.role)}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={cn('category-badge text-[10px]', cat?.class)}>{cat?.label}</span>
                  {player.captain && (
                    <span className="text-[9px] bg-kpl-gold/10 border border-kpl-gold/30 text-kpl-gold px-1.5 py-0.5 rounded">
                      CAPTAIN
                    </span>
                  )}
                </div>
              </div>
              <div className="font-bold text-white group-hover:text-kpl-gold transition-colors truncate mb-0.5">
                {player.name}
              </div>
              <div className="text-xs text-kpl-muted">{player.role}</div>
              {player.auction_price && (
                <div className="mt-2 pt-2 border-t border-kpl-border text-xs text-kpl-gold font-bold">
                  S1 Price: {player.auction_price}u
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Category breakdown bar */}
      <div className="mt-6 kpl-card p-4">
        <div className="text-xs text-kpl-muted mb-2 uppercase tracking-widest">Squad Composition</div>
        <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
          {[
            { cat: 'A+', color: '#EAB308' },
            { cat: 'A',  color: '#3B82F6' },
            { cat: 'B',  color: '#22C55E' },
            { cat: 'C',  color: '#6B7280' },
          ].map(({ cat, color }) => (
            counts[cat] > 0 && (
              <div
                key={cat}
                style={{ flex: counts[cat], background: color }}
                className="h-full rounded-sm"
                title={`${cat}: ${counts[cat]} players`}
              />
            )
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          {[
            { cat: 'A+', color: '#EAB308', label: 'Elite' },
            { cat: 'A',  color: '#3B82F6', label: 'Core' },
            { cat: 'B',  color: '#22C55E', label: 'Support' },
            { cat: 'C',  color: '#6B7280', label: 'Squad' },
          ].map(({ cat, color, label }) => (
            <div key={cat} className="flex items-center gap-1.5 text-xs text-kpl-muted">
              <div className="w-2 h-2 rounded-sm" style={{ background: color }} />
              {cat} · {label} ({counts[cat]})
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default function Teams() {
  return (
    <div className="pt-20 pb-16">
      <div className="kpl-section">
        {/* Page header */}
        <div className="text-center mb-14">
          <h1 className="font-display text-5xl tracking-widest text-kpl-gold mb-2">SQUADS</h1>
          <p className="text-kpl-muted text-sm">Season 2 · 2026 · Rosters carried forward from Season 1</p>
        </div>

        {TEAMS.map((team) => (
          <TeamSection key={team.id} team={team} />
        ))}
      </div>
    </div>
  )
}
