import * as React from 'react';
/** Perbandingan nilai awal vs akhir per item (penawaran vs kontrak, anggaran vs realisasi). Maks. 6 item. */
export interface PriceCompareProps{items:{label:React.ReactNode;before:number;after:number}[];beforeLabel?:string;afterLabel?:string;title?:string;format?:(v:number)=>string;labelWidth?:number;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function PriceCompare(props:PriceCompareProps):JSX.Element;
