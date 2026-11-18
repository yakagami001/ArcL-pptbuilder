import * as React from 'react';

/**
 * Kartu opsi keputusan di layout BLUE (K16).
 */
export interface OptionCardProps {
  letter?: string;
  title: React.ReactNode;
  points?: React.ReactNode[];
  recommended?: boolean;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function OptionCard(props: OptionCardProps): JSX.Element;
