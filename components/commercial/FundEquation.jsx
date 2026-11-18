import React from 'react';
import { H, FB, FD, abs } from '../hd/hdUtil.js';
import { rp } from './cmUtil.js';
/** Persamaan nilai: A + B (− C) = Hasil. Hasil di panel gelap, angka Emas/highlight. */
export function FundEquation({terms=[],result,op='+',at,style}){
  const sym=(s)=><span style={{width:64,height:64,flex:'none',borderRadius:32,background:H.tint,border:'1.5px solid '+H.lineStrong,display:'flex',alignItems:'center',justifyContent:'center',fontSize:40,fontWeight:700,color:H.royal,alignSelf:'center'}}>{s}</span>;
  const card=(t,dark)=>(<div style={{flex:1,minWidth:0,display:'flex',flexDirection:'column',gap:8,padding:'22px 26px',background:dark?H.navy7:'#fff',border:dark?'none':'1.5px solid '+H.line,borderRadius:10,color:dark?'#fff':H.ink}}>
    {t.kicker&&<span style={{fontSize:24,fontWeight:700,letterSpacing:'0.06em',color:dark?H.gold:H.royal}}>{t.kicker}</span>}
    <span style={{fontSize:28,fontWeight:700,lineHeight:1.2}}>{t.title}</span>
    {t.note&&<span style={{fontSize:24,lineHeight:1.25,color:dark?H.od2:H.t2}}>{t.note}</span>}
    <span style={{marginTop:'auto',paddingTop:8,fontSize:48,fontWeight:700,lineHeight:1.05,color:dark?H.gold:H.navy6,fontFamily:FD}}>{rp(t.value)}</span></div>);
  const out=[];terms.forEach((t,i)=>{if(i)out.push(<React.Fragment key={'o'+i}>{sym(t.op||op)}</React.Fragment>);out.push(<React.Fragment key={'t'+i}>{card(t,false)}</React.Fragment>);});
  if(result){out.push(<React.Fragment key="eq">{sym('=')}</React.Fragment>);out.push(<React.Fragment key="r">{card(result,true)}</React.Fragment>);}
  return <div style={abs(at,Object.assign({display:'flex',alignItems:'stretch',gap:20,fontFamily:FB},style))}>{out}</div>;
}
