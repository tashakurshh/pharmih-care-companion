import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.lovable.308aae18f2424e34970712a052286d01",
  appName: "Pharmih",
  webDir: "dist",
  server: {
    url: "https://308aae18-f242-4e34-9707-12a052286d01.lovableproject.com?forceHideBadge=true",
    cleartext: true,
  },
  ios: {
    contentInset: "automatic",
  },
  android: {
    backgroundColor: "#f0f9f9",
  },
};

export default config;
