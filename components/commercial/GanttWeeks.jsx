import React from 'react';
import { H, FB, abs } from '../hd/hdUtil.js';
const PH={prep:{l:'Persiapan',c:H.lineStrong},dev:{l:'Pengembangan',c:H.royal},test:{l:'Testing',c:H.navy6},uat:{l:'UAT & deployment',c:H.gold}};
/** Gantt mingguan: kelompok aktivitas, batang per fase, milestone berlian, garis penanda (mis. penyelesaian development). start/len dalam minggu (boleh desimal, mulai 0). */
export function GanttWeeks({weeks=13,prefix='W',labelWidth=600,rowHeight=44,groups=[],marker,phases,legend=true,at,style}){
  const P=Object.assign({},PH,phases||{});const W=Array.from({length:weeks},(_,i)=>i);
  const grid={display:'grid',gridTemplateColumns:labelWidth+'px minmax(0,1fr)',alignItems:'center'};
  const pct=v=>(v/weeks*100)+'%';
  const lines=<div style={{position:'absolute',inset:0,display:'grid',gridTemplateColumns:'repeat('+weeks+',1fr)',pointerEvents:'none'}}>{W.map(i=><span key={i} style={{borderLeft:'1px solid '+H.lineSoft}}></span>)}</div>;
  const dia=(left)=><span style={{position:'absolute',left:'calc('+left+' - 14px)',top:'50%',width:26,height:26,transform:'translateY(-50%) rotate(45deg)',background:H.gold,border:'2px solid '+H.navy6,boxSizing:'border-box'}}></span>;
  return (<div style={abs(at,Object.assign({display:'flex',flexDirection:'column',fontFamily:FB,color:H.ink},style))}>
    {legend&&<div style={{display:'flex',flexWrap:'wrap',gap:28,fontSize:24,color:H.t2,marginBottom:14}}>{Object.keys(P).map(k=><span key={k} style={{display:'flex',alignItems:'center',gap:10}}><i style={{width:28,height:16,borderRadius:3,background:P[k].c}}></i>{P[k].l}</span>)}<span style={{display:'flex',alignItems:'center',gap:12}}><i style={{width:18,height:18,transform:'rotate(45deg)',background:H.gold,border:'2px solid '+H.navy6,boxSizing:'border-box'}}></i>Milestone</span></div>}
    <div style={Object.assign({},grid,{borderBottom:'3px solid '+H.navy6,paddingBottom:8})}><span style={{fontSize:24,fontWeight:700,letterSpacing:'0.04em',color:H.royal}}>AKTIVITAS UTAMA</span><div style={{display:'grid',gridTemplateColumns:'repeat('+weeks+',1fr)'}}>{W.map(i=><span key={i} style={{textAlign:'center',fontSize:24,fontWeight:700,color:H.royal}}>{prefix}{i+1}</span>)}</div></div>
    <div style={{position:'relative'}}>
      {groups.map((g,gi)=><React.Fragment key={gi}>
        <div style={Object.assign({},grid,{height:rowHeight,background:H.tint2})}><b style={{fontSize:24,paddingLeft:12,color:H.navy6}}>{g.title}</b><span></span></div>
        {(g.rows||[]).map((r,ri)=><div key={ri} style={Object.assign({},grid,{height:rowHeight,borderBottom:'1px solid '+H.lineSoft})}>
          <span style={{display:'flex',justifyContent:'space-between',gap:12,paddingLeft:28,paddingRight:20,fontSize:24,minWidth:0}}><span style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{r.label}</span>{r.note&&<span style={{color:H.t2,whiteSpace:'nowrap'}}>{r.note}</span>}</span>
          <div style={{position:'relative',height:'100%'}}>{lines}{r.milestone?dia(pct(r.start)):<span style={{position:'absolute',left:pct(r.start),width:pct(r.len||1),top:'50%',height:22,transform:'translateY(-50%)',borderRadius:4,background:(P[r.phase]||P.dev).c}}></span>}</div>
        </div>)}
      </React.Fragment>)}
      {marker&&<div style={{position:'absolute',top:0,bottom:0,left:labelWidth,right:0,pointerEvents:'none'}}><div style={{position:'absolute',top:-6,bottom:-6,left:pct(marker.at),borderLeft:'3px dashed '+H.navy6}}><span style={{position:'absolute',bottom:'100%',left:-2,transform:'translate(-50%,-40px)',padding:'2px 12px',background:H.navy7,color:'#fff',fontSize:24,fontWeight:700,borderRadius:999,whiteSpace:'nowrap'}}>{marker.label}</span></div></div>}
    </div>
  </div>);
}
