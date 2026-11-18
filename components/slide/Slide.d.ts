import * as React from 'react';

/**
 * Kanvas slide 1280×720 dengan 7 layout master.
 */
export interface SlideProps {
  layout?: 'cover' | 'section' | 'white' | 'gray' | 'blue' | 'index' | 'end';
  version?: 'V1'|'V2'|'V3'|'V4'|'V5'|'V6'|'V7';
  page?: number | string;
  title?: React.ReactNode | React.ReactNode[];
  subtitle?: React.ReactNode;
  date?: string;
  footerUrl?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Slide(props: SlideProps): JSX.Element;
