const stripe = Stripe("YOUR_PUBLISHABLE_KEY");

async function subscribe() {
  const response = await fetch("https://your-worker-url.workers.dev/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      priceId: "YOUR_PRICE_ID"
    })
  });

  const session = await response.json();
  stripe.redirectToCheckout({ sessionId: session.id });
}

document.getElementById("subscribe-btn").addEventListener("click", subscribe);
document.getElementById("pricing-subscribe").addEventListener("click", subscribe);
