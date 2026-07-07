import { notFound } from 'next/navigation';
import { fetchGenusBySlug, fetchSpeciesByGenus } from '@/lib/db/genus';
import GenusClient from './components/GenusClient';

// Always render against the live genus/plants collections, matching the
// species page's underlying data source.
export const dynamic = 'force-dynamic';

export default async function GenusPage({
    params,
}: {
    params: Promise<{ genus: string }>;
}) {
    const { genus } = await params;

    const [genusDoc, species] = await Promise.all([
        fetchGenusBySlug(genus),
        fetchSpeciesByGenus(genus).catch(() => []),
    ]);

    if (!genusDoc) {
        notFound();
    }

    return <GenusClient genus={genusDoc} species={species} />;
}
