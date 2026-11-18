import React from 'react';
import { U, C, pt, place } from '../slide/util.js';

/** Milestone horizontal gelap (K32): garis Cyan 3pt, titik 0,4in bingkai Cyan, titik saat ini Amber, kartu selang-seling. 4–6 milestone. */
export function Milestones({ items = [], current = 0, height = 3.2, at, style }) {
  const H = height * U;
  return (
    <div style={place(at, Object.assign({ position: 'relative', height: H, boxSizing: 'border-box' }, style))}>
      <i style={{ position: 'absolute', left: 0, right: 0, top: H / 2 - 2, height: 4, background: C.cyan, borderRadius: 2 }} />
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: `repeat(${items.length},minmax(0,1fr))` }}>
        {items.map((m, i) => {
          const up = i % 2 === 0; const cur = i === current;
          return (
            <div key={i} style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '50%', top: H / 2, width: 0.4 * U, height: 0.4 * U, transform: 'translate(-50%,-50%)', borderRadius: '50%', background: cur ? C.amber : C.navy, border: `3px solid ${C.cyan}`, boxSizing: 'border-box' }} />
              <div style={{ position: 'absolute', left: 8, right: 8, [up ? 'bottom' : 'top']: H / 2 + 0.32 * U, background: C.navy2, border: cur ? `2px solid ${C.cyan}` : 'none', borderRadius: 0.12 * U, padding: '10px 12px', color: '#fff' }}>
                <div style={{ fontSize: pt(10), fontWeight: 700, color: cur ? C.amber : C.cyan, letterSpacing: 1 }}>{m.when}</div>
                <div style={{ fontSize: pt(12.5), fontWeight: 700, marginTop: 3, lineHeight: 1.15 }}>{m.title}</div>
                {m.note && <div style={{ fontSize: pt(10), color: C.kabut, marginTop: 3 }}>{m.note}</div>}
              </div>
            </div>);
        })}
      </div>
    </div>);
}
