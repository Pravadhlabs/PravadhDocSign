import { InstallFreeLink } from "@/components/action-links";

export type Cell = string | { v: string; tone: "good" | "warn" | "muted" };
export type ComparePageProps = {
  pill: string;
  title: string;
  accent: string;
  lead: string;
  fitTitle: string;
  stay: { label: string; items: string[] };
  move: { label: string; items: string[] };
  tableTitle: string;
  columns: string[];
  rows: { label: string; cells: Cell[] }[];
  sources: { label: string; href: string }[];
  sourcesNote: string;
  stepsTitle: string;
  steps: [string, string][];
  faqs: [string, string][];
};

const tone = { good: "font-semibold text-[#0f9d6b]", warn: "text-[#b45309]", muted: "text-[#8a97b0]" };

function renderCell(c: Cell) {
  if (typeof c === "string") return <span className="text-[#0b1b3a]">{c}</span>;
  return <span className={tone[c.tone]}>{c.v}</span>;
}

/** Comparison landing page: hero, fit check, table with sources, switch steps, FAQ (+ FAQPage schema). */
export function ComparePage(p: ComparePageProps) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const ours = p.columns.length - 1;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />
      <section className="pv-hero">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="rise max-w-3xl">
            <p className="pill-dark">
              <span className="size-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_0_3px_rgba(45,212,191,0.2)]" />
              {p.pill}
            </p>
            <h1 className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-[1.08] font-bold tracking-[-0.035em] text-white">
              {p.title}
              <br />
              <span className="text-grad">{p.accent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#b4c2de] sm:text-lg">{p.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <InstallFreeLink />
              <a href="#compare" className="btn-ghost-dark group">
                See the comparison <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <section className="mt-14">
          <p className="eyebrow">Fit check</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#0b1b3a] sm:text-4xl">{p.fitTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[p.move, p.stay].map((box, i) => (
              <div key={box.label} className={`rounded-2xl p-6 ring-1 ${i === 0 ? "bg-white ring-[#2563eb]" : "bg-[#f3f8ff] ring-[#e1eaf8]"}`}>
                <h3 className="text-base font-bold text-[#0b1b3a]">{box.label}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-[#5a6a86]">
                  {box.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span aria-hidden className={i === 0 ? "text-[#0f9d6b]" : "text-[#8a97b0]"}>{i === 0 ? "✓" : "•"}</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="compare" className="mt-16 scroll-mt-24">
          <p className="eyebrow">Side by side</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#0b1b3a] sm:text-4xl">{p.tableTitle}</h2>
          <p className="mt-3 text-sm text-[#5a6a86]">
            &ldquo;Ask vendor&rdquo; means the vendor doesn&rsquo;t state it on the public pages we checked, not that the feature is missing.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl bg-white ring-1 ring-[#e1eaf8]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#e1eaf8] text-xs tracking-[0.06em] text-[#5a6a86] uppercase">
                  <th className="px-4 py-3 font-semibold"> </th>
                  {p.columns.map((c, i) => (
                    <th key={c} className={`px-4 py-3 font-semibold ${i === ours ? "bg-[#f3f8ff] text-[#2563eb]" : ""}`}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e1eaf8]">
                {p.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className="px-4 py-3 align-top font-semibold text-[#0b1b3a]">{r.label}</th>
                    {r.cells.map((c, i) => (
                      <td key={i} className={`px-4 py-3 align-top ${i === ours ? "bg-[#f3f8ff]" : ""}`}>{renderCell(c)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#5a6a86]">
            {p.sourcesNote} Sources:{" "}
            {p.sources.map((s, i) => (
              <span key={s.href}>
                <a href={s.href} target="_blank" rel="noopener" className="text-[#2563eb] underline-offset-2 hover:underline">{s.label}</a>
                {i < p.sources.length - 1 ? ", " : "."}
              </span>
            ))}{" "}
            Vendors change plans often; confirm with each before you buy.
          </p>
        </section>

        <section className="mt-16">
          <p className="eyebrow">Switching</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#0b1b3a] sm:text-4xl">{p.stepsTitle}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {p.steps.map(([t, d], i) => (
              <li key={t} className="rounded-2xl bg-white p-5 ring-1 ring-[#e1eaf8]">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#2563eb] text-xs font-bold text-white">{i + 1}</span>
                <h3 className="mt-3 text-base font-bold text-[#0b1b3a]">{t}</h3>
                <p className="mt-1.5 text-sm text-[#5a6a86]">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#0b1b3a] sm:text-4xl">Questions teams ask</h2>
          <div className="mt-6 divide-y divide-[#e1eaf8] rounded-2xl bg-white ring-1 ring-[#e1eaf8]">
            {p.faqs.map(([q, a]) => (
              <details key={q} className="group px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold text-[#0b1b3a]">
                  {q}
                  <span aria-hidden className="float-right text-[#5a6a86] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-[#5a6a86]">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <InstallFreeLink />
          </div>
        </section>
      </div>
    </>
  );
}
