import * as React from 'react';

/**
 * Ikon garis PLN Icon Plus (43 glyph, stroke 3,4/64), opsional di dalam lingkaran.
 */
export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  circle?: 'tint' | 'biru' | 'amber' | 'navy' | 'gold' | 'royal';
  circleSize?: number;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element;
