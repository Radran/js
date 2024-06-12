let espaco = prompt('digite o espaço:');
let dpi = prompt('digite seu dpi');
espaco = Number(espaco);
dpi = Number(dpi);
const p1 = (-45 * espaco) + 3000 
const sensi = (p1 / dpi) / 3.18 
const res = sensi.toFixed(2)
alert(`sua sensi ideal é ${res}`);