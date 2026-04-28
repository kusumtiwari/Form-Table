import React, { forwardRef, useState } from "react";
import { Input, InputProps } from "../ui/input";
import { cn } from "@/lib/utils";
import { EyeClosedIcon, EyeIcon, EyeOff, EyeOffIcon } from "lucide-react";


type PasswordInputProps = InputProps & {
  className?: string;
  error?: string;
  placeholder?: string;
};

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, error, placeholder, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <div className="relative w-full">
        <Input
          ref={ref}
          className={className}
          error={error}
          placeholder={placeholder}
           {...props}                                  
          type={showPassword ? "text" : "password"}
        />
        <span
          aria-hidden
          className={cn(
            "cursor-pointer absolute right-3 flex items-center text-muted-foreground hover:text-foreground",
            error ? "top-3" : "top-1/2 -translate-y-1/2" 
          )}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeIcon className="size-4" />
          ) : (
            <EyeOffIcon className="size-4" />
          )}
        </span>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
