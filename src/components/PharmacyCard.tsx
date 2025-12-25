import { GlassCard } from "@/components/ui/GlassCard";
import { Store, Star, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface PharmacyCardProps {
  name: string;
  rating: number;
  distance: string;
  openHours: string;
  isOpen: boolean;
  image?: string;
  delay?: number;
}

export const PharmacyCard = ({
  name,
  rating,
  distance,
  openHours,
  isOpen,
  image,
  delay = 0,
}: PharmacyCardProps) => {
  return (
    <GlassCard
      className={cn("opacity-0 animate-fade-in-up")}
      style={{ animationDelay: `${delay}ms` } as React.CSSProperties}
    >
      <div className="flex gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-2xl object-cover shadow-md"
          />
        ) : (
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-primary-light flex items-center justify-center shadow-md">
            <Store className="w-8 h-8 text-primary" />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
            <span
              className={cn(
                "text-xs font-medium px-2 py-0.5 rounded-full shrink-0",
                isOpen
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700"
              )}
            >
              {isOpen ? "Open" : "Closed"}
            </span>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
            <span className="text-muted-foreground text-sm">• Partner Pharmacy</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{openHours}</span>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
