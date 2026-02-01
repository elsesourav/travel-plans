import {
  Hero,
  DestinationsSection,
  ComparisonSection,
  TipsSection,
  SeasonsSection,
} from "@/components/sections";

export function HomePage() {
  return (
    <>
      <Hero />
      <DestinationsSection />
      <ComparisonSection />
      <TipsSection />
      <SeasonsSection />
    </>
  );
}
