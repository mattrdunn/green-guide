import mongoose from 'mongoose';

/**
 * Cached connection for Next.js. In dev, hot reload re-evaluates modules but
 * preserves `globalThis`, so the cache prevents a new connection per reload.
 * In serverless, the cache is reused across invocations of a warm instance.
 */
type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

declare global {
    // eslint-disable-next-line no-var
    var _mongooseCache: MongooseCache | undefined;
}

const cache: MongooseCache = (globalThis._mongooseCache ??= {
    conn: null,
    promise: null,
});

export async function connectToDatabase(): Promise<typeof mongoose> {
    if (cache.conn) {
        return cache.conn;
    }

    if (!cache.promise) {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error(
                'Missing MONGODB_URI. Add it to .env.local (see .env.example).',
            );
        }

        cache.promise = mongoose.connect(uri, {
            // Fail fast instead of silently queueing queries while disconnected.
            bufferCommands: false,
        });
    }

    try {
        cache.conn = await cache.promise;
    } catch (error) {
        cache.promise = null;
        throw error;
    }

    return cache.conn;
}
