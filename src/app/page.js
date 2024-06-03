import DrivingInnovation from "@/components/Landing/DrivingInnovation";
import HeroSection from "@/components/Landing/Hero";
import Partnership from "@/components/Landing/Partnership";
import UnleashIdeas from "@/components/Landing/UnleashIdeas";

export default function Home() {
  return (
    <div className="font-outfit">
      <main>
        <HeroSection />
        <DrivingInnovation />
        <UnleashIdeas />
        <Partnership />
      </main>
    </div>
  );
}
