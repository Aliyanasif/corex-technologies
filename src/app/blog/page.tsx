import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

const posts = [
  {
    title: "What is ERP Software?",
    category: "ERP",
    read: "5 min read",
  },
  {
    title: "Benefits of AI Automation",
    category: "AI",
    read: "6 min read",
  },
  {
    title: "How AttendX Simplifies Payroll",
    category: "AttendX",
    read: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-40 pb-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Blog
            </p>

            <h1 className="mt-5 text-5xl md:text-7xl font-black text-slate-950">
              Insights, ERP & AI Automation
            </h1>
          </div>

          <div className="grid gap-6 mt-20 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="rounded-[32px] border border-slate-200 p-8 hover:shadow-xl transition"
              >
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                  {post.category}
                </span>

                <h2 className="mt-5 text-2xl font-black text-slate-950">
                  {post.title}
                </h2>

                <p className="mt-4 text-slate-500">
                  {post.read}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}