import { TaxonomyOverviewPage, taxonomyOverviewMetadata } from "@/components/TaxonomyPages";

export const metadata = taxonomyOverviewMetadata("pillars");

export default function PillarsOverviewRoute() {
  return <TaxonomyOverviewPage taxonomy="pillars" />;
}
