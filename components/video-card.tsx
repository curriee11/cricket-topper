import Link from "next/link";

type VideoCardProps = {
  id: string;
  title: string;
  category: string;
  url: string;
};

export function VideoCard({ id, title, category, url }: VideoCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-2xl border border-brand-500/20 bg-white/[0.04] transition hover:-translate-y-1 hover:border-brand-500/45 hover:shadow-[0_16px_40px_rgba(212,175,55,0.12)]"
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        <img
          src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-xl text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            <span className="ml-1" aria-hidden="true">▶</span>
          </span>
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">{category}</p>
        <h2 className="mt-3 text-lg font-semibold leading-7 text-white">{title}</h2>
        <p className="mt-4 text-sm font-semibold text-stone-400 transition group-hover:text-brand-300">
          Watch on YouTube <span aria-hidden="true">↗</span>
        </p>
      </div>
    </a>
  );
}
