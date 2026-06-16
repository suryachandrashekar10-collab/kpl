-- ============================================================
-- KPL — Kanteerava Premier League · Supabase Schema
-- Run this in Supabase SQL Editor to set up the full DB
-- ============================================================

-- ── TEAMS ──────────────────────────────────────────────────
create table if not exists teams (
  id          text primary key,          -- 'red' | 'black' | 'blue'
  name        text not null,             -- 'Red Label'
  short_name  text not null,             -- 'RED'
  color       text not null,             -- '#C0392B'
  text_color  text not null,
  bg_color    text not null,
  border_color text not null
);

insert into teams values
  ('red',   'Red Label',   'RED', '#C0392B', '#FF6B6B', '#1A0505', '#7B1A1A'),
  ('black', 'Black Label', 'BLK', '#555555', '#CCCCCC', '#0F0F0F', '#444444'),
  ('blue',  'Blue Label',  'BLU', '#1A4A9A', '#6B9FFF', '#050D1A', '#1A3D8B')
on conflict (id) do nothing;

-- ── SEASONS ────────────────────────────────────────────────
create table if not exists seasons (
  id          int  primary key,
  year        int  not null,
  status      text not null default 'completed', -- 'upcoming' | 'active' | 'completed'
  venue       text,
  format      text,
  had_auction boolean default false
);

insert into seasons values
  (1, 2025, 'completed', 'Benedict Ground, Kengeri', '10-15 Overs Round Robin · 20 Overs Final', true),
  (2, 2026, 'active',    'Benedict Ground, Kengeri', '20 Overs Round Robin', false)
on conflict (id) do nothing;

-- ── PLAYERS ────────────────────────────────────────────────
create table if not exists players (
  id            serial primary key,
  name          text  not null,
  category      text  not null check (category in ('A+', 'A', 'B', 'C')),
  role          text  not null,           -- 'All-Rounder' | 'Batsman' | 'Bowler' | 'Keeper-Batsman'
  s1_team_id    text  references teams(id),
  s2_team_id    text  references teams(id),
  is_captain_s1 boolean default false,
  is_captain_s2 boolean default false,
  auction_price int   default null,       -- Season 1 final auction price (units)
  base_price    int   not null            -- Category base price
);

