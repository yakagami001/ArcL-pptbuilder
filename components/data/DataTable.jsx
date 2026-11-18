import React from 'react';
import { U, C, pt, place } from '../slide/util.js';
import { Pill } from '../blocks/Pill.jsx';

/**
 * Tabel slide. variant: light (K35 — kepala Navy, garis bawah #C7D7F0, tanpa zebra, total Tint) ·
 * dark (K48 — panel Navy, garis #2B4F86) · v7 (kepala Royal Blue, total #E6EFFB).
 * columns: [{key,label,align,width}] · rows: objek; nilai {status:'ok'|'warn'|'crit', text} dirender sebagai pil.
 * keyRow: indeks baris kunci (dibingkai Amber). totalRow: true = baris terakhir total.
 */
export function DataTable({ variant = 'light', columns = [], rows = [], totalRow, keyRow, rowHeight = 0.4, fontSize = 11, at, style }) {
  const dark = variant === 'dark';
  const head = variant === 'v7' ? C.royal : C.navy;
  const cell = (v) => (v && typeof v === 'object' && v.status ? <Pill tone={v.status}>{v.text}</Pill> : v);
  return (
    <table style={place(at, Object.assign({ borderCollapse: 'collapse', tableLayout: 'fixed', fontSize: pt(fontSize), width: '100%', background: dark ? C.navy2 : '#fff' }, style))}>
      <thead><tr>{columns.map((c) => <th key={c.key} style={{ background: dark ? C.navy : head, color: '#fff', fontWeight: 700, height: rowHeight * U, padding: '0 9.6px', textAlign: c.align || 'left', width: c.width }}>{c.label}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => {
        const tot = totalRow && i === rows.length - 1; const key = keyRow === i;
        return <tr key={i} style={key ? { outline: `2px solid ${C.amber}`, outlineOffset: -2 } : undefined}>{columns.map((c) => (
          <td key={c.key} style={{ height: rowHeight * U, padding: '0 9.6px', textAlign: c.align || 'left', color: dark ? '#fff' : C.ink, borderBottom: `0.67px solid ${dark ? C.navyLine : C.garis}`, background: tot ? (dark ? C.navy : variant === 'v7' ? '#E6EFFB' : C.tint) : undefined, fontWeight: tot || key ? 700 : 400 }}>{cell(r[c.key])}</td>))}</tr>;
      })}</tbody>
    </table>);
}
