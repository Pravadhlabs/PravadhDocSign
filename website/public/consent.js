/* Small cookie banner for Consent Mode. Shows once; "Cookie settings" links
 * (href="#cookie-settings") reopen it. No cookies are set until "Accept". */
(function (w, d) {
  var KEY = "ds_consent";
  function save(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
    var g = v === "granted" ? "granted" : "denied";
    if (w.gtag) w.gtag("consent", "update", { ad_storage: g, ad_user_data: g, ad_personalization: g, analytics_storage: g });
    var b = d.getElementById("ds-consent"); if (b) b.remove();
  }
  function show() {
    if (d.getElementById("ds-consent")) return;
    var b = d.createElement("div");
    b.id = "ds-consent";
    b.setAttribute("role", "dialog");
    b.setAttribute("aria-label", "Cookie choice");
    b.style.cssText = "position:fixed;left:16px;right:16px;bottom:16px;z-index:60;max-width:560px;margin:0 auto;background:#0b1b3a;color:#e6edf8;border-radius:16px;padding:16px 18px;box-shadow:0 12px 40px rgba(11,27,58,.35);font:14px/1.5 inherit;display:flex;flex-wrap:wrap;gap:12px;align-items:center";
    var p = d.createElement("p");
    p.style.cssText = "margin:0;flex:1 1 280px";
    p.textContent = "We use analytics cookies to see which pages help people. Nothing is set unless you accept.";
    function btn(label, primary, v) {
      var x = d.createElement("button");
      x.type = "button"; x.textContent = label;
      x.style.cssText = "cursor:pointer;border-radius:999px;padding:8px 16px;font-weight:600;font-size:14px;border:1px solid " + (primary ? "#2563eb;background:#2563eb;color:#fff" : "#3b4d72;background:transparent;color:#e6edf8");
      x.onclick = function () { save(v); };
      return x;
    }
    b.appendChild(p); b.appendChild(btn("Reject", false, "denied")); b.appendChild(btn("Accept", true, "granted"));
    d.body.appendChild(b);
  }
  function init() {
    var v = null; try { v = localStorage.getItem(KEY); } catch (e) {}
    if (!v) show();
    d.addEventListener("click", function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href="#cookie-settings"]') : null;
      if (a) { e.preventDefault(); show(); }
    });
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", init); else init();
})(window, document);
