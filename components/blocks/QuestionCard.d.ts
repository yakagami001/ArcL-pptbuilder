import * as React from 'react';

/**
 * Pertanyaan diskusi bernomor FGD (K26).
 */
export interface QuestionCardProps {
  index?: number;
  question: React.ReactNode;
  output?: React.ReactNode;
  /** Penempatan absolut pada kanvas slide dalam inci [x, y, w, h]. */
  at?: [number, number, number?, number?];
  style?: React.CSSProperties;
}

export declare function QuestionCard(props: QuestionCardProps): JSX.Element;
