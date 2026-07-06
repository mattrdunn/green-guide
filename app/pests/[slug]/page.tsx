import { notFound } from 'next/navigation';
import { fetchPestBySlug } from '@/lib/db/pests';
import { fetchPlantSummaries } from '@/lib/db/plantSummaries';
import PestDetail from '../components/PestDetail';

export default async function PestDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const [pest, plants] = await Promise.all([
        fetchPestBySlug(slug),
        // Resolves which "Commonly affects" chips can link to a live species
        // profile vs. render as plain reference-only text.
        fetchPlantSummaries().catch(() => []),
    ]);

    if (!pest) {
        notFound();
    }

    return <PestDetail pest={pest} plants={plants} />;
}
