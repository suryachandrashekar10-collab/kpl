// All KPL player data — Season 1 (2025) and Season 2 (2026)
// auction_price: Season 1 bid price (null = not recorded yet)
// s2_team: team in Season 2 (carried forward from S1)

export const PLAYERS = [
  // ── RED LABEL ───────────────────────────────────────────────
  { id: 1,  name: 'Monish',         category: 'A+', role: 'All-Rounder',    s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },
  { id: 2,  name: 'Vinay',          category: 'A+', role: 'All-Rounder',    s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },
  { id: 3,  name: 'KNK',            category: 'A',  role: 'All-Rounder',    s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },
  { id: 4,  name: 'Yogesh',         category: 'A',  role: 'All-Rounder',    s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },
  { id: 5,  name: 'Puneeth',        category: 'B',  role: 'Keeper-Batsman', s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },
  { id: 6,  name: 'Sharath Jampi',  category: 'B',  role: 'Keeper-Batsman', s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },
  { id: 7,  name: 'Sandarsh',       category: 'B',  role: 'Batsman',        s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: true  },
  { id: 8,  name: 'Shankar',        category: 'B',  role: 'All-Rounder',    s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },
  { id: 9,  name: 'Karthik Infinity',category:'B',  role: 'Batsman',        s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },
  { id: 10, name: 'Vittal',         category: 'C',  role: 'All-Rounder',    s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },
  { id: 11, name: 'Basu',           category: 'C',  role: 'All-Rounder',    s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },
  { id: 12, name: 'Shivappa',       category: 'C',  role: 'All-Rounder',    s1_team: 'Red Label', s2_team: 'Red Label',   auction_price: null, captain: false },

  // ── BLACK LABEL ──────────────────────────────────────────────
  { id: 13, name: 'Rohit',          category: 'A+', role: 'All-Rounder',    s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },
  { id: 14, name: 'Rajesh',         category: 'A+', role: 'All-Rounder',    s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: true  },
  { id: 15, name: 'Harsha',         category: 'A',  role: 'Batsman',        s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },
  { id: 16, name: 'Sachin',         category: 'A',  role: 'All-Rounder',    s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },
  { id: 17, name: 'Raju',           category: 'B',  role: 'All-Rounder',    s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },
  { id: 18, name: 'Mohan Ashu',     category: 'B',  role: 'All-Rounder',    s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },
  { id: 19, name: 'Shada',          category: 'C',  role: 'All-Rounder',    s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },
  { id: 20, name: 'Manju',          category: 'C',  role: 'All-Rounder',    s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },
  { id: 21, name: 'Satish',         category: 'C',  role: 'All-Rounder',    s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },
  { id: 22, name: 'Gunda',          category: 'C',  role: 'Keeper-Batsman', s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },
  { id: 23, name: 'Ganesh',         category: 'C',  role: 'All-Rounder',    s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },
  { id: 24, name: 'Jagannath',      category: 'C',  role: 'All-Rounder',    s1_team: 'Black Label', s2_team: 'Black Label', auction_price: null, captain: false },

  // ── BLUE LABEL ───────────────────────────────────────────────
  { id: 25, name: 'Kiran',          category: 'A+', role: 'All-Rounder',    s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
  { id: 26, name: 'Nishant',        category: 'A+', role: 'All-Rounder',    s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: true  },
  { id: 27, name: 'Yeshwanth',      category: 'A',  role: 'All-Rounder',    s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
  { id: 28, name: 'Mahesh',         category: 'A',  role: 'All-Rounder',    s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
  { id: 29, name: 'Raghavendra',    category: 'A',  role: 'All-Rounder',    s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
  { id: 30, name: 'Dherappa',       category: 'B',  role: 'All-Rounder',    s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
  { id: 31, name: 'KK',             category: 'C',  role: 'All-Rounder',    s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
  { id: 32, name: 'Raghu',          category: 'C',  role: 'All-Rounder',    s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
  { id: 33, name: 'Raka',           category: 'C',  role: 'All-Rounder',    s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
  { id: 34, name: 'Abhishek',       category: 'C',  role: 'Batsman',        s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
  { id: 35, name: 'Ashok',          category: 'C',  role: 'All-Rounder',    s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
  { id: 36, name: 'Bipin',          category: 'C',  role: 'Batsman',        s1_team: 'Blue Label', s2_team: 'Blue Label',  auction_price: null, captain: false },
]

export const TEAMS = [
  {
    id: 'red',
    name: 'Red Label',
    shortName: 'RED',
    color: '#C0392B',
    bg: '#1A0505',
    border: '#7B1A1A',
    textColor: '#FF6B6B',
    gradient: 'linear-gradient(135deg, #C0392B 0%, #5A0A0A 100%)',
    captain: 'Sandarsh',
    s1_captain: 'Sandarsh',
    s2_captain: 'Sandarsh',
    s1_purse: 2000,
  },
  {
    id: 'black',
    name: 'Black Label',
    shortName: 'BLK',
    color: '#555555',
    bg: '#0F0F0F',
    border: '#444444',
    textColor: '#CCCCCC',
    gradient: 'linear-gradient(135deg, #3a3a3a 0%, #0F0F0F 100%)',
    captain: 'Rajesh',
    s1_captain: 'Satish',
    s2_captain: 'Rajesh',
    s1_purse: 2000,
  },
  {
    id: 'blue',
    name: 'Blue Label',
    shortName: 'BLU',
    color: '#1A4A9A',
    bg: '#050D1A',
    border: '#1A3D8B',
    textColor: '#6B9FFF',
    gradient: 'linear-gradient(135deg, #1A4A9A 0%, #050D1A 100%)',
    captain: 'Nishant',
    s1_captain: 'Rakshit',
    s2_captain: 'Nishant',
    s1_purse: 2000,
  },
]

export const SEASON_2_MATCHES = [
  { id: 1, home: 'Red Label',   away: 'Black Label', date: '2026-06-21', time: '07:00', venue: 'Benedict Ground, Kengeri', status: 'upcoming' },
  { id: 2, home: 'Red Label',   away: 'Blue Label',  date: '2026-06-21', time: '07:00', venue: 'Benedict Ground, Kengeri', status: 'upcoming' },
  { id: 3, home: 'Black Label', away: 'Blue Label',  date: '2026-06-21', time: '07:00', venue: 'Benedict Ground, Kengeri', status: 'upcoming' },
]

export const KPL_RULES = {
  format: '20 Overs · Round Robin',
  powerplay: 'Overs 1–6 (max 2 fielders outside 30-yard circle)',
  maxOversPerBowler: 4,
  minBowlers: 7,
  bowlerPenalty: '10 runs deducted if fewer than 7 bowlers used',
  inningsDuration: 90,
  overRatePenalty: '1 fielder removed for every over behind schedule',
}
