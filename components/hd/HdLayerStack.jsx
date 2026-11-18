import React from 'react';
import { H, FB, abs } from './hdUtil.js';
/** Arsitektur berlapis: baris L-n dibaca dari bawah; lapis teratas boleh tone gold (target), terbawah dark (aset fisik). */
export function HdLayerStack({layers=[],flowLabel='DATA FLOW',at,style}){
  return (<div style={abs(at,Object.assign({display:'flex',gap:20,fontFamily:FB,color:H.ink},style))}>
    <div style={{flex:1,display:'flex',flexDirection:'column',gap:8}}>{layers.map((l,i)=>{const g=l.tone==='gold',d=l.tone==='dark';return (
      <div key={i} style={{flex:1,display:'grid',gridTemplateColumns:'96px 440px minmax(0,1fr) auto',alignItems:'center',gap:24,paddingRight:24,background:g?H.tintGold:d?H.tint2:'#fff',border:'1.5px solid '+(g?H.gold:H.line),borderRadius:10,overflow:'hidden'}}>
        <span style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:g?H.gold:d?H.ink:H.navy6,fontSize:30,fontWeight:700,color:g?H.ink:'#fff'}}>{l.code}</span>
        <span style={{fontSize:28,fontWeight:700}}>{l.title}</span>
        <span style={{fontSize:25,color:H.t2}}>{l.desc}</span>
        {l.tag?<span style={{padding:'4px 12px',background:'#fff',border:'1.5px solid '+(g?H.gold:H.line),borderRadius:6,fontSize:24,fontWeight:700}}>{l.tag}</span>:<span></span>}
      </div>);})}</div>
    {flowLabel&&<div style={{width:96,display:'flex',flexDirection:'column',alignItems:'center',gap:12,padding:'20px 0',background:H.navy7,borderRadius:10,boxSizing:'border-box'}}><span style={{fontSize:48,fontWeight:700,lineHeight:1,color:H.gold}}>↑</span><span style={{writingMode:'vertical-rl',transform:'rotate(180deg)',fontSize:28,fontWeight:700,letterSpacing:6,color:'#fff'}}>{flowLabel}</span></div>}
  </div>);
}
