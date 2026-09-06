import { Search, Home, ShoppingBag, User, Smartphone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = ["Top Brands", "Nearby Stores", "1Fi Marketplace"];

function Shop() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Top Brands");

  const handleTabClick = (tab) => {
    if (tab === "1Fi Marketplace") {
      navigate("/marketplace");
      return;
    }

    setActiveTab(tab);
  };

  return (
    <div className="app-shell">
      <main className="shop-page">
        <section className="shop-hero">
          <div className="hero-content">
            <span className="emi-badge">NO-COST EMIs</span>

            <h1>
              Shop what
              <br />
              you love.
            </h1>

            <p>Pay in easy monthly installments.</p>
          </div>

          <div className="hero-product">
            <div className="product-orb"></div>

            <div className="hero-phone">
              <Smartphone size={82} strokeWidth={1.4} />
            </div>
          </div>
        </section>

        <section className="shop-content">
          <div className="shop-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`shop-tab ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={20} />

            <input
              placeholder={
                activeTab === "Nearby Stores"
                  ? "Search nearby stores..."
                  : "Search online stores..."
              }
            />
          </div>

          <div className="section-heading">
            <h2>{activeTab}</h2>
            <button>View all</button>
          </div>

          <div className="empty-shop-card">
            <p>
              {activeTab === "Nearby Stores"
                ? "Nearby stores will appear here"
                : "Explore your favourite brands"}
            </p>
          </div>
        </section>
      </main>

      <nav className="bottom-navigation">
        <button>
          <Home size={22} />
          <span>Home</span>
        </button>

        <button className="nav-active">
          <ShoppingBag size={22} />
          <span>Shop</span>
        </button>

        <button>
          <User size={22} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
}

export default Shop;