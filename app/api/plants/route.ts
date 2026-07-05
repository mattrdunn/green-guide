import { NextResponse } from 'next/server';
import { fetchPlantSummaries } from '@/lib/db/plantSummaries';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        return NextResponse.json(await fetchPlantSummaries());
    } catch (error) {
        console.error('Failed to load plant summaries', error);
        return NextResponse.json(
            { error: 'Plants unavailable' },
            { status: 503 },
        );
    }
}
