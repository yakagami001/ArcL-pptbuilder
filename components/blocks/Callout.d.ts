import * as React from 'react';

/**
 * Kotak pesan: kutipan, bahan terbuka, langkah berikutnya, keputusan (K24, K25, K27, K28).
 */
export interface CalloutProps {
  variant?: 'quote' | 'open' | 'next' | 'decision';
  label?: string;
  author?: string;
  role?: string;
  children: React.ReactNode;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function Callout(props: CalloutProps): JSX.Element;
