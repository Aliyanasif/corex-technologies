import Container from "@/components/shared/Container";

const industries = [
  "Healthcare",
  "Education",
  "Retail",
  "Logistics",
  "Agriculture",
  "Hospitality",
  "Construction",
  "Corporate",
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-bold uppercase tracking-[0.25em]">
            Industries
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-950">
            Built for every industry.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            CoreX products are designed to solve real operational challenges
            across multiple industries.
          </p>
        </div>

        <div className="grid gap-5 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-slate-950">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}