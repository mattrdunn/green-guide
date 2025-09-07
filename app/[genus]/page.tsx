export default function GenusPage({ params }: { params: { genus: string } }) {
    const { genus } = params;
    return (
        <div>
            <h1>{genus}</h1>
            <p>Overview of the genus {genus}</p>
        </div>
    );
}
