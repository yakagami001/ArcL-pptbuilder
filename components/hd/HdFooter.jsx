import React from 'react';
import { H, FB } from './hdUtil.js';
/** Kaki slide HD. v8 = merek · topik · pita progres · klasifikasi · halaman; v9 = garis atas + merek · topik + halaman. */
export function HdFooter({variant='v8',brand='PLN Icon Plus',topic,progress=0.5,label='Internal',page}){
  if(variant==='v9') return (<div style={{position:'absolute',left:72,right:72,bottom:22,display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:'1px solid '+H.line,paddingTop:10,fontFamily:FB,fontSize:24,color:H.t2}}><span>{brand}{topic?' · '+topic:''}</span><span style={{fontWeight:700,color:H.royal}}>{page}</span></div>);
  const p=Math.max(0,Math.min(1,progress));
  return (<div style={{position:'absolute',left:72,right:72,bottom:26,display:'flex',alignItems:'center',gap:24,fontFamily:FB,fontSize:24}}>
    <span style={{fontWeight:700,color:H.royal}}>{brand}</span><span style={{width:2,height:28,background:H.rule}}></span>
    {topic&&<span style={{color:H.royal}}>{topic}</span>}
    <span style={{flex:1,height:4,display:'flex',background:H.lineSoft}}><span style={{width:(p*100)+'%',background:H.navy6}}></span><span style={{width:48,background:H.gold}}></span></span>
    <span style={{color:H.t2}}>{label}</span><span style={{width:2,height:28,background:H.rule}}></span><span style={{fontWeight:700,color:H.ink}}>{page}</span>
  </div>);
}
