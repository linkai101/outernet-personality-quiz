import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#9 – Outernet Personality Quiz',
};

export default function Question5Page() {
  return <>
    <div className="md:h-screen bg-blue-700 text-white">
      <p className="text-3xl">
        #9: you run into a bear... 🧸
      </p>
    </div>


    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={9}
      question="What do you do?"
      answers={[
        "run 🏃‍♂️",
        "play dead 💀",
        "fight the bear 🥊",
        "take a picture 📸",
        "ask the bear to be your friend 🥺"
      ]}
      superlatives={[
        { index: 3, id: 'nature-enthusiast', multiplier: 1.2 },
        { index: 4, id: 'wild-card', multiplier: 1.1 },
      ]}
      attributes={[
        { index: 1, id: 'chill', multiplier: 1.1 },
        { index: 3, id: 'goofy', multiplier: 1.3 },
        { index: 4, id: 'goofy', multiplier: 1.5 },
      ]}
    />
  </>;
}
