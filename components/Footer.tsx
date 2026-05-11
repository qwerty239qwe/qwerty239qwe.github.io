export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 text-sm text-muted flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>&copy; {year} yute</span>
        <span>Built with Next.js &middot; Hosted on GitHub Pages</span>
      </div>
    </footer>
  );
}
