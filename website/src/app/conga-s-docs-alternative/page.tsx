import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ComparePage, type Cell } from "@/components/compare-page";

const TITLE = "Conga & S-Docs Alternative for Salesforce";
const DESC =
  "Compare Conga Composer, S-Docs and Nintex DocGen with Pravadh DocSign: free, open-source document generation and eSignature built for Salesforce.";

export const metadata: Metadata = { title: TITLE, description: DESC, ...pageMeta("/conga-s-docs-alternative/", TITLE, DESC) };

const good = (v: string): Cell => ({ v, tone: "good" });
const warn = (v: string): Cell => ({ v, tone: "warn" });
const muted = (v: string): Cell => ({ v, tone: "muted" });
const ask = muted("Ask vendor");

export default function CongaSDocsAlternativePage() {
  return (
    <ComparePage
      pill="Pravadh DocSign · Conga and S-Docs alternative"
      title="Replace Conga or S-Docs"
      accent="with one free app."
      lead="Document generation tools for Salesforce are usually quoted per user, and eSignature is often another product on top. Pravadh DocSign does both inside your org — templates on any object, built-in signing and a tamper-evident audit trail — free and open source."
      fitTitle="Is DocSign the right replacement for you?"
      move={{
        label: "DocSign is a good fit if",
        items: [
          "You generate quotes, agreements or letters from Salesforce records",
          "You want document generation and eSignature in one app",
          "Per-user licences make it hard to give everyone access",
          "You want to build templates visually and switch to HTML when needed",
          "You automate documents from Flow",
        ],
      }}
      stay={{
        label: "Stay with your current tool if",
        items: [
          "You rely on very complex layouts the Salesforce PDF renderer can't draw",
          "You depend on its contract lifecycle or CPQ add-ons",
          "You need a vendor-backed support contract for the tool itself",
        ],
      }}
      tableTitle="Conga Composer, S-Docs and Nintex DocGen vs Pravadh DocSign"
      columns={["Conga Composer", "S-Docs", "Nintex DocGen", "Pravadh DocSign"]}
      rows={[
        { label: "Published price", cells: [warn("Custom quote, per user / month"), warn("Not published; quoted on volume and users"), warn("From $20 per user / month (listed)"), good("Free. No paid tier")] },
        { label: "Free version", cells: [muted("No; free trial"), ask, muted("No; free trial"), good("Free forever")] },
        { label: "eSignature", cells: [ask, "Yes", ask, good("Built in")] },
        { label: "Templates on any object", cells: [ask, "Standard and custom objects", ask, good("Any object, parent fields to five levels")] },
        { label: "Runs inside Salesforce", cells: [ask, "Native architecture options", ask, good("Yes, managed package or source")] },
        { label: "Automation", cells: [ask, "Batch and conditional logic", ask, good("Flow actions and platform events")] },
        { label: "Audit trail", cells: [ask, ask, ask, good("SHA-256 chain and certificate")] },
        { label: "Source code", cells: ["Proprietary", "Proprietary", "Proprietary", good("Open source (MIT)")] },
      ]}
      sourcesNote="Prices in US dollars as listed on 23 Oct 2026."
      sources={[
        { label: "Conga Composer pricing (Capterra)", href: "https://www.capterra.com/p/228164/Conga-Document-Generation/pricing/" },
        { label: "S-Docs pricing", href: "https://www.sdocs.com/pricing" },
        { label: "Nintex DocGen (Capterra)", href: "https://www.capterra.com/p/226275/Nintex-DocGen/" },
        { label: "Pravadh DocSign pricing", href: "/pricing/" },
      ]}
      stepsTitle="Move from Conga or S-Docs in four steps"
      steps={[
        ["Install free", "Install the managed package or deploy the source from GitHub into a sandbox."],
        ["List your templates", "Start with the five documents you generate most. They usually cover most volume."],
        ["Rebuild and compare", "Recreate each in the visual editor and compare the output side by side on real records."],
        ["Switch Flows", "Point your Flows at the DocSign actions, then retire the old templates at renewal."],
      ]}
      faqs={[
        ["Can DocSign replace Conga Composer or S-Docs completely?", "For most quote, agreement and letter templates, yes: any object, related-list tables, conditions, images and PDF or Word output, plus built-in signing. Very complex print layouts may need simplifying, and the editor warns you about anything the Salesforce PDF renderer can't draw."],
        ["Is it really free for every user?", "Yes. Pravadh DocSign is open source under MIT with unlimited users, documents, recipients and signatures. There is no paid tier. Pravadh Labs offers paid installation and configuration help if you want it."],
        ["Do we need a separate eSignature tool?", "No. Signing is built in: signers use a single-use link on a Salesforce Site page, and the signed PDF and certificate are saved to Files on the record."],
        ["Can we migrate templates automatically?", "Not yet. Templates are rebuilt in the visual editor or in HTML. Starting with your most-used documents keeps the effort small."],
        ["What does the managed package send to Pravadh Labs?", "On install or upgrade, it emails Pravadh Labs the installer's contact details and the org's name, Id and edition, so the team can offer onboarding. Documents and records are never sent. Deploying from source sends nothing."],
      ]}
    />
  );
}
