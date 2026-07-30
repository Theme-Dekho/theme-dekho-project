"use client";

export default function CategoryError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ padding: 80, textAlign: "center" }}>
      <h2 style={{ marginBottom: 8 }}>Something went wrong loading this category</h2>
      <button className="btn-filter" style={{ maxWidth: 200, margin: "16px auto" }} onClick={reset}>
        Try again
      </button>
    </div>
  );
}
