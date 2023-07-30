import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#2 – Outernet Personality Quiz',
};

export default function Question2Page() {

  return <>
    <div className="md:h-screen bg-yellow-700 text-white">
      <p className="text-3xl">
        #2: you board the shuttle from the station to outernet. you take the aisle seat next to a brit named Saruh 🙋🏻‍♀️, and everyone is settling in for the &gt;4 hour drive...
      </p>
    </div>

    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={2}
      question="What's your plan for the ride?"
      answers={[
        "start a convo with Saruh 🙋🏻‍♀️☕️",
        "get on your computer and get a head start on your project",
        "load some music and movies that you downloaded",
        "catch some z's 🥱",
      ]}
      superlatives={[
        { index: 0, id: 'connection-maker', multiplier: 1.2 },
        { index: 1, id: 'try-hard', multiplier: 1.5 },
        { index: 3, id: 'normal-sleeper', multiplier: 1.1 },
      ]}
      attributes={[
        { index: 0, id: 'extrovert', multiplier: 1.1 },
        { index: 1, id: 'on-the-grind', multiplier: 1.5 },
        { index: 2, id: 'chill', multiplier: 1.3 },
        { index: 3, id: 'chill', multiplier: 1.2 },
      ]}
    />
  </>;
}
