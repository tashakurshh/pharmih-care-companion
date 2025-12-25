import { GlassCard } from "@/components/ui/GlassCard";
import { BottomNavigation } from "@/components/BottomNavigation";
import {
  User,
  MapPin,
  CreditCard,
  Clock,
  HelpCircle,
  Settings,
  LogOut,
  ChevronRight,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    icon: MapPin,
    label: "Saved Addresses",
    description: "Manage delivery locations",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: CreditCard,
    label: "Payment Methods",
    description: "Cards & wallets",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Clock,
    label: "Order History",
    description: "View past orders",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Shield,
    label: "Health Records",
    description: "Prescriptions & reports",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: HelpCircle,
    label: "Help & Support",
    description: "FAQs & customer care",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: Settings,
    label: "Settings",
    description: "App preferences",
    color: "text-gray-500",
    bg: "bg-gray-100",
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen pb-28 safe-top">
      <main className="px-5 py-6 space-y-6">
        {/* Profile Header */}
        <GlassCard
          hoverable={false}
          className="opacity-0 animate-fade-in"
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg shadow-primary/25">
              <span className="text-2xl font-bold text-white">SJ</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground">Sarah Johnson</h2>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">sarah.j@email.com</p>
            </div>
            <button className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </button>
          </div>
        </GlassCard>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-3 opacity-0 animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          {[
            { label: "Orders", value: "24" },
            { label: "Saved", value: "12" },
            { label: "Points", value: "450" },
          ].map((stat, index) => (
            <GlassCard
              key={stat.label}
              hoverable={false}
              className="text-center py-4"
            >
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        {/* Menu Items */}
        <section className="space-y-3">
          {menuItems.map((item, index) => (
            <GlassCard
              key={item.label}
              className={cn("opacity-0 animate-fade-in-up")}
              style={{ animationDelay: `${150 + index * 50}ms` } as React.CSSProperties}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    item.bg
                  )}
                >
                  <item.icon className={cn("w-6 h-6", item.color)} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </GlassCard>
          ))}
        </section>

        {/* Logout */}
        <button
          className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-destructive/10 text-destructive font-semibold hover:bg-destructive/20 transition-colors opacity-0 animate-fade-in"
          style={{ animationDelay: "500ms" }}
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Profile;
