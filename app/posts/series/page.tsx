import { TaxonomyOverviewPage, taxonomyOverviewMetadata } from "@/components/TaxonomyPages";

export const metadata = taxonomyOverviewMetadata("series");

export default function SeriesOverviewRoute() {
  return <TaxonomyOverviewPage taxonomy="series" />;
}
