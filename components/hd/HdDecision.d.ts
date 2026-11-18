import * as React from 'react';
/** Keputusan + langkah berikutnya (V9 slide akhir isi). Maks. 4 keputusan, 4 langkah. */
export interface HdDecisionProps{title?:string;decisions:{title:React.ReactNode;desc?:React.ReactNode}[];nextTitle?:string;next?:{when:string;title:React.ReactNode;desc?:React.ReactNode}[];at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function HdDecision(props:HdDecisionProps):JSX.Element;
