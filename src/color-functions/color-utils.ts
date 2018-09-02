interface Rgb {r: number, g: number, b: number};

export function hexToRgb(hex: string):Rgb {
  if (hex.length ===3) {
    const hr = hex[0];
    const hg = hex[1];
    const hb = hex[2];
    const hexLengthOf6 = `${hr}${hr}${hg}${hg}${hb}${hb}`
    return hexToRgb(hexLengthOf6)
  }
  const [r, g, b] = [0, 2, 4]
    .map( offset => hex.substring(offset, offset+2) )
    .map( hexCh => parseInt(hexCh, 16) )
  const out:Rgb  = {r, g, b};
  return out;
}

export function rgbToHex(r: number, g: number, b: number): string {
  
  // tslint:disable-next-line:prefer-template
  const out: string = [r, g, b]
    // .map( decCh => Math.max(0, Math.min(decCh, 255)) )
    .map( decCh => Math.min(Math.max(0, decCh), 255))
    .map( decCh => decCh.toString(16) )
    .map(hexCh => hexCh.length === 1 ? `0${hexCh}` : `${hexCh}`) 
    .join('');
  return out;
}
