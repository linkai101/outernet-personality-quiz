import type { Metadata } from 'next';

import AnswerSelect from 'components/AnswerSelect';

export const metadata: Metadata = {
  title: '#0 – Outernet Personality Quiz',
};

export default function Question0Page() {

  return <>
    <div className="md:h-screen bg-orange-800 text-white">
      <p className="text-3xl">
        #0: welcome to outernet! time to pick a tent...
      </p>
    </div>

    <AnswerSelect
      className="md:w-[22rem] md:fixed md:bottom-4 md:right-4"
      questionIndex={0}
      question="Which tent would you pick? 🏕️"
      answers={[
        '2 person tent',
        '4 person tent',
        '6-8 person tent',
        'your own tent',
      ]}
      superlatives={[
        { index: 2, id: 'connection-maker', multiplier: 1.5 },
        { index: 3, id: 'lone-wolf', multiplier: 1.2 },
      ]}
      attributes={[
        { index: 1, id: 'extrovert', multiplier: 1.1 },
        { index: 2, id: 'extrovert', multiplier: 1.5 },
        { index: 3, id: 'introvert', multiplier: 1.5 },
      ]}
    />
  </>;
}
