import * as React from 'react';

/**
 * Kartu KPI berikon, gelap, kelayakan, atau berbatang V7 (K10, K11, K13, K57).
 */
export interface KpiCardProps {
  variant?: 'icon' | 'dark' | 'feasibility' | 'v7';
  label: React.ReactNode;
  value: React.ReactNode;
  note?: React.ReactNode;
  icon?: string;
  highlight?: boolean;
  criteria?: string;
  criteriaStatus?: 'ok' | 'warn' | 'crit';
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function KpiCard(props: KpiCardProps): JSX.Element;
