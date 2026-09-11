import type { Metadata } from "next";
import Link from "next/link";
import { VideoCard } from "@/components/video-card";
import { guideCategories, videos } from "@/lib/videos";

type GuidesPageProps = { searchParams?: { category?: string } };

export const metadata: Metadata = {
  title: "Guides & Videos",
  description: "Cricket equipment guides, turf planning, net installation tips, and project videos from Cricket Topper."
};

export default function GuidesPage({ searchParams }: GuidesPageProps) {
  const selectedCategory = searchParams?.category || "all";
  const activeCategory = guideCategories.some((category) => category.id === selectedCategory) ? selectedCategory : "all";
  const filteredVideos = activeCategory === "all" ? videos : videos.filter((video) => video.categoryIds.some((categoryId) => categoryId === activeCategory));
  const featuredVideo = videos.find((video) => video.featured);
  const libraryVideos = filteredVideos.filter((video) => video.id !== featuredVideo?.id);

  return (
    <main className="relative overflow-hidden bg-black pb-20 pt-12 sm:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(29,59,114,0.2),transparent_32%)]" />
      <div className="container-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Cricket Topper Guides</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">Learn more before you choose.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">Practical advice for cricket equipment, turf projects, net installations, and sports infrastructure planning.</p>
        </div>

        <nav className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Guide categories">
          {guideCategories.map((category) => (
            <Link key={category.id} href={category.id === "all" ? "/guides" : `/guides?category=${category.id}`} className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition ${activeCategory === category.id ? "border-brand-500 bg-brand-500 text-black" : "border-brand-500/25 text-stone-300 hover:border-brand-500/50 hover:text-brand-300"}`}>
              {category.label}
            </Link>
          ))}
        </nav>

        {activeCategory === "all" && featuredVideo ? (
          <section className="mt-10 grid overflow-hidden rounded-2xl border border-brand-500/25 bg-white/[0.04] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative aspect-video bg-black lg:aspect-auto">
              <img src={`https://i.ytimg.com/vi/${featuredVideo.id}/hqdefault.jpg`} alt={featuredVideo.title} className="h-full w-full object-cover" />
              <a href={featuredVideo.url} target="_blank" rel="noreferrer" className="absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/25" aria-label={`Watch ${featuredVideo.title}`}>
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-xl text-black shadow-[0_8px_24px_rgba(0,0,0,0.4)]">&gt;</span>
              </a>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Featured Guide</p>
              <h2 className="mt-4 text-2xl font-semibold leading-8 text-white sm:text-3xl">{featuredVideo.title}</h2>
              <p className="mt-4 text-sm leading-6 text-stone-400">A practical guide for understanding turf business planning and improving project decisions.</p>
              <a href={featuredVideo.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-brand-400">Watch Featured Guide</a>
            </div>
          </section>
        ) : null}

        <section className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">{activeCategory === "all" ? "All Guides" : guideCategories.find((category) => category.id === activeCategory)?.label}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Useful knowledge from the field.</h2>
            </div>
            <p className="text-sm text-stone-500">{filteredVideos.length} videos</p>
          </div>
          {libraryVideos.length > 0 ? <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{libraryVideos.map((video) => <VideoCard key={video.id} {...video} />)}</div> : <div className="mt-6 rounded-2xl border border-brand-500/15 bg-white/[0.03] p-8 text-center text-sm text-stone-400">More guides in this category are coming soon.</div>}
        </section>
      </div>
    </main>
  );
}
