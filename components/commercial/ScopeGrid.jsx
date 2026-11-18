import React from 'react';
import { H, FB, abs, Ico } from '../hd/hdUtil.js';
import { StatusChip } from './StatusChip.jsx';
/** Kisi ruang lingkup / komponen: kicker, judul, deskripsi atau butir, chip status. status 'tidak' = kartu garis putus & redup. */
export function ScopeGrid({items=[],columns=4,gap=20,at,style}){
  return (<div style={abs(at,Object.assign({display:'grid',gridTemplateColumns:'repeat('+columns+',minmax(0,1fr))',gap,fontFamily:FB},style))}>
    {items.map((it,i)=>{const off=it.status==='tidak';return (<div key={i} style={{display:'flex',flexDirection:'column',gap:12,padding:'20px 24px',background:off?H.tint3:'#fff',border:'1.5px '+(off?'dashed '+H.dash:'solid '+H.line),borderTop:'6px solid '+(off?H.inactive:H.royal),borderRadius:8,boxSizing:'border-box',minWidth:0}}>
      {(it.icon||it.kicker)&&<div style={{display:'flex',alignItems:'center',gap:14}}>{it.icon&&<Ico name={it.icon} size={52} />}{it.kicker&&<span style={{fontSize:24,fontWeight:700,letterSpacing:'0.04em',color:off?H.t2:H.royal}}>{it.kicker}</span>}</div>}
      <span style={{fontSize:28,fontWeight:700,lineHeight:1.2,color:off?H.t2:H.ink}}>{it.title}</span>
      {it.desc&&<span style={{fontSize:24,lineHeight:1.3,color:H.t2}}>{it.desc}</span>}
      {it.points&&<ul style={{margin:0,paddingLeft:24,display:'flex',flexDirection:'column',gap:6,fontSize:24,lineHeight:1.3,color:H.ink}}>{it.points.map((p,j)=><li key={j}>{p}</li>)}</ul>}
      {it.status&&<div style={{marginTop:'auto',paddingTop:6}}><StatusChip status={it.status}>{it.statusLabel}</StatusChip></div>}
    </div>);})}
  </div>);
}
