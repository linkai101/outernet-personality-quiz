import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Results – Outernet Personality Quiz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    {children}
  </>;
}