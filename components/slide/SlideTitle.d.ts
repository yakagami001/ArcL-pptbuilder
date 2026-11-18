import * as React from 'react';

/**
 * Judul slide isi sesuai gaya versi (K01–K04, K55).
 */
export interface SlideTitleProps {
  variant?: 'conclusion' | 'caps' | 'statement' | 'chapter' | 'v7';
  title: React.ReactNode;
  line2?: React.ReactNode;
  subtitle?: React.ReactNode;
  unit?: string;
  chapter?: string;
  chapterName?: string;
  docName?: string;
  dark?: boolean;
}

export declare function SlideTitle(props: SlideTitleProps): JSX.Element;
