import * as React from 'react';

/**
 * Pil status, kepala, atau chip tema (K21; status di K17/K48).
 */
export interface PillProps {
  tone?: 'ok' | 'warn' | 'crit' | 'navy' | 'biru' | 'tealt' | 'amber' | 'tint' | 'royal' | 'gold';
  size?: 'sm' | 'md';
  square?: boolean;
  children: React.ReactNode;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function Pill(props: PillProps): JSX.Element;
