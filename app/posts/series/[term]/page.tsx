import { notFound } from "next/navigation";
import {
  TaxonomyTermPage,
  taxonomyTermMetadata
} from "@/components/TaxonomyPages";
import { getTermsForTaxonomy } from "@/data/posts";

export const dynamicParams = false;

type TermPageProps = {
  params: Promise<{ term: string }>;
};

export function generateStaticParams() {
  return getTermsForTaxonomy("series").map((item) => ({ term: item.term }));
}

export async function generateMetadata({ params }: TermPageProps) {
  const { term } = await params;
  return taxonomyTermMetadata("series", term);
}

export default async function SeriesTermRoute({ params }: TermPageProps) {
  const { term } = await params;
  const exists = getTermsForTaxonomy("series").some((item) => item.term === term);
  if (!exists) notFound();
  return <TaxonomyTermPage taxonomy="series" term={term} />;
}
