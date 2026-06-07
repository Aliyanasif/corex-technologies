import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <Container>
        <div className="py-16">
          <h3 className="text-3xl font-black text-white">
            COREX TECHNOLOGIES
          </h3>

          <p className="mt-2 text-slate-400">
            Where Businesses Work Smarter
          </p>

          <div className="mt-10 text-slate-500">
            © 2026 CoreX Technologies. All Rights Reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}