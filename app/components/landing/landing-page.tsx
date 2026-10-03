import LandingHeader from "./landing-header";
import {
  FeatureSection,
  FaqSection,
  HeroSection,
  HowItWorksSection,
  InsightSection,
  AppShowcaseSection,
  LandingFooter,
  ProfileSection,
  StatsSection,
} from "./landing-sections";

export default function LandingPage() {
  return (
    <div className="landing-react">
      <LandingHeader />
      <main>
        <HeroSection />
        <FeatureSection />
        <ProfileSection />
        <InsightSection />
        <AppShowcaseSection />
        <StatsSection />
        <HowItWorksSection />
        <FaqSection />
      </main>
      <LandingFooter />
    </div>
  );
}
