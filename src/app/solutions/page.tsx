import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

const solutions = [
  {
    title: "ERP Implementation",
    desc: "Industry-specific ERP systems designed to organize operations, teams, data and reporting in one place.",
  },
  {
    title: "AI Automation",
    desc: "Automate repetitive workflows, reporting tasks and business decision support with AI-powered systems.",
  },
  {
    title: "Cloud Business Systems",
    desc: "Secure cloud-first platforms that help teams access business tools anywhere, anytime.",
  },
  {
    title: "Workflow Optimization",
    desc: "Replace manual processes with smart approval flows, dashboards and real-time business tracking.",
  },
  {
    title: "Custom SaaS Development",
    desc: "Build scalable web applications for companies that need modern digital products.",
  },
  {
    title: "Business Intelligence",
    desc: "Turn operational data into dashboards, insights and measurable business performance.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-40">
        <section className="pb-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Solutions
              </p>

              <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
                Smart software solutions for modern businesses.
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                CoreX helps organizations digitize operations, automate
                workflows and scale through reliable ERP and AI-powered systems.
              </p>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white">
                    {index + 1}
                  </div>

                  <h2 className="text-3xl font-black text-slate-950">
                    {item.title}
                  </h2>

                  <p className="mt-5 leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}