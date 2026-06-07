import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-40">
        <section className="pb-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                Contact
              </p>

              <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
                Let&apos;s build smarter systems together.
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                Contact CoreX Technologies for ERP systems, AI automation,
                business software, or product partnership discussions.
              </p>
            </div>

            <div className="mx-auto mt-20 grid max-w-6xl gap-8 lg:grid-cols-2">
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10">
                <h2 className="text-3xl font-black text-slate-950">
                  Contact Details
                </h2>

                <div className="mt-8 space-y-6 text-slate-600">
                  <p>
                    <span className="font-bold text-slate-950">Email:</span>{" "}
                    hello@corextech.info
                  </p>

                  <p>
                    <span className="font-bold text-slate-950">Website:</span>{" "}
                    corextech.info
                  </p>

                  <p>
                    <span className="font-bold text-slate-950">Location:</span>{" "}
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <form className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
                <div className="grid gap-5">
                  <input
                    placeholder="Your Name"
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-600"
                  />

                  <input
                    placeholder="Email Address"
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-600"
                  />

                  <input
                    placeholder="Company / Organization"
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-600"
                  />

                  <textarea
                    placeholder="Tell us about your project"
                    rows={6}
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-600"
                  />

                  <button
                    type="button"
                    className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}