import type { Plant } from '../../lib/db/models/Plant';

export const phalaenopsisAmabilis: Omit<Plant, 'createdAt' | 'updatedAt'> = {
    genus: 'phalaenopsis',
    species: 'amabilis',
    commonNames: ['Moth Orchid'],
    description:
        'The most forgiving orchid to grow indoors — broad, waxy leaves and arching sprays of long-lasting blooms thrive on a warm windowsill with a simple soak-and-dry routine, no greenhouse required.',
    images: [],
    tags: ['orchid', 'epiphyte', 'beginner-friendly', 'non-toxic', 'flowering'],
    highlights: [
        'Native to the humid lowland rainforests of Southeast Asia and northern Australia, growing anchored to tree bark rather than in soil.',
        'A single bloom spike can stay in flower for two to four months, and often reblooms from the same spike if left intact after flowering.',
        'Thick, water-storing roots turn silvery-green when dry and bright green when hydrated — the easiest at-a-glance watering cue of any common houseplant.',
    ],
    vitals: {
        hardinessZone: {
            value: '10-12 outdoors; houseplant elsewhere',
            caption: 'A warm, humid tropical epiphyte — grow indoors year-round outside zone 10-12.',
            zoneMin: 10,
            zoneMax: 12,
        },
        light: {
            score: 2,
            value: 'Bright, indirect',
            caption: 'An east-facing windowsill is ideal — direct midday sun scorches the leaves.',
        },
        watering: {
            score: 2,
            value: 'Soak & dry out',
            caption: 'Water thoroughly once weekly, then let roots dry to silvery-green before the next soak.',
        },
        difficulty: {
            score: 2,
            value: 'Easy',
            caption: 'The most beginner-friendly orchid — tolerant of average home humidity and a little neglect.',
            level: 'easy',
        },
        toxicity: {
            value: 'Non-toxic',
            caption: 'Safe around pets and kids.',
            level: 'non-toxic',
        },
    },
    overview: {
        height: {
            value: '1-2 ft including bloom spike',
            detail: 'Foliage stays compact; most of the visual height comes from the arching flower spike, which can be staked upright or allowed to cascade.',
            minFt: 1,
            maxFt: 2,
        },
        soil: {
            value: 'Chunky orchid bark mix',
            detail: 'Coarse fir bark, sphagnum moss, and perlite let air reach the roots — regular potting soil suffocates and rots them within weeks.',
        },
        semiHydro: {
            value: 'Yes',
            detail: 'One of the easiest orchids to convert to LECA or pon; the reservoir setup makes the soak-and-dry cycle nearly foolproof.',
            compatible: true,
        },
        fertilizer: {
            value: 'Balanced, "weakly weekly"',
            detail: 'Dilute a balanced orchid fertilizer to quarter-strength and feed with most waterings during active growth to avoid burning fine roots.',
            npk: '20-20-20',
        },
        fertilizerFrequency: {
            value: 'Weekly (diluted), skip monthly flush',
            detail: 'Feed at quarter-strength weekly, then water with plain water alone once a month to flush accumulated salts.',
        },
        nativeHabitat: {
            value: 'Southeast Asian & Australian rainforest',
            detail: 'Epiphytic, clinging to tree bark in warm, humid, shaded understory — never rooted in soil.',
        },
        humidity: {
            value: '50-70% ideal',
            detail: 'Average bathroom or kitchen humidity suits it well; a pebble tray helps in dry heated homes.',
            minPct: 50,
        },
        temperature: {
            value: '65° – 80°F',
            detail: 'Wants stable warmth; a natural 10°F autumn night-time drop helps trigger a new bloom spike.',
            minF: 65,
            maxF: 80,
        },
        growSeason: {
            value: 'Year-round foliage; blooms fall–spring',
            detail: 'Leaf growth is slow and steady all year, while bloom spikes typically emerge after cooler autumn nights and flower through winter into spring.',
        },
        dailyRhythm: {
            heading: 'A patient bloomer that rewards a simple, steady routine.',
            body: 'Phalaenopsis asks for very little: bright indirect light, a weekly soak, and warm, stable air. The reward is a single flower spike that can stay in bloom for months on end.',
            highlights: [
                'Silvery roots mean it is time to water; bright green roots mean wait.',
                'Leave a spent bloom spike in place after flowers drop — it often reblooms from a lower node.',
                'Never let the crown (where leaves meet roots) sit wet, especially after misting — it invites rot.',
            ],
        },
        careCadence: [
            {
                interval: 'weekly',
                task: 'Soak the pot or run water through the bark mix until roots turn bright green, then let it drain fully.',
            },
            {
                interval: 'weekly',
                task: 'Feed at quarter-strength with a balanced orchid fertilizer.',
            },
            {
                interval: 'monthly',
                task: 'Water with plain water only, skipping fertilizer, to flush mineral buildup.',
            },
            {
                interval: 'seasonal',
                task: 'Stake and support the bloom spike as buds swell and open.',
            },
        ],
    },
    care: {
        pillars: [
            {
                label: 'Watering',
                stat: 'Soak weekly, dry between',
                detail: 'Thick roots store water, so a thorough weekly soak followed by full drying prevents rot far better than frequent light watering.',
            },
            {
                label: 'Light',
                stat: 'Bright, indirect',
                detail: 'Dark green, floppy leaves mean too little light; reddish or yellowish leaves mean too much direct sun.',
            },
            {
                label: 'Airflow',
                stat: 'Gentle circulation',
                detail: 'A small fan nearby keeps the crown and roots drying evenly and wards off fungal issues.',
            },
            {
                label: 'Feeding',
                stat: 'Weak & frequent',
                detail: 'Quarter-strength fertilizer with most waterings keeps growth and rebloom steady without burning roots.',
            },
        ],
        wateringRhythm: {
            heading: 'Soak thoroughly, then let the roots dry out completely.',
            body: 'Water at the sink until it runs freely through the bark mix, let it drain for several minutes, and never let the pot sit in standing water. Roots should look bright green right after watering and fade to silvery-green as they dry — that shift is the cue to water again.',
            tips: [
                'Use room-temperature water — cold water shocks the roots.',
                'Avoid getting water in the crown; tip the plant slightly or blot it dry with a paper towel if it happens.',
            ],
        },
        seasonalWatering: [
            {
                season: 'Spring & Summer',
                cadence: 'Every 5-7 days',
                tip: 'Warmer air dries the bark mix faster — check roots more often in heat.',
            },
            {
                season: 'Autumn',
                cadence: 'Every 7-10 days',
                tip: 'Cooler nights slow water uptake; this is also when bloom spikes typically start forming.',
            },
            {
                season: 'Winter',
                cadence: 'Every 10-14 days',
                tip: 'Indoor heating dries air but slows root activity — err toward underwatering over winter.',
            },
        ],
        routines: [
            {
                interval: 'weekly',
                steps: [
                    'Check root color and soak the pot if roots have turned silvery.',
                    'Feed at quarter-strength with a balanced orchid fertilizer.',
                    'Rotate toward the light source to keep the spike growing evenly.',
                ],
            },
            {
                interval: 'monthly',
                steps: [
                    'Flush with plain water to clear fertilizer salts.',
                    'Inspect roots and crown for rot or pests.',
                ],
            },
            {
                interval: 'seasonal',
                steps: [
                    'Trim a fully spent, yellowed bloom spike back to a lower node, or all the way if it has browned entirely.',
                    'Repot every 1-2 years once bark starts breaking down and holding too much moisture.',
                ],
            },
        ],
        toolkit: [
            {
                item: 'Clear plastic orchid pot',
                note: 'Lets you monitor root color and moisture without disturbing the plant.',
            },
            {
                item: 'Coarse fir bark mix',
                note: 'Keeps air reaching the roots — never substitute regular potting soil.',
            },
            {
                item: 'Balanced orchid fertilizer',
                note: 'Diluted to quarter-strength for gentle, frequent feeding.',
            },
            {
                item: 'Bloom spike stake and clips',
                note: 'Supports heavy flower sprays so they display upright instead of flopping.',
            },
        ],
    },
    issues: {
        stressSignals: [
            {
                title: 'Wrinkled, Limp Leaves',
                description:
                    'Usually root damage from either prolonged dryness or, more often, rot from staying wet too long.',
                actions: [
                    'Unpot and inspect roots: trim any mushy, brown roots back to healthy white or green tissue.',
                    'Repot into fresh bark mix and resume a strict soak-and-dry cycle.',
                    'Hold off fertilizer until new root growth appears.',
                ],
            },
            {
                title: 'No Reblooming',
                description:
                    'A healthy plant that will not spike usually lacks either light or the seasonal temperature cue.',
                actions: [
                    'Move to a brighter (still indirect) spot if leaves are dark green and glossy.',
                    'Allow nights to drop into the low 60s°F for a couple of weeks in early autumn to help trigger a spike.',
                ],
            },
            {
                title: 'Crown Rot',
                description:
                    'A soft, discolored crown from water pooling where the leaves meet the roots is often fatal if untreated.',
                actions: [
                    'Blot water from the crown immediately after every watering or misting.',
                    'At the first sign of softening, dust the crown with cinnamon (a mild fungicide) and improve airflow.',
                ],
            },
        ],
        pests: [
            {
                name: 'Mealybugs',
                pestSlug: 'mealybugs',
                signs: 'Cottony white clusters tucked into leaf axils and along the bloom spike.',
                treatment:
                    'Dab with isopropyl alcohol on a cotton swab, then follow with insecticidal soap weekly until clear.',
            },
            {
                name: 'Scale',
                pestSlug: 'scale',
                signs: 'Small brown, dome-shaped bumps on the undersides of leaves.',
                treatment:
                    'Scrape off gently and treat with horticultural oil every 1-2 weeks until no new scale appears.',
            },
            {
                name: 'Spider Mites',
                pestSlug: 'spider-mites',
                signs: 'Fine stippling and faint webbing on leaf undersides, worse in dry indoor air.',
                treatment:
                    'Rinse leaves regularly and raise humidity; treat persistent infestations with insecticidal soap.',
            },
        ],
        stabilityChecklist: [
            'Water by root color, not a fixed calendar — silvery means soak, green means wait.',
            'Keep the crown dry after every watering to prevent rot.',
            'Give it the brightest spot that avoids direct midday sun.',
            'Leave spent spikes intact until fully brown — they often rebloom.',
        ],
    },
};
