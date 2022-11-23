"use client";

import { createContext, useState, useCallback, useMemo } from "react";
import { Product } from "@microfrontend/networking";

interface CardContext {
  readonly products: Array<Product>;
  readonly price: number;
  readonly identifiers: Array<number>;
  insert(product: Product): void;
  remove(product: Product): void;
}

interface BaseProviderProps {
  readonly children?: React.ReactNode;
}

export const CardContext = createContext<CardContext>({
  products: [],
  price: 0,
  identifiers: [],
  insert: () => {},
  remove: () => {},
});

export const CardProvider = ({ children }: BaseProviderProps) => {
  const [products, productsSet] = useState<CardContext["products"]>([]);

  const price = useMemo(
    () => products.reduce((total, product) => total + product.price, 0),
    [products]
  );

  const identifiers = useMemo(
    () => products.map((product) => product.id),
    [products]
  );

  const insert = useCallback<CardContext["insert"]>(
    (product) => productsSet((state) => [...state, product]),
    []
  );
  const remove = useCallback<CardContext["remove"]>(
    (product) =>
      productsSet((state) =>
        state.filter((productOnState) => productOnState.id !== product.id)
      ),
    []
  );

  return (
    <CardContext.Provider
      value={{ products, price, identifiers, insert, remove }}
    >
      {children}
    </CardContext.Provider>
  );
};
