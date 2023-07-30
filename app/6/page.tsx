import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#6 – Outernet Personality Quiz',
};

export default function Question5Page() {
  return <>
    <div className="md:h-screen bg-teal-700 text-white">
      <p className="text-3xl">
        #6: you walk by a nice view of the campground...
      </p>
    </div>


    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={6}
      question="What do you do?"
      answers={[
        "take an aesthetic picture",
        "keep on walking",
        "stare into the distance",
        "bring your friends to watch the view together"
      ]}
      superlatives={[
        { index: 0, id: 'nature-enthusiast', multiplier: 1.3 },
        { index: 2, id: 'nature-enthusiast', multiplier: 1.3 },
        { index: 3, id: 'nature-enthusiast', multiplier: 3 },
      ]}
      attributes={[
        { index: 2, id: 'chill', multiplier: 1.2 },
        { index: 3, id: 'extrovert', multiplier: 1.3 },
      ]}
    />
  </>;
}
