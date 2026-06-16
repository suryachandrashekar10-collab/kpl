import { motion } from 'framer-motion'
import { TEAMS, PLAYERS } from '../data/players'
import { cn } from '../lib/utils'

const SEASON_AWARDS = [
  { icon: '🥇', title: 'Golden Bat', desc: 'Best Batsman of the Tournament', winner: null },
  { icon: '🏆', title: 'Golden Ball', desc: 'Best Bowler of the Tournament', winner: null },
  { icon: '🤲', title: 'Golden Hands', desc: 'Best Fielder of the Tournament', winner: null },
  { icon: '🏅', title: 'KPL Champions', desc: 'Season 2 Winning Team', winner: null },
]

const POINTS_TABLE_PLACEHOLDER = TEAMS.map((t) => ({
  team: t,
  played: 0, won: 0, lost: 0, tied: 0,
  pts: 0, nrr: '+0.000',
}))

export default function Stats() {
  return (
    <div className="pt-20 pb-16">
      <div className="kpl-section">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl tracking-widest text-kpl-gold mb-2">STATS & HONOURS</h1>
          <p className="text-kpl-muted text-sm">Points table, season awards, and all-time records</p>
        </div>

        {/* Points Table */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-12">
          <h2 className="font-display text-2xl tracking-widest text-white mb-4">POINTS TABLE · SEASON 2</h2>
          <div className="kpl-card overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] text-xs text-kpl-muted uppercase tracking-widest px-4 py-3 border-b border-kpl-border">
              <div>Team</div>
              <div className="text-center">P</div>
              <div className="text-center">W</div>
              <div className="text-center">L</div>
              <div className="text-center">T</div>
              <div className="text-center">NRR</div>
              <div className="text-center">Pts</div>
            </div>
            <div className="divide-y divide-kpl-border">
              {POINTS_TABLE_PLACEHOLDER.map(({ team, played, won, lost, tied, pts, nrr }) => (
                <div key={team.id}
                  className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] px-4 py-3 items-center hover:bg-kpl-surface transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 rounded-full" style={{ background: team.color }} />
                    <div>
                      <div className="font-semibold text-white text-sm">{team.name}</div>
                      <div className="text-xs text-kpl-muted">Capt: {team.s2_captain}</div>
                    </div>
                  </div>
                  {[played, won, lost, tied, nrr, pts].map((v, i) => (
                    <div key={i} className={cn('text-center text-sm', i === 5 ? 'font-bold text-kpl-gold' : 'text-kpl-muted')}>
                      {v}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="px-4 py-2 bg-kpl-surface border-t border-kpl-border text-xs text-kpl-muted">
              Tiebreaker: Points → NRR → Head-to-Head → Committee Decision
            </div>
          </div>
          <div className="mt-3 text-center text-xs text-kpl-muted">
            Scores will update live on match day — June 21, 2026
          </div>
        </motion.section>

        {/* Season Awards */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-12">
          <h2 className="font-display text-2xl tracking-widest text-white mb-4">SEASON 2 AWARDS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEASON_AWARDS.map((award) => (
              <div key={award.title}
                className="kpl-card p-6 text-center hover:border-kpl-gold/40 transition-colors">
                <div className="text-4xl mb-3">{award.icon}</div>
                <div className="font-bold text-white mb-1">{award.title}</div>
                <div className="text-xs text-kpl-muted mb-4">{award.desc}</div>
                {award.winner
                  ? <div className="text-kpl-gold font-bold">{award.winner}</div>
                  : <div className="text-xs bg-kpl-gold/5 border border-kpl-gold/20 text-kpl-gold/60 rounded-full px-3 py-1">
                      To be awarded
                    </div>
                }
              </div>
            ))}
          </div>
        </motion.section>

        {/* Award rules */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-12">
          <h2 className="font-display text-2xl tracking-widest text-white mb-4">MATCH AWARDS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="kpl-card p-5">
              <div className="flex gap-3 mb-3">
                <span className="text-2xl">🏏</span>
                <div>
                  <div className="font-bold text-white">Best Batsman of the Match</div>
                  <div className="text-xs text-kpl-muted">Standout batting performance per match</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {['Match 1', 'Match 2', 'Match 3'].map((m) => (
                  <div key={m} className="bg-kpl-surface rounded-lg p-3 text-center">
                    <div className="text-xs text-kpl-muted mb-1">{m}</div>
                    <div className="text-xs text-kpl-gold">TBD</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="kpl-card p-5">
              <div className="flex gap-3 mb-3">
                <span className="text-2xl">🎳</span>
                <div>
                  <div className="font-bold text-white">Best Bowler of the Match</div>
                  <div className="text-xs text-kpl-muted">Standout bowling performance per match</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {['Match 1', 'Match 2', 'Match 3'].map((m) => (
                  <div key={m} className="bg-kpl-surface rounded-lg p-3 text-center">
                    <div className="text-xs text-kpl-muted mb-1">{m}</div>
                    <div className="text-xs text-kpl-gold">TBD</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 kpl-card p-4 text-sm text-kpl-muted">
            <span className="text-kpl-gold font-semibold">Award Rotation Rule:</span>{' '}
            If a player wins Best Batsman/Bowler in both previous matches, they become ineligible for the same award in subsequent matches — passed to the next deserving performer.
          </div>
        </motion.section>

        {/* All players list */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="font-display text-2xl tracking-widest text-white mb-4">ALL PLAYERS · SEASON 2</h2>
          <div className="kpl-card overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] text-xs text-kpl-muted uppercase tracking-widest px-4 py-3 border-b border-kpl-border">
              <div>Player</div><div>Team</div><div>Category</div><div>Role</div>
            </div>
            <div className="divide-y divide-kpl-border max-h-96 overflow-y-auto">
              {PLAYERS.map((p) => {
                const team = TEAMS.find((t) => t.name === p.s2_team)
                return (
                  <div key={p.id} className="grid grid-cols-[2fr_1fr_1fr_1fr] px-4 py-2.5 hover:bg-kpl-surface transition-colors items-center">
                    <div className="text-sm text-white font-medium">
                      {p.name}
                      {p.captain && <span className="ml-2 text-[9px] text-kpl-gold">(C)</span>}
                    </div>
                    <div>
                      {team && <span className="text-xs px-2 py-0.5 rounded border" style={{ color: team.textColor, borderColor: team.border, background: team.bg }}>{team.shortName}</span>}
                    </div>
                    <div className={cn('text-xs font-bold', p.category === 'A+' ? 'text-yellow-400' : p.category === 'A' ? 'text-blue-400' : p.category === 'B' ? 'text-green-400' : 'text-gray-400')}>
                      {p.category}
                    </div>
                    <div className="text-xs text-kpl-muted">{p.role}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
