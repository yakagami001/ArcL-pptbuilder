import React from 'react';
import { H, FB, FD, abs } from '../hd/hdUtil.js';
import { rp } from './cmUtil.js';
/** Kartu opsi anggaran: item tercakup (isi) vs tidak (putus-putus), biaya, sisa/kekurangan, nilai akhir, vonis. recommended = bingkai Emas + label (satu per slide). */
export function BudgetOption({letter='A',title,items=[],totalItems,cost,balance,finalValue,finalLabel='Nilai kontrak akhir',verdict,verdictTone='ok',note,recommended,recommendedLabel='USULAN KAMI',at,style}){
  const short=typeof balance==='number'&&balance<0;
  const vc={ok:H.ok,warn:H.warn,crit:H.crit}[verdictTone]||H.ok;
  const all=totalItems?Array.from({length:totalItems},(_,i)=>i+1):items;
  return (<div style={abs(at,Object.assign({position:'relative',display:'flex',flexDirection:'column',gap:16,padding:'26px 26px 22px',background:'#fff',border:recommended?'3px solid '+H.gold:'1.5px solid '+H.line,borderRadius:10,boxSizing:'border-box',fontFamily:FB,minWidth:0},style))}>
    {recommended&&<span style={{position:'absolute',top:-19,right:22,padding:'4px 16px',background:H.gold,color:H.ink,fontSize:24,fontWeight:700,letterSpacing:'0.04em',borderRadius:999}}>{recommendedLabel}</span>}
    <div style={{display:'flex',flexDirection:'column',gap:4}}><span style={{fontSize:24,fontWeight:700,letterSpacing:'0.08em',color:H.royal}}>OPSI {letter}</span><b style={{fontSize:30,lineHeight:1.15,color:H.ink}}>{title}</b></div>
    <div style={{display:'flex',flexWrap:'wrap',gap:8}}>{all.map(n=>{const on=items.includes(n);return <span key={n} style={{width:44,height:44,borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,fontWeight:700,background:on?H.royal:'#fff',color:on?'#fff':H.t2,border:on?'none':'1.5px dashed '+H.dash,boxSizing:'border-box'}}>{n}</span>;})}</div>
    <div style={{display:'grid',gridTemplateColumns:'auto minmax(0,1fr)',gap:'8px 16px',fontSize:24,color:H.t2,alignItems:'baseline'}}>
      {cost!=null&&<React.Fragment><span>Biaya</span><b style={{justifySelf:'end',color:H.ink,fontSize:26}}>{rp(cost)}</b></React.Fragment>}
      {balance!=null&&<React.Fragment><span>{short?'Kekurangan':'Sisa'}</span><b style={{justifySelf:'end',color:H.ink,fontSize:26,display:'flex',alignItems:'center',gap:8}}><i style={{width:12,height:12,borderRadius:6,background:short?H.crit:H.ok}}></i>{rp(balance)}</b></React.Fragment>}
    </div>
    {finalValue!=null&&<div style={{display:'flex',flexDirection:'column',gap:4,padding:'14px 18px',background:H.tint,borderRadius:8}}><span style={{fontSize:24,color:H.t2}}>{finalLabel}</span><b style={{fontSize:36,lineHeight:1.1,color:H.navy6,fontFamily:FD}}>{rp(finalValue)}</b></div>}
    {verdict&&<span style={{display:'flex',alignItems:'center',gap:10,fontSize:24,fontWeight:700,color:H.ink}}><i style={{width:14,height:14,borderRadius:7,background:vc,flex:'none'}}></i>{verdict}</span>}
    {note&&<span style={{marginTop:'auto',fontSize:24,lineHeight:1.3,color:H.t2}}>{note}</span>}
  </div>);
}
