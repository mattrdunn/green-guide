import { afterEach, describe, expect, it, vi } from 'vitest';

// `baseUrl` is captured at module load, so each test re-imports the module
// after stubbing the environment.
const loadImageUrl = async (base: string | undefined) => {
    vi.resetModules();
    if (base === undefined) {
        vi.stubEnv('NEXT_PUBLIC_IMAGE_BASE_URL', '');
    } else {
        vi.stubEnv('NEXT_PUBLIC_IMAGE_BASE_URL', base);
    }
    return (await import('@/app/lib/imageUrl')).default;
};

afterEach(() => {
    vi.unstubAllEnvs();
});

describe('imageUrl', () => {
    it('prefixes R2 object keys with the image base URL', async () => {
        const imageUrl = await loadImageUrl('https://images.greenguideapp.com');
        expect(imageUrl('plants/monstera/deliciosa/img-1.jpeg')).toBe(
            'https://images.greenguideapp.com/plants/monstera/deliciosa/img-1.jpeg',
        );
    });

    it('strips trailing slashes from the base URL before joining', async () => {
        const imageUrl = await loadImageUrl(
            'https://images.greenguideapp.com//',
        );
        expect(imageUrl('plants/categories/indoor.png')).toBe(
            'https://images.greenguideapp.com/plants/categories/indoor.png',
        );
    });

    it('passes absolute URLs through untouched', async () => {
        const imageUrl = await loadImageUrl('https://images.greenguideapp.com');
        expect(imageUrl('https://example.com/photo.jpg')).toBe(
            'https://example.com/photo.jpg',
        );
        expect(imageUrl('//example.com/photo.jpg')).toBe(
            '//example.com/photo.jpg',
        );
    });

    it('passes local /public paths through untouched', async () => {
        const imageUrl = await loadImageUrl('https://images.greenguideapp.com');
        expect(imageUrl('/icons/house.svg')).toBe('/icons/house.svg');
    });

    it('falls back to a root-relative path when no base URL is set', async () => {
        const imageUrl = await loadImageUrl(undefined);
        expect(imageUrl('plants/monstera/deliciosa/img-1.jpeg')).toBe(
            '/plants/monstera/deliciosa/img-1.jpeg',
        );
    });
});
