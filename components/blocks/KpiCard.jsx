import React from 'react';
import { U, C, pt, place } from '../slide/util.js';
import { Icon } from '../slide/Icon.jsx';

/**
 * Kartu KPI. variant:
 *  icon (K10 — garis #C7D7F0, radius 0,08in, ikon lingkaran Tint, nilai 19pt Biru) ·
 *  dark (K11 — panel Navy, label kapital Kabut, angka 30pt putih; highlight = bingkai Cyan + angka Amber) ·
 *  feasibility (K13 — label 10,5pt, nilai 22pt Navy, pil kriteria) ·
 *  v7 (K57 — batang dasar Emas/Navy, nilai 17pt Royal Blue)
 */
export function KpiCard({ variant = 'icon', label, value, note, icon = 'grafik-batang', highlight, criteria, criteriaStatus = 'ok', at, style }) {
  const base = { boxSizing: 'border-box', position: 'relative', fontFamily: 'inherit' };
  if (variant === 'dark') return (
    <div style={place(at, Object.assign(base, { background: C.navy, borderRadius: 0.12 * U, padding: '16px 20px', border: highlight ? `2px solid ${C.cyan}` : 'none', color: '#fff' }, style))}>
      <div style={{ fontSize: pt(9.5), fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: C.kabut }}>{label}</div>
      <div style={{ fontSize: pt(30), fontWeight: 700, lineHeight: 1, margin: '10px 0 6px', color: highlight ? C.amber : '#fff' }}>{value}</div>
      {note && <div style={{ fontSize: pt(10), color: C.kabut }}>{note}</div>}
    </div>);
  if (variant === 'feasibility') {
    const pc = { ok: C.hijau, warn: C.oranye, crit: C.merah }[criteriaStatus];
    return (
      <div style={place(at, Object.assign(base, { background: '#fff', border: `1px solid ${C.garis}`, borderRadius: 0.08 * U, padding: '12px 16px', minHeight: 1.02 * U }, style))}>
        <div style={{ fontSize: pt(10.5), color: C.teks2 }}>{label}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 4 }}>
          <span style={{ fontSize: pt(22), fontWeight: 700, color: C.navy }}>{value}</span>
          {criteria && <span style={{ background: pc, color: criteriaStatus === 'ok' ? '#fff' : C.ink, fontSize: pt(9.5), fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>{criteria}</span>}
        </div>
      </div>);
  }
  const v7 = variant === 'v7';
  return (
    <div style={place(at, Object.assign(base, { background: highlight && !v7 ? C.tint : '#fff', border: `1px solid ${C.garis}`, borderRadius: 0.08 * U, padding: v7 ? '14px 16px 18px' : '12px 14px', display: 'flex', gap: 14, alignItems: 'center', minHeight: (v7 ? 1.24 : 1.1) * U, overflow: 'hidden' }, style))}>
      <Icon name={icon} circle="tint" size={(v7 ? 0.9 : 0.7) * U} color={v7 ? C.royal : C.biru} />
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: pt(v7 ? 14 : 11), fontWeight: 700, color: C.ink }}>{label}</div>
        <div style={{ fontSize: pt(v7 ? 17 : 19), fontWeight: 700, color: v7 ? C.royal : C.biru, lineHeight: 1.15 }}>{value}</div>
        {note && <div style={{ fontSize: pt(9.5), color: C.teks2, marginTop: 2 }}>{note}</div>}
      </div>
      {v7 && <i style={{ position: 'absolute', left: 4, right: 4, bottom: 0, height: 0.05 * U, background: highlight ? C.gold : C.v7navy }} />}
    </div>);
}
