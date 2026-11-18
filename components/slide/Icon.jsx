import React from 'react';
import { ICON_PATHS } from './iconPaths.js';
import { C, place } from './util.js';

/** Ikon garis PLN (43 glyph, stroke 3,4/64). circle: 'tint' | 'biru' | 'amber' | 'navy' | 'gold' | 'royal'. */
export function Icon({ name, size = 44, color, circle, circleSize, at, style }) {
  const d = ICON_PATHS[name] || '';
  const bgMap = { tint: C.tint, biru: C.biru, amber: C.amber, navy: C.navy, gold: C.gold, royal: C.royal };
  const onDark = circle && circle !== 'tint' && circle !== 'amber' && circle !== 'gold';
  const stroke = color || (circle === 'amber' || circle === 'gold' ? C.ink : onDark ? '#fff' : C.biru);
  const svg = (
    <svg viewBox="0 0 64 64" width={circle ? (circleSize || size) * 0.52 : size} height={circle ? (circleSize || size) * 0.52 : size}
      fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: d }} style={Object.assign({ color: stroke }, circle ? {} : place(at, style))} />
  );
  if (!circle) return svg;
  const cs = circleSize || size;
  return (
    <span style={place(at, Object.assign({ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: cs, height: cs, borderRadius: '50%', background: bgMap[circle] || circle, border: circle === 'tint' ? '2px solid #D9E3F4' : 'none', flex: 'none', boxSizing: 'border-box' }, style))}>{svg}</span>
  );
}

export const ICON_NAMES = Object.keys(ICON_PATHS);
