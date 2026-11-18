import React from 'react';
import { abs } from './hdUtil.js';
import { HdStepCard } from './HdStepCard.jsx';
/** Alur kiri→kanan: deretan HdStepCard dengan panah biru di antaranya. */
export function HdStepFlow({steps=[],arrows=true,gap=20,at,style}){
  const out=[];steps.forEach((s,i)=>{if(i&&arrows)out.push(<span key={'a'+i} className="pln-ico pln-ico-arrow-right-blue" style={{width:36,height:36,alignSelf:'center'}}></span>);const {body,...rest}=s;out.push(<HdStepCard key={i} {...rest} style={s.grow?{flex:s.grow}:undefined}>{body}</HdStepCard>);});
  return <div style={abs(at,Object.assign({display:'flex',alignItems:'stretch',gap},style))}>{out}</div>;
}
