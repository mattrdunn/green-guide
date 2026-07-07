import mongoose from 'mongoose';
import { connectToDatabase } from '../lib/db/connect';
import { PestModel, type Pest, type PestAffected } from '../lib/db/models/Pest';
import { plants } from './seed-plants';
import { spiderMites } from './seed/pests/spider-mites';
import { thrips } from './seed/pests/thrips';
import { aphids } from './seed/pests/aphids';
import { whiteflies } from './seed/pests/whiteflies';
import { scale } from './seed/pests/scale';
import { mealybugs } from './seed/pests/mealybugs';
import { fungusGnats } from './seed/pests/fungus-gnats';
import { slugsAndSnails } from './seed/pests/slugs-and-snails';
import { leafminers } from './seed/pests/leafminers';
import { caterpillars } from './seed/pests/caterpillars';
import { vineWeevil } from './seed/pests/vine-weevil';
import { rootAphids } from './seed/pests/root-aphids';
import { broadMites } from './seed/pests/broad-mites';
import { earwigs } from './seed/pests/earwigs';

process.loadEnvFile('.env.local');

const pestContent: Omit<Pest, 'createdAt' | 'updatedAt' | 'affects'>[] = [
    spiderMites,
    thrips,
    aphids,
    whiteflies,
    scale,
    mealybugs,
    fungusGnats,
    slugsAndSnails,
    leafminers,
    caterpillars,
    vineWeevil,
    rootAphids,
    broadMites,
    earwigs,
];

/**
 * Which species carry this pest is derived from each plant's own
 * `issues.pests[].pestSlug` back-reference rather than hand-maintained here,
 * so the "Commonly affects" list can never drift from the seeded content.
 */
function affectsFor(slug: string): PestAffected[] {
    return plants
        .filter((plant) =>
            plant.issues.pests.some((pest) => pest.pestSlug === slug),
        )
        .map((plant) => ({
            genus: plant.genus,
            species: plant.species,
            ...(plant.variety ? { variety: plant.variety } : {}),
        }));
}

async function main() {
    await connectToDatabase();

    for (const pest of pestContent) {
        const affects = affectsFor(pest.slug);
        const doc = await PestModel.findOneAndUpdate(
            { slug: pest.slug },
            { ...pest, affects },
            {
                upsert: true,
                returnDocument: 'after',
                setDefaultsOnInsert: true,
            },
        );

        console.log(
            `Seeded ${doc.slug} (_id: ${doc._id}, affects: ${affects.length} species)`,
        );
    }
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await mongoose.disconnect();
    });
