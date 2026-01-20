type PageHeadingProps = {
  title: string;
  subtitle?: string;
};

export const PageHeading = ({ title, subtitle }: PageHeadingProps) => (
  <header className="mb-10 flex flex-col gap-4">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
      DICPC
    </p>
    <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
      {title}
    </h1>
    {subtitle && (
      <p className="max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
    )}
  </header>
);

