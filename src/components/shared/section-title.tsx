import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) => {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={cn("flex max-w-3xl flex-col gap-3", alignment)}>
      {eyebrow && (
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 
        className="text-3xl font-black text-foreground sm:text-4xl tracking-tight leading-tight"
        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">{description}</p>
      )}
    </div>
  );
};
