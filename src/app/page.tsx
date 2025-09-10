import { HomePreloader } from "@/components/preloader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <HomePreloader />
      <h1 className="text-4xl font-bold">Home for game lovers</h1>
    </main>
  );
}
