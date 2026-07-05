import { fetchPlantSummaries } from '@/lib/db/plantSummaries';
import HomeClient from './components/home/HomeClient';
import type { PlantCardData } from './components/home/types';

// Always render against the live plants collection, matching the species page.
export const dynamic = 'force-dynamic';

async function getPlants(): Promise<PlantCardData[]> {
    try {
        return await fetchPlantSummaries();
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
