const f = /^(\r\n|\n\r|\r|\n)/, r = /^[^\t\r\n]+/, g = /^\t/;
function m(e) {
  e = e.trim();
  const n = [[""]];
  if (e.length === 0)
    return n;
  let a = 0, c = 0, h;
  for (; e.length > 0 && h !== e.length; )
    if (h = e.length, e.match(g))
      e = e.replace(g, ""), a += 1, n[c][a] = "";
    else if (e.match(f))
      e = e.replace(f, ""), a = 0, c += 1, n[c] = [""];
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
        const t = e.match(r);
        l = t ? t[0] : "", e = e.slice(l.length);
      }
      n[c][a] = l;
    }
  return n;
}
export {
  m as default
};
