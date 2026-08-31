import { TaxonomyOverviewPage, taxonomyOverviewMetadata } from "@/components/TaxonomyPages";

export const metadata = taxonomyOverviewMetadata("vendors");

export default function VendorsOverviewRoute() {
  return <TaxonomyOverviewPage taxonomy="vendors" />;
}
