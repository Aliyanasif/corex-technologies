import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Digital Marketing Specialist",
  "Sales Executive",
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-40">
        <section className="pb-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Careers
              </p>

              <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
                Build the future of business software with CoreX.
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                CoreX Technologies is building ERP and AI-powered systems for
                modern businesses. Future hiring will focus on product,
                engineering, design, marketing, and sales.
              </p>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {roles.map((role) => (
                <div
                  key={role}
                  className="rounded-[32px] border border-slate-200 bg-slate-50 p-8"
                >
                  <h2 className="text-2xl font-black text-slate-950">
                    {role}
                  </h2>

                  <p className="mt-4 text-slate-600">
                    Future opportunity at CoreX Technologies.
                  </p>
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