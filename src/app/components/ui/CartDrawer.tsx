"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useCart } from "@/lib/cart-context";
import { computeOrderTotals, resolveUnitPrice } from "@/lib/pricing";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const getCountryFromCookie = () => {
  if (typeof document === "undefined") return "US";
  const match = document.cookie.match(/(?:^|;\s*)country=([^;]*)/);
  return match ? decodeURIComponent(match[1]).toUpperCase() : "US";
};

const formatPrice = (price: number, isNigeria: boolean) => {
  const currency = isNigeria ? "₦" : "$";
  return `${currency}${price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const imageFor = (img?: string, img_url?: string) =>
  img ? `/book-covers/${img}` : img_url || "/book-covers/fallback-image.jpg";

export const CartDrawer = () => {
  const {
    resolvedItems,
    totalQuantity,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart();
  const router = useRouter();
  const [country, setCountry] = useState("US");

  useEffect(() => {
    setCountry(getCountryFromCookie());
  }, []);

  const isNigeria = country === "NG";
  const totals = useMemo(
    () => computeOrderTotals(resolvedItems, country),
    [resolvedItems, country],
  );

  const handleCheckout = () => {
    closeCart();
    router.push("/checkout/cart");
  };

  return (
    <Drawer open={isOpen} direction="right" onOpenChange={(open) => !open && closeCart()}>
      <DrawerContent className="bg-background">
        <DrawerHeader className="border-b">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-lg flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary" />
              Your Cart
              {totalQuantity > 0 && (
                <span className="bg-secondary text-primary text-sm font-semibold rounded-full px-2 py-0.5">
                  {totalQuantity}
                </span>
              )}
            </DrawerTitle>
            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="cursor-pointer p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DrawerHeader>

        {resolvedItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Browse the bookshop and add some books to your cart.
            </p>
            <Button onClick={() => { closeCart(); router.push("/shop"); }}>
              Browse Books
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {resolvedItems.map((item) => {
                const unitPrice = resolveUnitPrice(item, country);
                const lineTotal = unitPrice * item.quantity;
                return (
                  <div
                    key={`${item.type}-${item.slug}`}
                    className="flex gap-4 items-start bg-gradient-card shadow-elegant border rounded-lg p-3"
                  >
                    <div className="w-16 h-20 overflow-hidden rounded-md shrink-0 bg-muted">
                      <Image
                        src={imageFor(item.img, item.img_url)}
                        alt={item.title}
                        width={64}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-semibold leading-snug line-clamp-2">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeItem(item.slug, item.type)}
                          aria-label={`Remove ${item.title}`}
                          className="cursor-pointer p-1 text-muted-foreground hover:text-destructive transition-colors shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-primary mt-1">
                        {formatPrice(unitPrice, isNigeria)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 bg-secondary rounded-md p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.type, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                            className="cursor-pointer w-6 h-6 flex items-center justify-center rounded hover:bg-secondary-foreground/10 disabled:opacity-40"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.type, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                            className="cursor-pointer w-6 h-6 flex items-center justify-center rounded hover:bg-secondary-foreground/10"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold">
                          {formatPrice(lineTotal, isNigeria)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <DrawerFooter className="border-t bg-secondary/50">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">
                    {formatPrice(totals.subtotal, isNigeria)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">
                    {formatPrice(totals.shipping, isNigeria)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (7.5%)</span>
                  <span className="font-semibold">
                    {formatPrice(totals.tax, isNigeria)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                  <span>Total</span>
                  <span className="bg-gradient-primary bg-clip-text">
                    {formatPrice(totals.total, isNigeria)}
                  </span>
                </div>
              </div>
              <Button size="lg" className="w-full" onClick={handleCheckout}>
                Checkout - {formatPrice(totals.total, isNigeria)}
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;