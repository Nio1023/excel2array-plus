const r = /^(\r\n|\n\r|\r|\n)/, g = /^[^\t\r\n]+/, f = /^\t/;
function u(e) {
  const n = [[""]];
  if (e.length === 0)
    return n;
  let a = 0, c = 0, h;
  for (; e.length > 0 && h !== e.length; )
    if (h = e.length, e.match(f))
      e = e.replace(f, ""), a += 1, n[c][a] = "";
    else if (e.match(r))
      e = e.replace(r, ""), a = 0, c += 1, n[c] = [""];
    else {
      let l = "";
      if (e.startsWith('"')) {
        let t = 0, o = !0;
        for (; o; ) {
          const i = e.slice(0, 1);
          i === '"' && (t += 1), l += i, e = e.slice(1), (e.length === 0 || e.match(/^[\t\r\n]/) && t % 2 === 0) && (o = !1);
        }
        l = l.replace(/^"/, "").replace(/"$/, "").replace(/["]*/g, (i) => new Array(Math.floor(i.length / 2)).fill('"').join(""));
      } else {
        const t = e.match(g);
        l = t ? t[0] : "", e = e.slice(l.length);
      }
      n[c][a] = l;
    }
  return n;
}
export {
  u as default
};
