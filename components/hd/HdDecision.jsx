import React from 'react';
import { H, FB, abs, Badge } from './hdUtil.js';
/** Slide keputusan: panel Navy bergaris Emas (keputusan bernomor) + kolom langkah berikutnya bertanggal. */
export function HdDecision({title='KEPUTUSAN YANG DIMINTA',decisions=[],nextTitle='LANGKAH BERIKUTNYA',next=[],at,style}){
  return (<div style={abs(at,Object.assign({display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:24,fontFamily:FB,fontSize:24,lineHeight:1.25},style))}>
    <div style={{display:'flex',flexDirection:'column',gap:18,background:H.navy7,borderLeft:'8px solid '+H.gold,borderRadius:8,padding:'22px 28px',color:'#fff'}}>
      <span style={{fontWeight:700,letterSpacing:'0.06em',color:H.gold}}>{title}</span>
      {decisions.map((d,i)=><div key={i} style={{display:'flex',gap:16}}><Badge n={i+1} size={44} tone="gold" /><div style={{display:'flex',flexDirection:'column',gap:4}}><span style={{fontWeight:700,fontSize:27}}>{d.title}</span>{d.desc&&<span style={{color:H.od3}}>{d.desc}</span>}</div></div>)}
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:14,border:'1.5px solid '+H.line,borderRadius:8,padding:'22px 28px',color:H.ink}}>
      <span style={{fontWeight:700,letterSpacing:'0.06em',color:H.navy6}}>{nextTitle}</span>
      {next.map((s,i)=><div key={i} style={{display:'grid',gridTemplateColumns:'150px minmax(0,1fr)',gap:16,paddingBottom:12,borderBottom:i<next.length-1?'1.5px solid '+H.lineSoft:'none'}}><span style={{fontWeight:700,color:H.royal}}>{s.when}</span><div style={{display:'flex',flexDirection:'column',gap:2}}><span style={{fontWeight:700,fontSize:26}}>{s.title}</span>{s.desc&&<span style={{color:H.t2}}>{s.desc}</span>}</div></div>)}
    </div>
  </div>);
}
