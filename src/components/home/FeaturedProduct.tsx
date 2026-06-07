import Container from "@/components/shared/Container";
import Link from "next/link";

export default function FeaturedProduct() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 items-center lg:grid-cols-2">

          <div>
            <p className="text-blue-600 font-bold uppercase tracking-[0.25em]">
              Featured Product
            </p>

            <h2 className="mt-5 text-5xl font-black text-slate-950">
              AttendX
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Attendance management and payroll automation platform
              built to help businesses eliminate manual tracking,
              reduce payroll errors and improve workforce productivity.
            </p>

            <ul className="mt-8 space-y-4">
              <li>✓ Attendance Tracking</li>
              <li>✓ Payroll Automation</li>
              <li>✓ Employee Management</li>
              <li>✓ Reports & Analytics</li>
            </ul>

            <Link
              href="#"
              className="inline-flex mt-10 rounded-full bg-blue-600 px-8 py-4 text-white font-bold"
            >
              Learn More
            </Link>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-xl">
            <div className="rounded-[24px] bg-slate-950 p-8">

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
                  <p className="text-slate-400 text-sm">
                    Employees
                  </p>

                  <h3 className="text-white text-3xl font-black mt-2">
                    128
                  </h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
                  <p className="text-slate-400 text-sm">
                    Present Today
                  </p>

                  <h3 className="text-white text-3xl font-black mt-2">
                    94%
                  </h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
                  <p className="text-slate-400 text-sm">
                    Payroll Ready
                  </p>

                  <h3 className="text-white text-3xl font-black mt-2">
                    Yes
                  </h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-5 border border-white/10">
                  <p className="text-slate-400 text-sm">
                    Requests
                  </p>

                  <h3 className="text-white text-3xl font-black mt-2">
                    21
                  </h3>
                </div>

              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}