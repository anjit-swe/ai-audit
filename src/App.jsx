import { useState } from "react";

export default function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const analyze = () => {
    if (!url) return;

    const score = Math.floor(Math.random() * 40) + 60;

    const issues = [
      "No structured data (Schema missing)",
      "No FAQ section",
      "Weak heading structure (H1/H2)",
      "Missing meta description",
      "Content not optimized for AI readability",
    ];

    setResult({ score, issues });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-[400px]">
        <h1 className="text-xl font-bold mb-4 text-center">
          AI Readiness Audit
        </h1>

        <input
          type="text"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <button
          onClick={analyze}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Analyze
        </button>

        {result && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">
              Score: {result.score}/100
            </h2>

            <ul className="mt-2 list-disc pl-5 text-sm">
              {result.issues.map((issue, i) => (
                <li key={i}>{issue}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}