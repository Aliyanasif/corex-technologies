import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

const products = [
  {
    name: "AttendX",
    category: "Attendance & Payroll ERP",
    status: "Flagship Product",
    desc: "Smart attendance, payroll automation, employee records, requests and workforce reports for modern businesses.",
  },
  {
    name: "HealthX",
    category: "Hospital ERP",
    status: "Future Product",
    desc: "A hospital management system for patients, appointments, departments, staff, billing and medical workflows.",
  },
  {
    name: "SchoolX",
    category: "School Management ERP",
    status: "Future Product",
    desc: "A complete school system for attendance, fees, students, teachers, exams, results and parent communication.",
  },
  {
    name: "RetailX",
    category: "Retail Operations ERP",
    status: "Future Product",
    desc: "Inventory, billing, sales tracking, customer records, supplier management and store analytics.",
  },
  {
    name: "FarmX",
    category: "Farm Management ERP",
    status: "Future Product",
    desc: "Manage crops, livestock, workers, expenses, inventory, production and farm reports in one platform.",
  },
  {
    name: "ShipX",
    category: "Shipping & Logistics ERP",
    status: "Future Product",
    desc: "Track shipments, operations, dispatch, fleet, documents, clients and logistics performance.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-40">
        <section className="pb-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Products
              </p>

              <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
                Industry-specific ERP systems under one ecosystem.
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                CoreX products are designed to solve real operational problems
                across different industries, while staying connected through one
                unified brand and technology direction.
              </p>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-8 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                    {product.status}
                  </div>

                  <h2 className="text-4xl font-black text-slate-950">
                    {product.name}
                  </h2>

                  <p className="mt-2 font-semibold text-slate-500">
                    {product.category}
                  </p>

                  <p className="mt-5 leading-7 text-slate-600">
                    {product.desc}
                  </p>

                  <div className="mt-8 h-1.5 w-24 rounded-full bg-blue-600 transition group-hover:w-36" />
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