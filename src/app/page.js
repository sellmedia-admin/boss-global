import DrivingInnovation from "@/components/Landing/DrivingInnovation";
import HeroSection from "@/components/Landing/Hero";
import UnleashIdeas from "@/components/Landing/UnleashIdeas";

export default function Home() {
  return (
    <div className="font-outfit">
      <main>
        <HeroSection />
        <DrivingInnovation />
        <UnleashIdeas />
      </main>
    </div>
  );
}
