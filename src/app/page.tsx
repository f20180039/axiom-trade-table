export default function Home() {
  return (
    <main className="p-10 bg-background min-h-screen">
      <div className="bg-card border border-border p-6 rounded-lg max-w-sm">
        <h1 className="text-axiom-green text-xl font-bold">
          Axiom Theme Loaded
        </h1>
        <p className="text-text-muted mt-2">
          If this text is gray and the background is dark, Step 1 is successful.
        </p>
        <button className="mt-4 bg-axiom-blue px-4 py-2 rounded text-sm hover:opacity-80 transition-fast">
          Hover Test
        </button>
      </div>
    </main>
  );
}
