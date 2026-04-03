import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const stripePromise = loadStripe("TU_PUBLIC_STRIPE_KEY");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  async function checkout() {
    const stripe = await stripePromise;
    // Aquí normalmente llamas a tu backend para crear sesión, pero para ejemplo simple:
    alert("Aquí iría Stripe Checkout");
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Carrito</h1>
      {cart.length === 0 ? <p>Carrito vacío</p> :
        <>
          {cart.map((item, i) => <p key={i}>{item.name} - {item.price}€</p>)}
          <p>Total: {total}€</p>
          <button onClick={checkout}>Pagar con Stripe</button>
        </>
      }
    </div>
  );
}
