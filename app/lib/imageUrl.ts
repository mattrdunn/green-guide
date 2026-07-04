const baseUrl = (process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? '').replace(
    /\/+$/,
    '',
);

/**
 * Resolve a stored image reference to a fetchable URL. Plant documents store
 * R2 object keys (e.g. `plants/monstera/deliciosa/img-1.jpeg`) rather than
 * full URLs so the image host can change without a data migration; absolute
 * URLs and local `/public` paths pass through untouched.
 */
export default function imageUrl(ref: string): string {
    if (/^(https?:)?\/\//.test(ref) || ref.startsWith('/')) {
        return ref;
    }
    return `${baseUrl}/${ref}`;
}
