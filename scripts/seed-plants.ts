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
import { agaveAttenuata } from './seed/agave-attenuata';
import { lavandulaAngustifolia } from './seed/lavandula-angustifolia';
import { solanumLycopersicum } from './seed/solanum-lycopersicum';
import { fragariaAnanassa } from './seed/fragaria-ananassa';
import { dypsisLutescens } from './seed/dypsis-lutescens';
import { pelargoniumPeltatum } from './seed/pelargonium-peltatum';
import { citrusLimon } from './seed/citrus-limon';
import { perseaAmericana } from './seed/persea-americana';
import { rosaHybrida } from './seed/rosa-hybrida';
import { syngoniumPodophyllum } from './seed/syngonium-podophyllum';
import { syngoniumPodophyllumAlbo } from './seed/syngonium-podophyllum-albo';
import { epipremnumAureum } from './seed/epipremnum-aureum';
import { alocasiaAmazonica } from './seed/alocasia-amazonica';
import { marantaLeuconeura } from './seed/maranta-leuconeura';
import { nepenthesMiranda } from './seed/nepenthes-miranda';

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
    agaveAttenuata,
    lavandulaAngustifolia,
    solanumLycopersicum,
    fragariaAnanassa,
    dypsisLutescens,
    pelargoniumPeltatum,
    citrusLimon,
    perseaAmericana,
    rosaHybrida,
    syngoniumPodophyllum,
    syngoniumPodophyllumAlbo,
    epipremnumAureum,
    alocasiaAmazonica,
    marantaLeuconeura,
    nepenthesMiranda,
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
