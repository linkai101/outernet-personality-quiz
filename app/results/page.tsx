"use client";
import { useState, useEffect } from 'react';

export default function Question5Page() {
  const [answers, setAnswers] = useState<any>(null);
  const [superlatives, setSuperlatives] = useState<any>(null);
  const [attributes, setAttributes] = useState<any>(null);

  useEffect(() => {
    const answersStored = JSON.parse(localStorage.getItem('answers') || '{}');
    setAnswers(answersStored);
    const superlativesStored = JSON.parse(localStorage.getItem('superlatives') || '{}');
    const attributesStored = JSON.parse(localStorage.getItem('attributes') || '{}');

    // process superlatives
    const superlativesFlat = Object.values(superlativesStored).flat();
    let superlativesCalculated = {}
    superlativesFlat.forEach((s) => {
      // @ts-ignore
      if (superlativesCalculated[s.id]) {
      // @ts-ignore
        superlativesCalculated[s.id] = superlativesCalculated[s.id] * s.multiplier;
      } else {
      // @ts-ignore
        superlativesCalculated[s.id] = s.multiplier;
      }
    });
    setSuperlatives(superlativesCalculated);

    // process attributes
    const attributesFlat = Object.values(attributesStored).flat();
    let attributesCalculated = {}
    attributesFlat.forEach((a) => {
      // @ts-ignore
      if (attributesCalculated[a.id]) {
      // @ts-ignore
        attributesCalculated[a.id] = attributesCalculated[a.id] * a.multiplier;
      } else {
      // @ts-ignore
        attributesCalculated[a.id] = a.multiplier;
      }
    });
    setAttributes(attributesCalculated);

  }, []);

  return <>
    <div className="md:h-screen">
      <h1 className="text-3xl">
        results
      </h1>

      <p className="mt-3">
        You are the: {superlatives && Object.keys(superlatives).reduce((a, b) => superlatives[a] > superlatives[b] ? a : b)}
      </p>

      <ul className="mt-6">
        {superlatives && Object.entries(superlatives).map(([k,v]) =>
          <li key={k}>{k}: {v.toFixed(2)}</li>
        )}
      </ul>

      <ul className="mt-6">
        {attributes && Object.entries(attributes).map(([k,v]) =>
          <li key={k}>{k}: {v.toFixed(2)}</li>
        )}
      </ul>
    </div>
  </>;
}
