import Container from "@/components/shared/Container";

const stats = [
  ["ERP", "Industry-specific systems"],
  ["AI", "Workflow automation"],
  ["SaaS", "Scalable cloud products"],
];

export default function About() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              About CoreX
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Building the operating system for smarter businesses.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              CoreX Technologies creates modern ERP and AI-powered business
              systems designed to replace manual workflows, disconnected tools,
              and spreadsheet-based operations.
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6">
            <div className="rounded-[24px] bg-slate-950 p-8">
              {stats.map(([title, desc]) => (
                <div
                  key={title}
                  className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-6 last:mb-0"
                >
                  <h3 className="text-4xl font-black text-white">{title}</h3>
                  <p className="mt-2 text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}