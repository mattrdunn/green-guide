import { notFound } from 'next/navigation';
import { connectToDatabase } from '@/lib/db/connect';
import { PlantModel } from '@/lib/db/models/Plant';
import SpeciesClient from './components/SpeciesClient';

export default async function SpeciesPage({
    params,
}: {
    params: Promise<{ genus: string; species: string }>;
}) {
    const { genus, species } = await params;

    await connectToDatabase();

    const exists = await PlantModel.exists({
        genus: genus.toLowerCase(),
        species: species.toLowerCase(),
    });

    if (!exists) {
        notFound();
    }

    return <SpeciesClient genus={genus} species={species} />;
}
