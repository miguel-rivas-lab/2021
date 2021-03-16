export const colorManager = {
  RGB(hex) {
    return {
      red: parseInt(hex.substr(1, 2), 16),
      green: parseInt(hex.substr(3, 2), 16),
      blue: parseInt(hex.substr(5, 2), 16),
    }
  },

  HSL(hex) {
    let color = this.RGB(hex);
    let r = color.red / 255;
    let g = color.green / 255;
    let b = color.blue / 255;
  
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta === 0) {
      h = 0;
    } else if (cmax === r) {
      h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
  
    h = Math.round(h * 60);
  
    if (h < 0) {
      h += 360;
    }
    
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return {hue: h, saturation: s, lightness: l};
  }
}