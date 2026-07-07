import mongoose from 'mongoose';
import { connectToDatabase } from '../lib/db/connect';
import { GenusModel, type Genus } from '../lib/db/models/Genus';
import { aeonium } from './seed/genus/aeonium';
import { agave } from './seed/genus/agave';
import { allium } from './seed/genus/allium';
import { alocasia } from './seed/genus/alocasia';
import { begonia } from './seed/genus/begonia';
import { cattleya } from './seed/genus/cattleya';
import { chlorophytum } from './seed/genus/chlorophytum';
import { citrus } from './seed/genus/citrus';
import { crassula } from './seed/genus/crassula';
import { dianthus } from './seed/genus/dianthus';
import { dionaea } from './seed/genus/dionaea';
import { dracaena } from './seed/genus/dracaena';
import { drosera } from './seed/genus/drosera';
import { dypsis } from './seed/genus/dypsis';
import { echinocactus } from './seed/genus/echinocactus';
import { echinopsis } from './seed/genus/echinopsis';
import { epipremnum } from './seed/genus/epipremnum';
import { euphorbia } from './seed/genus/euphorbia';
import { ficus } from './seed/genus/ficus';
import { fragaria } from './seed/genus/fragaria';
import { goeppertia } from './seed/genus/goeppertia';
import { hedera } from './seed/genus/hedera';
import { helleborus } from './seed/genus/helleborus';
import { heptapleurum } from './seed/genus/heptapleurum';
import { hibiscus } from './seed/genus/hibiscus';
import { jasminum } from './seed/genus/jasminum';
import { lavandula } from './seed/genus/lavandula';
import { maranta } from './seed/genus/maranta';
import { monstera } from './seed/genus/monstera';
import { musa } from './seed/genus/musa';
import { narcissus } from './seed/genus/narcissus';
import { nepenthes } from './seed/genus/nepenthes';
import { opuntia } from './seed/genus/opuntia';
import { pelargonium } from './seed/genus/pelargonium';
import { peperomia } from './seed/genus/peperomia';
import { persea } from './seed/genus/persea';
import { phalaenopsis } from './seed/genus/phalaenopsis';
import { philodendron } from './seed/genus/philodendron';
import { pilea } from './seed/genus/pilea';
import { rhaphidophora } from './seed/genus/rhaphidophora';
import { rosa } from './seed/genus/rosa';
import { sarracenia } from './seed/genus/sarracenia';
import { senecio } from './seed/genus/senecio';
import { solanum } from './seed/genus/solanum';
import { strelitzia } from './seed/genus/strelitzia';
import { syngonium } from './seed/genus/syngonium';
import { vanda } from './seed/genus/vanda';
import { viola } from './seed/genus/viola';
import { zamioculcas } from './seed/genus/zamioculcas';

process.loadEnvFile('.env.local');

const genusContent: Omit<Genus, 'createdAt' | 'updatedAt'>[] = [
    aeonium,
    agave,
    allium,
    alocasia,
    begonia,
    cattleya,
    chlorophytum,
    citrus,
    crassula,
    dianthus,
    dionaea,
    dracaena,
    drosera,
    dypsis,
    echinocactus,
    echinopsis,
    epipremnum,
    euphorbia,
    ficus,
    fragaria,
    goeppertia,
    hedera,
    helleborus,
    heptapleurum,
    hibiscus,
    jasminum,
    lavandula,
    maranta,
    monstera,
    musa,
    narcissus,
    nepenthes,
    opuntia,
    pelargonium,
    peperomia,
    persea,
    phalaenopsis,
    philodendron,
    pilea,
    rhaphidophora,
    rosa,
    sarracenia,
    senecio,
    solanum,
    strelitzia,
    syngonium,
    vanda,
    viola,
    zamioculcas,
];

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
