export function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(char, i) {
    return i === 0 ? char.toLowerCase() : char.toUpperCase();
  }).replace(/\s+/g, '');
}
