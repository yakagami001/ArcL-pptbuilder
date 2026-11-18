import * as React from 'react';
/** Kondisi saat ini → setelah penyesuaian (kebutuhan baru, CR, perbaikan proses). Maks. 5 baris per slide. */
export interface BeforeAfterRow{no?:number|string;title:React.ReactNode;tag?:string;tagTone?:'adjust'|'new';before:React.ReactNode;after:React.ReactNode;}
export interface BeforeAfterTableProps{rows:BeforeAfterRow[];needLabel?:string;beforeLabel?:string;afterLabel?:string;needWidth?:number;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function BeforeAfterTable(props:BeforeAfterTableProps):JSX.Element;
