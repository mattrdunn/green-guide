import mongoose from 'mongoose';
import { connectToDatabase } from '../lib/db/connect';
import { GenusModel, type Genus } from '../lib/db/models/Genus';
import { monstera } from './seed/genus/monstera';

process.loadEnvFile('.env.local');

const genusContent: Omit<Genus, 'createdAt' | 'updatedAt'>[] = [monstera];

async function main() {
    await connectToDatabase();

    for (const genus of genusContent) {
        const doc = await GenusModel.findOneAndUpdate(
            { genus: genus.genus },
            genus,
            {
                upsert: true,
                returnDocument: 'after',
                setDefaultsOnInsert: true,
            },
        );

        console.log(`Seeded ${doc.genus} (_id: ${doc._id})`);
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
