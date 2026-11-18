import * as React from 'react';
/** Pita INSIGHT / KEY TAKEAWAY HD. Satu kalimat, kata kunci <b> Royal Blue. Default v8 di y 904, tinggi 92. */
export interface HdInsightProps{variant?:'v8'|'v9'|'gold';label?:string;/** nama ikon 3D (assets/icons-3d) */icon?:string;children:React.ReactNode;/** [x,y,w,h] px */at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function HdInsight(props:HdInsightProps):JSX.Element;
