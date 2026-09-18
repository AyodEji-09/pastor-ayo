"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { resolveCartItem, type ResolvedCartItem } from "@/lib/pricing";

export type CartItemRef = {
  slug: string;
  type: "book" | "bundle";
  quantity: number;
};

type CartContextValue = {
  items: CartItemRef[];
  resolvedItems: ResolvedCartItem[];
  totalQuantity: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (slug: string, type: "book" | "bundle", quantity?: number) => void;
  removeItem: (slug: string, type: "book" | "bundle") => void;
  updateQuantity: (slug: string, type: "book" | "bundle", quantity: number) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "pastor-ayo-cart";

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItemRef[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const valid = parsed
            .filter(
              (i) =>
                i &&
                typeof i.slug === "string" &&
                (i.type === "book" || i.type === "bundle") &&
                Number.isFinite(Number(i.quantity)),
            )
            .map((i) => ({
              slug: String(i.slug),
              type: i.type as "book" | "bundle",
              quantity: Math.max(1, Math.floor(Number(i.quantity))),
            }));
          setItems(valid);
        }
      }
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage may be unavailable; cart still works in-memory
    }
  }, [items, hydrated]);

  const addItem = useCallback(
    (slug: string, type: "book" | "bundle", quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.slug === slug && i.type === type);
        if (existing) {
          return prev.map((i) =>
            i.slug === slug && i.type === type
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          );
        }
        return [...prev, { slug, type, quantity: Math.max(1, quantity) }];
      });
      setIsOpen(true);
    },
    [],
  );

  const removeItem = useCallback((slug: string, type: "book" | "bundle") => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.type === type)));
  }, []);

  const updateQuantity = useCallback(
    (slug: string, type: "book" | "bundle", quantity: number) => {
      setItems((prev) =>
        prev.map((i) =>
          i.slug === slug && i.type === type
            ? { ...i, quantity: Math.max(1, Math.floor(quantity)) }
            : i,
        ),
      );
    },
    [],
  );

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const resolvedItems = useMemo(
    () =>
      items
        .map((i) => resolveCartItem(i))
        .filter((i): i is ResolvedCartItem => Boolean(i)),
    [items],
  );

  const totalQuantity = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      resolvedItems,
      totalQuantity,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      resolvedItems,
      totalQuantity,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}