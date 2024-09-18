import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(request) {
  // if (request.method !== 'POST') { return res.sendStatus(405) }
  const body = await request.json()

  if (body.lineItems.length === 0) {
    return new Response("Error", {
      status: 405,
    })
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2020-08-27",
    })

    const session = await stripe.checkout.sessions.create({
      //use for local dev
      // success_url: "http://localhost:3000/success",
      // cancel_url: "http://localhost:3000/cancel",
      //use for hosted
      success_url: `https://www.rockyoupierecords.com/success`,
      cancel_url: `https://www.rockyoupierecords.com/cancel`,
      line_items: body.lineItems,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"], // Specify the allowed countries for shipping
      },
    })
    return NextResponse.json({ session })
  } catch (err) {
    // console.log("BROKED");
    console.log(err)
    return new Response("Error", {
      status: 405,
    })
  }
}
