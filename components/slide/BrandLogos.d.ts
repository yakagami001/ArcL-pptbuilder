import * as React from 'react';

/**
 * WAJIB di setiap slide/halaman: Logo Danantara Indonesia + Logo PLN Icon Plus.
 * corners = Danantara kiri atas, PLN Icon Plus kanan atas (parent harus position:relative).
 * lockup = berdampingan dengan garis pemisah (sampul/penutup).
 */
export interface BrandLogosProps {
  /** light = logo berwarna (latar terang); dark = logo putih (latar gelap/foto). */
  tone?: 'light' | 'dark';
  placement?: 'corners' | 'lockup';
  /** Tinggi logo Danantara dalam px; PLN Icon Plus otomatis ×1,15. */
  height?: number;
  inset?: number;
  top?: number;
  style?: React.CSSProperties;
}

export declare function BrandLogos(props: BrandLogosProps): JSX.Element;