insert into players (name, category, role, s1_team_id, s2_team_id, is_captain_s2, base_price) values
  -- RED LABEL
  ('Monish',          'A+', 'All-Rounder',    'red',   'red',   false, 200),
  ('Vinay',           'A+', 'All-Rounder',    'red',   'red',   false, 200),
  ('KNK',             'A',  'All-Rounder',    'red',   'red',   false, 125),
  ('Yogesh',          'A',  'All-Rounder',    'red',   'red',   false, 125),
  ('Puneeth',         'B',  'Keeper-Batsman', 'red',   'red',   false, 100),
  ('Sharath Jampi',   'B',  'Keeper-Batsman', 'red',   'red',   false, 100),
  ('Sandarsh',        'B',  'Batsman',        'red',   'red',   true,  100),
  ('Shankar',         'B',  'All-Rounder',    'red',   'red',   false, 100),
  ('Karthik Infinity','B',  'Batsman',        'red',   'red',   false, 100),
  ('Vittal',          'C',  'All-Rounder',    'red',   'red',   false,  75),
  ('Basu',            'C',  'All-Rounder',    'red',   'red',   false,  75),
  ('Shivappa',        'C',  'All-Rounder',    'red',   'red',   false,  75),
  -- BLACK LABEL
  ('Rohit',           'A+', 'All-Rounder',    'black', 'black', false, 200),
  ('Rajesh',          'A+', 'All-Rounder',    'black', 'black', true,  200),
  ('Harsha',          'A',  'Batsman',        'black', 'black', false, 125),
  ('Sachin',          'A',  'All-Rounder',    'black', 'black', false, 125),
  ('Raju',            'B',  'All-Rounder',    'black', 'black', false, 100),
  ('Mohan Ashu',      'B',  'All-Rounder',    'black', 'black', false, 100),
  ('Shada',           'C',  'All-Rounder',    'black', 'black', false,  75),
  ('Manju',           'C',  'All-Rounder',    'black', 'black', false,  75),
  ('Satish',          'C',  'All-Rounder',    'black', 'black', false,  75),
  ('Gunda',           'C',  'Keeper-Batsman', 'black', 'black', false,  75),
  ('Ganesh',          'C',  'All-Rounder',    'black', 'black', false,  75),
  ('Jagannath',       'C',  'All-Rounder',    'black', 'black', false,  75),
  -- BLUE LABEL
  ('Kiran',           'A+', 'All-Rounder',    'blue',  'blue',  false, 200),
  ('Nishant',         'A+', 'All-Rounder',    'blue',  'blue',  true,  200),
  ('Yeshwanth',       'A',  'All-Rounder',    'blue',  'blue',  false, 125),
  ('Mahesh',          'A',  'All-Rounder',    'blue',  'blue',  false, 125),
  ('Raghavendra',     'A',  'All-Rounder',    'blue',  'blue',  false, 125),
  ('Dherappa',        'B',  'All-Rounder',    'blue',  'blue',  false, 100),
  ('KK',              'C',  'All-Rounder',    'blue',  'blue',  false,  75),
  ('Raghu',           'C',  'All-Rounder',    'blue',  'blue',  false,  75),
  ('Raka',            'C',  'All-Rounder',    'blue',  'blue',  false,  75),
  ('Abhishek',        'C',  'Batsman',        'blue',  'blue',  false,  75),
  ('Ashok',           'C',  'All-Rounder',    'blue',  'blue',  false,  75),
  ('Bipin',           'C',  'Batsman',        'blue',  'blue',  false,  75)
on conflict do nothing;

-- ── MATCHES ────────────────────────────────────────────────
create table if not exists matches (
  id           serial primary key,
  season_id    int  references seasons(id),
  match_number int  not null,
  home_team_id text references teams(id),
  away_team_id text references teams(id),
  match_date   date,
  start_time   time,
  venue        text,
  status       text default 'upcoming',  -- 'upcoming' | 'live' | 'completed'
  toss_winner  text references teams(id),
  toss_choice  text,                     -- 'bat' | 'field'
  result       text,                     -- free text result summary
  winner_id    text references teams(id)
);

insert into matches (season_id, match_number, home_team_id, away_team_id, match_date, start_time, venue, status) values
  (2, 1, 'red',   'black', '2026-06-21', '07:00', 'Benedict Ground, Kengeri', 'upcoming'),
  (2, 2, 'red',   'blue',  '2026-06-21', '07:00', 'Benedict Ground, Kengeri', 'upcoming'),
  (2, 3, 'black', 'blue',  '2026-06-21', '07:00', 'Benedict Ground, Kengeri', 'upcoming')
on conflict do nothing;

-- ── INNINGS ────────────────────────────────────────────────
create table if not exists innings (
  id           serial primary key,
  match_id     int  references matches(id),
  innings_num  int  not null,            -- 1 or 2
  batting_team text references teams(id),
  bowling_team text references teams(id),
  total_runs   int  default 0,
  total_wickets int default 0,
  total_overs  numeric(4,1) default 0,
  extras       int  default 0,
  penalty_runs int  default 0,           -- 10-run penalty if <7 bowlers used
  status       text default 'pending'    -- 'pending' | 'live' | 'completed'
);

-- ── BALL BY BALL ───────────────────────────────────────────
create table if not exists deliveries (
  id            serial primary key,
  innings_id    int  references innings(id),
  over_number   int  not null,
  ball_number   int  not null,           -- 1-6 (legal balls)
  batsman_id    int  references players(id),
  bowler_id     int  references players(id),
  runs_off_bat  int  default 0,
  extras        int  default 0,
  extra_type    text,                    -- 'wide' | 'no_ball' | 'bye' | 'leg_bye'
  wicket        boolean default false,
  wicket_type   text,                    -- 'bowled' | 'caught' | 'run_out' | 'lbw' etc
  fielder_id    int  references players(id),
  is_boundary   boolean default false,
  is_six        boolean default false,
  created_at    timestamptz default now()
);

