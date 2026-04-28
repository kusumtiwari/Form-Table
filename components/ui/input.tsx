import { cn } from "@/lib/utils";
import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  inputClassName?: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  showErrorMessage?: boolean;
  errorClassName?: string;
  hidden?: boolean;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      type,
      error,
      errorClassName,
      disabled,
      containerClassName,
      showErrorMessage = true,
      hidden,
      ...props
    },
    ref
  ) => {
    if (hidden) return null;

    return (
      <div className={cn(containerClassName)}>
        <div
          className={cn(
            "w-full inline-flex rounded-md gap-2 items-center rounded-4 border px-3 py-2.5 focus-within:ring-[0.5px] focus-within:ring-offset-[0.5px] h-12",
            className,
            disabled && "bg-muted cursor-not-allowed opacity-50",
            error && "border-red-500"
          )}
        >
          <input type={type} ref={ref} disabled={disabled} className="outline-none w-full bg-transparent" {...props} />
        </div>
        {error && showErrorMessage && (
          <span className={cn("text-red-500 text-sm mt-1 block", errorClassName)}>
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };