import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = ({ className, children, ...props }) => (
  <SelectPrimitive.Trigger
    
    className={cn(
      "tw-flex tw-h-10 tw-w-full tw-items-center tw-justify-between tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background tw-placeholder:text-muted-foreground tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-ring tw-focus:ring-offset-2 tw-disabled:cursor-not-allowed tw-disabled:opacity-50 tw-[&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="tw-h-4 tw-w-4 tw-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = ({ className, ...props }) => (
  <SelectPrimitive.ScrollUpButton
    
    className={cn(
      "tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
);
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = ({ className, ...props }) => (
  <SelectPrimitive.ScrollDownButton
    
    className={cn(
      "tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="tw-h-4 tw-w-4" />
  </SelectPrimitive.ScrollDownButton>
);
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = (
  { className, children, position = "popper", ...props },
) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      
      className={cn(
        "tw-relative tw-z-50 tw-max-h-96 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-text-popover-foreground tw-shadow-md tw-data-[state=open]:animate-in tw-data-[state=closed]:animate-out tw-data-[state=closed]:fade-out-0 tw-data-[state=open]:fade-in-0 tw-data-[state=closed]:zoom-out-95 tw-data-[state=open]:zoom-in-95 tw-data-[side=bottom]:slide-in-from-top-2 tw-data-[side=left]:slide-in-from-right-2 tw-data-[side=right]:slide-in-from-left-2 tw-data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "tw-data-[side=bottom]:translate-y-1 tw-data-[side=left]:-translate-x-1 tw-data-[side=right]:translate-x-1 tw-data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "tw-p-1",
          position === "popper" &&
            "tw-h-[var(--radix-select-trigger-height)] tw-w-full tw-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = ({ className, ...props }) => (
  <SelectPrimitive.Label
    
    className={cn("tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-font-semibold", className)}
    {...props}
  />
);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = ({ className, children, ...props }) => (
  <SelectPrimitive.Item
    
    className={cn(
      "tw-relative tw-flex tw-w-full tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-focus:bg-accent tw-focus:text-accent-foreground tw-data-[disabled]:pointer-events-none tw-data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="tw-h-4 tw-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = ({ className, ...props }) => (
  <SelectPrimitive.Separator
    
    className={cn("-tw-mx-1 tw-my-1 tw-h-px tw-bg-muted", className)}
    {...props}
  />
);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
