import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#7 – Outernet Personality Quiz',
};

export default function Question5Page() {
  return <>
    <div className="md:h-screen bg-cyan-700 text-white">
      <p className="text-3xl">
        #7: wakey wakey its time for <s>school</s> day 2...
      </p>
    </div>


    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={7}
      question="How many hours of sleep did you get last night?"
      answers={[
        "0-2 hours",
        "3-4 hours",
        "5-7 hours",
        "even more?!"
      ]}
      superlatives={[
        { index: 0, id: 'try-hard', multiplier: 1.5 },
        { index: 1, id: 'try-hard', multiplier: 1.2 },
        { index: 2, id: 'normal-sleeper', multiplier: 1.5 },
        { index: 3, id: 'partier', multiplier: 1.5 },
      ]}
      attributes={[
        { index: 2, id: 'chill', multiplier: 1.1 },
        { index: 3, id: 'chill', multiplier: 1.2 },
      ]}
    />
  </>;
}
