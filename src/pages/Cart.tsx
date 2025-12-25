import { GlassCard } from "@/components/ui/GlassCard";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image?: string;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    brand: "Generic",
    price: 5.99,
    quantity: 2,
  },
  {
    id: "2",
    name: "Vitamin C 1000mg",
    brand: "Centrum",
    price: 12.99,
    quantity: 1,
  },
  {
    id: "3",
    name: "Digital Thermometer",
    brand: "Omron",
    price: 24.99,
    quantity: 1,
  },
];

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen pb-28 safe-top">
      <main className="px-5 py-6 space-y-6">
        <div className="opacity-0 animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground mb-2">Your Cart</h1>
          <p className="text-muted-foreground">
            {items.length} {items.length === 1 ? "item" : "items"} in cart
          </p>
        </div>

        {items.length === 0 ? (
          <GlassCard
            hoverable={false}
            className="opacity-0 animate-fade-in-up flex flex-col items-center py-12"
            style={{ animationDelay: "100ms" } as React.CSSProperties}
          >
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Cart is empty</h3>
            <p className="text-sm text-muted-foreground">Add some items to get started</p>
          </GlassCard>
        ) : (
          <>
            {/* Cart Items */}
            <section className="space-y-4">
              {items.map((item, index) => (
                <GlassCard
                  key={item.id}
                  hoverable={false}
                  className={cn("opacity-0 animate-fade-in-up")}
                  style={{ animationDelay: `${100 + index * 50}ms` } as React.CSSProperties}
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary-light to-secondary flex items-center justify-center">
                      <span className="text-3xl">💊</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.brand}
                      </p>
                      <p className="font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-2 bg-muted rounded-xl p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-card transition-colors"
                        >
                          <Minus className="w-4 h-4 text-foreground" />
                        </button>
                        <span className="w-6 text-center font-semibold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-card transition-colors"
                        >
                          <Plus className="w-4 h-4 text-foreground" />
                        </button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </section>

            {/* Order Summary */}
            <GlassCard
              hoverable={false}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "300ms" } as React.CSSProperties}
            >
              <h3 className="font-semibold text-foreground mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="text-foreground">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t border-border/50 flex justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-bold text-primary text-lg">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </GlassCard>

            {/* Checkout Button */}
            <button
              className="w-full btn-primary-gradient py-4 rounded-2xl text-lg font-semibold opacity-0 animate-fade-in-up"
              style={{ animationDelay: "350ms" } as React.CSSProperties}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Cart;
