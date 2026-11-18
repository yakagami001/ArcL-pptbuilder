import * as React from 'react';
/** RAB resource (BLP + BLNP) per sub-pekerjaan. Maks. ±14 baris per slide; pecah ke slide (1/n) bila lebih. */
export interface RabRow{resource:React.ReactNode;man?:number;days?:number;rate?:number;blp?:number;tools?:number;total?:number;}
export interface RabTableProps{sections:{code?:string;title:React.ReactNode;subtotal?:number|string;rows:RabRow[]}[];total?:number|string;totalLabel?:string;rowHeight?:number;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function RabTable(props:RabTableProps):JSX.Element;