-- ── BATTING SCORECARD ──────────────────────────────────────
create table if not exists batting_scores (
  id          serial primary key,
  innings_id  int  references innings(id),
  player_id   int  references players(id),
  runs        int  default 0,
  balls       int  default 0,
  fours       int  default 0,
  sixes       int  default 0,
  how_out     text,
  bowler_id   int  references players(id),
  fielder_id  int  references players(id),
  batting_pos int
);

-- ── BOWLING SCORECARD ──────────────────────────────────────
create table if not exists bowling_scores (
  id          serial primary key,
  innings_id  int  references innings(id),
  player_id   int  references players(id),
  overs       numeric(4,1) default 0,
  maidens     int  default 0,
  runs        int  default 0,
  wickets     int  default 0,
  wides       int  default 0,
  no_balls    int  default 0
);

-- ── MATCH AWARDS ───────────────────────────────────────────
create table if not exists match_awards (
  id          serial primary key,
  match_id    int  references matches(id),
  award_type  text not null,             -- 'best_batsman' | 'best_bowler'
  player_id   int  references players(id),
  notes       text
);

-- ── SEASON AWARDS ──────────────────────────────────────────
create table if not exists season_awards (
  id          serial primary key,
  season_id   int  references seasons(id),
  award_type  text not null,             -- 'golden_bat' | 'golden_ball' | 'golden_hands' | 'champions'
  player_id   int  references players(id),
  team_id     text references teams(id), -- for 'champions'
  notes       text
);

-- ── AUCTION BIDS (for live auction — Season 3+) ────────────
create table if not exists auction_sessions (
  id           serial primary key,
  season_id    int  references seasons(id),
  status       text default 'pending',   -- 'pending' | 'active' | 'completed'
  current_player_id int references players(id),
  current_round int  default 1,
  started_at   timestamptz,
  ended_at     timestamptz
);

create table if not exists auction_bids (
  id           serial primary key,
  session_id   int  references auction_sessions(id),
  player_id    int  references players(id),
  team_id      text references teams(id),
  bid_amount   int  not null,
  is_winning   boolean default false,
  placed_at    timestamptz default now()
);

create table if not exists team_purses (
  id           serial primary key,
  session_id   int  references auction_sessions(id),
  team_id      text references teams(id),
  purse_start  int  default 2000,
  purse_spent  int  default 0,
  unique(session_id, team_id)
);

-- ── REALTIME ENABLEMENT ────────────────────────────────────
-- Enable realtime for live auction and scorecard
alter publication supabase_realtime add table auction_bids;
alter publication supabase_realtime add table team_purses;
alter publication supabase_realtime add table deliveries;
alter publication supabase_realtime add table innings;
alter publication supabase_realtime add table matches;

-- ── VIEWS ─────────────────────────────────────────────────

-- Points table view
create or replace view points_table as
select
  t.id, t.name, t.short_name, t.color, t.text_color,
  count(m.id) filter (where m.status = 'completed') as played,
  count(m.id) filter (where m.winner_id = t.id) as won,
  count(m.id) filter (where m.status = 'completed' and m.winner_id != t.id and m.winner_id is not null) as lost,
  count(m.id) filter (where m.status = 'completed' and m.winner_id is null) as tied,
  (count(m.id) filter (where m.winner_id = t.id) * 2 +
   count(m.id) filter (where m.status = 'completed' and m.winner_id is null)) as points
from teams t
left join matches m on (m.home_team_id = t.id or m.away_team_id = t.id) and m.season_id = 2
group by t.id, t.name, t.short_name, t.color, t.text_color
order by points desc;
