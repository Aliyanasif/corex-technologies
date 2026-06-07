import Container from "@/components/shared/Container";

const items = [
  "Enterprise ERP",
  "AI Automation",
  "Cloud Solutions",
  "Business Intelligence",
  "Workflow Automation",
];

export default function Trusted() {
  return (
    <section className="py-16 border-y border-slate-200 bg-white">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {items.map((item) => (
            <span
              key={item}
              className="text-sm font-bold uppercase tracking-wider text-slate-500"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}