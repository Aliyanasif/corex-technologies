import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-40">

        <section className="pb-24">
          <Container>

            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                About CoreX
              </p>

              <h1 className="mt-5 text-5xl md:text-7xl font-black text-slate-950">
                Building the future of business software.
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                CoreX Technologies develops intelligent ERP systems and AI-powered
                business solutions that help organizations automate operations,
                improve productivity and scale efficiently.
              </p>
            </div>

          </Container>
        </section>

        <section className="py-24 bg-slate-50">
          <Container>

            <div className="grid gap-10 lg:grid-cols-2">

              <div className="rounded-[32px] bg-white border border-slate-200 p-10">
                <h2 className="text-4xl font-black text-slate-950">
                  Our Mission
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  To build intelligent software solutions that simplify business
                  operations, automate workflows and help organizations scale
                  efficiently.
                </p>
              </div>

              <div className="rounded-[32px] bg-white border border-slate-200 p-10">
                <h2 className="text-4xl font-black text-slate-950">
                  Our Vision
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  To become a globally recognized ERP and AI software ecosystem
                  powering businesses across every industry.
                </p>
              </div>

            </div>

          </Container>
        </section>

        <section className="py-24 bg-white">
          <Container>

            <div className="text-center">
              <h2 className="text-5xl font-black text-slate-950">
                Core Values
              </h2>
            </div>

            <div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-5">

              {[
                "Innovation",
                "Simplicity",
                "Reliability",
                "Security",
                "Scalability",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[28px] border border-slate-200 p-8 text-center"
                >
                  <h3 className="text-xl font-black text-slate-950">
                    {item}
                  </h3>
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