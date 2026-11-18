import * as React from 'react';
/** Kaki slide HD. progress 0–1 = posisi slide dalam deck (navy terisi + penanda Emas). */
export interface HdFooterProps{variant?:'v8'|'v9';brand?:string;topic?:string;progress?:number;label?:string;page?:React.ReactNode;}
export declare function HdFooter(props:HdFooterProps):JSX.Element;
