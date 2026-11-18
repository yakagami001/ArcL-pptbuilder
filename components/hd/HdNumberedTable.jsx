import React from 'react';
import { H, FB, abs } from './hdUtil.js';
/** Tabel bernomor HD: kepala KAPITAL Royal bergaris Navy 3px, nomor kotak Navy, kolom terakhir tebal Royal (indikator). */
export function HdNumberedTable({columns=[],rows=[],rowHeight=106,accentLast=true,at,style}){
  const tpl='80px '+columns.map(c=>c.width||'minmax(0,1fr)').join(' ');
  return (<div style={abs(at,Object.assign({display:'flex',flexDirection:'column',fontFamily:FB,color:H.ink},style))}>
    <div style={{display:'grid',gridTemplateColumns:tpl,gap:24,padding:'0 24px 12px',borderBottom:'3px solid '+H.navy6,fontSize:24,fontWeight:700,letterSpacing:1,color:H.royal}}><span>NO</span>{columns.map((c,i)=><span key={i}>{c.label}</span>)}</div>
    {rows.map((r,ri)=><div key={ri} style={{display:'grid',gridTemplateColumns:tpl,gap:24,alignItems:'center',height:rowHeight,padding:'0 24px',borderBottom:ri<rows.length-1?'1.5px solid '+H.tint2:'none'}}>
      <span style={{width:52,height:52,display:'flex',alignItems:'center',justifyContent:'center',background:H.navy7,color:'#fff',fontSize:28,fontWeight:700,borderRadius:4}}>{ri+1}</span>
      {r.map((c,ci)=>{const first=ci===0,last=accentLast&&ci===r.length-1;return <span key={ci} style={{fontSize:first?28:26,fontWeight:first||last?700:400,color:last?H.royal:first?H.ink:H.t2}}>{c}</span>;})}
    </div>)}
  </div>);
}
