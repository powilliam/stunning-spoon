"use client";

import { useContext, useCallback } from "react";

import { CardContext } from "@/app/contexts";

const formatter = Intl.NumberFormat("en-us", {
  currency: "USD",
  style: "currency",
});

export default function Card() {
  const { price, identifiers } = useContext(CardContext);

  const onNavigateToCheckout = useCallback(() => {
    const url = new URL(process.env.CHECKOUT_FRONTEND_URL as string);

    for (const id of identifiers) {
      url.searchParams.append("identifiers", `${id}`);
    }

    window.location.assign(url);
  }, [identifiers]);

  return (
    <article>
      <p>total: {formatter.format(price)}</p>
      {!!identifiers.length && (
        <button onClick={onNavigateToCheckout}>Checkout</button>
      )}
    </article>
  );
}
