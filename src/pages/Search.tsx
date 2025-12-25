import { useState } from "react";
import { Search as SearchIcon, Mic, X } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { BottomNavigation } from "@/components/BottomNavigation";
import { cn } from "@/lib/utils";

const popularSearches = [
  "Paracetamol",
  "Vitamin C",
  "Band-Aid",
  "Cough Syrup",
  "Thermometer",
  "Pain Relief",
];

const categories = [
  { name: "Fever & Pain", emoji: "🤒" },
  { name: "Cold & Flu", emoji: "🤧" },
  { name: "Vitamins", emoji: "💊" },
  { name: "First Aid", emoji: "🩹" },
  { name: "Skin Care", emoji: "✨" },
  { name: "Baby Care", emoji: "👶" },
];

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen pb-28 safe-top">
      <main className="px-5 py-6 space-y-6">
        {/* Search Header */}
        <div className="opacity-0 animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Search Medicines
          </h1>

          {/* Search Bar */}
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search medicines, health products..."
              className="w-full pl-12 pr-20 py-4 rounded-2xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 shadow-sm transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
              <button className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Mic className="w-4 h-4 text-primary" />
              </button>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <section className="opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Popular Searches
          </h2>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-4 py-2 rounded-xl bg-card border border-border/50 text-sm text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all"
              >
                {term}
              </button>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Browse Categories
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => (
              <GlassCard
                key={category.name}
                className={cn(
                  "opacity-0 animate-fade-in-up flex items-center gap-3 p-4"
                )}
                style={{ animationDelay: `${250 + index * 50}ms` } as React.CSSProperties}
              >
                <span className="text-2xl">{category.emoji}</span>
                <span className="font-medium text-foreground">{category.name}</span>
              </GlassCard>
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Search;
