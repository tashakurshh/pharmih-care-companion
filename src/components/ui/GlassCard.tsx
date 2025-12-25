import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  style?: CSSProperties;
}

export const GlassCard = ({ 
  children, 
  className, 
  onClick, 
  hoverable = true,
  style,
}: GlassCardProps) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={cn(
        "glass-card rounded-3xl p-5",
        hoverable && "cursor-pointer",
        !hoverable && "hover:transform-none hover:shadow-glass",
        className
      )}
    >
      {children}
    </div>
  );
};
