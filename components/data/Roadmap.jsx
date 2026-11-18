import React from 'react';
import { U, C, pt, place } from '../slide/util.js';

/** Roadmap tiga horizon (K30): NOW / NEXT / ULTIMATE — Navy → Biru → Amber (v7: Navy → Royal → Emas). Tiga horizon, tidak lebih. */
export function Roadmap({ horizons = [], v7, at, style }) {
  const cols = v7 ? [C.v7navy, C.royal, C.gold] : [C.navy, C.biru, C.amber];
  return (
    <div style={place(at, Object.assign({ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 0.25 * U, boxSizing: 'border-box' }, style))}>
      {horizons.slice(0, 3).map((h, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ background: cols[i], color: i === 2 ? C.ink : '#fff', fontWeight: 700, fontSize: pt(12), height: 0.42 * U, borderRadius: 0.08 * U, display: 'flex', alignItems: 'center', padding: '0 14px', letterSpacing: 1 }}>{h.label || ['NOW', 'NEXT', 'ULTIMATE'][i]}</div>
          <div style={{ flex: 1, background: '#fff', border: `1px solid ${C.garis}`, borderRadius: 0.08 * U, marginTop: 8, padding: '12px 14px' }}>
            <b style={{ fontSize: pt(14), color: C.ink }}>{h.title}</b>
            <ul style={{ margin: '8px 0 0', padding: '0 0 0 16px', fontSize: pt(11), lineHeight: 1.25, display: 'flex', flexDirection: 'column', gap: 4 }}>{(h.items || []).map((t, j) => <li key={j}>{t}</li>)}</ul>
          </div>
          {h.time && <div style={{ marginTop: 8, background: C.tint, border: v7 ? `1px solid ${C.v7brdr}` : 'none', borderRadius: 999, textAlign: 'center', fontSize: pt(10), fontWeight: 700, color: C.navy, padding: '5px 0' }}>{h.time}</div>}
          {i < 2 && <span style={{ position: 'absolute', right: -0.2 * U, top: '45%', color: C.teal, fontSize: pt(18), fontWeight: 700 }}>›</span>}
        </div>))}
    </div>);
}
