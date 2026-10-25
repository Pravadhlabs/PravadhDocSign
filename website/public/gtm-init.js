/* Google Tag Manager with Consent Mode v2. External file so the CSP needs no
 * 'unsafe-inline'. Analytics and ads storage stay "denied" until the visitor
 * accepts in the banner (public/consent.js); the choice is kept in localStorage. */
(function (w, d) {
  w.dataLayer = w.dataLayer || [];
  function gtag() { w.dataLayer.push(arguments); }
  w.gtag = gtag;
  var denied = { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" };
  gtag("consent", "default", Object.assign({ wait_for_update: 500 }, denied));
  try {
    if (localStorage.getItem("ds_consent") === "granted") {
      gtag("consent", "update", { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted", analytics_storage: "granted" });
    }
  } catch (e) {}
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName("script")[0];
  var j = d.createElement("script");
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=GTM-NP8DTJPZ";
  f.parentNode.insertBefore(j, f);
})(window, document);
