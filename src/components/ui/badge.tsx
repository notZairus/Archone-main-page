import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border border-border rounded-none px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 text-zinc-100",
        secondary: "bg-zinc-800 text-zinc-300",
        outline: "bg-transparent text-zinc-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
