import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#8 – Outernet Personality Quiz',
};

export default function Question5Page() {
  return <>
    <div className="md:h-screen bg-sky-700 text-white">
      <p className="text-3xl">
        #8: it's raining hard and you are the only person holding an umbrella...
      </p>
    </div>


    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={8}
      question="What do you do?"
      answers={[
        "walk swiftly past the others back to your tent",
        "offer to give your umbrella to your friends",
        "share your umbrella with some people beside you",
        "put your umbrella back into your backpack and run in the rain"
      ]}
      superlatives={[
        { index: 0, id: 'lone-wolf', multiplier: 1.2 },
        { index: 3, id: 'wild-card', multiplier: 1.4 },
        { index: 3, id: 'nature-enthusiast', multiplier: 1.5 },
      ]}
      attributes={[
        { index: 1, id: 'loyal', multiplier: 1.5 },
        { index: 1, id: 'nice', multiplier: 1.4 },
        { index: 1, id: 'chill', multiplier: 1.4 },
        { index: 2, id: 'nice', multiplier: 1.2 },
        { index: 2, id: 'chill', multiplier: 1.2 },
      ]}
    />
  </>;
}
