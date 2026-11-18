import React from 'react';
import { C, pt, place } from '../slide/util.js';

/** Angka besar + pembanding (K09). Angka tanpa pembanding dilarang. trend: 'up' | 'down' | 'flat'. */
export function BigNumber({ value, label, compare, trend = 'up', dark, size = 40, at, style }) {
  const tc = { up: C.hijau, down: C.merah, flat: C.teks2 }[trend];
  const arrow = { up: '▲ ', down: '▼ ', flat: '' }[trend];
  return (
    <div style={place(at, Object.assign({ boxSizing: 'border-box' }, style))}>
      <div style={{ fontSize: pt(size), fontWeight: 700, lineHeight: 1, color: dark ? '#fff' : C.navy }}>{value}</div>
      <div style={{ fontSize: pt(13), fontWeight: 700, color: dark ? '#fff' : C.ink, marginTop: 8 }}>{label}</div>
      {compare && <div style={{ fontSize: pt(10.5), fontWeight: 700, color: dark ? C.kabut : tc, marginTop: 3 }}>{arrow}{compare}</div>}
    </div>);
}
