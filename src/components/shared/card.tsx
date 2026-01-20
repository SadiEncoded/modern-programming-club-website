import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn(
      "glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-primary/60",
      className,
    )}
    {...props}
  />
);
