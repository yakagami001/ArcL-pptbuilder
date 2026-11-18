import React from 'react';
import { H, FB } from './hdUtil.js';
/** Kartu angka HD (V9): label KAPITAL opsional, angka 46–60px Royal, judul, catatan; batang bawah Navy (sorot = Emas, satu per baris). */
export function HdKpi({label,value,title,note,highlight,size='md',style}){
  return (<div style={Object.assign({display:'flex',flexDirection:'column',justifyContent:'center',gap:4,background:'#fff',border:'1px solid '+H.line,borderBottom:'6px solid '+(highlight?H.gold:H.navy6),borderRadius:8,padding:'18px 22px',fontFamily:FB,color:H.ink,minWidth:0},style)}>
    {label&&<span style={{fontSize:24,fontWeight:700,letterSpacing:'0.04em',color:H.t2}}>{label}</span>}
    <span style={{fontSize:size==='sm'?46:60,fontWeight:700,lineHeight:1.05,color:H.royal}}>{value}</span>
    {title&&<span style={{fontSize:26,fontWeight:700}}>{title}</span>}
    {note&&<span style={{fontSize:24,color:H.t2}}>{note}</span>}
  </div>);
}
