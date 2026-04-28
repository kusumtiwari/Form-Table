import { cn } from "@/lib/utils";
import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  suffix?: string;
  PrefixIcon?: React.ElementType;
  prefixIconClassname?: string;
  suffixIconClassname?: string;
  SuffixIcon?: React.ElementType;
  error?: string;
  errorVariant?: 'default' | 'table' | 'tooltip';
  inputClassName?: string;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  showErrorMessage?: boolean;
  addOnAfter?: React.ReactNode;
  intent?: 'default' | 'ghost';
  relativeErrorMessage?: boolean;
  errorClassName?: string;
  hidden?: boolean;

  // size?: 'default' | 'small';
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      type,
      error,
      errorClassName,
      prefix,
      suffix,
      PrefixIcon,
      prefixIconClassname,
      suffixIconClassname,
      SuffixIcon,
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
            "w-full inline-flex rounded-md gap-2 items-center rounded-4 border border-border px-3 py-2.5 text-16 bg-background focus-within:ring-[0.5px] focus-within:ring-offset-[0.5px] h-11",
            className,
            disabled && "bg-muted cursor-not-allowed opacity-50",
            error && "border-red-500"
          )}
        >
          {prefix && <span className="mr-1">{prefix}</span>}
          {PrefixIcon && <PrefixIcon className={cn("size-5", prefixIconClassname)} />}
          <input type={type} ref={ref} disabled={disabled} className="outline-none w-full bg-transparent" {...props} />
          {suffix && <span className="ml-1">{suffix}</span>}
          {SuffixIcon && <SuffixIcon className={cn("size-5", suffixIconClassname)} />}
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