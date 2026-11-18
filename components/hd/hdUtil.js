// Keluarga HD — kanvas 1920×1080 px (V8 Materi Pengenalan · V9 Grand Design)
import React from 'react';
const tv=(r,x)=>`var(--t-${r},${x})`;
export const H={ink:'#0A1233',navy7:tv('dark','#0A1F5C'),navy6:tv('strong','#003183'),royal:tv('primary','#1747C8'),gold:tv('highlight','#FCBC01'),gold3:tv('highlight-soft','#F0DCA0'),goldInk:tv('highlight-ink','#7A5600'),t2:'#5C6474',t3:'#4A5568',od2:tv('on-dark-2','#D9E3F4'),od3:'#C2C9D8',tint:tv('tint','#EFF6FE'),tint2:tv('tint-2','#EDF2FA'),tint3:tv('tint-3','#F5F8FD'),tintGold:tv('tint-highlight','#FFFBEC'),line:tv('line','#C7D7F0'),lineSoft:tv('line-soft','#E2EAF7'),lineStrong:tv('line-strong','#9CC0EE'),dash:'#8FA3C6',rule:'#C2C9D8',inactive:'#AEB8CE',ok:'#2D7055',warn:'#EF8924',crit:'#E4572E'};
export const FD='Arial,"Liberation Sans",Helvetica,sans-serif';
export const FB='var(--t-font-body,Calibri,Carlito,"Liberation Sans",Arial,sans-serif)';
export function abs(at,style){if(!at)return style||{};const [x,y,w,h]=at;return Object.assign({position:'absolute',left:x,top:y,width:w,height:h,boxSizing:'border-box'},style||{});}
export function Ico({name,size=64,style}){return <span className={'pln-ico pln-ico-'+name} style={Object.assign({width:size,height:size},style)} aria-hidden="true"></span>;}
export function Badge({n,size=52,tone='royal',square}){const bg=tone==='gold'?H.gold:tone==='navy'?H.navy7:tone==='muted'?H.t2:H.royal;return <span style={{width:size,height:size,flex:'none',borderRadius:square?4:size/2,background:bg,color:tone==='gold'?H.ink:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:FB,fontWeight:700,fontSize:Math.round(size*0.54)}}>{n}</span>;}
