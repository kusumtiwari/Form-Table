import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

type ButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean
  isLoading?: boolean
}

function Button({
  className,
  asChild = false,
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      disabled={disabled || isLoading}
      className={cn(
        "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin size-4 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>

          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  )
}

export { Button }