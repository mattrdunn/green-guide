import { notFound } from 'next/navigation';
import SpeciesClient from './components/SpeciesClient';

export default async function SpeciesPage({
    params,
}: {
    params: Promise<{ genus: string; species: string }>;
}) {
    const { genus, species } = await params;

    if (genus !== 'monstera' || species !== 'deliciosa') {
        notFound();
    }

    return <SpeciesClient genus={genus} species={species} />;
}
