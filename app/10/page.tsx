import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#10 – Outernet Personality Quiz',
};

export default function Question5Page() {
  return <>
    <div className="md:h-screen bg-indigo-700 text-white">
      <p className="text-3xl">
        #10: it's late at night and your friend group wants to go to the bonfire to roast smores...
      </p>
    </div>


    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={10}
      question="What do you do?"
      answers={[
        "follow the group to the bonfire",
        "lead your group to the bonfire",
        "release your anger by chopping wood 🪵",
        "stay back and work on the project",
      ]}
      superlatives={[
        { index: 0, id: 'wild-card', multiplier: 1.2 },
        { index: 1, id: 'navigator', multiplier: 1.5 },
        { index: 2, id: 'wild-card', multiplier: 1.5 },
        { index: 3, id: 'lone-wolf', multiplier: 1.2 },
        { index: 3, id: 'try-hard', multiplier: 1.5 },
      ]}
      attributes={[
        { index: 0, id: 'chill', multiplier: 1.2 },
        { index: 0, id: 'loyal', multiplier: 1.2 },
        { index: 2, id: 'goofy', multiplier: 1.3 },
      ]}
    />
  </>;
}
