import { CATEGORY_CONFIG, TEAM_CONFIG, getRoleIcon } from '../lib/utils'
import { cn } from '../lib/utils'

export default function PlayerCard({ player, showTeam = false, showPrice = false, compact = false }) {
  const cat = CATEGORY_CONFIG[player.category] || CATEGORY_CONFIG['C']
  const team = TEAM_CONFIG[player.s2_team] || {}

  if (compact) {
    return (
      <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-kpl-surface border border-kpl-border hover:border-kpl-gold/40 transition-colors group">
        <div className="flex items-center gap-2">
          <span className="text-sm">{getRoleIcon(player.role)}</span>
          <span className="text-sm font-medium text-white group-hover:text-kpl-gold transition-colors">
            {player.name}
            {player.captain && <span className="ml-1.5 text-[10px] text-kpl-gold">(C)</span>}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {showPrice && player.auction_price && (
            <span className="text-xs text-kpl-gold font-bold">{player.auction_price}u</span>
          )}
          <span className={cn('category-badge text-[10px]', cat.class)}>{cat.label}</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="kpl-card p-4 hover:border-kpl-gold/50 transition-all duration-200 hover:-translate-y-0.5 cursor-default group"
      style={{ borderTopColor: team.color || '#21262D' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
          style={{ background: team.bg || '#161B22', border: `1px solid ${team.color || '#21262D'}` }}>
          {getRoleIcon(player.role)}
        </div>
        <span className={cn('category-badge', cat.class)}>{cat.label}</span>
      </div>

      {/* Name */}
      <div className="font-bold text-white group-hover:text-kpl-gold transition-colors mb-0.5 truncate">
        {player.name}
        {player.captain && <span className="ml-2 text-[10px] text-kpl-gold font-normal">(C)</span>}
      </div>
      <div className="text-xs text-kpl-muted mb-3">{player.role}</div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {showTeam && (
          <span className="text-[10px] px-2 py-0.5 rounded border font-medium"
            style={{ color: team.text, borderColor: team.border, background: team.bg }}>
            {team.short}
          </span>
        )}
        {showPrice && player.auction_price ? (
          <span className="text-xs text-kpl-gold font-bold ml-auto">{player.auction_price}u</span>
        ) : showPrice ? (
          <span className="text-xs text-kpl-muted ml-auto">TBD</span>
        ) : null}
      </div>
    </div>
  )
}
