import { GlassCard } from "@/components/ui/GlassCard";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

interface OrderTrackingCardProps {
  orderId: string;
  status: OrderStatus;
  itemCount: number;
  estimatedDelivery: string;
  delay?: number;
}

const statusConfig = {
  pending: {
    label: "Order Placed",
    icon: Clock,
    color: "bg-amber-100 text-amber-700",
    progress: 25,
  },
  processing: {
    label: "Processing",
    icon: Package,
    color: "bg-blue-100 text-blue-700",
    progress: 50,
  },
  shipped: {
    label: "On the Way",
    icon: Truck,
    color: "bg-primary-light text-primary",
    progress: 75,
  },
  delivered: {
    label: "Delivered",
    icon: CheckCircle,
    color: "bg-emerald-100 text-emerald-700",
    progress: 100,
  },
};

export const OrderTrackingCard = ({
  orderId,
  status,
  itemCount,
  estimatedDelivery,
  delay = 0,
}: OrderTrackingCardProps) => {
  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <GlassCard
      className={cn(
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${delay}ms` } as React.CSSProperties}
      hoverable={false}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Order #{orderId}
          </p>
          <p className="font-semibold text-foreground">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </p>
        </div>
        <div
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium",
            config.color
          )}
        >
          <StatusIcon className="w-4 h-4" />
          {config.label}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-500"
            style={{ width: `${config.progress}%` }}
          />
        </div>
      </div>

      {/* Timeline dots */}
      <div className="flex justify-between mb-4 px-1">
        {(["pending", "processing", "shipped", "delivered"] as const).map(
          (step, index) => {
            const isActive = statusConfig[status].progress >= statusConfig[step].progress;
            const StepIcon = statusConfig[step].icon;
            return (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  <StepIcon className="w-4 h-4" />
                </div>
                <span className={cn(
                  "text-[10px] mt-1.5",
                  isActive ? "text-foreground font-medium" : "text-muted-foreground"
                )}>
                  {statusConfig[step].label}
                </span>
              </div>
            );
          }
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border/50">
        <span className="text-sm text-muted-foreground">Est. Delivery</span>
        <span className="text-sm font-semibold text-foreground">
          {estimatedDelivery}
        </span>
      </div>
    </GlassCard>
  );
};
