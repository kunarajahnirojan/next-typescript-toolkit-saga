import * as React from 'react';

import { Footer, Header } from '@/components/base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <React.Fragment>
      <Header />
      <div className="min-h-full flex flex-col bg-white md:container mx-auto">
        <main className="flex">{props?.children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
}