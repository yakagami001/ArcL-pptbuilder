import * as React from 'react';
/** Kartu KPI HD — angka selalu berkonteks (note: pembanding/sumber). */
export interface HdKpiProps{label?:string;value:React.ReactNode;title?:React.ReactNode;note?:React.ReactNode;highlight?:boolean;size?:'sm'|'md';style?:React.CSSProperties;}
export declare function HdKpi(props:HdKpiProps):JSX.Element;
