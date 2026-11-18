import React from 'react';
import { H, FD, FB } from './hdUtil.js';
import { HeaderArt } from './HeaderArt.jsx';
/** Kepala slide isi HD. v8 = logo kiri–kanan + breadcrumb + judul 72px; v9 = logo pojok + judul 56px + subjudul tebal. */
export function HdHeader({variant='v8',title,subtitle,breadcrumb,art,map}){
  const v9=variant==='v9';
  const deco=art?<HeaderArt theme={art} />:map?<div className="pln-hdr-map"></div>:null;
  if(v9) return (<React.Fragment>{deco}
    <div className="pln-logo-danantara" role="img" aria-label="Danantara Indonesia" style={{position:'absolute',left:72,top:32,width:190,height:46}}></div>
    <div className="pln-logo-pln" role="img" aria-label="PLN Icon Plus" style={{position:'absolute',right:72,top:28,width:150,height:54,backgroundPosition:'right center'}}></div>
    <div style={{position:'absolute',left:72,top:104,maxWidth:art?1120:1776}}>
      <h2 style={{margin:0,fontFamily:FD,fontWeight:700,fontSize:56,lineHeight:1.1,color:H.ink}}>{title}</h2>
      {subtitle&&<p style={{margin:'10px 0 0',fontFamily:FB,fontSize:30,fontWeight:700,color:H.royal,textWrap:'pretty'}}>{subtitle}</p>}
    </div></React.Fragment>);
  return (<React.Fragment>{deco}
    <div className="pln-logo-danantara" role="img" aria-label="Danantara Indonesia" style={{position:'absolute',left:72,top:44,width:220,height:64}}></div>
    {breadcrumb&&<div style={{position:'absolute',left:336,top:58,display:'flex',alignItems:'center',gap:14,fontFamily:FB,fontSize:26,color:H.ink}}><span className="pln-ico pln-ico-pin" style={{width:36,height:36}}></span>{breadcrumb}</div>}
    <div className="pln-logo-pln" role="img" aria-label="PLN Icon Plus" style={{position:'absolute',right:72,top:36,width:260,height:96,backgroundPosition:'right center'}}></div>
    <h1 style={{position:'absolute',left:72,top:146,margin:0,maxWidth:art?1120:1776,fontFamily:FD,fontWeight:700,fontSize:art?64:72,lineHeight:1.05,color:H.ink}}>{title}</h1>
    {subtitle&&<p style={{position:'absolute',left:72,top:236,margin:0,maxWidth:art?1120:1776,fontFamily:FB,fontSize:32,color:H.royal}}>{subtitle}</p>}
  </React.Fragment>);
}
