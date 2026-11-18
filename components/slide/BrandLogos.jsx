import React from 'react';

/** WAJIB di setiap slide/halaman: Logo Danantara Indonesia (kiri) + Logo PLN Icon Plus (kanan). Memakai kelas CSS (gambar tertanam di tokens), jadi tetap tampil di proyek mana pun. */
export function BrandLogos({ tone = 'light', placement = 'corners', height = 48, inset = 48, top = 32, style }) {
  const w = tone === 'dark' ? '-white' : '';
  const box = (cls, label, h, wr, extra) => <div className={cls} role="img" aria-label={label} style={Object.assign({ height: h, width: h * wr }, extra)} />;
  const dan = (extra) => box('pln-logo-danantara' + w, 'Danantara Indonesia', height, 3.9, extra);
  const pln = (extra) => box('pln-logo-pln' + w, 'PLN Icon Plus', height * 1.15, 2.8, Object.assign({ backgroundPosition: 'right center' }, extra));
  if (placement === 'lockup') return (
    <div style={Object.assign({ display: 'flex', alignItems: 'center', gap: height * 0.8 }, style)}>
      {dan()}<i style={{ width: 2, height: height * 1.1, background: tone === 'dark' ? 'rgba(255,255,255,.7)' : '#0A1F5C' }} />{pln()}
    </div>);
  return (<React.Fragment>
    {dan(Object.assign({ position: 'absolute', left: inset, top, zIndex: 5 }, style))}
    {pln(Object.assign({ position: 'absolute', right: inset, top: top - height * 0.08, zIndex: 5 }, style))}
  </React.Fragment>);
}
