import InputCard from "@/components/InputCard";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-6 pt-32 pb-12 min-h-screen flex flex-col items-center">
        {/* ---- Hero Section ---- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[rgb(var(--text-primary))] mb-4 font-heading">
            Keyword Insight Engine
          </h1>

          <p className="max-w-2xl text-lg text-[rgb(var(--text-secondary))] mx-auto">
            Instantly extract and analyze the most critical keywords from any job description.
            Know exactly what skills to highlight on your resume before you apply.
          </p>
        </div>

        {/* ---- Main Input Card ---- */}
        <InputCard />
      </main>
    </>
  );
}

