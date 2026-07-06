import { fetchPestSummaries } from '@/lib/db/pests';
import PestsClient from './components/PestsClient';
import type { PestSummaryData } from './types';

// Always render against the live pests collection, matching the home page.
export const dynamic = 'force-dynamic';

async function getPests(): Promise<PestSummaryData[]> {
    try {
        return await fetchPestSummaries();
    } catch (error) {
        // The hub must stay browsable when the database is unreachable.
        console.error('Failed to load pests for the pests hub', error);
        return [];
    }
}

export default async function PestsPage() {
    const pests = await getPests();

    return <PestsClient pests={pests} />;
}
