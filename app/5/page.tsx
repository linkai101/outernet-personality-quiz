import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#5 – Outernet Personality Quiz',
};

export default function Question5Page() {

  return <>
    <div className="md:h-screen bg-emerald-700 text-white">
      <p className="text-3xl">
        #5: at dinner, you run into that person you sat next to on the bus...
      </p>
    </div>

    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={5}
      question="What is their name? 🤔"
      answers={[
        "Shriya",
        "Mara",
        "Sarah",
        "Larry",
        "call them by the wrong name and hope they don't notice",
        "awkwardly say hi and keep walking",
        "say you're bad at names and ask them for their name again",
        "Genevieve",
      ]}
      superlatives={[
        { index: 0, id: 'name-forgetter', multiplier: 3 },
        { index: 1, id: 'name-forgetter', multiplier: 1.5 },
        { index: 3, id: 'name-forgetter', multiplier: 5 },
        { index: 4, id: 'name-forgetter', multiplier: 5 },
        { index: 5, id: 'name-forgetter', multiplier: 1.5 },
        { index: 6, id: 'name-forgetter', multiplier: 1.2 },
        { index: 7, id: 'name-forgetter', multiplier: 5 },
      ]}
      attributes={[
        // { index: 0, id: 'id', multiplier: 1 },
      ]}
    />
  </>;
}
