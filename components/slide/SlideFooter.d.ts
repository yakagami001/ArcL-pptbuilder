import * as React from 'react';

/**
 * Kaki slide: baris spesifikasi, pita progres bab, atau kaki V7 (K04, K05, K56).
 */
export interface SlideFooterProps {
  variant?: 'spec' | 'progress' | 'v7';
  text?: React.ReactNode;
  docName?: string;
  active?: number;
  segments?: number;
  unit?: string;
  page?: number | string;
  dark?: boolean;
}

export declare function SlideFooter(props: SlideFooterProps): JSX.Element;
