import * as React from 'react';
/** Persamaan nilai (dana tersedia, selisih, total). value number → format Rp otomatis. */
export interface FundTerm{kicker?:string;title:React.ReactNode;note?:React.ReactNode;value:number|string;op?:string;}
export interface FundEquationProps{terms:FundTerm[];result?:FundTerm;op?:string;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function FundEquation(props:FundEquationProps):JSX.Element;
