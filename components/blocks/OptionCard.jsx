import React from 'react';
import { U, C, pt, place } from '../slide/util.js';

/** Kartu opsi keputusan (K16) di layout BLUE. 2–3 opsi, tepat satu `recommended` (bingkai + label Amber). */
export function OptionCard({ letter = 'A', title, points = [], recommended, at, style }) {
  return (
    <div style={place(at, Object.assign({ position: 'relative', background: C.navy, borderRadius: 0.12 * U, padding: '22px 20px 18px', border: recommended ? `2.67px solid ${C.amber}` : `1px solid ${C.navyLine}`, color: '#fff', boxSizing: 'border-box' }, style))}>
      {recommended && <span style={{ position: 'absolute', top: -12, right: 16, background: C.amber, color: C.ink, fontSize: pt(9.5), fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>REKOMENDASI</span>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 0.46 * U, height: 0.46 * U, borderRadius: '50%', background: recommended ? C.amber : C.biru, color: recommended ? C.ink : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: pt(14) }}>{letter}</span>
        <b style={{ fontSize: pt(17), lineHeight: 1.1 }}>{title}</b>
      </div>
      <ul style={{ margin: '14px 0 0', padding: '0 0 0 18px', fontSize: pt(11.5), lineHeight: 1.25, color: C.kabut, display: 'flex', flexDirection: 'column', gap: 6 }}>{points.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>);
}
