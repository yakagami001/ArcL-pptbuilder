import * as React from 'react';
/** Opsi realokasi/anggaran (2–4 per slide). balance < 0 = kekurangan. Nilai number → format Rp. */
export interface BudgetOptionProps{letter?:string;title:React.ReactNode;items?:number[];totalItems?:number;cost?:number|string;balance?:number|string;finalValue?:number|string;finalLabel?:string;verdict?:React.ReactNode;verdictTone?:'ok'|'warn'|'crit';note?:React.ReactNode;recommended?:boolean;recommendedLabel?:string;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function BudgetOption(props:BudgetOptionProps):JSX.Element;
