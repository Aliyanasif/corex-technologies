import Link from "next/link";
import Container from "@/components/shared/Container";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="rounded-[40px] bg-slate-950 p-16 text-center">
          <h2 className="text-5xl font-black text-white">
            Let's build smarter businesses.
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Start your digital transformation journey with CoreX Technologies.
          </p>

          <Link
            href="/contact"
            className="inline-flex mt-10 rounded-full bg-blue-600 px-8 py-4 text-white font-bold"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}