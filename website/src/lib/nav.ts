export const appNav = [
  { href: "/", label: "Home" },
  { href: "/templates", label: "Templates" },
  { href: "/documents", label: "Documents" },
  { href: "/envelopes", label: "Envelopes" },
  { href: "/settings", label: "Settings" },
] as const;

export const secondaryNav = [
  { href: "/installation", label: "Installation" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
] as const;

/** Comparison pages, linked from the footer only. */
export const compareNav = [
  { href: "/docusign-alternative", label: "DocuSign alternative" },
  { href: "/conga-s-docs-alternative", label: "Conga & S-Docs alternative" },
] as const;

export const labsUrl = "https://pravadhlabs.com";
export const githubUrl = "https://github.com/Pravadhlabs/PravadhDocSign";
export const installUrl = `${githubUrl}#install`;
export const linkedInUrl = "https://www.linkedin.com/in/dhairyasf/";
export const pravadhIqUrl = "https://pravadhiq.pravadhlabs.com/";
