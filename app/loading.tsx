export default function Loading() {
  return (
    <div
      className="flex min-h-[45vh] items-center justify-center bg-black"
      role="status"
      aria-label="Loading"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-brand-500/25 border-t-brand-300" />
    </div>
  );
}
