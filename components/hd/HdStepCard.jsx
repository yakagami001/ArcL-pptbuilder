import React from 'react';
import { H, FB, Ico, Badge } from './hdUtil.js';
/** Kartu tahap/kategori HD: ikon atau nomor, judul, meta Royal, isi, kaki berlabel; batang bawah Navy (sorot = Emas). */
export function HdStepCard({icon,badge,letter,title,meta,children,footLabel,foot,highlight,bar=true,size='md',style}){
  const big=size==='lg';
  return (<div style={Object.assign({flex:1,minWidth:0,display:'flex',flexDirection:'column',gap:big?18:14,padding:big?32:28,background:highlight?H.tintGold:'#fff',border:'1.5px solid '+(highlight?H.gold:H.line),borderBottom:bar?'8px solid '+(highlight?H.gold:H.navy6):undefined,borderRadius:12,boxSizing:'border-box',fontFamily:FB,color:H.ink},style)}>
    {icon&&<Ico name={icon} size={72} />}
    {badge!=null&&<Badge n={badge} size={64} tone={highlight?'gold':'royal'} />}
    {letter&&<span style={{alignSelf:'flex-start',padding:'6px 16px',background:H.navy7,borderRadius:4,fontSize:30,fontWeight:700,color:'#fff'}}>{letter}</span>}
    <span style={{fontSize:big?44:34,fontWeight:700,lineHeight:1.15}}>{title}</span>
    {meta&&<span style={{fontSize:26,fontWeight:700,color:H.royal}}>{meta}</span>}
    {children&&<span style={{fontSize:25,lineHeight:1.35,color:H.t2}}>{children}</span>}
    {foot&&<div style={{marginTop:'auto',display:'flex',flexDirection:'column',gap:6,paddingTop:18,borderTop:'1.5px solid '+(highlight?H.gold3:H.lineSoft)}}>{footLabel&&<span style={{fontSize:24,fontWeight:700,color:H.t2}}>{footLabel}</span>}<span style={{fontSize:26,fontWeight:700,color:H.royal}}>{foot}</span></div>}
  </div>);
}
