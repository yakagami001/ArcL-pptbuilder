import React from 'react';
import { H, FB, abs, Ico, Badge } from '../hd/hdUtil.js';
/** Kanal input (atas) → sistem pusat bertahap (tengah) → kemampuan pendukung (bawah). Untuk menjelaskan porsi biaya/beban terbesar. */
export function ChannelHub({channelsLabel='KANAL INPUT',channels=[],hub={},stages=[],capabilities=[],at,style}){
  const tri=<span style={{width:0,height:0,borderLeft:'11px solid transparent',borderRight:'11px solid transparent',borderTop:'13px solid '+H.royal}}></span>;
  return (<div style={abs(at,Object.assign({display:'flex',flexDirection:'column',fontFamily:FB},style))}>
    <div style={{display:'flex',alignItems:'stretch',gap:20}}>
      <span style={{width:200,flex:'none',display:'flex',alignItems:'center',fontSize:24,fontWeight:700,letterSpacing:'0.06em',color:H.t2,lineHeight:1.2}}>{channelsLabel}</span>
      {channels.map((c,i)=><div key={i} style={{flex:1,minWidth:0,display:'flex',alignItems:'center',gap:16,padding:'14px 20px',background:H.tint,border:'1.5px solid '+H.line,borderRadius:8}}>{c.icon&&<Ico name={c.icon} size={48} />}<div style={{display:'flex',flexDirection:'column',gap:2,minWidth:0}}><b style={{fontSize:26,color:H.ink}}>{c.name}</b>{c.note&&<span style={{fontSize:24,color:H.t2,lineHeight:1.25}}>{c.note}</span>}</div></div>)}
    </div>
    <div style={{display:'flex',gap:20,paddingLeft:220,height:46}}>{channels.map((c,i)=><div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center'}}><span style={{width:3,flex:1,background:H.lineStrong}}></span>{tri}</div>)}</div>
    <div style={{border:'2px solid '+H.navy6,borderRadius:10,overflow:'hidden',background:'#fff'}}>
      <div style={{display:'flex',alignItems:'baseline',gap:20,padding:'14px 24px',background:H.navy7,color:'#fff'}}><b style={{fontSize:32}}>{hub.name}</b>{hub.note&&<span style={{fontSize:24,color:H.od2}}>{hub.note}</span>}</div>
      <div style={{display:'grid',gridTemplateColumns:'repeat('+(stages.length||1)+',minmax(0,1fr))'}}>{stages.map((s,i)=><div key={i} style={{padding:'16px 20px',borderRight:i<stages.length-1?'1.5px solid '+H.lineSoft:'none',display:'flex',flexDirection:'column',gap:8,minWidth:0}}><div style={{display:'flex',alignItems:'center',gap:10}}><Badge n={i+1} size={36} /><b style={{fontSize:26,color:H.navy6,lineHeight:1.15}}>{s.title}</b></div>{s.points&&<ul style={{margin:0,paddingLeft:22,display:'flex',flexDirection:'column',gap:4,fontSize:24,lineHeight:1.25,color:H.ink}}>{s.points.map((p,j)=><li key={j}>{p}</li>)}</ul>}</div>)}</div>
      {capabilities.length>0&&<div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:10,padding:'14px 20px',background:H.tint2,borderTop:'1.5px solid '+H.line}}>{capabilities.map((c,i)=><span key={i} style={{padding:'8px 14px',background:'#fff',border:'1px solid '+H.line,borderRadius:6,fontSize:24,color:H.ink,lineHeight:1.2}}>{c}</span>)}</div>}
    </div>
  </div>);
}
