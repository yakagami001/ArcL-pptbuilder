import React from 'react';
import { U, C, FONT, FONT_V7, pt } from './util.js';

const LAYOUT = {
  cover:   { bg: 'pln-bg-sampul',  dark: true },
  section: { bg: 'pln-bg-bagian',  dark: true },
  white:   { bg: '',               dark: false, ribbon: C.ribbon },
  gray:    { bg: 'pln-bg-abu',     dark: false, ribbon: C.ribbon },
  blue:    { bg: 'pln-bg-biru',    dark: true,  ribbon: C.navy },
  index:   { bg: '',               dark: false },
  end:     { bg: 'pln-bg-penutup', dark: true },
};

/** Kanvas slide 1280×720 (13,333×7,5in) dengan 7 layout master Template_PPT_2026. */
export function Slide({ layout = 'white', page, title, subtitle, date, version, children, style, footerUrl = 'pln.iconplus  ·  plniconplus.co.id' }) {
  const L = LAYOUT[layout] || LAYOUT.white;
  const v7 = version === 'V7';
  const abs = (x, y, w, h, s) => Object.assign({ position: 'absolute', left: x * U, top: y * U, width: w * U, height: h * U, margin: 0, boxSizing: 'border-box' }, s);
  const titleTxt = (fs, s) => Object.assign({ fontSize: pt(fs), lineHeight: 1.08, display: 'flex', flexDirection: 'column' }, s);
  const lines = (t) => (Array.isArray(t) ? t : [t]).map((x, i) => <span key={i} style={{ display: 'block' }}>{x}</span>);
  const isContent = ['white', 'gray', 'blue'].includes(layout);
  return (
    <div className={L.bg} style={Object.assign({ position: 'relative', width: 1280, height: 720, overflow: 'hidden', background: L.bg ? undefined : '#fff', fontFamily: v7 ? FONT_V7 : FONT, color: C.ink, boxSizing: 'border-box' }, style)}>
      {L.ribbon && !v7 && <i style={abs(0, 0, 0.11, 7.5, { background: L.ribbon })} />}
      {layout === 'index' && <><i className="pln-bg-indeks" style={abs(0, 0, 4.56, 7.5)} /><i style={abs(4.57, 0, 0.11, 7.5, { background: C.ribbon })} /></>}
      {isContent && <i className={L.dark ? 'pln-logo-white' : 'pln-logo-color'} style={abs(10.73, 0.245, 2.38, 0.37)} />}
      {layout === 'index' && <i className="pln-logo-color" style={abs(10.73, 0.245, 2.38, 0.37)} />}
      {layout === 'cover' && <>
        <i className="pln-logo-white" style={abs(7.33, 1.17, 3.7, 0.575)} />
        <h1 style={abs(5.67, 2.27, 7.03, 1.45, titleTxt(36, { fontWeight: 400, textAlign: 'center', color: '#FEFFFF' }))}>{lines(title)}</h1>
        {date && <div style={abs(7.33, 4.24, 3.7, 0.44, { fontSize: pt(18), color: C.amber, textAlign: 'center' })}>{date}</div>}
        <span style={abs(6.5, 6.82, 5.3, 0.3, { fontSize: pt(11), color: '#fff', textAlign: 'center', opacity: 0.9, whiteSpace: 'pre' })}>{footerUrl}</span>
      </>}
      {layout === 'section' && <>
        <i style={abs(2.74, 2.82, 0.14, 1.87, { background: C.ribbon, borderRadius: 0.07 * U })} />
        <i className="pln-logo-white" style={abs(9.06, 0.48, 3.7, 0.575)} />
        <h1 style={abs(2.98, 2.82, 7.95, 1.87, titleTxt(54, { fontWeight: 400, color: '#FEFFFF', justifyContent: 'center' }))}>{lines(title)}</h1>
      </>}
      {layout === 'end' && <>
        <i className="pln-logo-white" style={abs(4.81, 1.4, 3.7, 0.575)} />
        <h1 style={abs(0.17, 2.92, 13, 1.45, titleTxt(48, { fontWeight: 400, color: '#FEFFFF', textAlign: 'center', justifyContent: 'center' }))}>{lines(title || 'TERIMA KASIH')}</h1>
        <span style={abs(3.2, 6.82, 6.9, 0.3, { fontSize: pt(11), color: '#fff', textAlign: 'center', opacity: 0.9, whiteSpace: 'pre' })}>{footerUrl}</span>
      </>}
      {layout === 'index' && title && <h1 style={abs(0.3, 0.26, 3.9, 1.45, titleTxt(30, { fontWeight: 700, color: '#FEFFFF' }))}>{lines(title)}</h1>}
      {(isContent || layout === 'index') && page != null && !v7 && <span style={abs(11.9, 7.05, 1.27, 0.3, { fontSize: pt(12), fontWeight: 700, color: L.dark ? '#fff' : C.biru, textAlign: 'right' })}>{page}</span>}
      {children}
    </div>
  );
}
