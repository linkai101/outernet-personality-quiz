import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#1 – Outernet Personality Quiz',
};

export default function Question1Page() {

  return <>
    <div className="md:h-screen bg-amber-700 text-white">
      <p className="text-3xl">
        #1: the opening cermony is over and everyone&apos;s looking for a group...
      </p>
    </div>

    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={1}
      question="What do you do?"
      answers={[
        'work by yourself',
        'join the 2 friends you met at the station/airport',
        'join a big group you see forming in the distance',
        'sit there and wait for someone to approach you',
        'wander around and see who you bump into'
      ]}
      superlatives={[
        { index: 0, id: 'lone-wolf', multiplier: 1.5 },
        { index: 2, id: 'connection-maker', multiplier: 1.5 },
        { index: 4, id: 'wild-card', multiplier: 1.3 },
      ]}
      attributes={[
        { index: 0, id: 'introvert', multiplier: 1.2 },
        { index: 1, id: 'loyal', multiplier: 1.5 },
        { index: 2, id: 'extrovert', multiplier: 1.5 },
        { index: 3, id: 'introvert', multiplier: 1.5 },
        { index: 4, id: 'chill', multiplier: 1.1 },
      ]}
    />
  </>;
}
