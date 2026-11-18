import * as React from 'react';

/**
 * Angka besar + pembanding (K09) — angka tanpa pembanding dilarang.
 */
export interface BigNumberProps {
  value: React.ReactNode;
  label: React.ReactNode;
  compare?: React.ReactNode;
  trend?: 'up' | 'down' | 'flat';
  dark?: boolean;
  size?: number;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function BigNumber(props: BigNumberProps): JSX.Element;
