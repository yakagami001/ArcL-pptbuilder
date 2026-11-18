import * as React from 'react';

/**
 * Pita INSIGHT / KEY TAKEAWAY penutup slide (K22, K23, K58).
 */
export interface InsightBandProps {
  variant?: 'light' | 'dark' | 'v7';
  label?: string;
  children: React.ReactNode;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function InsightBand(props: InsightBandProps): JSX.Element;
