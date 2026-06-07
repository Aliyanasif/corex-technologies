import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

const industries = [
  {
    name: "Healthcare",
    product: "HealthX",
    desc: "Hospital workflows, appointments, patients, staff, billing and medical operations.",
  },
  {
    name: "Education",
    product: "SchoolX",
    desc: "Students, teachers, attendance, fees, exams, results and parent communication.",
  },
  {
    name: "Retail",
    product: "RetailX",
    desc: "Inventory, billing, suppliers, sales tracking and customer records.",
  },
  {
    name: "Logistics",
    product: "ShipX",
    desc: "Shipments, dispatch, fleet, documents, clients and delivery tracking.",
  },
  {
    name: "Agriculture",
    product: "FarmX",
    desc: "Crops, livestock, workers, expenses, inventory and production reports.",
  },
  {
    name: "Corporate",
    product: "AttendX",
    desc: "Attendance, payroll, HR workflows, staff requests and business reporting.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-40">
        <section className="pb-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Industries
              </p>

              <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
                ERP systems built around real industry needs.
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                CoreX plans every product around specific workflows, not generic
                software templates.
              </p>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    {item.product}
                  </p>

                  <h2 className="mt-4 text-3xl font-black text-slate-950">
                    {item.name}
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