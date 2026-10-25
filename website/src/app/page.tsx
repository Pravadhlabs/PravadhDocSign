import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { HomeScene } from "@/components/motion/home-scene";
import { ProductLockup } from "@/components/product-lockup";

export const metadata: Metadata = {
  title: { absolute: "Free Open-Source eSignature for Salesforce | Pravadh DocSign" },
  description: "Pravadh DocSign is free, open-source (MIT) document generation and eSignature built for Salesforce. Unlimited users, documents and signatures.",
  ...pageMeta("/", "Free Open-Source eSignature for Salesforce | Pravadh DocSign", "Pravadh DocSign is free, open-source (MIT) document generation and eSignature built for Salesforce. Unlimited users, documents and signatures."),
};

export default function HomePage() {
  return (
    <>
      <ProductLockup page="home" />
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <HomeScene />
      </div>
    </>
  );
}
