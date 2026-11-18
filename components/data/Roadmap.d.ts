import * as React from 'react';

/**
 * Roadmap tiga horizon NOW / NEXT / ULTIMATE (K30).
 */
export interface RoadmapProps {
  horizons: { label?: string; title: React.ReactNode; items?: React.ReactNode[]; time?: string }[];
  v7?: boolean;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function Roadmap(props: RoadmapProps): JSX.Element;
