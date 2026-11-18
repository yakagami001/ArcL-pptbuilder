import * as React from 'react';
/** Kartu tahap HD (V8). Pakai salah satu: icon (3D), badge (angka), letter (huruf tahap mis. F-L-I-SR). Maks. satu highlight per baris. */
export interface HdStepCardProps{icon?:string;badge?:number|string;letter?:string;title:React.ReactNode;meta?:React.ReactNode;children?:React.ReactNode;footLabel?:string;foot?:React.ReactNode;highlight?:boolean;bar?:boolean;size?:'md'|'lg';style?:React.CSSProperties;}
export declare function HdStepCard(props:HdStepCardProps):JSX.Element;
