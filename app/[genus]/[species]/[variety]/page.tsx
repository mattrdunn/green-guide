import { notFound } from 'next/navigation';
import { connectToDatabase } from '@/lib/db/connect';
import { PlantModel } from '@/lib/db/models/Plant';
import SpeciesClient from '../components/SpeciesClient';

export default async function SpeciesVarietyPage({
    params,
}: {
    params: Promise<{ genus: string; species: string; variety: string }>;
}) {
    const { genus, species, variety } = await params;

    await connectToDatabase();

    const exists = await PlantModel.exists({
        genus: genus.toLowerCase(),
        species: species.toLowerCase(),
        variety: variety.toLowerCase(),
    });

    if (!exists) {
        notFound();
    }

    return <SpeciesClient genus={genus} species={species} variety={variety} />;
}
