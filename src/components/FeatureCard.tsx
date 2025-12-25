import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "teal" | "coral" | "lavender" | "mint";
  onClick?: () => void;
  delay?: number;
}

const colorVariants = {
  teal: {
    bg: "bg-primary/10",
    icon: "text-primary",
    iconBg: "from-primary to-primary-glow",
  },
  coral: {
    bg: "bg-accent",
    icon: "text-accent-foreground",
    iconBg: "from-orange-400 to-rose-400",
  },
  lavender: {
    bg: "bg-secondary",
    icon: "text-secondary-foreground",
    iconBg: "from-violet-400 to-purple-500",
  },
  mint: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    iconBg: "from-emerald-400 to-teal-500",
  },
};

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color = "teal",
  onClick,
  delay = 0,
}: FeatureCardProps) => {
  const colors = colorVariants[color];

  return (
    <GlassCard
      onClick={onClick}
      className={cn(
        "opacity-0 animate-fade-in-up",
        "active:scale-[0.98] transition-transform"
      )}
      style={{ animationDelay: `${delay}ms` } as React.CSSProperties}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0",
            "bg-gradient-to-br shadow-lg",
            colors.iconBg
          )}
        >
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-foreground mb-1">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </GlassCard>
  );
};
