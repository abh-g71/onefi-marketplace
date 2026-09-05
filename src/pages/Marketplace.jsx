import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Marketplace() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();

        if (isMounted) {
          setProducts(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("Unable to load products. Please try again.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.brand}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app-shell">
      <main className="marketplace-page">
        <header className="page-header">
          <button
            onClick={() => navigate("/shop")}
            className="icon-button"
            aria-label="Go back"
          >
            <ArrowLeft size={22} />
          </button>

          <div>
            <span className="page-eyebrow">SHOP</span>
            <h1>1Fi Marketplace</h1>
          </div>
        </header>

        <section className="marketplace-intro">
          <h2>Shop with 1Fi</h2>
          <p>
            Browse products and choose a no-cost EMI plan that works for you.
          </p>
        </section>

        <div className="marketplace-search">
          <Search size={19} />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
          />

          <button aria-label="Filter products">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        <div className="marketplace-heading">
          <div>
            <h2>Featured products</h2>
            <p>{products.length} products available</p>
          </div>
        </div>

        {loading && (
          <div className="product-grid">
            {[1, 2, 3].map((item) => (
              <div className="product-skeleton" key={item}>
                <div className="skeleton-image"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line short"></div>
                <div className="skeleton-line smaller"></div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="state-card error-state">
            <h3>Something went wrong</h3>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <div className="state-card">
            <h3>No products found</h3>
            <p>Try searching for another product.</p>
          </div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Marketplace;
