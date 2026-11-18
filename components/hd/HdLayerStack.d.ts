import * as React from 'react';
export interface HdLayer{code:string;title:React.ReactNode;desc?:React.ReactNode;tag?:string;tone?:'base'|'gold'|'dark';}
/** Arsitektur berlapis HD (urutkan dari atas: L7 … L1). */
export interface HdLayerStackProps{layers:HdLayer[];flowLabel?:string|null;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function HdLayerStack(props:HdLayerStackProps):JSX.Element;
