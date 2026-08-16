// Registry of games with a public leaderboard page at /leaderboards/<slug>/.
//
// Adding a game here is the ONLY change needed to give it a board page — the
// route and the table component are both driven from this map. Keep `gameId`
// identical to the game's registry entry in coinless-kit's leaderboard Worker,
// and keep `statColumns` keys inside that game's registered `statsFields`.

export const LEADERBOARD_ENDPOINT = 'https://scores.coinlessgames.com';

export interface StatColumn {
  /** Key inside an entry's `stats` object, as registered in the Worker. */
  key: string;
  /** Column heading. Kept short — this table gets narrow on phones. */
  label: string;
}

export interface WindowOption {
  /** One of the API's windows: 4h | 8h | 12h | 24h | 7d | 30d | year | all */
  value: string;
  label: string;
}

export interface LeaderboardConfig {
  /** URL segment: /leaderboards/<slug>/ */
  slug: string;
  /** `gameId` sent to the API. Usually the same as `slug`, but not required to be. */
  gameId: string;
  /** Display title for the page heading. */
  title: string;
  /** Slug of the matching entry in the `games` content collection, for the back-link. */
  gameSlug: string;
  /** Subset of the API's eight windows to expose. First entry is the default. */
  windows: WindowOption[];
  /** Rows fetched per window. Module clamps to 1..100. */
  limit: number;
  /** Extra columns pulled from each entry's `stats`. Two or three reads best. */
  statColumns: StatColumn[];
}

export const LEADERBOARDS: LeaderboardConfig[] = [
  {
    slug: 'orbital-overhaul',
    gameId: 'orbital-overhaul',
    title: 'Atomic Dustbin Dan: Orbital Overhaul',
    gameSlug: 'orbital-overhaul',
    // Matches the in-game board screen's LEADERBOARD_WINDOWS so the site and
    // the game never disagree about which windows "exist" for this game.
    windows: [
      { value: '24h', label: 'Last 24 hours' },
      { value: '7d', label: 'Last 7 days' },
      { value: 'all', label: 'All time' },
    ],
    limit: 25,
    statColumns: [
      { key: 'wave_reached', label: 'Wave' },
      { key: 'canisters_delivered', label: 'Delivered' },
    ],
  },
];

/** Look up by the leaderboard's own URL segment (/leaderboards/<slug>/). */
export function getLeaderboard(slug: string): LeaderboardConfig | undefined {
  return LEADERBOARDS.find((board) => board.slug === slug);
}

/**
 * Look up by the slug of an entry in the `games` content collection. Used by
 * the game page to decide whether to show a leaderboard link. Deliberately a
 * separate function from getLeaderboard(): `slug` and `gameSlug` happen to be
 * identical today, but they are different identifiers and a future game could
 * easily have a board URL that doesn't match its game page URL.
 */
export function getLeaderboardForGame(gameSlug: string): LeaderboardConfig | undefined {
  return LEADERBOARDS.find((board) => board.gameSlug === gameSlug);
}