import * as React from 'react';
/** Chip status: selesai | berjalan | tidak | ditunda | usulan. children menimpa label bawaan. */
export interface StatusChipProps{status?:'selesai'|'berjalan'|'tidak'|'ditunda'|'usulan';children?:React.ReactNode;size?:number;style?:React.CSSProperties;}
export declare function StatusChip(props:StatusChipProps):JSX.Element;
