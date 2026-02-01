import {
  ComparisonSection,
  DestinationsSection,
  Hero,
  SeasonsSection,
  TipsSection,
} from "@/components/sections";

export function HomePage() {
  return (
    <>
      <Hero />
      <DestinationsSection />
      <ComparisonSection />
      <SeasonsSection />
      <TipsSection />
    </>
  );
}
