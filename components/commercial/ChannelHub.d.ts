import * as React from 'react';
/** Kanal → sistem pusat (tahap bernomor) → kemampuan. 2–4 kanal, 3–6 tahap, 0–8 kemampuan. */
export interface ChannelHubProps{channelsLabel?:string;channels:{name:React.ReactNode;note?:React.ReactNode;icon?:string}[];hub:{name:React.ReactNode;note?:React.ReactNode};stages:{title:React.ReactNode;points?:React.ReactNode[]}[];capabilities?:React.ReactNode[];at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function ChannelHub(props:ChannelHubProps):JSX.Element;
