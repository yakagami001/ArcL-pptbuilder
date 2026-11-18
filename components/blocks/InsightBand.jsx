import React from 'react';
import { U, C, pt, place } from '../slide/util.js';
import { Icon } from '../slide/Icon.jsx';

/**
 * Pita pesan penutup slide. variant:
 *  light (K22 — Tint, garis #C7D7F0, ikon lampu, label 11pt Biru) ·
 *  dark (K23 — Navy, label Amber, kalimat putih) ·
 *  v7 (K58 — Tint bingkai #9CC0EE, lampu putih di lingkaran Royal Blue, label 15pt)
 */
export function InsightBand({ variant = 'light', label = 'INSIGHT', children, at, style }) {
  if (variant === 'dark') return (
    <div style={place(at, Object.assign({ background: C.navy, borderRadius: 0.08 * U, minHeight: 0.58 * U, display: 'flex', alignItems: 'center', gap: 16, padding: '0 18px', boxSizing: 'border-box' }, style))}>
      <b style={{ color: C.amber, fontSize: pt(10.5), letterSpacing: 1.5, whiteSpace: 'nowrap' }}>{label}</b>
      <span style={{ color: '#fff', fontSize: pt(12) }}>{children}</span>
    </div>);
  const v7 = variant === 'v7';
  return (
    <div style={place(at, Object.assign({ background: C.tint, border: `1px solid ${v7 ? C.v7brdr : C.garis}`, borderRadius: (v7 ? 0.1 : 0.08) * U, minHeight: (v7 ? 0.72 : 0.62) * U, display: 'flex', alignItems: 'center', gap: 14, padding: '0 16px', boxSizing: 'border-box' }, style))}>
      {v7 ? <Icon name="bola-lampu" circle="royal" size={0.54 * U} /> : <Icon name="bola-lampu" size={0.44 * U} color={C.biru} />}
      <b style={{ color: v7 ? C.royal : C.biru, fontSize: pt(v7 ? 15 : 11), whiteSpace: 'nowrap' }}>{label}</b>
      {v7 && <i style={{ width: 1, alignSelf: 'stretch', margin: '12px 0', background: C.v7div }} />}
      <span style={{ fontSize: pt(v7 ? 14 : 12), fontWeight: v7 ? 700 : 400, color: C.ink }}>{children}</span>
    </div>);
}
