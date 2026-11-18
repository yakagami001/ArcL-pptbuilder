import React from 'react';
import { U, C, pt } from './util.js';

const abs = (x, y, w, h, s) => Object.assign({ position: 'absolute', left: x * U, top: y * U, width: w * U, height: h * U, margin: 0, boxSizing: 'border-box' }, s);

/**
 * Kaki slide. variant:
 *  spec (K05 — baris spesifikasi/sumber 9pt, berhenti di x 10,7in) ·
 *  progress (K04 — identitas dokumen + pita 10 segmen: lalu Navy, aktif Amber, berikut Abu) ·
 *  v7 (K56 — PLN Icon Plus | unit, garis Navy berujung Emas, Confidential | nomor)
 */
export function SlideFooter({ variant = 'spec', text, docName, active = 1, segments = 10, unit = 'Business Development', page, dark }) {
  if (variant === 'v7') return <>
    <div style={abs(0.32, 7.16, 3, 0.24, { fontSize: pt(11), display: 'flex', alignItems: 'center', whiteSpace: 'pre', color: C.ink })}><b style={{ color: '#00AEEF' }}>PLN</b><b> Icon Plus</b><span style={{ color: '#AEB8CE' }}>   |   </span><span style={{ color: C.royal }}>{unit}</span></div>
    <i style={abs(3.19, 7.27, 7.1, 0, { borderTop: '2px solid ' + C.v7navy })} />
    <i style={abs(10.29, 7.27, 0.72, 0, { borderTop: '2px solid ' + C.gold })} />
    <div style={abs(11.12, 7.14, 1.95, 0.28, { fontSize: pt(11), display: 'flex', alignItems: 'center', justifyContent: 'flex-end', whiteSpace: 'pre' })}><span style={{ color: '#8B93A6' }}>Confidential</span><span style={{ color: '#C2C9D8' }}>   |   </span><b style={{ fontSize: pt(14), color: C.royal }}>{page}</b></div>
  </>;
  if (variant === 'progress') return <>
    <div style={abs(0.6, 7.06, 4.2, 0.26, { fontSize: pt(9), color: C.biru, display: 'flex', alignItems: 'center', whiteSpace: 'pre' })}><b>PLN Icon Plus</b>{'  |  ' + (docName || '')}</div>
    {Array.from({ length: segments }).map((_, i) => (
      <i key={i} style={abs(4.95 + i * 0.57, 7.16, 0.52, 0.07, { borderRadius: 0.035 * U, background: i + 1 < active ? C.navy : i + 1 === active ? C.amber : C.abu1 })} />
    ))}
  </>;
  return <div style={abs(0.6, 6.98, 10.1, 0.26, { fontSize: pt(9), color: dark ? C.kabut : C.teks2, lineHeight: 1.2 })}>{text}</div>;
}
