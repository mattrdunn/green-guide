import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
type Plant = {
    id: string;
    name: string;
    latinName: string;
    imageUrl: string;
}
export const greenGuideApi = createApi({
  reducerPath: 'greenGuideApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getPlant: builder.query<Plant, string>({
      query: (key) => `plants/${key}`,
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

export const { useGetPlantQuery, useSaveFavoritePlantMutation } = greenGuideApi;