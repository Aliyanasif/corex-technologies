import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-52 pb-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      <div className="absolute left-1/2 top-28 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-bold text-blue-600 shadow-sm">
            Enterprise ERP • AI Automation • SaaS Ecosystem
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
            Where Businesses
            <span className="block text-blue-600">Work Smarter.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            COREX Technologies builds intelligent ERP systems and AI-powered
            business solutions that automate operations, improve productivity,
            and help organizations scale with confidence.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-24 max-w-6xl rounded-[32px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200">
          <div className="rounded-[24px] bg-slate-950 p-6">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["AttendX", "Attendance & Payroll"],
                ["HealthX", "Hospital ERP"],
                ["SchoolX", "School Management"],
              ].map(([name, desc]) => (
                <div
                  key={name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm text-slate-400">CoreX Product</p>
                  <h3 className="mt-3 text-3xl font-black text-white">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{desc}</p>
                  <div className="mt-8 h-2 rounded-full bg-blue-600" />
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-white">
                  Business Automation Index
                </p>
                <p className="text-sm font-bold text-blue-300">94%</p>
              </div>

              <div className="mt-4 h-3 rounded-full bg-white/10">
                <div className="h-3 w-[94%] rounded-full bg-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}