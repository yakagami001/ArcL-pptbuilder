import * as React from 'react';
/** Tabel bernomor HD (V8) — maks. 6 baris × 4 kolom isi. */
export interface HdNumberedTableProps{columns:{label:string;width?:string}[];rows:React.ReactNode[][];rowHeight?:number;accentLast?:boolean;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function HdNumberedTable(props:HdNumberedTableProps):JSX.Element;
