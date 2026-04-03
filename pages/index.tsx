import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => { fetchProducts() }, []);

  async function fetchProducts() {
    const { data } = await supabase.from("products").select("*");
    setProducts(data || []);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="text-5xl mb-8">EstiloUrbano</h1>
      <div className="grid">
        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`}>
            <div className="product-card">
              <img src={p.image} alt={p.name} style={{ width: '100%' }} />
              <h2>{p.name}</h2>
              <p>{p.price}€</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
