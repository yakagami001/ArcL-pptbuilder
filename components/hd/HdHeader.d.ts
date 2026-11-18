import * as React from 'react';
import { HeaderArtTheme } from './HeaderArt';
/** Kepala slide isi HD (1920×1080). Saat art aktif, judul dibatasi 1120px agar tidak menimpa ilustrasi. */
export interface HdHeaderProps{variant?:'v8'|'v9';title:React.ReactNode;subtitle?:React.ReactNode;/** V8: judul deck di samping pin */breadcrumb?:React.ReactNode;art?:HeaderArtTheme;/** pakai peta Indonesia bila tanpa art */map?:boolean;}
export declare function HdHeader(props:HdHeaderProps):JSX.Element;
