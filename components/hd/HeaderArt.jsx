import React from 'react';
/** Latar header kanan bertema (7 ilustrasi). Letakkan pertama di slide agar berada di belakang logo & judul. */
export function HeaderArt({theme='infrastruktur',size='md',style}){
  const cls='pln-hdr-art pln-hdr-art--'+theme+(size==='sm'?' pln-hdr-art--sm':size==='lg'?' pln-hdr-art--lg':'');
  return <div className={cls} style={style} aria-hidden="true"></div>;
}
