import React from 'react';
import { U, C, pt, FONT } from './util.js';

const abs = (x, y, w, h, s) => Object.assign({ position: 'absolute', left: x * U, top: y * U, width: w * U, height: h * U, margin: 0, boxSizing: 'border-box' }, s);

/**
 * Judul slide isi. variant:
 *  conclusion (K01, V1 28pt) · caps (K02, V2/V3/V5 26pt KAPITAL + baris unit) ·
 *  statement (K03, V4 24pt dua baris Ink + Teal) · chapter (K04, V6 24pt + chip BAB) · v7 (K55, 30pt + header breadcrumb)
 */
export function SlideTitle({ variant = 'conclusion', title, line2, subtitle, unit = 'Divisi', chapter, chapterName, docName = 'Business Plan ArcGIS', dark }) {
  const ink = dark ? '#FEFFFF' : C.ink;
  const T = (fs, s) => abs(0.6, 0.29, 9.7, 0.72, Object.assign({ fontSize: pt(fs), fontWeight: 700, lineHeight: 1.08, color: ink, fontFamily: FONT }, s));
  if (variant === 'v7') return <>
    <i className="pln-arc-map" style={abs(7.3, 0.48, 6.03, 1.4, { opacity: 0.95 })} />
    <i className="pln-arc-danantara" style={abs(0.26, 0.22, 1.32, 0.39)} />
    <i className="pln-arc-pin" style={abs(1.89, 0.29, 0.22, 0.28)} />
    <div style={abs(2.17, 0.26, 2, 0.37, { fontSize: pt(12.5), display: 'flex', alignItems: 'center' })}>{docName}</div>
    <i style={abs(3.79, 0.445, 2.55, 0, { borderTop: '1.3px solid #B9C6DE' })} />
    <i style={abs(6.32, 0.41, 0.08, 0.08, { background: '#8FA3C6', borderRadius: '50%' })} />
    <i className="pln-arc-pln" style={abs(11.39, 0.26, 1.73, 0.62)} />
    <h2 style={abs(0.32, 0.66, 10.8, 0.6, { fontFamily: FONT, fontSize: pt(30), fontWeight: 700, lineHeight: '0.6in', whiteSpace: 'nowrap', color: C.ink })}>{title}</h2>
    <div style={abs(0.32, 1.24, 6, 0.28, { fontSize: pt(13), color: C.royal })}><b>PT PLN Icon Plus</b><span style={{ color: '#9AA7C4' }}> | </span>{subtitle || unit}</div>
  </>;
  if (variant === 'statement') return <h2 style={T(24, { height: 1.0 * U })}><span style={{ display: 'block' }}>{title}</span><span style={{ display: 'block', color: dark ? C.cyan : C.tealt }}>{line2}</span></h2>;
  if (variant === 'chapter') return <>
    <h2 style={T(24)}>{title}</h2>
    <div style={abs(0.6, 0.98, 0.95, 0.3, { background: C.navy, borderRadius: 0.15 * U, color: '#fff', fontSize: pt(9.5), fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' })}>BAB {chapter}</div>
    <div style={abs(1.7, 0.98, 6, 0.3, { fontSize: pt(12), fontWeight: 700, color: C.biru, display: 'flex', alignItems: 'center' })}>{chapterName}</div>
  </>;
  if (variant === 'caps') return <>
    <h2 style={T(26, { textTransform: 'uppercase' })}>{title}</h2>
    <div style={abs(0.6, 0.98, 9, 0.32, { fontSize: pt(12), color: dark ? C.kabut : C.biru })}><b>PT PLN Icon Plus</b><span style={{ color: C.abu2 }}> | </span>{subtitle || unit}</div>
  </>;
  return <>
    <h2 style={T(28)}>{title}</h2>
    {subtitle && <div style={abs(0.6, 0.98, 12.133, 0.32, { fontSize: pt(13), color: dark ? C.kabut : C.teks2, lineHeight: 1.29 })}>{subtitle}</div>}
  </>;
}
