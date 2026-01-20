import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, ...props }: ContainerProps) => (
  <div
    className={cn("w-full m-0 p-0", className)}
    {...props}
  />
);
