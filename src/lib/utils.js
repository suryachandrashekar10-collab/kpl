import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const TEAM_CONFIG = {
  'Red Label': {
    color: '#C0392B',
    bg: '#1A0505',
    border: '#7B1A1A',
    text: '#FF6B6B',
    gradient: 'from-red-900/40 to-transparent',
    badge: 'bg-red-900/30 border-red-700 text-red-400',
    short: 'RED',
  },
  'Black Label': {
    color: '#555',
    bg: '#0F0F0F',
    border: '#444',
    text: '#CCCCCC',
    gradient: 'from-gray-900/60 to-transparent',
    badge: 'bg-gray-800 border-gray-600 text-gray-300',
    short: 'BLK',
  },
  'Blue Label': {
    color: '#1A4A9A',
    bg: '#050D1A',
    border: '#1A3D8B',
    text: '#6B9FFF',
    gradient: 'from-blue-900/40 to-transparent',
    badge: 'bg-blue-900/30 border-blue-700 text-blue-400',
    short: 'BLU',
  },
}

export const CATEGORY_CONFIG = {
  'A+': { label: 'A+', class: 'category-aplus', desc: 'Elite' },
  'A':  { label: 'A',  class: 'category-a',     desc: 'Core' },
  'B':  { label: 'B',  class: 'category-b',      desc: 'Support' },
  'C':  { label: 'C',  class: 'category-c',      desc: 'Squad' },
}

export function formatUnits(n) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n)
}

export function getRoleIcon(role) {
  if (role.includes('All-Rounder'))   return '⚡'
  if (role.includes('Keeper'))        return '🧤'
  if (role.includes('Batsman'))       return '🏏'
  if (role.includes('Bowler'))        return '🎳'
  return '🏏'
}
