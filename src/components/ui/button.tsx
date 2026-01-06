import type { ButtonHTMLAttributes } from "react";

export function ButtonBG({
  children,
  className,
  ...props
}: {
  children: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-primary cursor-pointer text-black px-4 py-2 rounded-2xl text-[16px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
