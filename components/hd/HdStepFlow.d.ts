import * as React from 'react';
import { HdStepCardProps } from './HdStepCard';
export interface HdStep extends Omit<HdStepCardProps,'children'|'style'>{body?:React.ReactNode;grow?:number;}
/** Alur tahap kiri→kanan (3–5 kartu) dengan panah. */
export interface HdStepFlowProps{steps:HdStep[];arrows?:boolean;gap?:number;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function HdStepFlow(props:HdStepFlowProps):JSX.Element;
