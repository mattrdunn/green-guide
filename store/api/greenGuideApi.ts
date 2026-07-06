import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PlantCardData } from '@/app/components/home/types';
import type { PestSummaryData } from '@/app/pests/types';
import type { Plant } from '@/lib/db/models/Plant';

/** Plant document as served by the API — Mongoose Dates arrive as ISO strings. */
export type PlantData = Omit<Plant, 'createdAt' | 'updatedAt'> & {
    createdAt: string;
    updatedAt: string;
};

export const greenGuideApi = createApi({
    reducerPath: 'greenGuideApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
    endpoints: (builder) => ({
        getPlant: builder.query<
            PlantData,
            { genus: string; species: string; variety?: string }
        >({
            query: ({ genus, species, variety }) =>
                variety
                    ? `plants/${genus}/${species}/${variety}`
                    : `plants/${genus}/${species}`,
        }),
        getPlantSummaries: builder.query<PlantCardData[], void>({
            query: () => 'plants',
        }),
        getPestSummaries: builder.query<PestSummaryData[], void>({
            query: () => 'pests',
        }),
        saveFavoritePlant: builder.mutation<void, { plantId: string }>({
            query: ({ plantId }) => ({
                url: 'favorites',
                method: 'POST',
                body: { plantId },
            }),
        }),
    }),
});

export const {
    useGetPlantQuery,
    useGetPlantSummariesQuery,
    useGetPestSummariesQuery,
    useSaveFavoritePlantMutation,
} = greenGuideApi;
