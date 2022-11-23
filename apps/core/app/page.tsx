import { products } from "@microfrontend/networking";

import Card from "@/app/card";
import Items from "@/app/items";

export default async function Page() {
  const allProductsAvailable = await products();

  return (
    <main>
      <Card />
      <Items products={allProductsAvailable} />
    </main>
  );
}
