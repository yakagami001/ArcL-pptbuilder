import React from 'react';
import { H, FB, abs, Ico } from './hdUtil.js';
/** Pita pesan penutup slide HD. v8 = INSIGHT (Tint, bingkai #9CC0EE, pemisah); v9 = KEY TAKEAWAY ringkas; gold = sorotan keputusan (Emas). */
export function HdInsight({variant='v8',label,icon,children,at,style}){
  const gold=variant==='gold';const v9=variant==='v9';
  const lab=label||(v9?'KEY TAKEAWAY':'INSIGHT');const ic=icon||(v9?'target-pale':'lightbulb-solid');
  return (<div style={abs(at,Object.assign({display:'flex',alignItems:'center',gap:v9?20:28,minHeight:v9?76:92,padding:v9?'14px 24px':'0 32px',background:gold?H.tintGold:H.tint,border:(gold?2:1.5)+'px solid '+(gold?H.gold:H.lineStrong),borderRadius:v9?8:12,boxSizing:'border-box',fontFamily:FB},style))}>
    <Ico name={ic} size={v9?48:60} />
    <span style={{fontSize:v9?24:32,fontWeight:700,letterSpacing:v9?'0.06em':0,color:H.navy6,whiteSpace:'nowrap'}}>{lab}</span>
    {!v9&&<span style={{width:2,height:44,background:'#9AA7C4',flex:'none'}}></span>}
    <span style={{fontSize:v9?26:28,lineHeight:1.3,color:H.ink}}>{children}</span>
  </div>);
}
