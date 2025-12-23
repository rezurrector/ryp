export const dynamic = "force-dynamic";

import Stripe from "stripe";
import ProductCard from "./ProductCard";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2020-08-27",
  });

  let allPrices = [];
  let hasMore = true;
  let startingAfter = undefined;

  while (hasMore) {
    const res = await stripe.prices.list({
      expand: ["data.product"],
      limit: 100,
      starting_after: startingAfter,
    });

    allPrices.push(...res.data);

    hasMore = res.has_more;
    startingAfter = res.data.at(-1)?.id;
  }

  // Exclude premium products
  const filteredPrices = allPrices.filter((price) => {
    const product = price.product;
    return product?.metadata?.tier !== "premium";
  });

  return filteredPrices;
}

export default async function Store() {
  const products = await getStripeProducts();

  return (
    <main className="p-4 flex flex-col">
      <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </main>
  );
}
