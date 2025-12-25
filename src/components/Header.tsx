import { Bell, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  userName?: string;
}

export const Header = ({ userName = "there" }: HeaderProps) => {
  return (
    <header className="px-5 pt-4 pb-2 safe-top">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Good morning,</p>
          <h1 className="text-xl font-bold text-foreground">Hi {userName} 👋</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative w-11 h-11 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-sm border border-border/50 hover:bg-card transition-colors">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">2</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
