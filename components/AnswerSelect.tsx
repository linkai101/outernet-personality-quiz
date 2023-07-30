"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const lastQuestionIndex = 10;

interface AnswerSelectProps {
  className?: string;
  questionIndex: number;
  question: string;
  answers: string[];
  superlatives?: {
    index: number;
    id: string;
    multiplier: number;
  }[];
  attributes?: {
    index: number;
    id: string;
    multiplier: number;
  }[];
}

export default function AnswerSelect({ className, questionIndex, question, answers, superlatives, attributes }: AnswerSelectProps) {
  const [selected, setSelected] = useState<number|null>(null);

  useEffect(() => {
    // load from localStorage
    const saved = JSON.parse(localStorage.getItem('answers') || '{}');
    setSelected(saved[questionIndex] || null);
  }, [questionIndex]);

  function handleSelect(index:number) {
    setSelected(index);

    // save to localStorage
    const savedAnswers = JSON.parse(localStorage.getItem('answers') || '{}');
    savedAnswers[questionIndex] = index;
    localStorage.setItem('answers', JSON.stringify(savedAnswers));

    const savedSuperlatives = JSON.parse(localStorage.getItem('superlatives') || '{}');
    const appliedSuperlatives = superlatives?.filter(s => s.index === index);
    savedSuperlatives[questionIndex] = appliedSuperlatives;
    localStorage.setItem('superlatives', JSON.stringify(savedSuperlatives));

    const savedAttributes = JSON.parse(localStorage.getItem('attributes') || '{}');
    const appliedAttributes = attributes?.filter(a => a.index === index);
    savedAttributes[questionIndex] = appliedAttributes;
    localStorage.setItem('attributes', JSON.stringify(savedAttributes));
  };

  return (
    <div className={`
      p-6 text-theme-onBackground bg-theme-background/50 backdrop-blur-sm shadow-lg rounded-xl
      ${className}
    `}>
      <p className="text-base font-semibold">
        {question}
      </p>

      <div className="flex flex-col gap-2 text-sm mt-3">
        {answers.map((answer, i) =>
          <button className={`px-3 py-1.5 text-left rounded-lg ${selected===i ? 'outline outline-[3px] outline-red-500 bg-neutral-200' : 'bg-neutral-200/75'}`} onClick={() => handleSelect(i)} key={answer}>
            {answer}
          </button>
        )}
      </div>

      <Link href={`/${lastQuestionIndex<questionIndex+1 ? 'results' : questionIndex+1}`}>
        <button className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-red-500 text-white mt-4">
          Next
        </button>
      </Link>
    </div>
  );
}
