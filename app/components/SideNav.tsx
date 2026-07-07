import SideNavContent from './SideNavContent';

/**
 * Persistent left sidebar shown at `sm:` and up — brand, an always-visible
 * quick search, primary nav, and the appearance toggle. Replaces the top
 * `Nav` bar at this breakpoint; on mobile, the same content is reachable
 * through `Nav`'s hamburger drawer (`MobileSideNavDrawer`) instead.
 */
export default function SideNav() {
    return (
        <aside className="sticky top-0 z-30 hidden h-screen w-65 shrink-0 flex-col gap-7 overflow-y-auto border-r border-stone-200/60 bg-white/70 p-6 backdrop-blur-md sm:flex dark:border-stone-800/60 dark:bg-zinc-950/30">
            <SideNavContent />
        </aside>
    );
}
