import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

type Props = {
  children: React.ReactNode;
};

export default function ExploreLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <div className="hidden border-r border-border bg-card md:block md:w-[220px] lg:w-[280px]">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col h-dvh">
        <Header />
        <main className="flex-1 overflow-auto" id="main">
          <div className="container mx-auto max-w-6xl p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
