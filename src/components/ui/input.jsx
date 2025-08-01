import * as React from "react";

import { cn } from "@/lib/utils";

const Input = ({ className, type, ...props }) => {
  return (
    <input
      type={type}
      className={cn(
        "tw-flex tw-h-10 tw-w-full tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-base tw-ring-offset-background tw-file:border-0 tw-file:bg-transparent tw-file:text-sm tw-file:font-medium tw-file:text-foreground tw-placeholder:text-muted-foreground tw-focus-visible:outline-none tw-focus-visible:ring-2 tw-focus-visible:ring-ring tw-focus-visible:ring-offset-2 tw-disabled:cursor-not-allowed tw-disabled:opacity-50 tw-md:text-sm",
        className
      )}
      
      {...props}
    />
  );
};
Input.displayName = "Input";

export { Input };
