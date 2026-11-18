import React from 'react';
import { U, C, pt, place } from '../slide/util.js';

/** Pertanyaan diskusi bernomor (K26): panel Navy, nomor Amber 0,65in, pertanyaan 16pt putih, keluaran 11,5pt Kabut. */
export function QuestionCard({ index = 1, question, output, at, style }) {
  return (
    <div style={place(at, Object.assign({ background: C.navy, borderRadius: 0.12 * U, minHeight: 1.25 * U, display: 'flex', alignItems: 'center', gap: 18, padding: '0 22px', boxSizing: 'border-box' }, style))}>
      <span style={{ flex: 'none', width: 0.65 * U, height: 0.65 * U, borderRadius: '50%', background: C.amber, color: C.ink, fontWeight: 700, fontSize: pt(20), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{index}</span>
      <div><div style={{ fontSize: pt(16), fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{question}</div>
        {output && <div style={{ fontSize: pt(11.5), color: C.kabut, marginTop: 4 }}>Keluaran: {output}</div>}</div>
    </div>);
}
