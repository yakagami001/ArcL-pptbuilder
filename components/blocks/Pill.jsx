import React from 'react';
import { U, C, pt, place } from '../slide/util.js';

/**
 * Pil. tone: ok | warn | crit (status, teks Ink di Oranye/Merah) · navy · biru · tealt · amber · tint.
 * size: sm (status 9,5pt) | md (chip tema K21, 0,42in, 10,5pt).
 */
export function Pill({ tone = 'navy', size = 'sm', square, children, at, style }) {
  const map = { ok: [C.hijau, '#fff'], warn: [C.oranye, C.ink], crit: [C.merah, C.ink], navy: [C.navy, '#fff'], biru: [C.biru, '#fff'], tealt: [C.tealt, '#fff'], amber: [C.amber, C.ink], tint: [C.tint, C.navy], royal: [C.royal, '#fff'], gold: [C.gold, C.ink] };
  const [bg, fg] = map[tone] || map.navy;
  const md = size === 'md';
  return (
    <span style={place(at, Object.assign({ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: bg, color: fg, fontWeight: 700, fontSize: pt(md ? 10.5 : 9.5), height: md ? 0.42 * U : 0.26 * U, padding: md ? '0 16px' : '0 10px', borderRadius: square ? 4 : 999, whiteSpace: 'nowrap', boxSizing: 'border-box' }, style))}>{children}</span>);
}
