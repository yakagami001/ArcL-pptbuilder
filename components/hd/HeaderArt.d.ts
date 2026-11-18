import * as React from 'react';
export type HeaderArtTheme='transmisi'|'pembangkit-bauran'|'infrastruktur'|'ekosistem-terpadu'|'smart-grid-iot'|'kota-cerdas-cloud'|'ebt-minimalis';
/** Latar header kanan bertema untuk slide HD 1920×1080. transmisi=GI/SUTT/SUTET · pembangkit-bauran=pembangkitan, bauran energi · infrastruktur=umum/korporat · ekosistem-terpadu=grand design end-to-end · smart-grid-iot=digitalisasi, AMI, monitoring · kota-cerdas-cloud=aplikasi, platform data, cloud · ebt-minimalis=EBT/ESG, slide padat teks. */
export interface HeaderArtProps{theme?:HeaderArtTheme;size?:'sm'|'md'|'lg';style?:React.CSSProperties;}
export declare function HeaderArt(props:HeaderArtProps):JSX.Element;
