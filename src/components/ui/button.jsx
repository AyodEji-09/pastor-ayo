import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-whitespace-nowrap tw-rounded-lg tw-text-sm tw-font-medium tw-transition-smooth tw-focus-visible:outline-none tw-focus-visible:ring-2 tw-focus-visible:ring-ring tw-focus-visible:ring-offset-2 tw-disabled:pointer-events-none tw-disabled:opacity-50 tw-[&_svg]:pointer-events-none tw-[&_svg]:size-4 tw-[&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "tw-bg-gradient-primary tw-text-primary-foreground hover:tw-shadow-elegant tw-transform hover:tw-scale-[1.02] active:tw-scale-[0.98]",
        destructive:
          "tw-bg-destructive tw-text-destructive-foreground tw-hover:bg-destructive/90 tw-hover:shadow-lg",
        outline:
          "tw-border tw-border-input tw-bg-background tw-hover:bg-accent tw-hover:text-accent-foreground tw-hover:shadow-md",
        secondary:
          "tw-bg-secondary tw-text-secondary-foreground tw-hover:bg-secondary/80 tw-hover:shadow-sm",
        ghost: "tw-hover:bg-accent tw-hover:text-accent-foreground",
        link: "tw-text-primary tw-underline-offset-4 tw-hover:underline",
        checkout:
          "tw-bg-black tw-text-white tw-hover:shadow-elegant tw-transform hover:scale-[1.02] tw-active:scale-[0.98] tw-font-semibold",
        success:
          "tw-bg-success tw-text-success-foreground tw-hover:bg-success/90 tw-hover:shadow-lg",
      },
      size: {
        default: "tw-h-10 tw-px-4 tw-py-2",
        sm: "tw-h-9 tw-rounded-md tw-px-3",
        lg: "tw-h-11 tw-rounded-md tw-px-8",
        icon: "tw-h-10 tw-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = ({ className, variant, size, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
Button.displayName = "Button";

export { Button, buttonVariants };
