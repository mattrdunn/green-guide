import SpeciesClient from './components/SpeciesClient';

export default async function SpeciesPage({
    params,
}: {
    params: Promise<{ genus: string; species: string }>;
}) {
    const { genus, species } = await params;

    return <SpeciesClient genus={genus} species={species} />;
}
