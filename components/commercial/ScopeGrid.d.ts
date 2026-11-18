import * as React from 'react';
/** Kisi ruang lingkup/komponen berstatus (2–5 kolom). Pakai desc ATAU points per kartu. */
export interface ScopeItem{kicker?:string;icon?:string;title:React.ReactNode;desc?:React.ReactNode;points?:React.ReactNode[];status?:'selesai'|'berjalan'|'tidak'|'ditunda'|'usulan';statusLabel?:string;}
export interface ScopeGridProps{items:ScopeItem[];columns?:number;gap?:number;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function ScopeGrid(props:ScopeGridProps):JSX.Element;
