import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import KPLLion from '../components/KPLLion'
import { TEAMS, SEASON_2_MATCHES } from '../data/players'

const MATCH_DATE = new Date('2026-06-21T01:30:00Z') // 7:00 AM IST = 1:30 AM UTC

function useCountdown(target) {
  const [diff, setDiff] = useState(target - Date.now())
  useEffect(() => {
    const t = setInterval(() => setDiff(target - Date.now()), 1000)
    return () => clearInterval(t)
  }, [target])
  const total = Math.max(0, diff)
  const d = Math.floor(total / 86400000)
  const h = Math.floor((total % 86400000) / 3600000)
  const m = Math.floor((total % 3600000) / 60000)
  const s = Math.floor((total % 60000) / 1000)
  return { d, h, m, s, over: total === 0 }
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-kpl-card border border-kpl-border rounded-xl w-20 h-20 flex items-center justify-center mb-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-kpl-gold/5" />
        <span className="font-display text-4xl text-white z-10">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-[10px] text-kpl-muted uppercase tracking-widest">{label}</span>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Home() {
  const { d, h, m, s, over } = useCountdown(MATCH_DATE.getTime())

  return (
    <div className="pt-16">
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-kpl-gold/5 blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-900/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#F0A500 1px, transparent 1px), linear-gradient(90deg, #F0A500 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="kpl-section text-center relative z-10"
        >
          {/* Lion */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <KPLLion size={140} className="animate-float drop-shadow-2xl" />
          </motion.div>

          {/* Kannada */}
          <motion.div variants={fadeUp} className="font-kannada text-4xl text-kpl-gold/80 mb-2 tracking-wide">
            ಕಂಠೀರವ
          </motion.div>

          {/* Title */}
          <motion.h1 variants={fadeUp}
            className="font-display text-6xl md:text-8xl tracking-widest text-white mb-2">
            KANTEERAVA
          </motion.h1>
          <motion.h2 variants={fadeUp}
            className="font-display text-3xl md:text-5xl tracking-[0.3em] text-gold-shimmer mb-1">
            PREMIER LEAGUE
          </motion.h2>
          <motion.p variants={fadeUp} className="text-kpl-muted text-sm tracking-widest uppercase mb-8">
            Season 2 · 2026 · Benedict Ground, Kengeri
          </motion.p>

          {/* Tagline */}
          <motion.blockquote variants={fadeUp}
            className="text-kpl-gold/70 italic text-lg max-w-xl mx-auto mb-12 border-l-2 border-kpl-gold/30 pl-4 text-left">
            "Building Teams. Growing Cricket. Celebrating Spirit."
          </motion.blockquote>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-16">
            <Link to="/teams" className="btn-gold">View Squads</Link>
            <Link to="/auction" className="btn-outline">Auction Room</Link>
          </motion.div>

          {/* Countdown */}
          <motion.div variants={fadeUp}>
            <p className="text-kpl-muted text-xs tracking-widest uppercase mb-4">
              {over ? '🏏 Match Day is here!' : 'Match Day Countdown — June 21, 2026'}
            </p>
            <div className="flex items-center justify-center gap-4">
              <CountdownUnit value={d} label="Days" />
              <span className="text-kpl-gold text-2xl font-bold mb-6">:</span>
              <CountdownUnit value={h} label="Hours" />
              <span className="text-kpl-gold text-2xl font-bold mb-6">:</span>
              <CountdownUnit value={m} label="Mins" />
              <span className="text-kpl-gold text-2xl font-bold mb-6">:</span>
              <CountdownUnit value={s} label="Secs" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── TEAMS STRIP ── */}
      <section className="border-y border-kpl-border py-12">
        <div className="kpl-section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TEAMS.map((team) => (
              <Link key={team.id} to={`/teams#${team.id}`}>
                <div
                  className="rounded-xl p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
                  style={{ background: team.bg, borderColor: team.border }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="text-xs font-bold tracking-widest px-3 py-1 rounded-full border"
                      style={{ color: team.textColor, borderColor: team.border }}
                    >
                      {team.shortName}
                    </div>
                    <div className="text-xs text-kpl-muted">Season 2</div>
                  </div>
                  <div
                    className="font-display text-3xl tracking-widest mb-1 group-hover:opacity-90 transition-opacity"
                    style={{ color: team.textColor }}
                  >
                    {team.name.toUpperCase()}
                  </div>
                  <div className="text-sm text-kpl-muted">
                    Captain: <span style={{ color: team.textColor }}>{team.s2_captain}</span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SEASON TIMELINE ── */}
      <section className="py-16 kpl-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-3xl tracking-widest text-center text-kpl-gold mb-2">THE KPL JOURNEY</h3>
          <p className="text-kpl-muted text-center text-sm mb-12">Established 2015 · From one team to a league</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-kpl-border -translate-x-1/2" />

            {[
              { year: '2015', title: 'Kanteeravas Founded', desc: 'A single cricket unit built on friendship, passion, and the spirit of the game at Benedict Ground.', side: 'left' },
              { year: '2025', title: 'KPL Season 1', desc: 'First ever player auction — 33 players, 3 franchises (Red, Black, Blue Label), 2000 units purse each. The IPL experience comes to Kengeri.', side: 'right' },
              { year: '2026', title: 'KPL Season 2', desc: 'Squads retained from Season 1. 20-over round robin format. 3 matches on June 21. Benedict Ground, Kengeri.', side: 'left', current: true },
            ].map((item) => (
              <div key={item.year}
                className={`flex mb-12 ${item.side === 'right' ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2" />
                <div className="flex flex-col items-center mx-4 relative z-10">
                  <div className={`w-4 h-4 rounded-full border-2 ${item.current ? 'bg-kpl-gold border-kpl-gold animate-pulse-gold' : 'bg-kpl-surface border-kpl-gold/50'}`} />
                </div>
                <div className="w-1/2">
                  <div className="kpl-card p-5">
                    <div className="text-kpl-gold text-xs font-bold tracking-widest mb-1">{item.year}</div>
                    <div className="font-semibold text-white mb-2">
                      {item.title}
                      {item.current && <span className="ml-2 text-[10px] bg-kpl-gold/10 border border-kpl-gold/30 text-kpl-gold px-2 py-0.5 rounded-full">Current</span>}
                    </div>
                    <p className="text-sm text-kpl-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── COMMITTEE ── */}
      <section className="border-t border-kpl-border py-12 kpl-section">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <p className="text-kpl-muted text-xs tracking-widest uppercase text-center mb-6">Organising Committee</p>
          <div className="flex justify-center gap-8">
            {['Mahesh', 'Gunda', 'Yogesh'].map((name) => (
              <div key={name} className="text-center">
                <div className="w-12 h-12 rounded-full bg-kpl-gold/10 border border-kpl-gold/20 flex items-center justify-center text-xl mx-auto mb-2">
                  🏅
                </div>
                <div className="text-sm font-semibold text-white">{name}</div>
                <div className="text-[10px] text-kpl-muted">Committee</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SPIRIT QUOTE ── */}
      <section className="py-16 bg-kpl-navy/20 border-t border-kpl-border">
        <div className="kpl-section text-center">
          <blockquote className="font-display text-2xl md:text-4xl text-kpl-gold/80 tracking-wide max-w-3xl mx-auto leading-tight mb-4">
            "Kanteeravas is not just a cricket team.<br />
            It is a brotherhood built through years of<br />
            friendship, competition, memories,<br />
            and the love of the game."
          </blockquote>
          <cite className="text-kpl-muted text-sm not-italic">— KPL Season 2 · June 2026</cite>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-kpl-border py-8 kpl-section">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-kpl-muted text-xs">
          <div className="flex items-center gap-2">
            <KPLLion size={24} />
            <span>Kanteerava Premier League · Est. 2015</span>
          </div>
          <div>Benedict Ground, Kengeri · Bangalore</div>
          <div>Published by Kanteerava Cricket Committee</div>
        </div>
      </footer>
    </div>
  )
}
