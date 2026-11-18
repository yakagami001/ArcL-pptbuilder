import React from 'react';
import { H, FB, Ico } from './hdUtil.js';
/** Daftar status dua sisi: tone have = SUDAH ADA (garis kiri Royal, titik penuh); gap = BELUM TERLIHAT (garis putus, titik kosong, latar #F5F8FD). */
export function HdStatusList({tone='have',title,icon,items=[],style}){
  const gap=tone==='gap';
  return (<div style={Object.assign({display:'flex',flexDirection:'column',gap:22,border:'1px '+(gap?'dashed '+H.dash:'solid '+H.line),borderLeft:'6px solid '+(gap?H.inactive:H.royal),borderRadius:8,padding:'24px 26px',background:gap?H.tint3:'#fff',fontFamily:FB,minWidth:0},style)}>
    <div style={{display:'flex',alignItems:'center',gap:14}}>{icon&&<Ico name={icon} size={52} />}<span style={{fontSize:30,fontWeight:700,letterSpacing:'0.06em',color:gap?H.t2:H.navy6}}>{title||(gap?'BELUM TERLIHAT':'SUDAH ADA')}</span></div>
    {items.map((t,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:14}}><span style={{width:14,height:14,borderRadius:7,flex:'none',boxSizing:'border-box',background:gap?'transparent':H.royal,border:gap?'2px solid '+H.t2:'none'}}></span><span style={{fontSize:28,lineHeight:1.25,color:gap?H.t3:H.ink}}>{t}</span></div>)}
  </div>);
}
