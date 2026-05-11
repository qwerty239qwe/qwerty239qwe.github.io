export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-10 border-t border-border first:border-t-0">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
