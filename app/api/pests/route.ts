import { NextResponse } from 'next/server';
import { fetchPestSummaries } from '@/lib/db/pests';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        return NextResponse.json(await fetchPestSummaries());
    } catch (error) {
        console.error('Failed to load pest summaries', error);
        return NextResponse.json(
            { error: 'Pests unavailable' },
            { status: 503 },
        );
    }
}
