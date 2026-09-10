import type { Metadata } from "next";
import { VideoCard } from "@/components/video-card";
import { videos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Guides & Videos",
  description: "Cricket equipment guides, net measurement tips, and project videos from Cricket Topper."
};

export default function GuidesPage() {
  return (
    <main className="relative overflow-hidden bg-black pb-20 pt-12 sm:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(29,59,114,0.2),transparent_32%)]" />
      <div className="container-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Guides & Videos</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">Learn more before you choose.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
            Practical cricket equipment guidance, net measurement tips, and project videos from Cricket Topper.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => <VideoCard key={video.id} {...video} />)}
        </div>
      </div>
    </main>
  );
}
