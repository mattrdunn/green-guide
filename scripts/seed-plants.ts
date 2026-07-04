import mongoose from 'mongoose';
import { connectToDatabase } from '../lib/db/connect';
import { PlantModel, type Plant } from '../lib/db/models/Plant';
import { monsteraDeliciosa } from './seed/monstera-deliciosa';
import { monsteraAdansonii } from './seed/monstera-adansonii';
import { ficusLyrata } from './seed/ficus-lyrata';
import { ficusElastica } from './seed/ficus-elastica';
import { ficusTriangularisVariegata } from './seed/ficus-triangularis-variegata';
import { echinopsisPachanoi } from './seed/echinopsis-pachanoi';
import { euphorbiaTrigona } from './seed/euphorbia-trigona';
import { opuntiaFicusIndica } from './seed/opuntia-ficus-indica';
import { aeoniumArboreum } from './seed/aeonium-arboreum';
import { senecioRowleyanus } from './seed/senecio-rowleyanus';
import { euphorbiaTirucalli } from './seed/euphorbia-tirucalli';
import { dracaenaTrifasciata } from './seed/dracaena-trifasciata';
import { zamioculcasZamiifolia } from './seed/zamioculcas-zamiifolia';
import { philodendronHederaceumBrasil } from './seed/philodendron-hederaceum-brasil';
import { goeppertiaOrbifolia } from './seed/goeppertia-orbifolia';

process.loadEnvFile('.env.local');

const plants: Omit<Plant, 'createdAt' | 'updatedAt'>[] = [
    monsteraDeliciosa,
    monsteraAdansonii,
    ficusLyrata,
    ficusElastica,
    ficusTriangularisVariegata,
    echinopsisPachanoi,
    euphorbiaTrigona,
    opuntiaFicusIndica,
    aeoniumArboreum,
    senecioRowleyanus,
    euphorbiaTirucalli,
    dracaenaTrifasciata,
    zamioculcasZamiifolia,
    philodendronHederaceumBrasil,
    goeppertiaOrbifolia,
];

async function main() {
    await connectToDatabase();

    for (const plant of plants) {
        const doc = await PlantModel.findOneAndUpdate(
            { genus: plant.genus, species: plant.species },
            plant,
            {
                upsert: true,
                returnDocument: 'after',
                setDefaultsOnInsert: true,
            },
        );

        console.log(`Seeded ${doc.genus} ${doc.species} (_id: ${doc._id})`);
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
