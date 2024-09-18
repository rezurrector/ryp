import Stripe from "stripe";
import AddToCart from "./addToCart";

export async function generateStaticParams() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2020-08-27",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
    limit: 14,
  });
  const prices = res.data;

  // console.log(prices);
  return prices.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }) {
  const { id } = params;

  return <AddToCart price_id={id} />;
}
