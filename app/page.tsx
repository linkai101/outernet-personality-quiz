import Link from 'next/link';

import ClearAnswers from 'components/ClearAnswers';

export default function HomePage() {
  return <>
    <div className="md:h-screen">
      <h1 className="text-3xl">
        outernet personality quiz
      </h1>

      <Link href="/0">
        <button className="px-3 py-1.5 text-lg font-bold rounded-lg bg-neutral-200/75 mt-2">
          start
        </button>
      </Link>

      <ClearAnswers className="ml-3"/>
    </div>
  </>;
}