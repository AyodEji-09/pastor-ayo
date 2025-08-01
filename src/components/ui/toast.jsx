import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = ({ className, ...props }) => (
  <ToastPrimitives.Viewport
    
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
);
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = ({ className, variant, ...props }) => {
  return (
    <ToastPrimitives.Root
      
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
};
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = ({ className, ...props }) => (
  <ToastPrimitives.Action
    
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
);
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = ({ className, ...props }) => (
  <ToastPrimitives.Close
    
    className={cn(
      "tw-absolute tw-right-2 tw-top-2 tw-rounded-md tw-p-1 tw-text-foreground/50 tw-opacity-0 tw-transition-opacity tw-hover:text-foreground tw-focus:opacity-100 tw-focus:outline-none tw-focus:ring-2 tw-group-hover:opacity-100 tw-group-[.destructive]:text-red-300 tw-group-[.destructive]:hover:text-red-50 tw-group-[.destructive]:focus:ring-red-400 tw-group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="tw-h-4 tw-w-4" />
  </ToastPrimitives.Close>
);
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = ({ className, ...props }) => (
  <ToastPrimitives.Title
    
    className={cn("tw-text-sm tw-font-semibold", className)}
    {...props}
  />
);
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = ({ className, ...props }) => (
  <ToastPrimitives.Description
    
    className={cn("tw-text-sm tw-opacity-90", className)}
    {...props}
  />
);
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
