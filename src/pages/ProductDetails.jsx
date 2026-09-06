import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import VariantSelector from "../components/VariantSelector";
import EmiPlanCard from "../components/EmiPlanCard";

function formatPrice(value) {
  return `\u20B9${value.toLocaleString("en-IN")}`;
}

function ProductDetails() {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedEmi, setSelectedEmi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProduct() {
      try {
        setLoading(true);
        setError("");

        const data = await getProductById(productId);

        if (isMounted) {
          setProduct(data);
          setSelectedVariant(data.variants?.[0]?.name || "");
          setSelectedEmi(data.emiPlans?.[0] || null);
        }
      } catch (err) {
        if (isMounted) {
          setError("Unable to load this product.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  if (loading) {
    return (
      <div className="app-shell">
        <main className="product-details-page">
          <div className="state-card">
            <h3>Loading product...</h3>
            <p>Please wait while we fetch the product details.</p>
          </div>
        </main>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="app-shell">
        <main className="product-details-page">
          <button
            className="icon-button"
            onClick={() => navigate("/marketplace")}
            aria-label="Go back"
          >
            <ArrowLeft size={22} />
          </button>

          <div className="state-card product-error">
            <h3>Product unavailable</h3>
            <p>{error || "We couldn't find this product."}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <main className="product-details-page">
        <header className="page-header">
          <button
            className="icon-button"
            onClick={() => navigate("/marketplace")}
            aria-label="Go back"
          >
            <ArrowLeft size={22} />
          </button>

          <div>
            <span className="page-eyebrow">1FI MARKETPLACE</span>
            <h1>Product Details</h1>
          </div>
        </header>

        <section className="product-detail-card">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <span className="product-brand">{product.brand}</span>

            <h2>{product.name}</h2>

            <div className="detail-price-row">
              <strong>{formatPrice(product.price)}</strong>
              <span>{formatPrice(product.mrp)}</span>
            </div>

            <p className="detail-savings">
              Save {formatPrice(product.mrp - product.price)}
            </p>

            {product.cashback && (
              <div className="cashback-badge">
                <Check size={14} />
                Get up to {formatPrice(product.cashback)} cashback
              </div>
            )}
          </div>
        </section>

        {product.variants?.length > 0 && (
          <section className="detail-section">
            <div className="detail-section-heading">
              <h2>Choose variant</h2>
              <span>{selectedVariant}</span>
            </div>

            <VariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onSelect={setSelectedVariant}
            />
          </section>
        )}

        <section className="detail-section">
          <div className="detail-section-heading">
            <h2>Product details</h2>
          </div>

          <div className="details-list">
            {product.details?.map((detail) => (
              <div className="detail-item" key={detail}>
                <Check size={16} />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <div className="detail-section-heading">
            <div>
              <h2>Choose your EMI</h2>
              <p>Pick a plan that fits your monthly budget.</p>
            </div>
          </div>

          <div className="emi-list">
            {product.emiPlans?.map((plan) => (
              <EmiPlanCard
                key={plan.months}
                plan={plan}
                selected={selectedEmi?.months === plan.months}
                onSelect={() => setSelectedEmi(plan)}
              />
            ))}
          </div>
        </section>

        <div className="secure-note">
          <ShieldCheck size={18} />
          <span>Secure checkout with 1Fi</span>
        </div>

        <button
          className="proceed-button"
          disabled={!selectedEmi}
          onClick={() => {
            alert(
              `Proceeding with ${product.name} on ${selectedEmi.months}-month EMI`
            );
          }}
        >
          Proceed with {selectedEmi ? `${selectedEmi.months}-month EMI` : "EMI"}
        </button>
      </main>
    </div>
  );
}

export default ProductDetails;


