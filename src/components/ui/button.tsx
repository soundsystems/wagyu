import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 hover:text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-white dark:border-input dark:bg-input/30 dark:hover:bg-input/50 dark:hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-white",
        ghost:
          "hover:bg-accent hover:text-white dark:hover:bg-accent/50 dark:hover:text-white",
        link: "text-primary underline-offset-4 hover:text-white hover:underline",
        luxury:
          "bg-luxury-gold text-luxury-black hover:bg-luxury-champagne hover:text-luxury-black",
        "luxury-outline":
          "border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white",
        "meet-family":
          "bg-meet-family text-luxury-black hover:text-luxury-black [filter:brightness(1.2)] hover:[filter:brightness(1.4)]",
        "luxury-olive":
          "bg-luxury-olive text-white hover:bg-luxury-burgundy hover:text-white",
        "luxury-burgundy":
          "bg-luxury-burgundy text-white hover:text-white [filter:brightness(1.2)] hover:[filter:brightness(1.4)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button"
      {...props}
    />
  )
}

export { Button, buttonVariants }
