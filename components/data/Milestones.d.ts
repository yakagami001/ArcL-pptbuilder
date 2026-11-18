import * as React from 'react';

/**
 * Milestone horizontal gelap V5 (K32).
 */
export interface MilestonesProps {
  items: { when: string; title: React.ReactNode; note?: React.ReactNode }[];
  current?: number;
  height?: number;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function Milestones(props: MilestonesProps): JSX.Element;
