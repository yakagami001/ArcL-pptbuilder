import React from 'react';
import { H, FB, abs } from './hdUtil.js';
/** Agenda bernomor dalam kisi kolom (mengalir per kolom). highlight = indeks butir keputusan (bingkai Emas). */
export function HdAgenda({items=[],columns=3,highlight,at,style}){
  const rows=Math.ceil(items.length/columns);
  return (<div style={abs(at,Object.assign({display:'grid',gridTemplateColumns:'repeat('+columns+',minmax(0,1fr))',gridTemplateRows:'repeat('+rows+',1fr)',gridAutoFlow:'column',gap:'14px 24px',fontFamily:FB,color:H.ink},style))}>
    {items.map((it,i)=>{const hl=i===highlight;return <div key={i} style={{display:'flex',alignItems:'center',gap:20,border:(hl?2:1)+'px solid '+(hl?H.gold:H.line),background:hl?H.tintGold:'#fff',borderRadius:8,padding:'0 22px'}}><span style={{fontSize:36,fontWeight:700,color:H.royal,width:48,flex:'none'}}>{String(i+1).padStart(2,'0')}</span><div style={{display:'flex',flexDirection:'column'}}><span style={{fontSize:28,fontWeight:700}}>{it.title}</span>{it.desc&&<span style={{fontSize:24,color:H.t2}}>{it.desc}</span>}</div></div>;})}
  </div>);
}
