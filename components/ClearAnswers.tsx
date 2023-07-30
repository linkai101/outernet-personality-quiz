"use client";

export default function ClearAnswers({ className }: { className?: string }) {
  return (
    <button
      className={`px-3 py-1.5 text-lg font-bold rounded-lg bg-red-600/75 text-white mt-2 ${className}`}
      onClick={() => {
        localStorage.removeItem('answers');
        localStorage.removeItem('superlatives');
        localStorage.removeItem('attributes');
        alert('answers cleared');
      }}
    >
      clear answers
    </button>
  );
}
