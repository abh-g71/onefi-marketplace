import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function formatPrice(value) {
  return "\u20B9" + value.toLocaleString("en-IN");
}

function ProductCard({ product }) {
  const navigate = useNavigate();

  const lowestEmi = [...product.emiPlans].sort(
    (a, b) => a.monthlyAmount - b.monthlyAmount
  )[0];

  return (
    <article
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-card-info">
        <span className="product-brand">{product.brand}</span>
        <h3>{product.name}</h3>

        <div className="price-row">
          <strong>{formatPrice(product.price)}</strong>
          <span>{formatPrice(product.mrp)}</span>
        </div>

        <p className="emi-start">
          EMI from <strong>{formatPrice(lowestEmi.monthlyAmount)}/mo</strong>
        </p>

        <div className="product-card-action">
          <span>View details</span>
          <ArrowRight size={17} />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
