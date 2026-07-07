import type { Plant } from '../../lib/db/models/Plant';

export const fragariaAnanassa: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'fragaria',
    species: 'ananassa',
    commonNames: ['Garden Strawberry', 'Strawberry'],
    description:
        'A low, spreading perennial that trades height for sheer productivity — trifoliate leaves, white spring flowers, and sweet red fruit that keeps beds and borders working double duty.',
    images: [
        {
            url: 'plants/fragaria/ananassa/img-1.png',
            alt: 'A close-up of a Garden Strawberry plant with trifoliate leaves, white flowers, and red fruit.',
        },
        {
            url: 'plants/fragaria/ananassa/img-2.png',
            alt: 'A Garden Strawberry bed showing low, spreading plants with ripe red strawberries ready for harvest.',
        },
        {
            url: 'plants/fragaria/ananassa/img-3.png',
            alt: 'A close-up of an unripe strawberry on the plant, with green leaves and white flowers in the background.',
        }
    ],
    tags: ['fruit', 'perennial', 'groundcover', 'edible', 'non-toxic', 'full-sun'],
    highlights: [
        'A cultivated hybrid of North and South American wild strawberries.',
        'Spreads readily via runners, making it an edible groundcover as much as a fruit crop.',
        'Fruit, leaves, and runners are all pet- and kid-safe.',
    ],
    vitals: {
        hardinessZone: {
            value: '4-9',
            caption: 'Reliably perennial; crowns go dormant and regrow each spring.',
            zoneMin: 4,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption: '6-10 hours direct for the sweetest, most abundant fruit.',
        },
        watering: {
            score: 4,
            value: 'Consistent moisture',
            caption: 'Shallow roots dry out fast — water regularly, especially while fruiting.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'Forgiving and productive once given sun and steady moisture.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Fruit, leaves, and runners are all safe around pets and kids.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '6-12" mound',
            detail: 'Low, mounding crowns send out long runners that root and form new plantlets nearby.',
            minFt: 0.5,
            maxFt: 1,
        },
        soil: {
            value: 'Rich, well-draining, slightly acidic',
            detail: 'Loamy soil amended with compost, ideally pH 5.5-6.8; raised beds help with drainage and crown rot prevention.',
        },
        semiHydro: {
            value: 'No',
            detail: 'Crowns are sensitive to constant moisture at the growing point — soil culture with good drainage suits them better.',
            compatible: false,
        },
        fertilizer: {
            value: 'Lower-N, higher P & K',
            detail: 'Too much nitrogen produces lush leaves at the expense of fruit; a fruiting-formula feed favors blossoms and berries.',
            npk: '3-8-8',
        },
        fertilizerFrequency: {
            value: 'At planting and after harvest',
            detail: 'A light feed at planting, then again once the main harvest wraps up to fuel next year’s crowns.',
        },
        nativeHabitat: {
            value: 'Hybrid origin (Americas)',
            detail: 'Bred from wild strawberries native to North and South America; now grown worldwide in temperate climates.',
        },
        humidity: {
            value: '40-60% moderate',
            detail: 'Average outdoor humidity is fine; poor airflow around dense foliage invites gray mold on ripening fruit.',
            minPct: 40,
        },
        temperature: {
            value: '35° – 85°F',
            detail: 'Crowns go dormant and tolerate hard freezes when mulched; active growth and fruiting favor mild, moderate warmth.',
            minF: 35,
            maxF: 85,
        },
        growSeason: {
            value: 'Spring–early summer (or spring–fall for everbearing types)',
            detail: 'June-bearing varieties fruit in one big spring flush; everbearing and day-neutral types trickle fruit through the season.',
        },
        dailyRhythm: {
            heading: 'A low, spreading crop that rewards steady attention.',
            body: 'Strawberries need consistent sun and moisture more than any single dramatic intervention. The regular job is checking soil moisture, watching for ripening fruit before birds or slugs find it, and managing runners so energy goes where you want it.',
            highlights: [
                'Shallow roots mean the topsoil dries out quickly — check moisture often, especially in containers.',
                'Straw mulch under the fruit keeps berries clean and off damp soil.',
                'Trim excess runners unless you want the bed to spread and fill in naturally.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil moisture and water if the top inch has dried out.',
            },
            {
                interval: 'weekly',
                task: 'Harvest ripe berries promptly to discourage pests and rot.',
            },
            {
                interval: 'weekly',
                task: 'Trim or redirect runners depending on whether you want the bed to spread.',
            },
            {
                interval: 'seasonal',
                task: 'Renovate the bed after harvest — remove old leaves and thin crowded crowns.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6-10 hrs direct',
                detail: 'Fruit sweetness and yield both scale directly with sunlight.',
            },
            {
                label: 'Even Moisture',
                stat: 'Water 2-3x/week',
                detail: 'Shallow roots cannot buffer dry spells — consistency prevents small, underdeveloped fruit.',
            },
            {
                label: 'Mulch',
                stat: 'Straw under crowns',
                detail: 'Keeps fruit clean, suppresses weeds, and buffers soil moisture swings.',
            },
            {
                label: 'Runner Management',
                stat: 'Trim or train',
                detail: 'Redirecting runners focuses the plant’s energy on fruit rather than endless spreading.',
            },
        ],
        wateringRhythm: {
            heading: 'Frequent, shallow-rooted watering — never let it dry out fully.',
            body: 'Water 2-3 times a week, more during hot spells or heavy fruiting, aiming for consistently moist (not soggy) soil in the top few inches where roots concentrate. Drip irrigation or careful hand-watering at the base keeps foliage and fruit dry, reducing rot and mold.',
            tips: [
                'Container-grown strawberries dry out especially fast — check them daily in summer.',
                'Water in the morning so foliage and fruit surfaces dry out before evening.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring (flowering)',
                cadence: '2-3x weekly',
                tip: 'Consistent moisture during flowering supports strong fruit set.',
            },
            {
                season: 'Summer (fruiting)',
                cadence: '3x weekly or more',
                tip: 'Peak water demand — ripening fruit is mostly water and swells quickly with consistent supply.',
            },
            {
                season: 'Fall & Winter (dormancy)',
                cadence: 'Minimal',
                tip: 'Reduce watering as crowns go dormant; rely mostly on natural rainfall.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Harvest fully ripe berries and check under foliage for hidden fruit.',
                    'Refresh straw mulch where it has thinned or blown away.',
                    'Pinch off or train runners depending on whether you want new plants.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'After the main harvest, trim back old foliage to refresh the bed.',
                    'Thin overcrowded crowns and replant strong runner plantlets with spacing.',
                    'Apply a fruiting-formula feed to fuel next season’s crowns.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Straw mulch',
                note: 'Keeps ripening berries clean, dry, and off damp soil — the plant’s namesake material.',
            },
            {
                item: 'Bird or insect netting',
                note: 'Protects ripening fruit from birds and squirrels without harming the plant.',
            },
            {
                item: 'Fruiting-formula fertilizer',
                note: 'Lower nitrogen, higher phosphorus and potassium favors flowers and fruit over leaves.',
            },
            {
                item: 'Garden scissors',
                note: 'Clean harvesting and runner trimming without tugging shallow roots loose.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Gray, Fuzzy Mold on Fruit',
                description:
                    'Botrytis (gray mold) develops on ripening berries in humid, poorly ventilated conditions, especially where fruit touches wet soil.',
                actions: [
                    'Remove and discard affected fruit immediately, away from the compost pile.',
                    'Improve airflow by thinning dense foliage and spacing plants further apart.',
                    'Mulch with straw so fruit stays off damp soil.',
                ],
            },
            {
                title: 'Pale or Yellowing Leaves',
                description:
                    'Chlorotic, yellow-veined leaves usually point to a nutrient deficiency or roots sitting in overly wet soil.',
                actions: [
                    'Check drainage first — soggy soil blocks nutrient uptake even when fertility is fine.',
                    'Apply a balanced or iron-rich feed if drainage is already good.',
                ],
            },
            {
                title: 'Wilting Despite Moist Soil',
                description:
                    'Sudden wilting with visibly healthy surrounding soil moisture often signals crown rot at the base.',
                actions: [
                    'Pull back mulch from directly against the crown to improve airflow.',
                    'Remove severely affected plants to prevent spread to neighboring crowns.',
                ],
            },
        ],
        pests: [
            {
                name: 'Slugs & Snails',
                pestSlug: 'slugs-and-snails',
                signs: 'Ragged holes in leaves and fruit, with silvery slime trails nearby.',
                treatment:
                    'Hand-pick in the evening, or use iron phosphate bait around the bed perimeter.',
            },
            {
                name: 'Aphids',
                pestSlug: 'aphids',
                signs: 'Small clustered insects on new leaves and flower stems.',
                treatment:
                    'Hose off or treat with insecticidal soap weekly until populations clear.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and faint webbing on leaves during hot, dry weather.',
                treatment:
                    'Rinse foliage regularly and treat with insecticidal soap if damage progresses.',
            },
            {
                name: 'Birds & Squirrels',
                signs: 'Ripe fruit disappearing overnight or partially eaten berries left behind.',
                treatment:
                    'Cover beds with netting once fruit begins to color up.',
            },
            {
                name: 'Vine Weevil',
                pestSlug: 'vine-weevil',
                signs: 'Notched leaf edges overnight, plus wilting crowns from grubs feeding on roots below.',
                treatment:
                    'Hand-pick adults at night and drench the bed with beneficial nematodes in late summer to target larvae.',
            },
        ],
        stabilityChecklist: [
            'Mulch with straw before fruit sets to keep berries clean and dry.',
            'Water consistently — shallow roots cannot tolerate long dry stretches.',
            'Net beds once fruit starts ripening to stay ahead of birds and squirrels.',
            'Renovate the bed after harvest each year to keep crowns productive for years to come.',
        ],
    },
};
