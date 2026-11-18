import React from 'react';
import { H, FB, abs } from './hdUtil.js';
/** Journey bertangga: tiap tahap naik; tahap sebelum current = selesai (Navy), current = Emas, sesudahnya = target (Royal muda). */
export function HdJourney({stages=[],current=0,at,style}){
  const n=stages.length||1;
  return (<div style={abs(at,Object.assign({display:'grid',gridTemplateColumns:'repeat('+n+',minmax(0,1fr))',gap:16,fontFamily:FB,fontSize:24,lineHeight:1.25,color:H.ink},style))}>
    {stages.map((s,i)=>{const done=i<current,cur=i===current;const bg=cur?H.gold:done?H.navy6:i===0?H.tint2:H.tint;const fg=cur?H.ink:done?'#fff':H.t2;const num=cur?H.ink:done?H.gold:H.t2;return (
      <div key={i} style={{display:'flex',flexDirection:'column',gap:12,minHeight:0}}>
        <div style={{flex:(n-i)}}></div>
        <div style={{height:90+i*28,background:bg,borderRadius:'8px 8px 0 0',display:'flex',alignItems:'flex-start',gap:12,padding:'22px 18px',boxSizing:'border-box'}}>
          <span style={{width:44,height:44,borderRadius:22,background:num,color:cur||done?(cur?'#fff':H.ink):'#fff',fontWeight:700,fontSize:26,display:'flex',alignItems:'center',justifyContent:'center',flex:'none'}}>{i+1}</span>
          <span style={{fontSize:28,fontWeight:700,color:fg,lineHeight:1.1}}>{s.title}</span></div>
        <span style={{color:H.t2}}>{s.desc}</span>
        {s.note&&<span style={{color:H.royal,fontWeight:700}}>{s.note}</span>}
      </div>);})}
  </div>);
}
