import * as React from 'react';
/** Agenda bernomor 01–nn (V9). 6–15 butir; 3 kolom × 5 baris maksimal. */
export interface HdAgendaProps{items:{title:string;desc?:string}[];columns?:number;highlight?:number;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function HdAgenda(props:HdAgendaProps):JSX.Element;
