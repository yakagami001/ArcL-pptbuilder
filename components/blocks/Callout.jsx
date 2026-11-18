import React from 'react';
import { U, C, pt, place } from '../slide/util.js';
import { Icon } from '../slide/Icon.jsx';

/**
 * Kotak pesan. variant:
 *  quote (K24 — panel Tint r0,18in, tanda kutip 72pt Teal Aksen, kutipan 15pt miring Navy) ·
 *  open (K25 — garis putus Biru, ikon lonceng lingkaran Amber) ·
 *  next (K27 — Tint Amber + garis Amber, ikon panah naik) ·
 *  decision (K28 — panel Navy bingkai Amber 2pt, label & ceklis Amber)
 */
export function Callout({ variant = 'next', label, children, author, role, at, style }) {
  const box = (s) => place(at, Object.assign({ boxSizing: 'border-box', position: 'relative' }, s, style));
  if (variant === 'quote') return (
    <div style={box({ background: C.tint, borderRadius: 0.18 * U, padding: '30px 28px 22px' })}>
      <div style={{ position: 'absolute', left: 20, top: -6, fontSize: pt(72), lineHeight: 1, color: C.teal, fontFamily: 'Georgia, serif' }}>“</div>
      <div style={{ fontSize: pt(15), fontStyle: 'italic', color: C.navy, lineHeight: 1.3, marginTop: 18 }}>{children}</div>
      {author && <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}><Icon name="pengguna" circle="biru" size={36} /><div style={{ fontSize: pt(11) }}><b>{author}</b><div style={{ color: C.teks2 }}>{role}</div></div></div>}
    </div>);
  if (variant === 'open') return (
    <div style={box({ border: `1.33px dashed ${C.biru}`, borderRadius: 0.18 * U, padding: '14px 18px', display: 'flex', gap: 14, alignItems: 'center', background: '#fff' })}>
      <Icon name="lonceng" circle="amber" size={0.56 * U} />
      <div style={{ fontSize: pt(12.5), color: C.ink, lineHeight: 1.25 }}>{children}</div>
    </div>);
  if (variant === 'decision') return (
    <div style={box({ background: C.navy, border: `2.67px solid ${C.amber}`, borderRadius: 0.12 * U, padding: '14px 18px', display: 'flex', gap: 14, alignItems: 'center' })}>
      <Icon name="ceklis-bulat" size={0.5 * U} color={C.amber} />
      <div><div style={{ fontSize: pt(10.5), fontWeight: 700, color: C.amber, letterSpacing: 1.5 }}>{label || 'KEPUTUSAN YANG DIMINTA'}</div>
        <div style={{ fontSize: pt(13.5), color: '#fff', marginTop: 4, lineHeight: 1.25 }}>{children}</div></div>
    </div>);
  return (
    <div style={box({ background: C.tintAmber, border: `1px solid ${C.amber}`, borderRadius: 0.08 * U, padding: '12px 16px', display: 'flex', gap: 14, alignItems: 'center' })}>
      <Icon name="panah-naik" circle="amber" size={0.5 * U} />
      <div><div style={{ fontSize: pt(10), fontWeight: 700, letterSpacing: 1.5, color: C.ink }}>{label || 'LANGKAH BERIKUTNYA'}</div>
        <div style={{ fontSize: pt(12), color: C.ink, marginTop: 2 }}>{children}</div></div>
    </div>);
}
