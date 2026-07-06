import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db/connect';
import { PlantModel } from '@/lib/db/models/Plant';

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ genus: string; species: string }> },
) {
    const { genus, species } = await params;

    await connectToDatabase();

    const plant = await PlantModel.findOne({
        genus: genus.toLowerCase(),
        species: species.toLowerCase(),
        variety: null,
    }).lean();

    if (!plant) {
        return NextResponse.json({ error: 'Plant not found' }, { status: 404 });
    }

    return NextResponse.json(plant);
}
