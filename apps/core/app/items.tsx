"use client";

import { useContext } from "react";
import Image from "next/image";
import { Product } from "@microfrontend/networking";

import { CardContext } from "@/app/contexts";

export interface ItemsProps {
  readonly products: Array<Product>;
}

function Items({ products }: ItemsProps) {
  const { products: cardProducts, insert, remove } = useContext(CardContext);

  return (
    <ul>
      {(products || []).map((product) => {
        const isOnCard = !!cardProducts.find((it) => it.id === product.id);

        return (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Image
              width={120}
              height={120}
              src={product.image}
              alt={product.title}
            />
            <button
              onClick={() => (isOnCard ? remove(product) : insert(product))}
            >
              {isOnCard ? "Remove" : "Insert"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Items;
