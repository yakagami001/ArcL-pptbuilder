// Keluarga Komersial (V10) — kanvas HD 1920×1080, warna ikut tema (--t-*) lewat H.
import { H } from '../hd/hdUtil.js';
export const rp=(v)=>typeof v==='number'?'Rp '+Math.abs(v).toLocaleString('id-ID'):v;
export const ST={selesai:{c:H.ok,l:'Diselesaikan'},berjalan:{c:H.royal,l:'Berjalan'},tidak:{c:H.crit,l:'Tidak dilanjutkan'},ditunda:{c:H.warn,l:'Ditunda'},usulan:{c:H.gold,l:'Usulan'}};
