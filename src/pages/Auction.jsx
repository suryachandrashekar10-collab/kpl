import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PLAYERS, TEAMS } from '../data/players'
import { CATEGORY_CONFIG, TEAM_CONFIG, getRoleIcon, formatUnits } from '../lib/utils'
import { cn } from '../lib/utils'

const BASE_PRICES = { 'A+': 200, A: 125, B: 100, C: 75 }
const PURSE_START = 2000

// Season 1 historical view — all players listed with S1 team
export default function Auction() {
  const [activeTab, setActiveTab] = useState('history') // 'history' | 'live'
  const [filterTeam, setFilterTeam] = useState('All')
  const [filterCat,  setFilterCat]  = useState('All')

  const filteredPlayers = PLAYERS.filter((p) => {
    const teamMatch = filterTeam === 'All' || p.s1_team === filterTeam
    const catMatch  = filterCat  === 'All' || p.category === filterCat
    return teamMatch && catMatch
  })

  const teamPurseSpent = {}
  TEAMS.forEach((t) => { teamPurseSpent[t.name] = 0 })
  PLAYERS.forEach((p) => {
    if (p.auction_price && teamPurseSpent[p.s1_team] !== undefined)
      teamPurseSpent[p.s1_team] += p.auction_price
  })

  return (
    <div className="pt-20 pb-16">
      <div className="kpl-section">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-5xl tracking-widest text-kpl-gold mb-2">AUCTION</h1>
          <p className="text-kpl-muted text-sm">Season 1 (2025) Results · Live Auction coming Season 3</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-kpl-border pb-4">
          {[
            { id: 'history', label: '📜 Season 1 History' },
            { id: 'live',    label: '🔴 Live Auction Room' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={cn(
                'px-5 py-2.5 rounded-t-lg text-sm font-semibold border-b-2 transition-all',
                activeTab === id
                  ? 'border-kpl-gold text-kpl-gold'
                  : 'border-transparent text-kpl-muted hover:text-white'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'history' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Purse summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {TEAMS.map((team) => {
                const spent = teamPurseSpent[team.name]
                const pct   = (spent / PURSE_START) * 100
                return (
                  <div key={team.id} className="kpl-card p-5" style={{ borderTopColor: team.color }}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-bold text-white text-sm">{team.name}</div>
                        <div className="text-xs text-kpl-muted">S1 Captain: {team.s1_captain}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold" style={{ color: team.textColor }}>
                          {spent > 0 ? `${spent}u` : 'TBD'}
                        </div>
                        <div className="text-xs text-kpl-muted">of {PURSE_START}u</div>
                      </div>
                    </div>
                    <div className="h-1.5 bg-kpl-border rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, background: team.color }}
                      />
                    </div>
                    <div className="text-xs text-kpl-muted mt-1">{PURSE_START - spent}u remaining</div>
                  </div>
                )
              })}
            </div>

            {/* Category base prices reference */}
            <div className="kpl-card p-4 mb-6">
              <div className="text-xs text-kpl-muted uppercase tracking-widest mb-3">Base Price Reference · Season 1</div>
              <div className="flex flex-wrap gap-4">
                {Object.entries(BASE_PRICES).map(([cat, price]) => {
                  const config = CATEGORY_CONFIG[cat]
                  return (
                    <div key={cat} className="flex items-center gap-2">
                      <span className={cn('category-badge', config.class)}>{cat}</span>
                      <span className="text-sm text-white font-semibold">{price}u</span>
                      <span className="text-xs text-kpl-muted">base</span>
                    </div>
                  )
                })}
                <div className="ml-auto text-xs text-kpl-muted self-center">
                  Bid increments: &lt;200→+10 · 200–500→+50 · &gt;500→+100
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex gap-2">
                {['All', ...TEAMS.map((t) => t.name)].map((t) => (
                  <button key={t}
                    onClick={() => setFilterTeam(t)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all',
                      filterTeam === t
                        ? 'bg-kpl-gold/10 border-kpl-gold text-kpl-gold'
                        : 'border-kpl-border text-kpl-muted hover:border-kpl-gold/40'
                    )}>
                    {t === 'All' ? 'All Teams' : t.replace(' Label', '')}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                {['All', 'A+', 'A', 'B', 'C'].map((c) => (
                  <button key={c}
                    onClick={() => setFilterCat(c)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all',
                      filterCat === c
                        ? 'bg-kpl-gold/10 border-kpl-gold text-kpl-gold'
                        : 'border-kpl-border text-kpl-muted hover:border-kpl-gold/40'
                    )}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Player auction table */}
            <div className="kpl-card overflow-hidden">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] text-xs text-kpl-muted uppercase tracking-widest px-4 py-3 border-b border-kpl-border">
                <div>Player</div>
                <div>Category</div>
                <div>Role</div>
                <div>Team</div>
                <div className="text-right">S1 Price</div>
              </div>
              <div className="divide-y divide-kpl-border">
                {filteredPlayers.map((player) => {
                  const cat   = CATEGORY_CONFIG[player.category]
                  const team  = TEAMS.find((t) => t.name === player.s1_team)
                  const base  = BASE_PRICES[player.category]
                  return (
                    <div
                      key={player.id}
                      className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] px-4 py-3 hover:bg-kpl-surface transition-colors items-center"
                    >
                      <div className="flex items-center gap-2">
                        <span>{getRoleIcon(player.role)}</span>
                        <span className="text-sm font-medium text-white">{player.name}</span>
                        {player.captain && <span className="text-[9px] text-kpl-gold border border-kpl-gold/30 px-1 rounded">C</span>}
                      </div>
                      <div><span className={cn('category-badge', cat?.class)}>{cat?.label}</span></div>
                      <div className="text-xs text-kpl-muted">{player.role}</div>
                      <div>
                        {team && (
                          <span className="text-xs px-2 py-0.5 rounded border font-medium"
                            style={{ color: team.textColor, borderColor: team.border, background: team.bg }}>
                            {team.shortName}
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        {player.auction_price
                          ? <span className="text-kpl-gold font-bold text-sm">{player.auction_price}u</span>
                          : <span className="text-kpl-muted text-xs">({base}u base)</span>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'live' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <div className="text-6xl mb-6">🔨</div>
            <h2 className="font-display text-4xl tracking-widest text-kpl-gold mb-4">AUCTION ROOM</h2>
            <p className="text-kpl-muted max-w-md mx-auto mb-8 leading-relaxed">
              The live auction engine is built for Season 3 and beyond. Real-time bidding with purse tracking,
              category caps, and automatic bid increment enforcement — all powered by Supabase realtime.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="kpl-card px-5 py-3 text-sm text-kpl-muted">⚡ Real-time bids via Supabase</div>
              <div className="kpl-card px-5 py-3 text-sm text-kpl-muted">💰 Live purse tracker per team</div>
              <div className="kpl-card px-5 py-3 text-sm text-kpl-muted">🎯 Category cap enforcement</div>
              <div className="kpl-card px-5 py-3 text-sm text-kpl-muted">🔨 SOLD animation + confetti</div>
              <div className="kpl-card px-5 py-3 text-sm text-kpl-muted">📋 Fast auction rounds</div>
            </div>
            <div className="mt-8 inline-block text-xs bg-kpl-gold/10 border border-kpl-gold/30 text-kpl-gold px-4 py-2 rounded-full">
              Coming Season 3
            </div>
          </motion.div>
        )}

      </div>
    </div>
  )
}
