import Link from "next/link";
import Container from "@/components/shared/Container";

const nav = ["Products", "Solutions", "Industries", "Blog", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
              C<span className="text-blue-600">X</span>
            </div>
            <div>
              <p className="text-sm font-black tracking-wide text-slate-950">
                COREX TECHNOLOGIES
              </p>
              <p className="text-xs text-slate-500">
                Where Businesses Work Smarter
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {item}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
                className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 md:inline-flex"          >
            Book Demo
          </Link>
        </div>
      </Container>
    </header>
  );
}