import { Footer, Header } from '@/components/base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <div className="bg-white">
      <Header />

      <main className="flex">{props.children}</main>

      <Footer />
    </div>
  );
}
