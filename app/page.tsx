import { connectToDatabase } from '@/lib/db/connect';
import { PlantModel } from '@/lib/db/models/Plant';
import HomeClient from './components/home/HomeClient';
import type { PlantCardData } from './components/home/types';

// Always render against the live plants collection, matching the species page.
export const dynamic = 'force-dynamic';

async function getPlants(): Promise<PlantCardData[]> {
    try {
        await connectToDatabase();

        const docs = await PlantModel.find(
            {},
            {
                genus: 1,
                species: 1,
                commonNames: 1,
                images: 1,
                tags: 1,
                'vitals.light.value': 1,
                'vitals.difficulty.value': 1,
            },
        )
            .sort({ genus: 1, species: 1 })
            .lean();

        return docs
            .map((doc) => ({
                genus: doc.genus,
                species: doc.species,
                commonNames: doc.commonNames ?? [],
                imageKey: doc.images?.[0]?.url ?? null,
                imageAlt: doc.images?.[0]?.alt ?? null,
                tags: doc.tags ?? [],
                light: doc.vitals?.light?.value ?? '—',
                care: doc.vitals?.difficulty?.value ?? '—',
            }))
            .sort(
                (a, b) =>
                    Number(b.imageKey !== null) - Number(a.imageKey !== null),
            );
    } catch (error) {
        // The home page must stay browsable when the database is unreachable.
        console.error('Failed to load plants for the home page', error);
        return [];
    }
}

export default async function Home() {
    const plants = await getPlants();

    return <HomeClient plants={plants} />;
}
