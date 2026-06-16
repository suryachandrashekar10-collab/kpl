import { motion } from 'framer-motion'
import { SEASON_2_MATCHES, TEAMS, KPL_RULES } from '../data/players'

export default function Match() {
  return (
    <div className="pt-20 pb-16">
      <div className="kpl-section">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl tracking-widest text-kpl-gold mb-2">SCORECARD</h1>
          <p className="text-kpl-muted text-sm">Live match scoring · Season 2 · June 21, 2026</p>
        </div>

        {/* Match schedule */}
        <div className="grid gap-4 mb-12">
          {SEASON_2_MATCHES.map((match, i) => {
            const home = TEAMS.find((t) => t.name === match.home)
            const away = TEAMS.find((t) => t.name === match.away)
            return (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="kpl-card p-6"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="text-xs text-kpl-muted uppercase tracking-widest">
                    Match {match.id} · {match.venue}
                  </div>
                  <span className="text-xs bg-kpl-gold/10 border border-kpl-gold/30 text-kpl-gold px-3 py-1 rounded-full">
                    {match.status === 'upcoming' ? `${match.date} · ${match.time} IST` : match.status.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-8 mt-6">
                  <div className="text-center">
                    <div className="font-display text-2xl tracking-widest mb-1" style={{ color: home?.textColor }}>
                      {home?.shortName}
                    </div>
                    <div className="text-sm text-white">{match.home}</div>
                    <div className="font-display text-4xl text-white mt-2">—</div>
                  </div>
                  <div className="text-kpl-muted text-lg font-bold">VS</div>
                  <div className="text-center">
                    <div className="font-display text-2xl tracking-widest mb-1" style={{ color: away?.textColor }}>
                      {away?.shortName}
                    </div>
                    <div className="text-sm text-white">{match.away}</div>
                    <div className="font-display text-4xl text-white mt-2">—</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* KPL Rules quick ref */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-10">
          <h2 className="font-display text-2xl tracking-widest text-white mb-4">MATCH RULES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { label: 'Format', value: KPL_RULES.format },
              { label: 'Powerplay', value: KPL_RULES.powerplay },
              { label: 'Max overs per bowler', value: `${KPL_RULES.maxOversPerBowler} overs` },
              { label: 'Min different bowlers', value: `${KPL_RULES.minBowlers} bowlers required` },
              { label: 'Bowler penalty', value: KPL_RULES.bowlerPenalty },
              { label: 'Innings duration', value: `${KPL_RULES.inningsDuration} minutes max` },
              { label: 'Over rate penalty', value: KPL_RULES.overRatePenalty },
              { label: 'Toss time', value: '6:45 AM · First ball 7:00 AM' },
            ].map(({ label, value }) => (
              <div key={label} className="kpl-card px-4 py-3 flex justify-between items-center gap-4">
                <span className="text-xs text-kpl-muted uppercase tracking-wide flex-shrink-0">{label}</span>
                <span className="text-sm text-white text-right">{value}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Live scoring placeholder */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center py-16 kpl-card">
          <div className="text-5xl mb-4">🏏</div>
          <h2 className="font-display text-3xl tracking-widest text-kpl-gold mb-3">LIVE SCORING</h2>
          <p className="text-kpl-muted max-w-sm mx-auto mb-6 text-sm leading-relaxed">
            Ball-by-ball scoring with live run rate, batting/bowling stats, penalty tracker, and over rate clock.
            Goes live on June 21 — admin panel to enter scores, viewers see it update in real time.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="kpl-card px-4 py-2 text-xs text-kpl-muted">📊 Ball-by-ball input</div>
            <div className="kpl-card px-4 py-2 text-xs text-kpl-muted">⚡ Live run rate</div>
            <div className="kpl-card px-4 py-2 text-xs text-kpl-muted">⚠️ Penalty tracker</div>
            <div className="kpl-card px-4 py-2 text-xs text-kpl-muted">⏱️ Over rate clock</div>
          </div>
          <div className="mt-6 text-xs text-kpl-muted">Admin access required to enter scores</div>
        </motion.div>
      </div>
    </div>
  )
}
