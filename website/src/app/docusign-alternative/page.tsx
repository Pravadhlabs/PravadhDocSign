import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ComparePage, type Cell } from "@/components/compare-page";

const TITLE = "Free DocuSign Alternative for Salesforce";
const DESC =
  "DocuSign charges per user with envelope limits. Pravadh DocSign is free, open source and runs inside Salesforce: unlimited users, documents and signatures.";

export const metadata: Metadata = { title: TITLE, description: DESC, ...pageMeta("/docusign-alternative/", TITLE, DESC) };

const good = (v: string): Cell => ({ v, tone: "good" });
const warn = (v: string): Cell => ({ v, tone: "warn" });
const muted = (v: string): Cell => ({ v, tone: "muted" });

export default function DocuSignAlternativePage() {
  return (
    <ComparePage
      pill="Pravadh DocSign · DocuSign alternative"
      title="A free DocuSign alternative"
      accent="that lives inside Salesforce."
      lead="If most of what you sign starts on a Salesforce record — a quote, an order form, an agreement — you may not need a per-user eSignature subscription. Pravadh DocSign generates the document from the record, sends it for signature and saves the signed PDF back to Files. Free, open source, no paid tier."
      fitTitle="Is DocSign the right replacement for you?"
      move={{
        label: "DocSign is a good fit if",
        items: [
          "Your documents start from Salesforce records",
          "You pay for DocuSign seats mainly to send from Salesforce",
          "You want to stop counting envelopes",
          "You'd rather the signed PDF and audit trail stayed in your org",
          "You want to generate and sign in one app, from Flow",
        ],
      }}
      stay={{
        label: "Stay with DocuSign if",
        items: [
          "You need signer ID verification beyond an access code",
          "Most signing happens outside Salesforce",
          "You rely on DocuSign's wider integrations or mobile apps",
          "You need a vendor-backed support contract for the eSignature tool itself",
        ],
      }}
      tableTitle="DocuSign eSignature vs Pravadh DocSign"
      columns={["DocuSign eSignature", "Pravadh DocSign"]}
      rows={[
        { label: "Price", cells: [warn("Standard $30, Business Pro $45 per user / month"), good("Free. No paid tier")] },
        { label: "Envelope limits", cells: [warn("About 100 envelopes per user per year (Standard, Business Pro)"), good("Unlimited")] },
        { label: "Users and recipients", cells: ["Paid per sending user", good("Unlimited users and recipients")] },
        { label: "Document generation", cells: [muted("Separate product (DocuSign Gen)"), good("Built in: templates on any object, PDF or Word")] },
        { label: "Where documents live", cells: ["DocuSign cloud, synced to Salesforce", good("Salesforce Files on the record")] },
        { label: "Audit trail", cells: ["Certificate of completion", good("SHA-256 chain, checked on every view, plus certificate")] },
        { label: "Signer authentication", cells: ["Several options by plan", "Single-use link and optional access code"] },
        { label: "Automation", cells: [muted("Ask vendor"), good("Flow actions and a platform event on every change")] },
        { label: "Source code", cells: ["Proprietary", good("Open source (MIT)")] },
      ]}
      sourcesNote="DocuSign prices in US dollars as reported in July 2026."
      sources={[
        { label: "DocuSign pricing (Automation Atlas, Jul 2026)", href: "https://automationatlas.io/answers/docusign-pricing-explained-2026/" },
        { label: "DocuSign Gen", href: "https://www.docusign.com/en-gb/products/gen" },
        { label: "Pravadh DocSign pricing", href: "/pricing/" },
      ]}
      stepsTitle="Move from DocuSign in four steps"
      steps={[
        ["Install free", "Install the managed package or deploy the source from GitHub into a sandbox."],
        ["Rebuild templates", "Recreate your main documents in the visual editor and preview them on a real record."],
        ["Run in parallel", "Send a few real agreements through DocSign while DocuSign stays live."],
        ["Switch at renewal", "Move your Flows to the DocSign actions and let the DocuSign seats lapse."],
      ]}
      faqs={[
        ["Is Pravadh DocSign really free?", "Yes. It is open source under MIT, with unlimited users, documents, recipients and signatures and no paid tier. Pravadh Labs offers paid help with installation and configuration, but the app itself stays free."],
        ["Do signers need a Salesforce or DocSign licence?", "No. Signers open a single-use link on a Salesforce Site page. You can add an access code, expiry and reminders."],
        ["Can it generate documents as well as collect signatures?", "Yes. Templates work on any standard or custom object, with parent fields to five levels, repeating rows, conditions and images, and output to PDF or Word."],
        ["Where are signed documents stored?", "In Salesforce Files on the source record, with the original upload kept. Each event is added to a SHA-256 chain that is re-checked whenever the document is viewed."],
        ["What does the managed package send to Pravadh Labs?", "On install or upgrade, the managed package emails Pravadh Labs the installer's contact details and the org's name, Id and edition, so the team can offer onboarding. Documents and records are never sent. Deploying from source sends nothing."],
      ]}
    />
  );
}
