import { GlassCard } from "@/components/ui/GlassCard";
import { MapPin, Phone, FileText, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  name: string;
  avatar?: string;
  address: string;
  phone: string;
  medicalNotes?: string;
  delay?: number;
}

export const ProfileCard = ({
  name,
  avatar,
  address,
  phone,
  medicalNotes,
  delay = 0,
}: ProfileCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <GlassCard
      className={cn("opacity-0 animate-fade-in-up")}
      style={{ animationDelay: `${delay}ms` } as React.CSSProperties}
    >
      <div className="flex items-center gap-4 mb-5">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-2xl object-cover shadow-lg"
          />
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg shadow-primary/25">
            <span className="text-xl font-bold text-white">{initials}</span>
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">View & edit profile</p>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
          <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
              Delivery Address
            </p>
            <p className="text-sm text-foreground">{address}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
          <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
              Phone Number
            </p>
            <p className="text-sm text-foreground">{phone}</p>
          </div>
        </div>

        {medicalNotes && (
          <div className="flex items-start gap-3 p-3 rounded-xl bg-accent/50">
            <FileText className="w-5 h-5 text-accent-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                Medical Notes
              </p>
              <p className="text-sm text-foreground">{medicalNotes}</p>
            </div>
          </div>
        )}
      </div>
    </GlassCard>
  );
};
