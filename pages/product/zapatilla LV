import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchProduct();
  }, [id]);

  async function fetchProduct() {
    const { data } = await supabase.from("products").select("*").eq("id", id).single();
    setProduct(data || null);
  }

  if (!product) return <p>Cargando...</p>;

  // Guardamos en carrito localStorage
  function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto añadido al carrito!");
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img src={product.image} style={{ width: '300px' }} />
      <p>{product.price}€</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Añadir al carrito</button>
    </div>
  );
}
