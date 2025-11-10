'use client';

import { FormEvent, useState } from 'react';

type SearchBarProps = {
    placeholder: string;
    suggestions: string[];
};

export default function SearchBar({
    placeholder,
    suggestions,
}: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [showHint, setShowHint] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowHint(true);
    };

    const handleSuggestion = (value: string) => {
        setQuery(value);
        setShowHint(false);
    };

    return (
        <div className="space-y-3">
            <form
                onSubmit={handleSubmit}
                role="search"
                aria-label="Search the Green Guide library"
                className="flex items-center gap-3 rounded-3xl border border-white/30 bg-white/10 px-5 py-3 text-white shadow-inner backdrop-blur"
            >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/10 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    Go
                </span>
                <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent text-base text-white placeholder-white/60 outline-none"
                />
                <button
                    type="submit"
                    className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
                >
                    Search
                </button>
            </form>
            <div className="flex flex-wrap gap-2 text-xs">
                {suggestions.map((suggestion) => (
                    <button
                        key={suggestion}
                        type="button"
                        onClick={() => handleSuggestion(suggestion)}
                        className="rounded-full border border-white/30 bg-white/10 px-3 py-1 font-semibold uppercase tracking-wide text-white/90 transition hover:bg-white/20"
                    >
                        {suggestion}
                    </button>
                ))}
            </div>
            {showHint && (
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    Full search is brewing; stay tuned.
                </p>
            )}
        </div>
    );
}
