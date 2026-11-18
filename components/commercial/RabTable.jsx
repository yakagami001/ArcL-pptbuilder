import React from 'react';
import { H, FB, abs } from '../hd/hdUtil.js';
/** Tabel RAB per resource: BLP (man × days × harga satuan) + BLNP alat kerja, dikelompokkan per sub-pekerjaan dengan subtotal. Nilai dihitung otomatis bila kosong. */
export function RabTable({sections=[],total,totalLabel='TOTAL',rowHeight=40,at,style}){
  const tpl='60px minmax(0,1fr) 76px 76px 196px 216px 164px 216px';
  const num=v=>v==null?'':typeof v==='number'?'Rp '+v.toLocaleString('id-ID'):v;
  const blp=r=>r.blp!=null?r.blp:(r.man||0)*(r.days||0)*(r.rate||0);
  const tot=r=>r.total!=null?r.total:blp(r)+(r.tools||0);
  const sub=s=>s.subtotal!=null?s.subtotal:(s.rows||[]).reduce((a,r)=>a+tot(r),0);
  const grand=total!=null?total:sections.reduce((a,s)=>a+(typeof sub(s)==='number'?sub(s):0),0);
  const c=(a)=>({textAlign:a||'right',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'});
  return (<div style={abs(at,Object.assign({display:'flex',flexDirection:'column',fontFamily:FB,fontSize:24,color:H.ink},style))}>
    <div style={{display:'grid',gridTemplateColumns:tpl,columnGap:16,alignItems:'center',background:H.navy7,color:'#fff',fontWeight:700,padding:'10px 16px',borderRadius:'8px 8px 0 0'}}><span>NO</span><span>RESOURCE</span><span style={c('center')}>MAN</span><span style={c('center')}>DAYS</span><span style={c()}>HARGA SATUAN</span><span style={c()}>BLP</span><span style={c()}>ALAT KERJA</span><span style={c()}>SUBTOTAL</span></div>
    {sections.map((s,si)=><React.Fragment key={si}>
      <div style={{display:'flex',justifyContent:'space-between',gap:16,padding:'8px 16px',background:H.tint2,borderBottom:'1.5px solid '+H.line,fontWeight:700}}><span style={{color:H.navy6}}>{s.code?s.code+' ':''}{s.title}</span><span style={{color:H.royal}}>{num(sub(s))}</span></div>
      {(s.rows||[]).map((r,ri)=><div key={ri} style={{display:'grid',gridTemplateColumns:tpl,columnGap:16,alignItems:'center',height:rowHeight,padding:'0 16px',borderBottom:'1px solid '+H.lineSoft}}><span>{ri+1}</span><span style={c('left')}>{r.resource}</span><span style={c('center')}>{r.man}</span><span style={c('center')}>{r.days}</span><span style={c()}>{num(r.rate)}</span><span style={c()}>{num(blp(r))}</span><span style={c()}>{num(r.tools)}</span><b style={c()}>{num(tot(r))}</b></div>)}
    </React.Fragment>)}
    <div style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',background:H.navy7,color:'#fff',fontWeight:700,fontSize:26,borderRadius:'0 0 8px 8px'}}><span>{totalLabel}</span><span style={{color:H.gold}}>{num(grand)}</span></div>
  </div>);
}
