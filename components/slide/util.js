// Penempatan pada kanvas slide dalam inci (1in = 96px pada 1280×720)
export const U = 96;
export const pt = (n) => n * U / 72;
export const inch = (n) => n * U;
export function place(at, style) {
  if (!at) return style || {};
  const [x, y, w, h] = at;
  return Object.assign({ position: 'absolute', left: x * U, top: y * U, width: w != null ? w * U : undefined, height: h != null ? h * U : undefined, boxSizing: 'border-box' }, style || {});
}
const tv = (r, h) => `var(--t-${r},${h})`;
export const C = { navy:tv('strong','#002060'), biru:tv('primary','#1F5FA6'), tealt:tv('secondary','#035B71'), teal:tv('flow','#00A2B9'), cyan:tv('signal','#00AFF0'), amber:tv('highlight','#FFC000'), hijau:'#2D7055', oranye:'#EF8924', merah:'#E4572E', ink:'#0A1233', teks2:'#5C6474', abu1:'#DFE0E1', abu2:'#A9A9AA', tint:tv('tint','#EFF6FE'), garis:tv('line','#C7D7F0'), kabut:tv('on-dark-2','#C7D7F0'), latar:'#EAEAEA', navyLine:tv('dark-line','#2B4F86'), navy2:tv('dark-2','#16396E'), ribbon:tv('ribbon','#05A7E1'), tintAmber:tv('tint-highlight','#FFF6DB'), royal:tv('primary','#1747C8'), v7navy:tv('strong','#003183'), gold:tv('highlight','#FCBC01'), v7brdr:tv('line-strong','#9CC0EE'), v7div:tv('line-strong','#AFC6E8') };
export const FONT = 'var(--t-font-body, Arial, "Liberation Sans", Helvetica, sans-serif)';
export const FONT_V7 = 'var(--t-font-body, Calibri, Carlito, "Liberation Sans", Arial, sans-serif)';
