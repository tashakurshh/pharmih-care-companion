import { Header } from "@/components/Header";
import { FeatureCard } from "@/components/FeatureCard";
import { OrderTrackingCard } from "@/components/OrderTrackingCard";
import { ProfileCard } from "@/components/ProfileCard";
import { PharmacyCard } from "@/components/PharmacyCard";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Pill, FileUp, Heart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen pb-28">
      <Header userName="Sarah" />

      <main className="px-5 py-4 space-y-6">
        {/* Hero Banner */}
        <section
          className="relative overflow-hidden rounded-3xl p-6 opacity-0 animate-fade-in"
          style={{
            background: "linear-gradient(135deg, hsl(168 76% 42%) 0%, hsl(180 70% 45%) 100%)",
          }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-2">Pharmih</h2>
            <p className="text-white/90 text-sm mb-4 max-w-[200px]">
              Care that Cares — Your health, delivered with love
            </p>
            <button className="bg-white/20 backdrop-blur-sm text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/30 transition-colors">
              Explore Now
            </button>
          </div>
          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute -right-4 top-12 w-20 h-20 rounded-full bg-white/10" />
          <div className="absolute right-20 -bottom-6 w-24 h-24 rounded-full bg-white/10" />
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            What do you need?
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <FeatureCard
              icon={Pill}
              title="Order Medicines"
              description="Get your prescriptions delivered in 30 minutes"
              color="teal"
              delay={100}
            />
            <FeatureCard
              icon={FileUp}
              title="Upload Prescription"
              description="Upload and we'll prepare your order"
              color="lavender"
              delay={150}
            />
            <FeatureCard
              icon={Heart}
              title="Health & Wellness"
              description="Vitamins, supplements & health essentials"
              color="mint"
              delay={200}
            />
            <FeatureCard
              icon={Sparkles}
              title="Cosmetics & Personal Care"
              description="Beauty and personal care products"
              color="coral"
              delay={250}
            />
          </div>
        </section>

        {/* Active Order */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Your Active Order
          </h2>
          <OrderTrackingCard
            orderId="PH2847"
            status="shipped"
            itemCount={3}
            estimatedDelivery="Today, 2:30 PM"
            delay={300}
          />
        </section>

        {/* Profile Preview */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Your Profile
          </h2>
          <ProfileCard
            name="Sarah Johnson"
            address="123 Wellness Street, Medical District, NY 10001"
            phone="+1 (555) 123-4567"
            medicalNotes="Allergic to penicillin"
            delay={350}
          />
        </section>

        {/* Pharmacy Partner */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Your Partner Pharmacy
          </h2>
          <PharmacyCard
            name="MedPlus Pharmacy"
            rating={4.8}
            distance="0.8 km"
            openHours="8 AM - 10 PM"
            isOpen={true}
            delay={400}
          />
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Index;
