import * as React from 'react';
/** Kontras kondisi: SUDAH ADA vs BELUM TERLIHAT (V9). Satu-satunya pemakaian garis kiri tebal yang diizinkan. */
export interface HdStatusListProps{tone?:'have'|'gap';title?:string;icon?:string;items:React.ReactNode[];style?:React.CSSProperties;}
export declare function HdStatusList(props:HdStatusListProps):JSX.Element;
