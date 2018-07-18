function hashCode(str) {
  let hash = 0, length = str.length;
  for (let i = 0; i < length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function hexCode(str) {
  let code = hashCode(str)
  let c = (code & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  let hex = '00000'.substr(0, 6 - c.length);
  return `#${hex}${c}`;
}

export default { hexCode };
