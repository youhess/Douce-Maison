import { SiteChrome } from '@/components/SiteChrome';
import { HeroSliderSection } from '@/components/HeroSliderSection';
import { CollectionsRecommendationsSection } from '@/components/CollectionsRecommendationsSection';
import { WeeklyPicksProductSliderSection } from '@/components/WeeklyPicksProductSliderSection';
import { FeaturedCollectionSplitSection } from '@/components/FeaturedCollectionSplitSection';
import { LoyaltyProgramSection } from '@/components/LoyaltyProgramSection';
import { InstagramFeedSection } from '@/components/InstagramFeedSection';

function App() {
  return (
    <SiteChrome>
      <HeroSliderSection />
      <CollectionsRecommendationsSection />
      <WeeklyPicksProductSliderSection />
      <FeaturedCollectionSplitSection />
      <LoyaltyProgramSection />
      <InstagramFeedSection />
    </SiteChrome>
  );
}

export default App;
