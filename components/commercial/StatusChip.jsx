import React from 'react';
import { H, FB } from '../hd/hdUtil.js';
import { ST } from './cmUtil.js';
/** Chip status ruang lingkup/item: titik warna status + teks Ink (warna status tidak dipakai untuk teks). */
export function StatusChip({status='selesai',children,size=24,style}){
  const s=ST[status]||ST.selesai;
  return <span style={Object.assign({display:'inline-flex',alignItems:'center',gap:10,padding:'5px 16px 5px 12px',borderRadius:999,border:'1.5px solid '+s.c,background:'#fff',fontFamily:FB,fontSize:size,fontWeight:700,color:H.ink,whiteSpace:'nowrap',lineHeight:1.1},style)}><span style={{width:12,height:12,borderRadius:6,background:s.c,flex:'none'}}></span>{children||s.l}</span>;
}
