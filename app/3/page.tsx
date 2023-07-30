import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#3 – Outernet Personality Quiz',
};

export default function Question3Page() {

  return <>
    <div className="md:h-screen bg-lime-700 text-white">
      <p className="text-3xl">
        #3: your group is discussing project plans but you can't seem to get to a consensus...
      </p>
    </div>

    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={3}
      question="What are you doing?"
      answers={[
        "wait and see what happens",
        "interject your own awesome idea",
        "take charge and present a gameplan with everyone's ideas",
      ]}
      superlatives={[
        { index: 2, id: 'navigator', multiplier: 2 },
      ]}
      attributes={[
        // { index: 0, id: 'id', multiplier: 1 },
      ]}
    />
  </>;
}
