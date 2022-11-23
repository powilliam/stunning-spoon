import { notFound } from "next/navigation";
import { product } from "@microfrontend/networking";
import Image from "next/image";

interface PageProps {
  readonly searchParams: Record<string, any>;
}

const formatter = Intl.NumberFormat("en-us", {
  currency: "USD",
  style: "currency",
});

export default async function Page({
  searchParams: { identifiers },
}: PageProps) {
  if (!identifiers) {
    notFound();
  }

  const products = await Promise.all(
    (typeof identifiers === "string" ? identifiers.split("") : identifiers).map(
      (identifier: string) => product(identifier)
    )
  );

  const total = products.reduce((total, product) => total + product.price, 0);

  return (
    <main>
      <p>total: {formatter.format(total)}</p>

      <ul>
        {(products || []).map((product) => {
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
            </li>
          );
        })}
      </ul>
    </main>
  );
}
