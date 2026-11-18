import * as React from 'react';

/**
 * Tabel keuangan / monitoring (K35, K48) dengan pil status.
 */
export interface DataTableProps {
  variant?: 'light' | 'dark' | 'v7';
  columns: { key: string; label: React.ReactNode; align?: 'left'|'right'|'center'; width?: number|string }[];
  rows: Record<string, any>[];
  totalRow?: boolean;
  keyRow?: number;
  rowHeight?: number;
  fontSize?: number;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function DataTable(props: DataTableProps): JSX.Element;
