import {
  ADDRESS,
  BUSINESS_HOURS,
  CITY,
  COMPANY_NAME,
  DISPLAY_PHONE,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  YOUTUBE_SUBSCRIBERS,
} from "@/lib/constants";

const reviews = [
  {
    author: "Vikas Chawla",
    quote: "Good products with excellent quality and service.",
  },
  {
    author: "Honey Verma",
    quote: "Such a strong variety of world-level sports products.",
  },
  {
    author: "Gurpreet Singh",
    quote: "Great customer dealing and best prices for sports goods.",
  },
];

export function BusinessHighlights() {
  return (
    <section className="bg-black py-16">
      <div className="container-shell">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="surface rounded-[32px] p-6 shadow-luxe sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
              Visit The Store
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              {COMPANY_NAME}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              We at cricket topper manufacture world class carrom boards,
              cricket bat, cricket accessories, football, Badminton rackets,
              sports nets for all games, sports wears like track suit, tshirts,
              lower and shorts. Along with that, we are authorized Distributors
              for SS TON Cricket, MRF Cricket bats, Adidas Cricket, Nivia
              products, Garware Sportiva sports nets.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
              Since 1985 · Jalandhar, Punjab
              <br />
              Manufacturer &amp; Wholesaler · Worldwide Shipping
              <br />1 Lac+ Satisfied Customers
            </p>
            <div className="mt-6 rounded-2xl border border-brand-500/15 bg-white/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">
                Our Story
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Since 1985, Cricket Topper has grown into a trusted manufacturer
                and wholesaler serving cricketers, academies, schools, clubs, and
                sports facilities with quality equipment and dependable support.
              </p>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-brand-500/15 bg-brand-50/60 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Address
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {ADDRESS}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-brand-500/15 bg-white/80 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Phone
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {DISPLAY_PHONE}
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-500/15 bg-white/80 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Hours
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {BUSINESS_HOURS}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="surface rounded-[32px] p-6 shadow-luxe sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
              Trusted By Local Players
            </p>
            <div className="mt-4 flex flex-wrap items-end gap-4">
              <p className="text-5xl font-semibold text-slate-950">
                {GOOGLE_RATING}
              </p>
              <div className="pb-1">
                <p className="text-sm text-slate-700">Google rating</p>
                <p className="text-sm text-slate-500">
                  {GOOGLE_REVIEW_COUNT} reviews
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-brand-500/15 bg-brand-50/60 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Experience
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  Since 1985
                </p>
              </div>
              <div className="rounded-2xl border border-brand-500/15 bg-brand-50/60 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Business Type
                </p>
                <p className="mt-2 text-sm font-medium text-slate-950">
                  Manufacturer & Trader
                </p>
              </div>
              <div className="rounded-2xl border border-brand-500/15 bg-brand-50/60 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Speciality
                </p>
                <p className="mt-2 text-sm font-medium text-slate-950">
                  Bats, Nets, Turf & Balls
                </p>
              </div>
              <div className="rounded-2xl border border-brand-500/15 bg-brand-50/60 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  YouTube Community
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  {YOUTUBE_SUBSCRIBERS}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">Subscribers</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {reviews.map((review) => (
                <div
                  key={review.author}
                  className="rounded-2xl border border-brand-500/15 bg-white/80 p-4"
                >
                  <p className="text-sm leading-6 text-slate-700">
                    "{review.quote}"
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-500">
                    {review.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
