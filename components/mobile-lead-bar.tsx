import { DISPLAY_PHONE, PHONE_NUMBER } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";

export function MobileLeadBar({ productName }: { productName: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur xl:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="rounded-2xl bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
        >
          Call {DISPLAY_PHONE}
        </a>
        <a
          href={buildWhatsAppLink(productName)}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-brand-400/30 bg-brand-500/10 px-4 py-3 text-center text-sm font-semibold text-brand-200 transition hover:bg-brand-500/20"
        >
          WhatsApp Enquiry
        </a>
      </div>
    </div>
  );
}
