import React from 'react';
import { H, FB, abs } from '../hd/hdUtil.js';
/** Batang berpasangan per item: nilai awal (abu) vs nilai akhir (primary) + persentase turun/naik. */
export function PriceCompare({items=[],beforeLabel='Penawaran awal',afterLabel='Terkontrak',title,format,labelWidth=380,at,style}){
  const f=format||(v=>(v/1e6).toLocaleString('id-ID',{maximumFractionDigits:1})+' jt');
  const max=Math.max(1,...items.map(i=>Math.max(i.before||0,i.after||0)));
  const bar=(v,c)=>(<div style={{display:'flex',alignItems:'center',gap:12,height:30}}><span style={{flex:'none',height:22,width:'calc((100% - 150px) * '+(v/max)+')',minWidth:4,background:c,borderRadius:'0 4px 4px 0'}}></span><span style={{fontSize:24,color:H.ink,whiteSpace:'nowrap'}}>{f(v)}</span></div>);
  const key=(c,l)=><span style={{display:'flex',alignItems:'center',gap:10}}><i style={{width:28,height:16,background:c,borderRadius:3}}></i>{l}</span>;
  return (<div style={abs(at,Object.assign({display:'flex',flexDirection:'column',gap:16,fontFamily:FB},style))}>
    <div style={{display:'flex',alignItems:'center',gap:28,fontSize:24,color:H.t2}}>{title&&<span style={{fontWeight:700,letterSpacing:'0.06em',color:H.navy6,marginRight:'auto'}}>{title}</span>}{key('#C2C9D8',beforeLabel)}{key(H.royal,afterLabel)}</div>
    {items.map((it,i)=>{const d=it.before?(it.after-it.before)/it.before*100:0;return (<div key={i} style={{display:'grid',gridTemplateColumns:labelWidth+'px minmax(0,1fr) 130px',alignItems:'center',gap:20,paddingBottom:14,borderBottom:i<items.length-1?'1.5px solid '+H.lineSoft:'none'}}>
      <span style={{fontSize:26,fontWeight:700,color:H.ink,lineHeight:1.2}}>{it.label}</span>
      <div style={{display:'flex',flexDirection:'column',gap:4,minWidth:0}}>{bar(it.before||0,'#C2C9D8')}{bar(it.after||0,H.royal)}</div>
      <span style={{justifySelf:'end',fontSize:28,fontWeight:700,color:H.royal}}>{d<0?'−':d>0?'+':''}{Math.abs(d).toLocaleString('id-ID',{maximumFractionDigits:2})}%</span>
    </div>);})}
  </div>);
}
