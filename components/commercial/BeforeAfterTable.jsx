import React from 'react';
import { H, FB, abs, Badge } from '../hd/hdUtil.js';
/** Tabel kebutuhan: kondisi saat ini → setelah penyesuaian. tagTone 'new' = label fitur baru (Emas). */
export function BeforeAfterTable({rows=[],needLabel='Kebutuhan',beforeLabel='Kondisi saat ini',afterLabel='Setelah penyesuaian',needWidth=440,at,style}){
  const tpl=needWidth+'px minmax(0,1fr) 56px minmax(0,1fr)';
  return (<div style={abs(at,Object.assign({display:'flex',flexDirection:'column',fontFamily:FB},style))}>
    <div style={{display:'grid',gridTemplateColumns:tpl,gap:20,paddingBottom:12,borderBottom:'3px solid '+H.navy6,fontSize:24,fontWeight:700,letterSpacing:'0.04em',color:H.royal}}><span>{needLabel.toUpperCase()}</span><span>{beforeLabel.toUpperCase()}</span><span></span><span>{afterLabel.toUpperCase()}</span></div>
    {rows.map((r,i)=>{const nw=r.tagTone==='new';return (<div key={i} style={{display:'grid',gridTemplateColumns:tpl,gap:20,alignItems:'center',padding:'14px 0',borderBottom:i<rows.length-1?'1.5px solid '+H.lineSoft:'none'}}>
      <div style={{display:'flex',gap:14,alignItems:'flex-start'}}><Badge n={r.no!=null?r.no:i+1} size={44} square /><div style={{display:'flex',flexDirection:'column',gap:6,minWidth:0}}><b style={{fontSize:26,lineHeight:1.2,color:H.ink}}>{r.title}</b>{r.tag&&<span style={{alignSelf:'flex-start',padding:'2px 12px',borderRadius:999,background:nw?H.tintGold:H.tint,border:'1px solid '+(nw?H.gold:H.lineStrong),fontSize:24,lineHeight:1.2,color:H.ink}}>{r.tag}</span>}</div></div>
      <span style={{fontSize:24,lineHeight:1.3,color:H.t2}}>{r.before}</span>
      <span style={{width:44,height:44,borderRadius:22,background:H.royal,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,fontWeight:700,justifySelf:'center'}}>→</span>
      <span style={{fontSize:24,lineHeight:1.3,color:H.ink,padding:'10px 16px',background:H.tint,borderLeft:'4px solid '+H.royal,borderRadius:'0 6px 6px 0'}}>{r.after}</span>
    </div>);})}
  </div>);
}
