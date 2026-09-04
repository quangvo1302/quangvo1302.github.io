import { TaxonomyOverviewPage, taxonomyOverviewMetadata } from "@/components/TaxonomyPages";

export const metadata = taxonomyOverviewMetadata("industries");

export default function IndustriesOverviewRoute() {
  return <TaxonomyOverviewPage taxonomy="industries" />;
}
