import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CareerQuestline from "@/components/CareerQuestline";

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-primary selection:bg-cyber-purple/30 selection:text-cyber-cyan overflow-hidden">
      <Navbar />
      <Hero />
      <CareerQuestline />
    </main>
  );
}
