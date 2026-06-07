import Container from "@/components/shared/Container";

const tech = [
  "Next.js",
  "React",
  "Firebase",
  "Cloud",
  "AI",
  "Automation",
];

export default function Technology() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <div className="text-center">
          <p className="text-blue-400 font-bold uppercase tracking-[0.25em]">
            Technology
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-white">
            Modern technology stack.
          </h2>
        </div>

        <div className="grid gap-6 mt-16 md:grid-cols-3">
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-3xl font-black text-white">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}