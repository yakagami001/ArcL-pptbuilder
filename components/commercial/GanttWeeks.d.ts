import * as React from 'react';
/** Gantt mingguan W1–Wn. phase: prep | dev | test | uat (atau kunci phases sendiri). milestone: true = berlian di start. */
export interface GanttRow{label:React.ReactNode;note?:string;start:number;len?:number;phase?:string;milestone?:boolean;}
export interface GanttWeeksProps{weeks?:number;prefix?:string;labelWidth?:number;rowHeight?:number;groups:{title:React.ReactNode;rows:GanttRow[]}[];marker?:{at:number;label:string};phases?:Record<string,{l:string;c:string}>;legend?:boolean;at?:[number,number,number?,number?];style?:React.CSSProperties;}
export declare function GanttWeeks(props:GanttWeeksProps):JSX.Element;
