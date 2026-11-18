import * as React from 'react';
export interface HdStage{title:string;desc?:React.ReactNode;note?:React.ReactNode;}
/** Journey kapabilitas bertangga (4–6 tahap). current = indeks tahap berjalan (0-based). */
export interface HdJourneyProps{stages:HdStage[];current?:number;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function HdJourney(props:HdJourneyProps):JSX.Element;
