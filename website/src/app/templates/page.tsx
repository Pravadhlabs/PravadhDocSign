import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { TemplateScene } from "@/components/motion/template-scene";
import { ProductLockup } from "@/components/product-lockup";
import { VisualEditorScene } from "@/components/motion/visual-editor-scene";

export const metadata: Metadata = {
  title: "Salesforce Document Generation Templates",
  description: "Build document templates on any standard or custom Salesforce object in a visual editor or HTML, with live preview and merge fields. Free and open source.",
  ...pageMeta("/templates/", "Salesforce Document Generation Templates", "Build document templates on any standard or custom Salesforce object in a visual editor or HTML, with live preview and merge fields. Free and open source."),
};

export default function TemplatesPage() {
  return (
    <>
      <ProductLockup page="templates" />
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <TemplateScene />
      <VisualEditorScene />
    </div>
    </>
  );
}
