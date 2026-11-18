import * as React from 'react';

/**
 * Pilar berkepala bernomor (K15) — urutan Navy → Biru → Teal Korporat → Teal Aksen.
 */
export interface PillarCardProps {
  index?: number;
  title: React.ReactNode;
  items?: React.ReactNode[];
  basis?: React.ReactNode;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function PillarCard(props: PillarCardProps): JSX.Element;
