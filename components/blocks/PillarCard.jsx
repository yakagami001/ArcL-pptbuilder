import React from 'react';
import { U, C, pt, place } from '../slide/util.js';

const ORDER = [C.navy, C.biru, C.tealt, C.teal];

/** Pilar berkepala bernomor (K15). Urutan warna Navy → Biru → Teal Korporat → Teal Aksen; 3–4 pilar. */
export function PillarCard({ index = 1, title, items = [], basis, at, style }) {
  const color = ORDER[(index - 1) % 4];
  return (
    <div style={place(at, Object.assign({ display: 'flex', flexDirection: 'column', background: '#fff', border: `1px solid ${C.garis}`, borderRadius: 0.08 * U, overflow: 'hidden', boxSizing: 'border-box' }, style))}>
      <div style={{ background: color, color: '#fff', height: 0.85 * U, display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px' }}>
        <b style={{ fontSize: pt(22) }}>{String(index).padStart(2, '0')}</b>
        <b style={{ fontSize: pt(12.5), lineHeight: 1.15 }}>{title}</b>
      </div>
      <ul style={{ margin: 0, padding: '12px 16px 12px 32px', fontSize: pt(11), lineHeight: 1.2, color: C.ink, flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>{items.map((t, i) => <li key={i}>{t}</li>)}</ul>
      {basis && <div style={{ borderTop: `1px solid ${C.garis}`, padding: '8px 16px', fontSize: pt(10.5), fontWeight: 700, color: C.tealt }}>{basis}</div>}
    </div>);
}
