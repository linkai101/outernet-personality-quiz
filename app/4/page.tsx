import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#4 – Outernet Personality Quiz',
};

export default function Question4Page() {

  return <>
    <div className="md:h-screen bg-green-700 text-white">
      <p className="text-3xl">
        #4: it's late (~11pm) on day 1... 🌃
      </p>
    </div>

    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={4}
      question="What are you doing?"
      answers={[
        "grind on the project with your team",
        "join the rave in the barn",
        "go to sleep so you're more energized and ready to work tomorrow",
        "some other weird thing 🤷"
      ]}
      superlatives={[
        { index: 0, id: 'try-hard', multiplier: 1.1 },
        { index: 1, id: 'partier', multiplier: 1.5 },
        { index: 2, id: 'normal-sleeper', multiplier: 1.5 },
        { index: 3, id: 'wild-card', multiplier: 1.5 },
      ]}
      attributes={[
        { index: 0, id: 'loyal', multiplier: 1.1 },
        { index: 1, id: 'extrovert', multiplier: 1.3 },
        { index: 1, id: 'chill', multiplier: 1.2 },
      ]}
    />
  </>;
}
