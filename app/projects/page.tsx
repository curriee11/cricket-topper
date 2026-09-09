import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/institutions";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Selected sports goods and cricket net supply projects by Cricket Topper."
};

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden bg-black pb-20 pt-12 sm:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(29,59,114,0.2),transparent_32%)]" />
      <div className="container-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
            Our Projects
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-6xl">
            Sports supply for serious facilities.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
            From cricket equipment to sports nets, we support institutions and
            academies with practical supply solutions for training and play.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="surface-strong rounded-2xl border-brand-500/20 p-6 shadow-glow transition hover:-translate-y-1 hover:border-brand-500/45"
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-brand-300">
                PROJECT 0{index + 1}
              </p>
              <h2 className="mt-8 text-2xl font-semibold leading-8 text-white">
                {project.name}
              </h2>
              <div className="mt-6 border-t border-brand-500/15 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Scope
                </p>
                <p className="mt-2 text-sm text-stone-300">{project.detail}</p>
                {"url" in project ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-brand-300 transition hover:text-brand-200"
                  >
                    View project <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-brand-500/20 pt-8">
          <p className="text-sm leading-7 text-stone-400">
            Need equipment or net supply for an institution, academy, or sports
            facility?
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex rounded-full border border-brand-500/35 px-5 py-3 text-sm font-semibold text-brand-300 transition hover:bg-brand-500/10"
          >
            Start an Enquiry
          </Link>
        </div>
      </div>
    </main>
  );
}
