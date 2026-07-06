import type { Plant } from '../../lib/db/models/Plant';

export const dianthusCaryophyllus: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'dianthus',
    species: 'caryophyllus',
    commonNames: ['Carnation', 'Clove Pink', 'Dianthus'],
    description:
        'Ruffled, spice-scented blooms in shades of pink, white, and red top slim, silvery-blue stems — a classic cottage-garden and cut-flower perennial that rewards full sun and lean soil with months of repeat flowering.',
    images: [],
    tags: [
        'perennial',
        'full-sun',
        'fragrant',
        'drought-tolerant',
        'non-toxic',
        'pollinator-friendly',
    ],
    highlights: [
        'Native to the rocky Mediterranean coastline, where it grows on cliffs and lean, gravelly soil.',
        'The clove-like fragrance comes from eugenol, the same compound found in actual cloves.',
        'A parent species of most cultivated florist carnations grown for the cut-flower trade.',
    ],
    vitals: {
        hardinessZone: {
            value: '6-9',
            caption:
                'Perennial in mild-winter climates; often grown as an annual or with winter mulch further north.',
            zoneMin: 6,
            zoneMax: 9,
        },
        light: {
            score: 5,
            value: 'Full sun',
            caption:
                '6+ hours of direct sun keeps stems compact and produces the most and best-scented blooms.',
        },
        watering: {
            score: 2,
            value: 'Dry to moderate',
            caption:
                'Water deeply but infrequently — constantly damp soil invites the fungal rot this species is prone to.',
        },
        difficulty: {
            score: 2,
            value: 'Easy, in the right soil',
            caption:
                'Undemanding once sited well; drainage is the one requirement worth getting right.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption:
                'Generally considered safe around pets and children, though large quantities can still cause mild stomach upset.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '1-2.5 ft',
            detail: 'Forms a low mound of narrow, blue-gray foliage with wiry flower stems rising well above it.',
            minFt: 1,
            maxFt: 3,
        },
        soil: {
            value: 'Lean, alkaline, well-drained',
            detail: 'Gritty, neutral-to-alkaline soil suits it best; amend heavy clay with sand or grit before planting.',
        },
        semiHydro: {
            value: 'No',
            detail: 'A dryland Mediterranean plant — constantly moist roots invite crown and root rot.',
            compatible: false,
        },
        fertilizer: {
            value: 'Light, balanced',
            detail: 'Rich soil produces floppy growth and fewer blooms; a light balanced feed a couple of times a season is enough.',
            npk: '10-10-10',
        },
        fertilizerFrequency: {
            value: 'Every 6-8 weeks in season',
            detail: 'Feed lightly through the growing and blooming months; stop by late summer to harden growth for winter.',
        },
        nativeHabitat: {
            value: 'Mediterranean coastal cliffs',
            detail: 'Grows wild on rocky, sun-baked coastal slopes across southern Europe.',
        },
        humidity: {
            value: 'Low & breezy',
            detail: 'Good airflow around the foliage helps prevent the fungal leaf spot and rust this species is prone to.',
            minPct: 10,
        },
        temperature: {
            value: '0° – 90°F',
            detail: 'Cold-hardy in well-drained soil; the real winter risk is wet feet, not cold air.',
            minF: 0,
            maxF: 90,
        },
        growSeason: {
            value: 'Spring–Summer',
            detail: 'Blooms in flushes from late spring through summer, often reblooming after deadheading.',
        },
        dailyRhythm: {
            heading: 'A fragrant sun-lover that blooms best when kept lean.',
            body: 'Carnations want full sun, sharp drainage, and a light hand with both water and fertilizer. The main ongoing job is deadheading spent blooms to keep new flower flushes coming through the season.',
            highlights: [
                'Deadhead regularly — it is the single biggest driver of continued reblooming.',
                'Let soil dry between waterings; root and crown rot are bigger threats than drought.',
                'Divide congested clumps every few years to keep plants vigorous and floriferous.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Check soil dryness before watering, especially in containers.',
            },
            {
                interval: 'weekly',
                task: 'Deadhead spent blooms to encourage continued flowering.',
            },
            {
                interval: 'as-needed',
                task: 'Water deeply only once the top few inches of soil are dry.',
            },
            {
                interval: 'seasonal',
                task: 'Feed lightly every 6-8 weeks through the growing season; divide crowded clumps in early spring or fall.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Sun',
                stat: '6+ hrs direct',
                detail: 'The main driver of compact growth, strong stems, and abundant, fragrant flowers.',
            },
            {
                label: 'Drainage',
                stat: 'Lean, gritty soil',
                detail: 'Sand or grit in the planting area is the best defense against the crown rot that kills more carnations than cold does.',
            },
            {
                label: 'Deadheading',
                stat: 'Weekly through bloom',
                detail: 'Removing spent flowers redirects energy into new buds rather than seed production.',
            },
            {
                label: 'Airflow',
                stat: 'Space plants well',
                detail: 'Good circulation between plants keeps foliage dry and resists rust and leaf spot.',
            },
        ],
        wateringRhythm: {
            heading:
                'Deep, infrequent water on soil that dries between drinks.',
            body: 'Water deeply, then let the top few inches of soil dry out fully before watering again. Carnations tolerate real drought far better than they tolerate constantly wet roots, so err on the side of underwatering, especially in humid or rainy climates.',
            tips: [
                'Water at the base rather than overhead to keep foliage and flowers dry.',
                'Container plants dry faster than in-ground beds — check them more frequently.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring',
                cadence: 'Every 7-10 days',
                tip: 'Support new growth and early buds with steady, moderate moisture.',
            },
            {
                season: 'Summer',
                cadence: 'Every 10-14 days',
                tip: 'Let soil dry fully between soaks; established plants handle heat and dry spells well.',
            },
            {
                season: 'Autumn & Winter',
                cadence: 'Minimal',
                tip: 'Rely mostly on rainfall; excess moisture is riskier than cold in winter.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Deadhead spent blooms just below the flower head.',
                    'Check foliage for early signs of rust or fungal spotting.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Feed lightly every 6-8 weeks during active growth.',
                    'Shear back lightly after the first big bloom flush to encourage a second round.',
                    'Divide congested clumps every 2-3 years in early spring or fall.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Sharp bypass shears or snips',
                note: 'Clean deadheading cuts keep plants tidy and encourage prompt reblooming.',
            },
            {
                item: 'Coarse sand or grit',
                note: 'Worked into planting holes, it is the best insurance against crown and root rot.',
            },
            {
                item: 'Garden lime (in acidic soil)',
                note: 'Nudges soil pH toward the neutral-to-alkaline range carnations prefer.',
            },
            {
                item: 'Support ring or light staking',
                note: 'Keeps tall, top-heavy flower stems from flopping in wind or rain.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Yellowing, Wilting Base',
                description:
                    'Wilting foliage paired with a soft or discolored crown almost always points to waterlogged soil and root or crown rot.',
                actions: [
                    'Stop watering and let the soil dry out significantly before resuming.',
                    'Improve drainage with grit or by raising the planting area.',
                    'Remove severely affected plants rather than risk spreading rot to neighbors.',
                ],
            },
            {
                title: 'Sparse Flowering',
                description:
                    'Healthy foliage but few blooms usually points to too much shade, overly rich soil, or a lack of deadheading.',
                actions: [
                    'Confirm the plant gets at least 6 hours of direct sun.',
                    'Cut back on nitrogen-rich fertilizer, which favors leaves over flowers.',
                    'Deadhead consistently to keep new buds forming.',
                ],
            },
            {
                title: 'Orange-Brown Pustules on Leaves',
                description:
                    'Raised, rusty spots on foliage are a sign of carnation rust, a fungal disease favored by humid, still air.',
                actions: [
                    'Remove and discard affected foliage promptly.',
                    'Improve spacing and airflow between plants.',
                    'Water at the soil line and avoid wetting foliage.',
                ],
            },
        ],
        pests: [
            {
                name: 'Aphids',
                signs: 'Small clustered insects on new growth and flower buds, often with sticky residue.',
                treatment:
                    'Hose off light infestations or treat with insecticidal soap every 5-7 days until clear.',
            },
            {
                name: 'Spider Mites',
                signs: 'Fine webbing and stippled, pale foliage, especially in hot, dry conditions.',
                treatment:
                    'Shower foliage regularly and treat persistent infestations with insecticidal soap.',
            },
            {
                name: 'Carnation Rust',
                signs: 'Raised, rusty-brown pustules on the undersides of leaves.',
                treatment:
                    'Remove affected leaves, improve airflow, and apply a fungicide labeled for rust if it recurs.',
            },
        ],
        stabilityChecklist: [
            'Plant in full sun with lean, sharp-draining, slightly alkaline soil.',
            'Water deeply but infrequently — root and crown rot are the top killers.',
            'Deadhead weekly through the bloom season to keep flowers coming.',
            'Space plants for good airflow to resist rust and fungal leaf spot.',
        ],
    },
};
