
import Container from "@/components/shared/Container";

const products = [
  ["AttendX", "Attendance & Payroll ERP"],
  ["HealthX", "Hospital ERP"],
  ["SchoolX", "School Management ERP"],
  ["RetailX", "Retail Operations ERP"],
  ["FarmX", "Farm Management ERP"],
  ["ShipX", "Shipping & Logistics ERP"],
];

export default function ProductEcosystem() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Product Ecosystem
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            One brand. Multiple intelligent systems.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every CoreX product is built for a specific industry, connected by
            one unified brand system and one long-term technology vision.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map(([name, desc]) => (
            <div
              key={name}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
                X
              </div>

              <h3 className="text-3xl font-black text-slate-950">{name}</h3>
              <p className="mt-3 text-slate-600">{desc}</p>

              <div className="mt-8 h-1.5 w-24 rounded-full bg-blue-600" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}